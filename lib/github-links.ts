function normalizeRepoUrl(value: string): string | null {
  const raw = value?.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    if (url.hostname !== "github.com") return null;

    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;

    const owner = parts[0];
    const repo = parts[1].replace(/\.git$/i, "");
    if (!owner || !repo) return null;

    return `https://github.com/${owner}/${repo}`;
  } catch {
    return null;
  }
}

export function githubRepoBaseUrl(repoUrl: string): string | null {
  return normalizeRepoUrl(repoUrl);
}

export function githubIssueChooserUrl(repoUrl: string): string | null {
  const base = normalizeRepoUrl(repoUrl);
  return base ? `${base}/issues/new/choose` : null;
}

export function githubDiscussionsCategoryUrl(
  repoUrl: string,
  categorySlug: string,
): string | null {
  const base = normalizeRepoUrl(repoUrl);
  const slug = categorySlug?.trim();
  if (!base || !slug) return null;
  return `${base}/discussions/categories/${encodeURIComponent(slug)}`;
}

