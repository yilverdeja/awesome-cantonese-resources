import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { resourcesListHref } from "@/lib/resource-routes";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/80 bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-3">
            <p className="font-medium text-foreground">{siteConfig.name}</p>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>{siteConfig.description}</p>
              <p>
                Links in this catalog point to third-party sites and creators. We
                are not affiliated with them unless explicitly stated. If you spot
                an error, outdated info, or a broken link, please open an issue on
                our repository.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-sm">
              {siteConfig.githubRepoUrl ? (
                <a
                  href={siteConfig.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  GitHub repository
                </a>
              ) : null}
              <a
                href={siteConfig.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                {siteConfig.siteUrl.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            <div className="space-y-3">
              <span className="text-sm font-semibold text-foreground">Explore</span>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href="/collections"
                  className="text-muted-foreground hover:text-foreground"
                >
                  All Collections
                </Link>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-foreground"
                >
                  All Resources
                </Link>
                {siteConfig.footerExploreCategories.map(({ label, category }) => (
                  <Link
                    key={category}
                    href={resourcesListHref({ category })}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/contribute"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contribute
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-semibold text-foreground">Landing Page</span>
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href="/#start-here"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Start here
                </Link>
                <Link
                  href="/#how-it-works"
                  className="text-muted-foreground hover:text-foreground"
                >
                  How it works
                </Link>
                <Link
                  href="/#stats"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Stats
                </Link>
                <Link
                  href="#help"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Help us improve
                </Link>
                <Link href="/#faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {year} Canto Resources · Open source (MIT) · Built with Next.js
        </div>
      </div>
    </footer>
  );
}
