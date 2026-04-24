import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function ResourceCardSkeleton() {
  return (
    <Card className="h-full border-border/80">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Skeleton className="h-5 flex-1 rounded-2xl" />
          <Skeleton className="mt-0.5 size-4 shrink-0 rounded-md" />
        </div>
        <Skeleton className="h-5 w-24 rounded-full" />
        <div className="space-y-1.5 pt-0.5">
          <Skeleton className="h-4 w-full rounded-2xl" />
          <Skeleton className="h-4 w-5/6 rounded-2xl" />
          <Skeleton className="h-4 w-2/3 rounded-2xl" />
        </div>
      </CardHeader>
    </Card>
  );
}

function FilterFieldSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-16 rounded-2xl" />
      <Skeleton className="h-9 w-full rounded-2xl" />
    </div>
  );
}

export default function ResourcesLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <header className="mb-8 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-9 w-36 rounded-2xl" />
          <div className="space-y-1.5">
            <Skeleton className="h-5 w-3/4 rounded-2xl" />
            <Skeleton className="h-5 w-1/2 rounded-2xl" />
          </div>
        </div>
        <Skeleton className="h-4 w-36 rounded-2xl" />
      </header>

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,15rem)_1fr] lg:items-start">
        <aside className="hidden lg:block">
          <div className="sticky top-20 rounded-2xl border border-border/80 bg-card/40 p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <Skeleton className="h-5 w-16 rounded-2xl" />
              <Skeleton className="h-8 w-14 rounded-2xl" />
            </div>
            <div className="space-y-4">
              <FilterFieldSkeleton />
              <FilterFieldSkeleton />
              <FilterFieldSkeleton />
              <FilterFieldSkeleton />
              <FilterFieldSkeleton />
            </div>
          </div>
        </aside>

        <div className="min-w-0 space-y-6">
          <div className="flex items-center justify-between gap-3 lg:hidden">
            <Skeleton className="h-10 w-28 rounded-2xl" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ResourceCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
