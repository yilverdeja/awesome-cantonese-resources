import type { Category } from "@/types";

export function formatCategoryLabel(category: Category): string {
  return category
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
}
