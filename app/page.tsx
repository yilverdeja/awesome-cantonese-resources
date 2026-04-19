import Link from "next/link";

import { CollectionCard } from "@/components/collections/collection-card";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeHero } from "@/components/home/home-hero";
import { HomeStats } from "@/components/home/home-stats";
import { ResourceCard } from "@/components/resources/resource-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCollectionsSorted, getHomeSpotlightResources } from "@/lib/data";
import { getHomePageStats } from "@/lib/site-stats";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const collections = getCollectionsSorted();
  const spotlightResources = getHomeSpotlightResources();
  const stats = getHomePageStats();

  const hasSuggestionsEmail = Boolean(siteConfig.suggestionsEmail);
  const hasSuggestionsForm = Boolean(siteConfig.suggestionsFormUrl);

  return (
    <>
      <HomeHero />

      <main className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6 sm:py-20">
        <section className="mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why Cantonese—and why this site
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
            Cantonese connects communities across Hong Kong, Macau, Guangdong,
            and the diaspora. {siteConfig.name} brings practical tools and media
            into one place—dictionaries, courses, podcasts, channels, and community
            projects—so you spend less time searching and more time listening,
            reading, and speaking.
          </p>
        </section>

        <Separator />

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Popular picks
              </h2>
              <p className="mt-1 max-w-xl text-muted-foreground">
                A small set of especially useful tools many learners rely on—also
                listed as the &quot;Essential picks&quot; collection.
              </p>
            </div>
            <Button asChild className="w-fit rounded-2xl">
              <Link href="/resources">Browse all resources</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {spotlightResources.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Collections
              </h2>
              <p className="mt-1 max-w-xl text-muted-foreground">
                Curated paths and topic lists—pick one that matches where you are
                today.
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

        <Separator />

        <section className="space-y-8">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How to use this site
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3 rounded-2xl border border-border/70 bg-muted/15 px-5 py-4 leading-relaxed">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  1
                </span>
                <span>
                  <span className="font-medium text-foreground">
                    New to Cantonese?
                  </span>{" "}
                  Start with the{" "}
                  <Link
                    href="/collections/starter-kit-beginner"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Beginner starter kit
                  </Link>
                  : it walks through pronunciation, your first dictionary, gentle
                  input, and similar steps in a sensible order.
                </span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-border/70 bg-muted/15 px-5 py-4 leading-relaxed">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  2
                </span>
                <span>
                  <span className="font-medium text-foreground">
                    Looking for something specific?
                  </span>{" "}
                  Open the{" "}
                  <Link
                    href="/resources"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Resources
                  </Link>{" "}
                  page and combine search, category, and level until the list feels
                  right. Clear one filter at a time if the list gets too small.
                </span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-border/70 bg-muted/15 px-5 py-4 leading-relaxed">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  3
                </span>
                <span>
                  <span className="font-medium text-foreground">
                    Prefer a guided theme?
                  </span>{" "}
                  Browse collections for topical bundles—travel, in-person classes in
                  a city, immersion ideas, and more—then open the resources that fit
                  your goals.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <Separator />

        <section
          id="catalog-and-filtering"
          className="space-y-6 scroll-mt-24"
          aria-labelledby="catalog-and-filtering-heading"
        >
          <div className="mx-auto max-w-3xl space-y-4 text-center sm:text-left">
            <h2
              id="catalog-and-filtering-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Explore the full catalog
            </h2>
            <p className="text-muted-foreground leading-relaxed sm:text-lg">
              <strong className="font-medium text-foreground">Resources</strong> are
              individual picks—apps, channels, books, courses, dictionaries,
              communities, and more—each linking out to the original site or store.{" "}
              <strong className="font-medium text-foreground">Collections</strong>{" "}
              group those picks into starter paths or topical lists when you want a
              smaller, ordered set instead of the full list.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              On the full{" "}
              <Link
                href="/resources"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                Resources
              </Link>{" "}
              page, combine a few simple controls to narrow the list:
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/80 bg-card/50 p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Search</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Type part of a name, a word from the short description, or a tag you
                care about—helpful when you half-remember a recommendation.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/50 p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Category</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Focus on a kind of resource: apps, dictionaries, courses, podcasts,
                video channels, communities, and the rest of the catalog.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/50 p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-foreground">Level</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Show items tagged for beginners, intermediate, or advanced learners.
                Anything marked for all levels stays visible no matter which level
                you pick.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        <HomeStats stats={stats} />

        <Separator />

        <section className="rounded-2xl border border-border bg-muted/20 px-6 py-10 text-center sm:px-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Are we missing something?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground leading-relaxed">
            Know a Cantonese course, channel, dictionary, or community that would help
            others? Spot a broken link or an outdated description? We would love to
            hear from you.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {siteConfig.githubRepoUrl ? (
              <Button asChild className="rounded-2xl" size="lg">
                <a
                  href={siteConfig.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the project repository
                </a>
              </Button>
            ) : null}
            {!siteConfig.githubRepoUrl &&
            !hasSuggestionsEmail &&
            !hasSuggestionsForm ? (
              <p className="text-sm text-muted-foreground">
                When the public repository link is configured for this deployment, a
                button will appear here so you can send suggestions directly.
              </p>
            ) : null}
            {hasSuggestionsEmail ? (
              <Button asChild variant="outline" className="rounded-2xl" size="lg">
                <a
                  href={`mailto:${siteConfig.suggestionsEmail}?subject=${encodeURIComponent(`${siteConfig.name} suggestion`)}`}
                >
                  Email a suggestion
                </a>
              </Button>
            ) : null}
            {hasSuggestionsForm ? (
              <Button asChild variant="outline" className="rounded-2xl" size="lg">
                <a
                  href={siteConfig.suggestionsFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suggestion form
                </a>
              </Button>
            ) : null}
          </div>
        </section>

        <HomeFaq />
      </main>
    </>
  );
}
