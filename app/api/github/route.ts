import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site-config";
import { githubRepoBaseUrl } from "@/lib/github-links";

export const revalidate = 3600; // 1 hour

function repoSlugFromUrl(repoUrl: string): string | null {
  const base = githubRepoBaseUrl(repoUrl);
  if (!base) return null;
  try {
    const url = new URL(base);
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;
    return `${parts[0]}/${parts[1]}`;
  } catch {
    return null;
  }
}

export async function GET() {
  const repoUrl = siteConfig.githubRepoUrl;
  const slug = repoUrl ? repoSlugFromUrl(repoUrl) : null;
  if (!slug) return NextResponse.json({ stars: null }, { status: 200 });

  const res = await fetch(`https://api.github.com/repos/${slug}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "canto-resources-web",
    },
    next: { revalidate },
  });

  if (!res.ok) {
    return NextResponse.json({ stars: null }, { status: 200 });
  }

  const data = (await res.json()) as { stargazers_count?: number };
  const stars = typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  return NextResponse.json({ stars }, { status: 200 });
}

