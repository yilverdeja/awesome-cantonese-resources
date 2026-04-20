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
  const needle = v.trim().toLowerCase();
  const match = RESOURCE_CATEGORY_ORDER.find((c) => c.toLowerCase() === needle);
  return match ?? null;
}

export function parseLevelParam(
  value: string | string[] | undefined,
): Level | null {
  const v = Array.isArray(value) ? value[0] : value;
  if (!v) return null;
  const needle = v.trim().toLowerCase();
  const match = RESOURCE_LEVEL_OPTIONS.find((l) => l.toLowerCase() === needle);
  return match ?? null;
}

export function parseCostParam(
  value: string | string[] | undefined,
): ResourceCostParam | null {
  const v = Array.isArray(value) ? value[0] : value;
  if (!v) return null;
  const needle = v.trim().toLowerCase();
  if (needle === "not_applicable") return "not_applicable";
  const match = RESOURCE_COST_OPTIONS.find((c) => c.toLowerCase() === needle);
  return match ?? null;
}

export function parsePlatformParam(
  value: string | string[] | undefined,
): Platform | null {
  const v = Array.isArray(value) ? value[0] : value;
  if (!v) return null;
  const needle = v.trim().toLowerCase();
  const match = RESOURCE_PLATFORM_OPTIONS.find((p) => p.toLowerCase() === needle);
  return match ?? null;
}
