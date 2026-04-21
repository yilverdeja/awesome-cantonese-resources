import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { resourcesListHref } from "@/lib/resource-routes";

export function HomeFaq() {
  const hasRepo = Boolean(siteConfig.githubRepoUrl);
  const hasEmail = Boolean(siteConfig.suggestionsEmail);
  const hasForm = Boolean(siteConfig.suggestionsFormUrl);
  const nonGithubContact = hasEmail || hasForm;

  return (
    <section
      aria-labelledby="home-faq-heading"
      className="mx-auto max-w-3xl space-y-6"
    >
      <h2
        id="home-faq-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        Frequently asked questions
      </h2>
      <div className="space-y-3">
        <details className="group rounded-2xl border border-border/80 bg-card/40 px-5 py-4 shadow-sm open:bg-card/60">
          <summary className="cursor-pointer list-none font-medium text-foreground [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              Do I need a GitHub account to suggest a resource or report a broken
              link?
              <span className="text-muted-foreground transition group-open:rotate-180">
                ▾
              </span>
            </span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed">
            {hasRepo ? (
              <p>
                Opening an issue or discussion on the project repository usually
                requires a free GitHub account.
                {nonGithubContact ? (
                  <>
                    {" "}
                    If you prefer not to use GitHub, you can also reach the
                    maintainers{" "}
                    {hasEmail ? (
                      <>
                        by email at{" "}
                        <a
                          href={`mailto:${siteConfig.suggestionsEmail}?subject=${encodeURIComponent(`${siteConfig.name} suggestion`)}`}
                          className="font-medium text-foreground underline-offset-4 hover:underline"
                        >
                          {siteConfig.suggestionsEmail}
                        </a>
                      </>
                    ) : null}
                    {hasEmail && hasForm ? " or " : null}
                    {hasForm ? (
                      <>
                        via{" "}
                        <a
                          href={siteConfig.suggestionsFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground underline-offset-4 hover:underline"
                        >
                          this form
                        </a>
                      </>
                    ) : null}
                    .
                  </>
                ) : (
                  " If that is a barrier, check back later—other contact options may be added for this deployment."
                )}
              </p>
            ) : (
              <p>
                When a public repository link is configured for this site, GitHub
                is the usual place for suggestions.{" "}
                {nonGithubContact
                  ? "You can also use the email or form linked from the section above."
                  : "Other contact options may appear here when they are configured."}
              </p>
            )}
          </div>
        </details>

        <details className="group rounded-2xl border border-border/80 bg-card/40 px-5 py-4 shadow-sm open:bg-card/60">
          <summary className="cursor-pointer list-none font-medium text-foreground [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              Are listings endorsements or paid placements?
              <span className="text-muted-foreground transition group-open:rotate-180">
                ▾
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            No. Entries are a neutral index with short descriptions from the shared
            dataset. Nothing here is paid placement; always check each site&apos;s
            own terms and privacy policy before you sign up or pay.
          </p>
        </details>

        <details className="group rounded-2xl border border-border/80 bg-card/40 px-5 py-4 shadow-sm open:bg-card/60">
          <summary className="cursor-pointer list-none font-medium text-foreground [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              I&apos;m a complete beginner—where should I start?
              <span className="text-muted-foreground transition group-open:rotate-180">
                ▾
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Open the{" "}
            <Link
              href="/collections/starter-kit-beginner"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Beginner starter kit
            </Link>{" "}
            collection for a small ordered path (pronunciation, dictionaries, gentle
            input). Browse all{" "}
            <Link
              href="/collections"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              collections
            </Link>
            , or explore{" "}
            <Link
              href={resourcesListHref({ level: "Beginner" })}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              beginner-tagged resources
            </Link>{" "}
            on the full catalog.
          </p>
        </details>

        <details className="group rounded-2xl border border-border/80 bg-card/40 px-5 py-4 shadow-sm open:bg-card/60">
          <summary className="cursor-pointer list-none font-medium text-foreground [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              What&apos;s the difference between &quot;resources&quot; and
              &quot;collections&quot;?
              <span className="text-muted-foreground transition group-open:rotate-180">
                ▾
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            <strong className="font-medium text-foreground">Resources</strong> are
            single picks with one primary link each.{" "}
            <strong className="font-medium text-foreground">Collections</strong>{" "}
            group those picks into starter paths or themed lists. See the{" "}
            <a
              href="#catalog-and-filtering"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              catalog overview
            </a>{" "}
            on this page for how to search and filter the full list.
          </p>
        </details>
      </div>
    </section>
  );
}
