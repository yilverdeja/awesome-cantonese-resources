import Link from "next/link";
import { LibraryBig, Layers, Shapes } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { HomePageStats } from "@/lib/site-stats";

type HomeStatsProps = {
  stats: HomePageStats;
};

export function HomeStats({ stats }: HomeStatsProps) {
  const { totalResources, filterCategoryCount, totalCollections, topCategories } =
    stats;

  return (
    <section aria-labelledby="home-stats-heading" className="space-y-10">
      <h2
        id="home-stats-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        At a glance
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        <Link
          href="/resources"
          className="group block rounded-2xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          aria-label="Browse all resources"
        >
          <Card className="h-full border-border/80 bg-card/60 shadow-sm transition-colors group-hover:border-primary/40 group-hover:bg-muted/20">
            <CardContent className="flex items-start gap-4 px-6 py-6">
              <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <LibraryBig className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl">
                    {totalResources}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    resources
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Searchable entries that link out to the original creators.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="/resources"
          className="group block rounded-2xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          aria-label="Explore categories in the resources catalog"
        >
          <Card className="h-full border-border/80 bg-card/60 shadow-sm transition-colors group-hover:border-primary/40 group-hover:bg-muted/20">
            <CardContent className="flex items-start gap-4 px-6 py-6">
              <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <Shapes className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl">
                    {filterCategoryCount}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    categories
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Filters that help you narrow the list fast.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="/collections"
          className="group block rounded-2xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          aria-label="Browse all collections"
        >
          <Card className="h-full border-border/80 bg-card/60 shadow-sm transition-colors group-hover:border-primary/40 group-hover:bg-muted/20">
            <CardContent className="flex items-start gap-4 px-6 py-6">
              <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <Layers className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl">
                    {totalCollections}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    collections
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Starter kits and themed lists when you want guidance.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="rounded-2xl border border-border/80 bg-muted/20 px-5 py-7 sm:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
            Where the catalog is strongest today
          </p>
          <p className="text-sm text-muted-foreground">
            Top categories by number of entries.
          </p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {topCategories.map(({ category, count, phrase }) => (
            <li key={category}>
              <span className="inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm">
                <span className="tabular-nums text-primary">{count}</span>
                <span className="mx-1.5 text-muted-foreground">·</span>
                <span>{phrase}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
