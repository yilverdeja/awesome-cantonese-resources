import Link from "next/link";
import { notFound } from "next/navigation";

import { ResourceCard } from "@/components/resources/resource-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllCollections, getCollectionWithResources } from "@/lib/data";
import type { Collection } from "@/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function kindLabel(kind: Collection["kind"]): string {
  if (kind === "starter_kit") return "Starter kit";
  return "Curated list";
}

export function generateStaticParams() {
  return getAllCollections().map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = getCollectionWithResources(slug);
  if (!data) return { title: "Collection" };
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getCollectionWithResources(slug);
  if (!data) notFound();

  const levels = data.target_level
    ? Array.isArray(data.target_level)
      ? data.target_level.join(" · ")
      : data.target_level
    : null;

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{kindLabel(data.kind)}</Badge>
            {levels ? (
              <Badge variant="secondary">{levels}</Badge>
            ) : null}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">{data.title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
        <Button asChild variant="outline" className="w-fit shrink-0 rounded-2xl">
          <Link href="/collections">All collections</Link>
        </Button>
      </div>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">
          Resources in this collection
        </h2>
        <p className="text-sm text-muted-foreground">
          Order follows the dataset. Cards open each tool&apos;s website in a new
          tab.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.resources.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
