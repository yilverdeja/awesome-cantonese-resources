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
    <ResourcesExplorer
      key={[
        initialCategory ?? "all",
        initialLevel ?? "all",
        initialCost ?? "all",
        initialPlatform ?? "all",
      ].join("|")}
      resources={resources}
      categories={categories}
      initialCategory={initialCategory}
      initialLevel={initialLevel}
      initialCost={initialCost}
      initialPlatform={initialPlatform}
    />
  );
}
