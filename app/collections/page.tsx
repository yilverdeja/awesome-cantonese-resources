import Link from "next/link";

import { CollectionCard } from "@/components/collections/collection-card";
import { Button } from "@/components/ui/button";
import { getCollectionsSorted } from "@/lib/data";

export default function CollectionsPage() {
  const collections = getCollectionsSorted();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Collections</h1>
          <p className="max-w-2xl text-muted-foreground">
            Starter kits suggest a coherent first path; curated lists group
            resources by topic. Open any resource card to visit the external site
            in a new tab.
          </p>
        </div>
        <Button asChild variant="outline" className="w-fit rounded-2xl">
          <Link href="/resources">Browse all resources</Link>
        </Button>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {collections.map((c) => (
          <CollectionCard key={c.id} collection={c} />
        ))}
      </div>
    </div>
  );
}
