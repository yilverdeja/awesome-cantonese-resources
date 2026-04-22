import type { Metadata } from "next";
import { Bug, MessageSquarePlus, Star, HelpCircle, GitPullRequest } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import {
  githubDiscussionsCategoryUrl,
  githubIssueChooserUrl,
  githubRepoBaseUrl,
} from "@/lib/github-links";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Help grow the Canto Resources directory — suggest a resource, report a bug, leave a rating, or ask a question.",
};

type ContributeOption = {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  href: string | null;
  variant?: "default" | "outline";
};

export default function ContributePage() {
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

  const contributionGuideUrl = repoBase ? `${repoBase}/blob/master/CONTRIBUTION.md` : null;

  const options: ContributeOption[] = [
    {
      icon: <MessageSquarePlus className="size-6" />,
      title: "Suggest a resource",
      description:
        "Know a great app, course, creator, book, or tool for learning Cantonese that isn't listed? Share it with the community in our GitHub Discussions.",
      cta: "Suggest a resource",
      href: suggestUrl,
      variant: "default",
    },
    {
      icon: <Bug className="size-6" />,
      title: "Report a bug or bad link",
      description:
        "Spotted a broken link, wrong information, or a web app issue? Open an issue and we'll get it fixed.",
      cta: "Open an issue",
      href: issueUrl,
      variant: "outline",
    },
    {
      icon: <Star className="size-6" />,
      title: "Rate or review a resource",
      description:
        "Used one of the resources in the directory? Leave a reaction or a comment in the Resource Ratings discussion to help other learners decide.",
      cta: "Go to Resource Ratings",
      href: ratingsUrl,
      variant: "outline",
    },
    {
      icon: <HelpCircle className="size-6" />,
      title: "Ask a question",
      description:
        "Have a question about the project or about learning Cantonese? Start a thread in the Q&A discussion and the community will help.",
      cta: "Ask a question",
      href: qaUrl,
      variant: "outline",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Help build the directory
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Canto Resources is a community-maintained project. You don&apos;t need to write any
          code to contribute — every suggestion, rating, or bug report makes the directory
          more useful for Cantonese learners.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {options.map((option) => {
          if (!option.href) return null;
          return (
            <div
              key={option.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/25 p-6"
            >
              <div className="flex items-center gap-3 text-foreground">
                {option.icon}
                <h2 className="text-lg font-semibold">{option.title}</h2>
              </div>
              <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                {option.description}
              </p>
              <Button
                asChild
                size="sm"
                variant={option.variant ?? "outline"}
                className="rounded-2xl self-start"
              >
                <a href={option.href} target="_blank" rel="noopener noreferrer">
                  {option.cta}
                </a>
              </Button>
            </div>
          );
        })}
      </div>

      {!repoBase && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Contribution links are not available for this deployment. Configure{" "}
          <code>NEXT_PUBLIC_GITHUB_REPO_URL</code> to enable them.
        </p>
      )}

      {contributionGuideUrl && (
        <div className="mt-14 rounded-2xl border border-border bg-muted/25 px-6 py-8 text-center">
          <div className="flex items-center justify-center gap-2 text-foreground">
            <GitPullRequest className="size-5" />
            <h2 className="text-lg font-semibold">Developer contributions</h2>
          </div>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Want to improve the web app, update automation, or contribute code? The
            contribution guide covers environment setup, the data schema, GitHub Actions
            workflows, and pull request guidelines.
          </p>
          <Button asChild variant="outline" size="sm" className="mt-5 rounded-2xl">
            <a href={contributionGuideUrl} target="_blank" rel="noopener noreferrer">
              Read the contribution guide
            </a>
          </Button>
        </div>
      )}
    </main>
  );
}
