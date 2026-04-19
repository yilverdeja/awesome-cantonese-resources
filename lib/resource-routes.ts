import type { Category, Level } from "@/types";

import { RESOURCE_CATEGORY_ORDER, RESOURCE_LEVEL_OPTIONS } from "@/lib/data";

export function resourcesListHref(options?: {
  category?: Category | null;
  level?: Level | null;
}): string {
  const params = new URLSearchParams();
  if (options?.category) params.set("category", options.category);
  if (options?.level) params.set("level", options.level);
  const q = params.toString();
  return q ? `/resources?${q}` : "/resources";
}

export function parseCategoryParam(
  value: string | string[] | undefined,
): Category | null {
  const v = Array.isArray(value) ? value[0] : value;
  if (!v) return null;
  return RESOURCE_CATEGORY_ORDER.includes(v as Category) ? (v as Category) : null;
}

export function parseLevelParam(
  value: string | string[] | undefined,
): Level | null {
  const v = Array.isArray(value) ? value[0] : value;
  if (!v) return null;
  return RESOURCE_LEVEL_OPTIONS.includes(v as Level) ? (v as Level) : null;
}
