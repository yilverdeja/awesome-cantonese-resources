import { getAllResources, getCategoriesForFilters } from "@/lib/data";
import { ResourcesExplorer } from "@/components/resources/resources-explorer";

export default function ResourcesPage() {
  const resources = getAllResources();
  const categories = getCategoriesForFilters();

  return <ResourcesExplorer resources={resources} categories={categories} />;
}
