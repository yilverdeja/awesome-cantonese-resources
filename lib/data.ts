import resourcesData from "../data/resources.json";
import collectionsData from "../data/collections.json";
import type { Resource, Collection, Category, Cost, Level, Platform } from "@/types";

const resources = resourcesData as Resource[];
const collections = collectionsData as Collection[];

/** Stable category order for filters and README-style grouping. */
export const RESOURCE_CATEGORY_ORDER: Category[] = [
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
  "List",
  "Other",
];

export function getAllResources(): Resource[] {
  return resources;
}

export function getResourceById(id: string): Resource | undefined {
  return resources.find((r) => r.id === id);
}

export function getAllCollections(): Collection[] {
  return collections;
}

export function getCollectionWithResources(collectionId: string) {
  const collection = collections.find((c) => c.id === collectionId);
  if (!collection) return null;

  const populatedResources = collection.resource_ids
    .map((id) => getResourceById(id))
    .filter((r): r is Resource => r !== undefined);

  return {
    ...collection,
    resources: populatedResources,
  };
}

/** Collections for navigation: `order` ascending (missing last), then `id`. */
export function getCollectionsSorted(): Collection[] {
  return [...collections].sort((a, b) => {
    const ao = a.order ?? Number.POSITIVE_INFINITY;
    const bo = b.order ?? Number.POSITIVE_INFINITY;
    if (ao !== bo) return ao - bo;
    return a.id.localeCompare(b.id);
  });
}

/**
 * Home-page teaser: deterministic alphabetical slice so the grid is stable
 * between builds (not random).
 */
export function getResourcePreviewSample(count: number): Resource[] {
  const sorted = [...resources].sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
  );
  return sorted.slice(0, count);
}

export function getCategoriesForFilters(): Category[] {
  return [...RESOURCE_CATEGORY_ORDER];
}

/** Used on the resources page level filter. */
export const RESOURCE_LEVEL_OPTIONS: Level[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "All Levels",
];

/** Used on the resources page cost filter. */
export const RESOURCE_COST_OPTIONS: Exclude<Cost, null>[] = [
  "Free",
  "Freemium",
  "Paid",
  "Unknown",
];

/** Used on the resources page platform filter. */
export const RESOURCE_PLATFORM_OPTIONS: Platform[] = [
  "Web",
  "iOS",
  "Android",
  "Desktop",
  "Chrome",
  "Firefox",
  "YouTube",
  "Instagram",
  "Facebook",
  "Spotify",
  "SoundCloud",
  "RadioPublic",
  "GoogleDrive",
  "GoogleDocs",
  "InPerson",
  "Podcast",
  "ArchiveOrg",
  "GitHub",
  "Reddit",
  "Discord",
  "Bilibili",
];

/** Curated list that powers the home-page resource spotlight. */
export const HOME_SPOTLIGHT_COLLECTION_ID = "curated-essential-picks";

export function getHomeSpotlightResources(): Resource[] {
  const data = getCollectionWithResources(HOME_SPOTLIGHT_COLLECTION_ID);
  if (data?.resources.length) return data.resources;
  return getResourcePreviewSample(12);
}
