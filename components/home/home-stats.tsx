import { LibraryBig, Layers, Shapes } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { HomePageStats } from "@/lib/site-stats";

type HomeStatsProps = {
  stats: HomePageStats;
};

function StatCard({
  icon: Icon,
  value,
  unit,
  description,
}: {
  icon: typeof LibraryBig;
  value: number;
  unit: string;
  description: string;
}) {
  return (
    <Card className="h-full border-border/80 bg-card/60 shadow-sm">
      <CardContent className="flex items-start gap-3 px-6 py-7 sm:px-7 sm:py-8">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary"
          aria-hidden
        >
          <Icon className="h-6 w-6 shrink-0" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl">
              {value}
            </span>
            <span className="text-sm font-medium text-muted-foreground">{unit}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

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

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        <StatCard
          icon={LibraryBig}
          value={totalResources}
          unit="resources"
          description="Searchable entries that link out to the original creators."
        />
        <StatCard
          icon={Shapes}
          value={filterCategoryCount}
          unit="categories"
          description="Filters that help you narrow the list fast."
        />
        <StatCard
          icon={Layers}
          value={totalCollections}
          unit="collections"
          description="Starter kits and themed lists when you want guidance."
        />
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
