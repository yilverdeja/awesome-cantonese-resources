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
    "Discover apps, courses, media, dictionaries, and community projects for learning Cantonese (Yue)—curated from the same open data as the Awesome Cantonese Resources list.",
  /** Set in production for correct absolute URLs in metadata. */
  metadataBase: optionalUrl(process.env.NEXT_PUBLIC_SITE_URL),
  /** Optional: full repo URL for footer / contributing links. */
  githubRepoUrl: process.env.NEXT_PUBLIC_GITHUB_REPO_URL?.trim() ?? "",
  /** Optional: mailto target for suggestions without a GitHub account. */
  suggestionsEmail: process.env.NEXT_PUBLIC_SUGGESTIONS_EMAIL?.trim() ?? "",
  /** Optional: URL to a form or other page for anonymous suggestions. */
  suggestionsFormUrl: process.env.NEXT_PUBLIC_SUGGESTIONS_FORM_URL?.trim() ?? "",
} as const;
