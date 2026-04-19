import Link from "next/link";

import type { Collection } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CollectionCardProps = {
  collection: Collection;
};

function kindLabel(kind: Collection["kind"]): string {
  if (kind === "starter_kit") return "Starter kit";
  return "Curated list";
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const levels = collection.target_level
    ? Array.isArray(collection.target_level)
      ? collection.target_level.join(" · ")
      : collection.target_level
    : null;

  return (
    <Link href={`/collections/${collection.id}`} className="block h-full">
      <Card className="h-full border-border/80 transition-colors hover:border-primary/40 hover:bg-muted/20">
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-xs font-normal">
              {kindLabel(collection.kind)}
            </Badge>
            {levels ? (
              <Badge variant="secondary" className="text-xs font-normal">
                {levels}
              </Badge>
            ) : null}
          </div>
          <CardTitle className="text-lg">{collection.title}</CardTitle>
          <CardDescription className="line-clamp-3 text-sm leading-relaxed">
            {collection.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 text-sm font-medium text-primary">
          View collection
        </CardContent>
      </Card>
    </Link>
  );
}
