import { getAllResources, getCategoriesForFilters } from "@/lib/data";
import { ResourcesExplorer } from "@/components/resources/resources-explorer";
import {
  parseCategoryParam,
  parseCostParam,
  parseLevelParam,
  parsePlatformParam,
} from "@/lib/resource-routes";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ResourcesPage({ searchParams }: PageProps) {
  const resources = getAllResources();
  const categories = getCategoriesForFilters();
  const resolved = searchParams ? await searchParams : undefined;
  const initialCategory = parseCategoryParam(resolved?.category);
  const initialLevel = parseLevelParam(resolved?.level);
  const initialCost = parseCostParam(resolved?.cost);
  const initialPlatform = parsePlatformParam(resolved?.platform);

  return (
    <ResourcesExplorer
      resources={resources}
      categories={categories}
      initialCategory={initialCategory}
      initialLevel={initialLevel}
      initialCost={initialCost}
      initialPlatform={initialPlatform}
    />
  );
}
