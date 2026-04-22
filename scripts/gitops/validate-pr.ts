import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Collection, Resource } from "../../types";
import { gitDiffNameOnly } from "./git";

type PullRequestEvent = {
  pull_request?: { base?: { sha?: string }; head?: { sha?: string } };
};

function die(msg: string): never {
  console.error(msg);
  process.exit(1);
}

function readJson<T>(path: string): T {
  const text = readFileSync(path, "utf8");
  try {
    return JSON.parse(text) as T;
  } catch (e) {
    die(`Invalid JSON in ${path}: ${(e as Error).message}`);
  }
}

function loadPrBaseHead(): { baseSha: string; headSha: string } | null {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath) return null;
  const event = readJson<PullRequestEvent>(eventPath);
  const baseSha = event.pull_request?.base?.sha;
  const headSha = event.pull_request?.head?.sha;
  if (!baseSha || !headSha) return null;
  return { baseSha, headSha };
}

function assertUniqueIds(resources: Resource[]): void {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const r of resources) {
    const id = (r as { id?: unknown }).id;
    if (typeof id !== "string") die("Each resource must have a string `id`.");
    if (!id.trim()) die("Resource `id` cannot be empty/whitespace.");
    if (seen.has(id)) dupes.add(id);
    seen.add(id);
  }
  if (dupes.size) {
    die(`Duplicate resource ids: ${Array.from(dupes).sort().join(", ")}`);
  }
}

function assertCollectionsValidIds(
  collections: Collection[],
  ids: Set<string>,
): void {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const c of collections) {
    if (!c.id?.trim()) die("Each collection must have a non-empty string `id`.");
    if (seen.has(c.id)) dupes.add(c.id);
    seen.add(c.id);
    for (const rid of c.resource_ids ?? []) {
      if (!ids.has(rid)) {
        die(`Collection ${c.id} references missing resource id: ${rid}`);
      }
    }
  }
  if (dupes.size) {
    die(`Duplicate collection ids: ${Array.from(dupes).sort().join(", ")}`);
  }
}

function assertRelatedIdsResolve(resources: Resource[], ids: Set<string>): void {
  for (const r of resources) {
    for (const rid of r.related_ids ?? []) {
      if (!ids.has(rid)) die(`Resource ${r.id} related_ids missing: ${rid}`);
    }
  }
}

function assertNoBotManagedEdits(): void {
  const shas = loadPrBaseHead();
  if (!shas) {
    // If we can’t determine SHAs, we can’t reliably enforce.
    // Fail closed to maintain the “strictly bot-managed” requirement.
    die("Cannot determine PR base/head SHAs to enforce bot-managed file policy.");
  }

  const changed = new Set(gitDiffNameOnly(shas.baseSha, shas.headSha));
  const forbidden = [
    "data/ratings.json",
    "data/discussion-map.json",
    "data/discussion-urls.json",
  ].filter((p) => changed.has(p));
  if (forbidden.length) {
    die(
      `PR modifies bot-managed file(s): ${forbidden.join(
        ", ",
      )}. These must not be edited manually.`,
    );
  }
}

function main(): void {
  assertNoBotManagedEdits();

  const root = resolve(process.cwd());
  const resourcesPath = resolve(root, "data", "resources.json");
  const collectionsPath = resolve(root, "data", "collections.json");

  const resources = readJson<Resource[]>(resourcesPath);
  const collections = readJson<Collection[]>(collectionsPath);

  assertUniqueIds(resources);
  const ids = new Set(resources.map((r) => r.id));
  assertCollectionsValidIds(collections, ids);
  assertRelatedIdsResolve(resources, ids);

  console.log(
    `OK: ${resources.length} resources, ${collections.length} collections. IDs and references valid.`,
  );
}

main();

