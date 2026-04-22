import type { Metadata } from "next";

import {
  getAllResources,
  getCategoriesForFilters,
  getAllDiscussionUrls,
  getAllRatings,
} from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { githubDiscussionsCategoryUrl } from "@/lib/github-links";
import { RateResourcesExplorer } from "@/components/resources/rate-resources-explorer";
import {
  parseCategoryParam,
  parseCostParam,
  parseLevelParam,
  parsePlatformParam,
} from "@/lib/resource-routes";

export const metadata: Metadata = {
  title: "Rate Resources",
  description:
    "Leave a rating or review for Cantonese learning resources. Click any resource to open its GitHub Discussion and share your experience.",
};

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function RateResourcesPage({ searchParams }: PageProps) {
  const resources = getAllResources();
  const categories = getCategoriesForFilters();
  const discussionUrls = getAllDiscussionUrls();
  const ratings = getAllRatings();

  const fallbackCategoryUrl = siteConfig.githubRepoUrl
    ? githubDiscussionsCategoryUrl(siteConfig.githubRepoUrl, "resource-ratings")
    : null;

  const resolved = searchParams ? await searchParams : undefined;
  const getParam = (key: string) => {
    if (!resolved) return undefined;
    if (key in resolved) return resolved[key];
    const actualKey = Object.keys(resolved).find(
      (k) => k.toLowerCase() === key.toLowerCase(),
    );
    return actualKey ? resolved[actualKey] : undefined;
  };

  const initialCategory = parseCategoryParam(getParam("category"));
  const initialLevel = parseLevelParam(getParam("level"));
  const initialCost = parseCostParam(getParam("cost"));
  const initialPlatform = parsePlatformParam(getParam("platform"));

  return (
    <RateResourcesExplorer
      key={[
        initialCategory ?? "all",
        initialLevel ?? "all",
        initialCost ?? "all",
        initialPlatform ?? "all",
      ].join("|")}
      resources={resources}
      categories={categories}
      discussionUrls={discussionUrls}
      ratings={ratings}
      fallbackCategoryUrl={fallbackCategoryUrl}
      initialCategory={initialCategory}
      initialLevel={initialLevel}
      initialCost={initialCost}
      initialPlatform={initialPlatform}
    />
  );
}
