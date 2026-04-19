import { getAllCollections, getAllResources } from "@/lib/data";
import type { Category } from "@/types";

/** How many top categories to show in the “We’ve found…” row. */
export const STATS_TOP_CATEGORY_LIMIT = 6;

/** Lowercase singular / plural for “{count} {phrase}” copy on the home stats row. */
const CATEGORY_COUNT_PHRASE: Record<
  Category,
  { singular: string; plural: string }
> = {
  Community: { singular: "community", plural: "communities" },
  App: { singular: "app", plural: "apps" },
  BrowserExtension: {
    singular: "browser extension",
    plural: "browser extensions",
  },
  OpenSource: { singular: "open-source project", plural: "open-source projects" },
  Creator: { singular: "creator", plural: "creators" },
  VideoChannel: { singular: "video channel", plural: "video channels" },
  Podcast: { singular: "podcast", plural: "podcasts" },
  TV: { singular: "TV or film pick", plural: "TV or film picks" },
  Book: { singular: "book", plural: "books" },
  GradedReader: { singular: "graded reader", plural: "graded readers" },
  Dictionary: { singular: "dictionary", plural: "dictionaries" },
  Tool: { singular: "tool", plural: "tools" },
  Pronunciation: {
    singular: "pronunciation resource",
    plural: "pronunciation resources",
  },
  Course: { singular: "course", plural: "courses" },
  SelfStudy: {
    singular: "self-study resource",
    plural: "self-study resources",
  },
  Reference: { singular: "reference", plural: "references" },
  Blog: { singular: "blog", plural: "blogs" },
  Music: { singular: "music pick", plural: "music picks" },
  LanguageExchange: {
    singular: "language-exchange pick",
    plural: "language-exchange picks",
  },
  Map: { singular: "map or list", plural: "maps or lists" },
  Other: { singular: "other resource", plural: "other resources" },
};

export type HomePageStatCategory = {
  category: Category;
  count: number;
  /** e.g. "communities" for plural, "community" for singular */
  phrase: string;
};

export type HomePageStats = {
  totalResources: number;
  /** Distinct categories that appear on at least one resource (filter groups). */
  filterCategoryCount: number;
  totalCollections: number;
  topCategories: HomePageStatCategory[];
};

export function categoryCountPhrase(count: number, category: Category): string {
  const { singular, plural } = CATEGORY_COUNT_PHRASE[category];
  return count === 1 ? singular : plural;
}

export function getHomePageStats(): HomePageStats {
  const resources = getAllResources();
  const cols = getAllCollections();

  const byCategory = new Map<Category, number>();
  for (const r of resources) {
    byCategory.set(r.category, (byCategory.get(r.category) ?? 0) + 1);
  }

  const filterCategoryCount = byCategory.size;

  const topCategories = [...byCategory.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, STATS_TOP_CATEGORY_LIMIT)
    .map(([category, count]) => ({
      category,
      count,
      phrase: categoryCountPhrase(count, category),
    }));

  return {
    totalResources: resources.length,
    filterCategoryCount,
    totalCollections: cols.length,
    topCategories,
  };
}
