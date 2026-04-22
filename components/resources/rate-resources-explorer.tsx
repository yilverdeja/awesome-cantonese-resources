"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";

import type { Category, Cost, Level, Platform, Resource } from "@/types";
import type { RatingEntry } from "@/lib/data";
import {
  RESOURCE_COST_OPTIONS,
  RESOURCE_LEVEL_OPTIONS,
  RESOURCE_PLATFORM_OPTIONS,
} from "@/lib/data";
import { formatCategoryLabel } from "@/lib/format-category";
import { RateResourceCard } from "@/components/resources/rate-resource-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type CostFilter = "all" | Exclude<Cost, null> | "not_applicable";
type PlatformFilter = "all" | Platform;

type RateResourcesExplorerProps = {
  resources: Resource[];
  categories: Category[];
  discussionUrls: Record<string, string>;
  ratings: Record<string, RatingEntry>;
  fallbackCategoryUrl: string | null;
  initialCategory?: Category | null;
  initialLevel?: Level | null;
  initialCost?: Exclude<Cost, null> | "not_applicable" | null;
  initialPlatform?: Platform | null;
};

function resourceMatchesLevel(resource: Resource, level: Level | "all"): boolean {
  if (level === "all") return true;
  const lv = resource.levels;
  return lv.includes(level) || lv.includes("All Levels");
}

function FilterFields({
  query,
  setQuery,
  category,
  setCategory,
  level,
  setLevel,
  cost,
  setCost,
  platform,
  setPlatform,
  categories,
  idPrefix,
}: {
  query: string;
  setQuery: (v: string) => void;
  category: "all" | Category;
  setCategory: (v: "all" | Category) => void;
  level: "all" | Level;
  setLevel: (v: "all" | Level) => void;
  cost: CostFilter;
  setCost: (v: CostFilter) => void;
  platform: PlatformFilter;
  setPlatform: (v: PlatformFilter) => void;
  categories: Category[];
  idPrefix: string;
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-search`}>Search</Label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id={`${idPrefix}-search`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Name, description, or tags…"
            className="rounded-2xl pl-9"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-category`}>Category</Label>
        <Select
          value={category}
          onValueChange={(v) => setCategory(v as "all" | Category)}
        >
          <SelectTrigger id={`${idPrefix}-category`} className="w-full rounded-2xl">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {formatCategoryLabel(c)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-level`}>Level</Label>
        <Select
          value={level}
          onValueChange={(v) => setLevel(v as "all" | Level)}
        >
          <SelectTrigger id={`${idPrefix}-level`} className="w-full rounded-2xl">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any level</SelectItem>
            {RESOURCE_LEVEL_OPTIONS.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-cost`}>Cost</Label>
        <Select value={cost} onValueChange={(v) => setCost(v as CostFilter)}>
          <SelectTrigger id={`${idPrefix}-cost`} className="w-full rounded-2xl">
            <SelectValue placeholder="Cost" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any cost</SelectItem>
            {RESOURCE_COST_OPTIONS.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
            <SelectItem value="not_applicable">Not applicable</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-platform`}>Platform</Label>
        <Select
          value={platform}
          onValueChange={(v) => setPlatform(v as PlatformFilter)}
        >
          <SelectTrigger id={`${idPrefix}-platform`} className="w-full rounded-2xl">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any platform</SelectItem>
            {RESOURCE_PLATFORM_OPTIONS.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function RateResourcesExplorer({
  resources,
  categories,
  discussionUrls,
  ratings,
  fallbackCategoryUrl,
  initialCategory = null,
  initialLevel = null,
  initialCost = null,
  initialPlatform = null,
}: RateResourcesExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | Category>(
    initialCategory ?? "all",
  );
  const [level, setLevel] = useState<"all" | Level>(initialLevel ?? "all");
  const [cost, setCost] = useState<CostFilter>(initialCost ?? "all");
  const [platform, setPlatform] = useState<PlatformFilter>(
    initialPlatform ?? "all",
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setLevel("all");
    setCost("all");
    setPlatform("all");
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((r) => {
      if (category !== "all" && r.category !== category) return false;
      if (!resourceMatchesLevel(r, level)) return false;
      if (cost !== "all") {
        if (cost === "not_applicable") {
          if (r.cost !== null) return false;
        } else {
          if (r.cost !== cost) return false;
        }
      }
      if (platform !== "all" && !r.platforms.includes(platform)) return false;
      if (!q) return true;
      const haystack = [r.name, r.description, r.tags.join(" ")]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [resources, query, category, level, cost, platform]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <header className="mb-8 space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Rate Resources</h1>
          <p className="max-w-2xl text-muted-foreground">
            Click a resource to open its GitHub Discussion, then leave a reaction
            to rate it or a comment to share your experience. Your feedback helps
            other learners decide what to try next.
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium text-foreground">{filtered.length}</span>{" "}
          of{" "}
          <span className="font-medium text-foreground">{resources.length}</span>
        </p>
      </header>

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,15rem)_1fr] lg:items-start">
        <aside className="hidden lg:block">
          <div className="sticky top-20 rounded-2xl border border-border/80 bg-card/40 p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-foreground">Filters</p>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 rounded-2xl px-3"
                onClick={clearFilters}
              >
                Clear
              </Button>
            </div>
            <FilterFields
              query={query}
              setQuery={setQuery}
              category={category}
              setCategory={setCategory}
              level={level}
              setLevel={setLevel}
              cost={cost}
              setCost={setCost}
              platform={platform}
              setPlatform={setPlatform}
              categories={categories}
              idPrefix="desktop"
            />
          </div>
        </aside>

        <div className="min-w-0 space-y-6">
          <div className="flex items-center justify-between gap-3 lg:hidden">
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="rounded-2xl">
                  <Filter className="size-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="data-[side=left]:w-80 gap-0 p-0">
                <SheetHeader className="px-5 pt-5 pb-4">
                  <SheetTitle>Filters</SheetTitle>
                  <p className="text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-medium text-foreground">{filtered.length}</span>{" "}
                    of{" "}
                    <span className="font-medium text-foreground">{resources.length}</span>
                  </p>
                </SheetHeader>
                <Separator />
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <FilterFields
                    query={query}
                    setQuery={setQuery}
                    category={category}
                    setCategory={setCategory}
                    level={level}
                    setLevel={setLevel}
                    cost={cost}
                    setCost={setCost}
                    platform={platform}
                    setPlatform={setPlatform}
                    categories={categories}
                    idPrefix="mobile"
                  />
                </div>
                <SheetFooter className="px-5 pb-5 pt-4 border-t border-border/60">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-2xl"
                    onClick={clearFilters}
                  >
                    Clear filters
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((r) => (
              <RateResourceCard
                key={r.id}
                resource={r}
                discussionUrl={discussionUrls[r.id] ?? null}
                rating={ratings[r.id]}
                fallbackCategoryUrl={fallbackCategoryUrl}
              />
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
              No resources match these filters. Try clearing search, widening the
              level, or choosing &quot;All categories&quot;.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
