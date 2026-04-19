/**
 * README generator rules (single source: data/resources.json + data/collections.json):
 * - TOC: links use stable anchors `<a id="collection-…">` / `<a id="category-…">` so they stay valid even with other headings in the README.
 * - Collections: sorted by `order` ascending (missing `order` last), then `id`; preserve `resource_ids` order inside each collection.
 * - Category catalog: one section per Category type that has at least one resource; categories ordered as in CATEGORY_ORDER.
 * - Resources within a category: sorted by `name` (locale en), case-insensitive.
 * - Each resource line: **[name](url)** — description (full `description` as one line; newlines collapsed to spaces).
 * - Do not print levels, platforms, tags, features, cost, or related_ids on each list line (see README schema section).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Category, Collection, Resource } from "../types";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");

const MARKER_BEGIN = "<!-- BEGIN:awesome-list -->";
const MARKER_END = "<!-- END:awesome-list -->";

/** Mirrors the union order in types/index.ts for stable section ordering. */
const CATEGORY_ORDER: Category[] = [
  "Community",
  "App",
  "BrowserExtension",
  "OpenSource",
  "Creator",
  "VideoChannel",
  "Podcast",
  "TV",
  "Book",
  "GradedReader",
  "Dictionary",
  "Tool",
  "Pronunciation",
  "Course",
  "SelfStudy",
  "Reference",
  "Blog",
  "Music",
  "LanguageExchange",
  "Map",
  "Other",
];

function displayCategory(category: Category): string {
  return category
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
}

function slugId(id: string): string {
  return id
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function anchorCollection(collection: Collection): string {
  return `collection-${slugId(collection.id)}`;
}

function anchorCategory(category: Category): string {
  return `category-${slugId(category)}`;
}

function oneLine(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function escapeMarkdownLabel(text: string): string {
  return text.replace(/\]/g, "\\]");
}

function sortCollections(a: Collection, b: Collection): number {
  const ao = a.order ?? Number.POSITIVE_INFINITY;
  const bo = b.order ?? Number.POSITIVE_INFINITY;
  if (ao !== bo) return ao - bo;
  return a.id.localeCompare(b.id);
}

function sortResourcesByName(a: Resource, b: Resource): number {
  return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
}

function resourceLine(r: Resource): string {
  const name = escapeMarkdownLabel(r.name);
  const desc = oneLine(r.description);
  return `- **[${name}](${r.url})** — ${desc}`;
}

function buildGenerated(resources: Resource[], collections: Collection[]): string {
  const byId = new Map(resources.map((r) => [r.id, r]));

  const sortedCollections = [...collections].sort(sortCollections);

  const usedCategories = new Set<Category>();
  for (const r of resources) usedCategories.add(r.category);

  const categorySections = CATEGORY_ORDER.filter((c) => usedCategories.has(c));

  const tocCollectionLinks = sortedCollections.map((c) => {
    const id = anchorCollection(c);
    return `- [${c.title}](#${id})`;
  });

  const tocCategoryLinks = categorySections.map((c) => {
    const title = displayCategory(c);
    const id = anchorCategory(c);
    return `- [${title}](#${id})`;
  });

  const parts: string[] = [];

  parts.push("## Table of contents");
  parts.push("");
  parts.push("### Collections");
  parts.push(...tocCollectionLinks);
  parts.push("");
  parts.push("### Categories");
  parts.push(...tocCategoryLinks);
  parts.push("");

  for (const c of sortedCollections) {
    parts.push(`<a id="${anchorCollection(c)}"></a>`);
    parts.push(`## ${c.title}`);
    parts.push("");
    parts.push(oneLine(c.description));
    parts.push("");
    for (const id of c.resource_ids) {
      const r = byId.get(id);
      if (!r) continue;
      parts.push(resourceLine(r));
    }
    parts.push("");
  }

  for (const cat of categorySections) {
    const title = displayCategory(cat);
    parts.push(`<a id="${anchorCategory(cat)}"></a>`);
    parts.push(`## ${title}`);
    parts.push("");
    const inCat = resources.filter((r) => r.category === cat).sort(sortResourcesByName);
    for (const r of inCat) {
      parts.push(resourceLine(r));
    }
    parts.push("");
  }

  return parts.join("\n").trimEnd() + "\n";
}

function main(): void {
  const readmePath = join(root, "README.md");
  const readme = readFileSync(readmePath, "utf8");

  const i0 = readme.indexOf(MARKER_BEGIN);
  const i1 = readme.indexOf(MARKER_END);
  if (i0 === -1 || i1 === -1 || i1 <= i0) {
    throw new Error(
      `README must contain ${MARKER_BEGIN} before ${MARKER_END}`,
    );
  }

  const resources = JSON.parse(
    readFileSync(join(root, "data/resources.json"), "utf8"),
  ) as Resource[];
  const collections = JSON.parse(
    readFileSync(join(root, "data/collections.json"), "utf8"),
  ) as Collection[];

  const generated = buildGenerated(resources, collections);

  const before = readme.slice(0, i0 + MARKER_BEGIN.length);
  const after = readme.slice(i1);
  const next = `${before}\n\n${generated}\n${after}`;

  writeFileSync(readmePath, next, "utf8");
  console.log("Updated README.md generated section.");
}

main();
