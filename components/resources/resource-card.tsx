import { ExternalLink } from "lucide-react";

import type { Resource } from "@/types";
import { formatCategoryLabel } from "@/lib/format-category";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.url}
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
            <ExternalLink
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
        </CardHeader>
        <CardContent className="pt-0">
          <span className="text-xs font-medium text-primary">
            Open in new tab
          </span>
        </CardContent>
      </Card>
    </a>
  );
}
