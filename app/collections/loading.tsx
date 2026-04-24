import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function CollectionCardSkeleton() {
  return (
    <Card className="h-full border-border/80">
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <div className="flex items-start justify-between gap-2">
          <Skeleton className="h-6 flex-1 rounded-2xl" />
          <Skeleton className="mt-1 size-5 shrink-0 rounded-md" />
        </div>
        <div className="space-y-1.5 pt-0.5">
          <Skeleton className="h-4 w-full rounded-2xl" />
          <Skeleton className="h-4 w-5/6 rounded-2xl" />
          <Skeleton className="h-4 w-2/3 rounded-2xl" />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Skeleton className="h-4 w-28 rounded-2xl" />
      </CardContent>
    </Card>
  );
}

export default function CollectionsLoading() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-9 w-40 rounded-2xl" />
          <div className="space-y-1.5">
            <Skeleton className="h-5 w-3/4 rounded-2xl" />
            <Skeleton className="h-5 w-1/2 rounded-2xl" />
          </div>
        </div>
        <Skeleton className="h-10 w-44 rounded-2xl" />
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <CollectionCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
