import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Resource } from "../../types";
import { graphql } from "./graphql";
import { gitShowText } from "./git";
import { writeJsonStable } from "./json";

type DiscussionCategory = { id: string; name: string; slug: string };

function die(msg: string): never {
  console.error(msg);
  process.exit(1);
}

function readJson<T>(path: string): T {
  const text = readFileSync(path, "utf8");
  return JSON.parse(text) as T;
}

function safeParseJsonArray(text: string | null): Resource[] {
  if (!text) return [];
  try {
    return JSON.parse(text) as Resource[];
  } catch {
    return [];
  }
}

function toIdSet(resources: Resource[]): Set<string> {
  return new Set(resources.map((r) => r.id));
}

function diffIds(prev: Set<string>, next: Set<string>): {
  added: string[];
  removed: string[];
} {
  const added: string[] = [];
  const removed: string[] = [];
  for (const id of next) if (!prev.has(id)) added.push(id);
  for (const id of prev) if (!next.has(id)) removed.push(id);
  added.sort();
  removed.sort();
  return { added, removed };
}

function readMode(): "diff" | "bootstrap" {
  const v = (process.env.LIFECYCLE_MODE ?? "").toLowerCase().trim();
  if (v === "bootstrap" || v === "backfill") return "bootstrap";
  return "diff";
}

async function resolveCategoryId(params: {
  owner: string;
  repo: string;
  slug: string;
  nameFallback: string;
}): Promise<string> {
  const data = await graphql<{
    repository: {
      discussionCategories: { nodes: DiscussionCategory[] };
    };
  }>(
    `
    query($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        discussionCategories(first: 100) {
          nodes { id name slug }
        }
      }
    }
  `,
    { owner: params.owner, repo: params.repo },
  );

  const nodes = data.repository.discussionCategories.nodes;
  const bySlug = nodes.find((c) => c.slug === params.slug);
  if (bySlug) return bySlug.id;
  const byName = nodes.find((c) => c.name === params.nameFallback);
  if (byName) return byName.id;
  die(
    `Could not find Discussion category slug=${params.slug} or name=${params.nameFallback}.`,
  );
}

async function createRatingDiscussion(params: {
  repoId: string;
  categoryId: string;
  resource: Resource;
}): Promise<string> {
  const title = `Rating: ${params.resource.name}`;
  const body = [
    `This discussion is the voting thread for **${params.resource.name}**.`,
    "",
    `- **resource_id**: \`${params.resource.id}\``,
    `- **url**: ${params.resource.url}`,
    "",
    "Use upvotes and reactions to rate this resource.",
  ].join("\n");

  const data = await graphql<{
    createDiscussion: { discussion: { id: string } };
  }>(
    `
    mutation($input: CreateDiscussionInput!) {
      createDiscussion(input: $input) {
        discussion { id }
      }
    }
  `,
    {
      input: {
        repositoryId: params.repoId,
        categoryId: params.categoryId,
        title,
        body,
      },
    },
  );
  return data.createDiscussion.discussion.id;
}

async function closeAndLockDiscussion(discussionId: string): Promise<void> {
  await graphql(
    `
    mutation($id: ID!) {
      closeDiscussion(input: {discussionId: $id, reason: RESOLVED}) {
        discussion { id }
      }
    }
  `,
    { id: discussionId },
  );

  await graphql(
    `
    mutation($id: ID!) {
      lockLockable(input: {lockableId: $id, lockReason: RESOLVED}) {
        lockedRecord { locked }
      }
    }
  `,
    { id: discussionId },
  );
}

async function getRepoNodeId(owner: string, repo: string): Promise<string> {
  const data = await graphql<{ repository: { id: string } }>(
    `query($owner: String!, $repo: String!) { repository(owner: $owner, name: $repo) { id } }`,
    { owner, repo },
  );
  return data.repository.id;
}

async function main(): Promise<void> {
  const repoFull = process.env.GITHUB_REPOSITORY;
  if (!repoFull) die("Missing GITHUB_REPOSITORY.");
  const [owner, repo] = repoFull.split("/");
  if (!owner || !repo) die(`Invalid GITHUB_REPOSITORY: ${repoFull}`);

  const root = resolve(process.cwd());
  const resourcesPath = resolve(root, "data", "resources.json");
  const mapPath = resolve(root, "data", "discussion-map.json");

  const nextResources = readJson<Resource[]>(resourcesPath);
  const mode = readMode();
  const prevResources =
    mode === "diff"
      ? safeParseJsonArray(gitShowText("HEAD~1:data/resources.json"))
      : [];

  const { added, removed } =
    mode === "diff"
      ? diffIds(toIdSet(prevResources), toIdSet(nextResources))
      : { added: [], removed: [] };

  const repoId = await getRepoNodeId(owner, repo);
  const categoryId = await resolveCategoryId({
    owner,
    repo,
    slug: "resource-ratings",
    nameFallback: "Resource Ratings",
  });

  let map: Record<string, string> = {};
  try {
    map = readJson<Record<string, string>>(mapPath);
  } catch {
    map = {};
  }

  const byId = new Map(nextResources.map((r) => [r.id, r]));

  const idsToCreate =
    mode === "bootstrap"
      ? Array.from(byId.keys()).filter((id) => !map[id]).sort()
      : added;

  if (mode === "diff" && !added.length && !removed.length) {
    console.log("No resource id additions/removals detected. Nothing to do.");
    return;
  }

  if (mode === "bootstrap") {
    console.log(
      `Bootstrap mode: creating discussions for ${idsToCreate.length} unmapped resources.`,
    );
  }

  for (const id of idsToCreate) {
    if (map[id]) continue;
    const resource = byId.get(id);
    if (!resource) continue;
    const discussionId = await createRatingDiscussion({
      repoId,
      categoryId,
      resource,
    });
    map[id] = discussionId;
    console.log(`Created discussion for ${id}: ${discussionId}`);
  }

  // In bootstrap mode we can still close+lock stale mappings that no longer exist.
  const nextIds = new Set(byId.keys());
  const removedIds =
    mode === "bootstrap"
      ? Object.keys(map).filter((rid) => !nextIds.has(rid)).sort()
      : removed;

  for (const id of removedIds) {
    const discussionId = map[id];
    if (!discussionId) continue;
    await closeAndLockDiscussion(discussionId);
    delete map[id];
    console.log(`Closed+locked discussion for removed ${id}: ${discussionId}`);
  }

  writeJsonStable(mapPath, map);
}

main().catch((e) => die((e as Error).stack ?? String(e)));

