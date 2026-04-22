import type { Category } from "@/types";

function optionalUrl(value: string | undefined): URL | undefined {
  if (!value?.trim()) return undefined;
  try {
    return new URL(value);
  } catch {
    return undefined;
  }
}

export const siteConfig = {
  name: "Canto Resources",
  shortName: "Canto Resources",
  description:
    "Discover apps, courses, media, dictionaries, and community projects for learning Cantonese — curated from the same open data as the Awesome Cantonese Resources list.",
  /** Temporary default until a real site URL is configured. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://everythingcantonese.org",
  /** Set in production for correct absolute URLs in metadata. */
  metadataBase: optionalUrl(process.env.NEXT_PUBLIC_SITE_URL),
  /** Optional: full repo URL for footer / contributing links. */
  githubRepoUrl: process.env.NEXT_PUBLIC_GITHUB_REPO_URL?.trim() ?? "",
  /** Optional: mailto target for suggestions without a GitHub account. */
  suggestionsEmail: process.env.NEXT_PUBLIC_SUGGESTIONS_EMAIL?.trim() ?? "",
  /** Optional: URL to a form or other page for anonymous suggestions. */
  suggestionsFormUrl: process.env.NEXT_PUBLIC_SUGGESTIONS_FORM_URL?.trim() ?? "",
  /** Minimum votes required before a rating appears in the README or web app. */
  minRatingVotes: 10,
  footerExploreCategories: [
    { label: "All Apps", category: "App" },
    { label: "All Communities", category: "Community" },
    { label: "All Dictionaries", category: "Dictionary" },
    { label: "All Tools", category: "Tool" },
    { label: "All Courses", category: "Course" },
  ] satisfies { label: string; category: Category }[],
} as const;
