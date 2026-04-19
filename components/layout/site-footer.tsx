import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80 bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md space-y-2">
            <p className="font-medium text-foreground">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              Links go to third-party sites. We are not affiliated with listed
              creators unless stated. URLs can change—please report broken links
              on GitHub.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-medium text-foreground">Explore</span>
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
            {siteConfig.githubRepoUrl ? (
              <a
                href={siteConfig.githubRepoUrl}
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>
            ) : null}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Built from the same JSON as the project README. Run{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.7rem]">
            npm run readme
          </code>{" "}
          after editing data to refresh the list file.
        </p>
      </div>
    </footer>
  );
}
