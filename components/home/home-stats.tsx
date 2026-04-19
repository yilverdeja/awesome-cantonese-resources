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
        <Card className="border-border/80 bg-card/60 shadow-sm">
          <CardContent className="flex flex-col gap-1 px-6 py-6">
            <span className="text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl">
              {totalResources}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Resources
            </span>
          </CardContent>
        </Card>
        <Card className="border-border/80 bg-card/60 shadow-sm">
          <CardContent className="flex flex-col gap-1 px-6 py-6">
            <span className="text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl">
              {filterCategoryCount}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Categories to explore
            </span>
          </CardContent>
        </Card>
        <Card className="border-border/80 bg-card/60 shadow-sm">
          <CardContent className="flex flex-col gap-1 px-6 py-6">
            <span className="text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl">
              {totalCollections}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Collections
            </span>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-2xl border border-border/80 bg-muted/20 px-5 py-8 sm:px-8">
        <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          We&apos;ve found{" "}
          <span className="font-semibold text-primary">{totalResources}</span>{" "}
          resources across{" "}
          <span className="font-semibold text-primary">
            {filterCategoryCount}
          </span>{" "}
          categories you can filter by, gathered into{" "}
          <span className="font-semibold text-primary">{totalCollections}</span>{" "}
          collections—starter paths, essential picks, and themed lists. A snapshot
          of where the list is richest today:
        </p>
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
