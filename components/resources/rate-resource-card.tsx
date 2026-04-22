import { MessageSquare, Star } from "lucide-react";

import type { Resource } from "@/types";
import type { RatingEntry } from "@/lib/data";
import { formatCategoryLabel } from "@/lib/format-category";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type RateResourceCardProps = {
  resource: Resource;
  discussionUrl: string | null;
  rating?: RatingEntry;
  fallbackCategoryUrl: string | null;
};

export function RateResourceCard({
  resource,
  discussionUrl,
  rating,
  fallbackCategoryUrl,
}: RateResourceCardProps) {
  const href = discussionUrl ?? fallbackCategoryUrl;

  if (!href) {
    return (
      <div className="block h-full rounded-2xl outline-none">
        <Card className="h-full border-border/40 opacity-50">
          <CardHeader className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-base leading-snug">{resource.name}</CardTitle>
              <MessageSquare className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-40" aria-hidden />
            </div>
            <Badge variant="secondary" className="w-fit text-xs font-normal">
              {formatCategoryLabel(resource.category)}
            </Badge>
            <CardDescription className="line-clamp-3 text-sm leading-relaxed">
              {resource.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-2xl outline-none transition-shadow focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      <Card className="h-full border-border/80 transition-colors group-hover:border-primary/40 group-hover:bg-muted/20">
        <CardHeader className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base leading-snug group-hover:text-primary">
              {resource.name}
            </CardTitle>
            <MessageSquare
              className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-70 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </div>
          <Badge variant="secondary" className="w-fit text-xs font-normal">
            {formatCategoryLabel(resource.category)}
          </Badge>
          <CardDescription className="line-clamp-3 text-sm leading-relaxed">
            {resource.description}
          </CardDescription>
          {rating && rating.votes > 0 ? (
            <div className="flex items-center gap-1 pt-1 text-xs text-muted-foreground">
              <Star className="size-3 fill-current text-amber-500" aria-hidden />
              <span>{rating.avg_stars.toFixed(1)}</span>
              <span>·</span>
              <span>{rating.votes} {rating.votes === 1 ? "vote" : "votes"}</span>
            </div>
          ) : (
            <p className="pt-1 text-xs text-muted-foreground">No ratings yet</p>
          )}
        </CardHeader>
      </Card>
    </a>
  );
}
