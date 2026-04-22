import { MessageSquarePlus, Bug, HelpCircle, Star } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import {
  githubDiscussionsCategoryUrl,
  githubIssueChooserUrl,
  githubRepoBaseUrl,
} from "@/lib/github-links";
import { Button } from "@/components/ui/button";

export function HomeContribute() {
  const repoBase = siteConfig.githubRepoUrl
    ? githubRepoBaseUrl(siteConfig.githubRepoUrl)
    : null;

  const issueUrl = siteConfig.githubRepoUrl
    ? githubIssueChooserUrl(siteConfig.githubRepoUrl)
    : null;

  const suggestUrl = siteConfig.githubRepoUrl
    ? githubDiscussionsCategoryUrl(siteConfig.githubRepoUrl, "suggest-resources")
    : null;

  const ratingsUrl = siteConfig.githubRepoUrl
    ? githubDiscussionsCategoryUrl(siteConfig.githubRepoUrl, "resource-ratings")
    : null;

  const qaUrl = siteConfig.githubRepoUrl
    ? githubDiscussionsCategoryUrl(siteConfig.githubRepoUrl, "q-a")
    : null;

  const hasSuggestionsEmail = Boolean(siteConfig.suggestionsEmail);
  const hasSuggestionsForm = Boolean(siteConfig.suggestionsFormUrl);

  return (
    <section
      id="help"
      className="rounded-2xl border border-border bg-muted/25 px-6 py-10 scroll-mt-24 sm:px-10"
      aria-labelledby="help-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="help-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Built by the community
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground leading-relaxed">
          Missing your favorite creator, course, app, or book? Spot a broken link?
          Help keep this directory useful for learners.
        </p>
      </div>

      <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
        {/* Suggest a resource */}
        {suggestUrl ? (
          <Button asChild size="lg" className="rounded-2xl">
            <a href={suggestUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquarePlus className="mr-2 size-4" />
              Suggest a resource
            </a>
          </Button>
        ) : null}

        {/* Rate or review a resource */}
        {ratingsUrl ? (
          <Button asChild size="lg" variant="outline" className="rounded-2xl">
            <a href={ratingsUrl} target="_blank" rel="noopener noreferrer">
              <Star className="mr-2 size-4" />
              Rate or review a resource
            </a>
          </Button>
        ) : null}

        {/* Report a bug */}
        {issueUrl ? (
          <Button asChild size="lg" variant="outline" className="rounded-2xl">
            <a href={issueUrl} target="_blank" rel="noopener noreferrer">
              <Bug className="mr-2 size-4" />
              Report a bug
            </a>
          </Button>
        ) : null}

        {qaUrl ? (
          <Button asChild size="lg" variant="outline" className="rounded-2xl">
            <a href={qaUrl} target="_blank" rel="noopener noreferrer">
              <HelpCircle className="mr-2 size-4" />
              Ask a question
            </a>
          </Button>
        ) : null}
      </div>

      {!repoBase && !hasSuggestionsEmail && !hasSuggestionsForm ? (
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted-foreground leading-relaxed">
          When a public repository link is configured for this deployment, buttons
          will appear here so you can open an issue or start a discussion.
        </p>
      ) : null}

      {hasSuggestionsEmail || hasSuggestionsForm ? (
        <div className="mx-auto mt-5 flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:flex-wrap">
          {hasSuggestionsEmail ? (
            <Button asChild variant="ghost" className="rounded-2xl">
              <a
                href={`mailto:${siteConfig.suggestionsEmail}?subject=${encodeURIComponent(`${siteConfig.name} suggestion`)}`}
              >
                Email a suggestion
              </a>
            </Button>
          ) : null}
          {hasSuggestionsForm ? (
            <Button asChild variant="ghost" className="rounded-2xl">
              <a
                href={siteConfig.suggestionsFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Suggestion form
              </a>
            </Button>
          ) : null}
          {!repoBase ? (
            <p className="text-sm text-muted-foreground">
              GitHub links may be unavailable for this deployment.
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

