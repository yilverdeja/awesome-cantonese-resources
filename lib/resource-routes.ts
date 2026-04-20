import type { Category, Cost, Level, Platform } from "@/types";

import {
  RESOURCE_CATEGORY_ORDER,
  RESOURCE_COST_OPTIONS,
  RESOURCE_LEVEL_OPTIONS,
  RESOURCE_PLATFORM_OPTIONS,
} from "@/lib/data";

export type ResourceCostParam = Exclude<Cost, null> | "not_applicable";

export function resourcesListHref(options?: {
  category?: Category | null;
  level?: Level | null;
  cost?: ResourceCostParam | null;
  platform?: Platform | null;
}): string {
  const params = new URLSearchParams();
  if (options?.category) params.set("category", options.category);
  if (options?.level) params.set("level", options.level);
  if (options?.cost) params.set("cost", options.cost);
  if (options?.platform) params.set("platform", options.platform);
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

export function parseCostParam(
  value: string | string[] | undefined,
): ResourceCostParam | null {
  const v = Array.isArray(value) ? value[0] : value;
  if (!v) return null;
  if (v === "not_applicable") return "not_applicable";
  return RESOURCE_COST_OPTIONS.includes(v as Exclude<Cost, null>)
    ? (v as Exclude<Cost, null>)
    : null;
}

export function parsePlatformParam(
  value: string | string[] | undefined,
): Platform | null {
  const v = Array.isArray(value) ? value[0] : value;
  if (!v) return null;
  return RESOURCE_PLATFORM_OPTIONS.includes(v as Platform) ? (v as Platform) : null;
}
