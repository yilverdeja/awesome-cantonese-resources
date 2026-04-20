"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";

import type { Category, Level, Resource } from "@/types";
import { RESOURCE_LEVEL_OPTIONS } from "@/lib/data";
import { formatCategoryLabel } from "@/lib/format-category";
import { ResourceCard } from "@/components/resources/resource-card";
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type ResourcesExplorerProps = {
  resources: Resource[];
  categories: Category[];
  initialCategory?: Category | null;
  initialLevel?: Level | null;
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
  categories,
  idPrefix,
}: {
  query: string;
  setQuery: (v: string) => void;
  category: "all" | Category;
  setCategory: (v: "all" | Category) => void;
  level: "all" | Level;
  setLevel: (v: "all" | Level) => void;
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
          <SelectTrigger
            id={`${idPrefix}-category`}
            className="w-full rounded-2xl"
          >
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
    </div>
  );
}

export function ResourcesExplorer({
  resources,
  categories,
  initialCategory = null,
  initialLevel = null,
}: ResourcesExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | Category>(
    initialCategory ?? "all",
  );
  const [level, setLevel] = useState<"all" | Level>(initialLevel ?? "all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((r) => {
      if (category !== "all" && r.category !== category) return false;
      if (!resourceMatchesLevel(r, level)) return false;
      if (!q) return true;
      const haystack = [r.name, r.description, r.tags.join(" ")]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [resources, query, category, level]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <header className="mb-8 space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
          <p className="max-w-2xl text-muted-foreground">
            Browse the full catalog. Use the filters to narrow things down, or
            jump in and scroll—the list is here to help you find your next
            favourite tool or lesson.
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
            <p className="mb-4 text-sm font-medium text-foreground">Filters</p>
            <FilterFields
              query={query}
              setQuery={setQuery}
              category={category}
              setCategory={setCategory}
              level={level}
              setLevel={setLevel}
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
              <SheetContent side="left" className="w-[min(100%,22rem)]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />
                <FilterFields
                  query={query}
                  setQuery={setQuery}
                  category={category}
                  setCategory={setCategory}
                  level={level}
                  setLevel={setLevel}
                  categories={categories}
                  idPrefix="mobile"
                />
              </SheetContent>
            </Sheet>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((r) => (
              <ResourceCard key={r.id} resource={r} />
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
