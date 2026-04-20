import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { graphql } from "./graphql";
import { writeJsonStable } from "./json";

type ReactionContent =
  | "THUMBS_UP"
  | "THUMBS_DOWN"
  | "LAUGH"
  | "HOORAY"
  | "CONFUSED"
  | "HEART"
  | "ROCKET"
  | "EYES";

type DiscussionInfo = {
  id: string;
  locked: boolean;
  closed: boolean;
  reactionGroups: { content: ReactionContent; users: { totalCount: number } }[];
};

function die(msg: string): never {
  console.error(msg);
  process.exit(1);
}

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function scoreFor(d: DiscussionInfo): {
  score: number; // sort score (not displayed as-is)
  avg_stars: number;
  votes: number;
  stars: Record<string, number>;
} {
  const reactions: Record<string, number> = {};
  for (const g of d.reactionGroups ?? []) {
    reactions[g.content] = g.users.totalCount;
  }

  // Star mapping (Option A): reactions represent 1–5 stars.
  const starsByReaction: Record<string, number> = {
    THUMBS_DOWN: 1,
    CONFUSED: 2,
    THUMBS_UP: 3,
    HEART: 4,
    HOORAY: 5,
  };

  let votes = 0;
  let weightedSum = 0;
  const stars: Record<string, number> = {};

  for (const [reaction, count] of Object.entries(reactions)) {
    const s = starsByReaction[reaction];
    if (!s) continue;
    stars[reaction] = count;
    votes += count;
    weightedSum += s * count;
  }

  const avgRaw = votes > 0 ? weightedSum / votes : 0;
  const avg_stars = Math.round(avgRaw * 10) / 10; // one decimal for display

  // Sorting score: balance rating and sample size without overcomplicating.
  // score ~= avg * ln(1+votes). (monotone in both)
  const score = avgRaw * Math.log1p(votes);

  return { score, avg_stars, votes, stars };
}

async function fetchDiscussionsByIds(ids: string[]): Promise<DiscussionInfo[]> {
  // We use an alias-per-id query so we can fetch many nodes in one request.
  const fields = `
    ... on Discussion {
      id
      locked
      closed
      reactionGroups {
        content
        users { totalCount }
      }
    }
  `;

  const chunks = chunk(ids, 50);
  const out: DiscussionInfo[] = [];
  for (const group of chunks) {
    const parts = group
      .map((id, i) => `n${i}: node(id: "${id}") { ${fields} }`)
      .join("\n");
    const query = `query { ${parts} }`;

    const data = await graphql<Record<string, DiscussionInfo | null>>(query, {});
    for (const key of Object.keys(data)) {
      const node = data[key];
      if (node && typeof node.id === "string") out.push(node);
    }
  }
  return out;
}

async function main(): Promise<void> {
  const root = resolve(process.cwd());
  const mapPath = resolve(root, "data", "discussion-map.json");
  const ratingsPath = resolve(root, "data", "ratings.json");

  let map: Record<string, string> = {};
  try {
    map = readJson<Record<string, string>>(mapPath);
  } catch {
    die(
      "Missing data/discussion-map.json. Run lifecycle workflow first to create discussions.",
    );
  }

  const entries = Object.entries(map);
  if (!entries.length) {
    writeJsonStable(ratingsPath, {});
    console.log("No mapped discussions. Wrote empty ratings.json.");
    return;
  }

  const discussionIds = entries.map(([, did]) => did);
  const discussions = await fetchDiscussionsByIds(discussionIds);
  const byDiscussionId = new Map(discussions.map((d) => [d.id, d]));

  const ratings: Record<
    string,
    {
      score: number;
      avg_stars: number;
      votes: number;
      stars: Record<string, number>;
    }
  > = {};

  for (const [resourceId, discussionId] of entries) {
    const d = byDiscussionId.get(discussionId);
    if (!d) continue;
    if (d.closed || d.locked) continue;
    ratings[resourceId] = scoreFor(d);
  }

  writeJsonStable(ratingsPath, ratings);
  console.log(`Wrote ratings for ${Object.keys(ratings).length} resources.`);
}

main().catch((e) => die((e as Error).stack ?? String(e)));

