import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { resourcesListHref } from "@/lib/resource-routes";
import type { Category } from "@/types";

const exploreCategories: { label: string; category: Category }[] = [
  { label: "Apps", category: "App" },
  { label: "Community", category: "Community" },
  { label: "Dictionaries", category: "Dictionary" },
  { label: "Courses", category: "Course" },
  { label: "Podcasts", category: "Podcast" },
  { label: "Video channels", category: "VideoChannel" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80 bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-2">
            <p className="font-medium text-foreground">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Links point to third-party sites and creators. We are not affiliated
              with them unless we say so. If something no longer works, please let
              us know through the project repository.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            <div className="space-y-3">
              <span className="text-sm font-semibold text-foreground">Explore</span>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-foreground"
                >
                  All resources
                </Link>
                <Link
                  href="/collections"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Collections
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-semibold text-foreground">
                Resources by topic
              </span>
              <div className="flex flex-wrap gap-2">
                {exploreCategories.map(({ label, category }) => (
                  <Button
                    key={category}
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-2xl"
                  >
                    <Link href={resourcesListHref({ category })}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {siteConfig.githubRepoUrl ? (
          <div className="border-t border-border/60 pt-6">
            <Button asChild variant="ghost" size="sm" className="px-0 text-muted-foreground hover:text-foreground">
              <a
                href={siteConfig.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Project repository
              </a>
            </Button>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
