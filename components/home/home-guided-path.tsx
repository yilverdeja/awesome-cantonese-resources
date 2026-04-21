import Link from "next/link";

import type { Collection } from "@/types";
import { Button } from "@/components/ui/button";
import { CollectionCard } from "@/components/collections/collection-card";

type HomeGuidedPathProps = {
  collections: Collection[];
};

export function HomeGuidedPath({ collections }: HomeGuidedPathProps) {
  return (
    <section
      id="start-here"
      className="space-y-6 scroll-mt-24"
      aria-labelledby="start-here-heading"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="start-here-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Start here
          </h2>
          <p className="mt-1 max-w-2xl text-muted-foreground">
            Pick a starter kit that matches your level. Each one is a small,
            ordered path you can follow today.
          </p>
        </div>
        <Button asChild variant="outline" className="w-fit rounded-2xl">
          <Link href="/collections">All collections</Link>
        </Button>
      </div>

      <div className="hidden gap-4 sm:grid sm:grid-cols-3">
        {collections.map((c) => (
          <CollectionCard key={c.id} collection={c} />
        ))}
      </div>

      <div className="sm:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pe-1 ps-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {collections.map((c) => (
            <div
              key={c.id}
              className="w-[min(20rem,85%)] shrink-0 snap-start scroll-ms-4 first:ms-0"
            >
              <CollectionCard collection={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

