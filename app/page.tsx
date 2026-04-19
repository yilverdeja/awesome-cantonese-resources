import Link from "next/link";

import { CollectionCard } from "@/components/collections/collection-card";
import { HomeHero } from "@/components/home/home-hero";
import { ResourceCard } from "@/components/resources/resource-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  getCollectionsSorted,
  getResourcePreviewSample,
} from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const PREVIEW_COUNT = 12;

export default function HomePage() {
  const collections = getCollectionsSorted();
  const previewResources = getResourcePreviewSample(PREVIEW_COUNT);

  return (
    <>
      <HomeHero />

      <main className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:py-20">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Why Cantonese—and why this site
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cantonese connects communities across Hong Kong, Macau, Guangdong,
              and the diaspora. {siteConfig.name} surfaces practical tools and
              media so learners spend less time searching and more time
              listening, reading, and speaking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The list is intentionally broad: if it helps people learn or use
              Cantonese, it can belong. Editors may skip items that feel
              off-topic or redundant next to a clearly stronger option.
            </p>
          </div>
          <aside className="rounded-2xl border border-border/80 bg-card/60 p-6 text-sm text-muted-foreground shadow-sm">
            <h3 className="font-medium text-foreground">Single source of truth</h3>
            <p className="mt-2 leading-relaxed">
              Resource and collection data live in JSON in this repository. The
              Markdown README is generated from the same files, so the catalog
              you see here stays aligned with the awesome list.
            </p>
          </aside>
        </section>

        <Separator />

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">
              This site vs the GitHub README
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The README is link-first and easy to scan in version control. This
              web app adds layout, search, and filters so you can explore the same
              entries without scrolling a very long document.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">
              Resources vs collections
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Resources</strong> are individual
              links (apps, channels, books, communities).{" "}
              <strong className="text-foreground">Collections</strong> bundle them
              into starter paths or topical lists—great when you want a coherent
              next few steps instead of the full catalog.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">How to use it</h2>
          <ul className="grid gap-3 text-muted-foreground sm:grid-cols-2">
            <li className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3">
              <span className="font-medium text-foreground">New learners:</span>{" "}
              open a starter collection, then branch out to categories you care
              about.
            </li>
            <li className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3">
              <span className="font-medium text-foreground">Looking for a format:</span>{" "}
              use the Resources page to filter by category and search by name or
              tags.
            </li>
            <li className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3">
              <span className="font-medium text-foreground">Every card opens the source:</span>{" "}
              resource links launch the external site in a new tab.
            </li>
            <li className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3">
              <span className="font-medium text-foreground">Contributing:</span>{" "}
              propose additions or fixes via GitHub (see README contributing
              section).
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Collections</h2>
              <p className="text-sm text-muted-foreground">
                Curated paths and topical bundles from the dataset.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-2xl">
              <Link href="/collections">All collections</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {collections.map((c) => (
              <CollectionCard key={c.id} collection={c} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Resource spotlight
              </h2>
              <p className="text-sm text-muted-foreground">
                A stable alphabetical slice of the catalog—open anything in a new
                tab.
              </p>
            </div>
            <Button asChild className="w-fit rounded-2xl">
              <Link href="/resources">View all resources</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previewResources.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-border bg-muted/15 px-6 py-8 text-center">
          <h2 className="text-lg font-semibold tracking-tight">Want to contribute?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Add or correct entries in the JSON data, run the README generator, and
            open a pull request—or file an issue with the name, URL, and a short
            description.
          </p>
          {siteConfig.githubRepoUrl ? (
            <Button asChild className="mt-5 rounded-2xl" variant="secondary">
              <a
                href={siteConfig.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open repository
              </a>
            </Button>
          ) : (
            <p className="mt-4 text-xs text-muted-foreground">
              Set{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.7rem]">
                NEXT_PUBLIC_GITHUB_REPO_URL
              </code>{" "}
              to show a repository button here.
            </p>
          )}
        </section>
      </main>
    </>
  );
}
