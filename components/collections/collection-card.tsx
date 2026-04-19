import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
    <Link href={`/collections/${collection.id}`} className="group block h-full">
      <Card className="h-full border-border/80 transition-colors group-hover:border-primary/40 group-hover:bg-muted/20">
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
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg group-hover:text-primary">
              {collection.title}
            </CardTitle>
            <ChevronRight
              className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
              aria-hidden
            />
          </div>
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
