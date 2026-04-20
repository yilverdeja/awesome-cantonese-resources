type GraphQLErrorItem = {
  message: string;
  path?: (string | number)[];
  extensions?: Record<string, unknown>;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLErrorItem[];
};

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export class GraphQLRequestError extends Error {
  constructor(
    message: string,
    public readonly errors?: GraphQLErrorItem[],
  ) {
    super(message);
    this.name = "GraphQLRequestError";
  }
}

export async function graphql<TData>(
  query: string,
  variables: Record<string, unknown>,
  opts?: { token?: string; retries?: number },
): Promise<TData> {
  const token = opts?.token ?? process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error(
      "Missing GitHub token. Set GITHUB_TOKEN (recommended in Actions).",
    );
  }

  const retries = Math.max(0, opts?.retries ?? 3);
  let attempt = 0;
  // Basic exponential backoff with jitter. Also handles secondary rate limits.
  // We keep this intentionally simple to avoid extra dependencies.
  while (true) {
    attempt += 1;
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    const text = await res.text();
    const requestId = res.headers.get("x-github-request-id") ?? undefined;

    if (res.status === 502 || res.status === 503 || res.status === 504) {
      if (attempt <= retries) {
        await sleep(250 * 2 ** (attempt - 1) + Math.floor(Math.random() * 250));
        continue;
      }
      throw new Error(`GitHub GraphQL transient error (${res.status}).`);
    }

    if (!res.ok) {
      // Secondary rate limit can show up as 403 with a plain message.
      const msg = `GitHub GraphQL HTTP ${res.status}${
        requestId ? ` (request ${requestId})` : ""
      }: ${text.slice(0, 5000)}`;
      if (attempt <= retries && (res.status === 403 || res.status === 429)) {
        await sleep(500 * 2 ** (attempt - 1) + Math.floor(Math.random() * 500));
        continue;
      }
      throw new Error(msg);
    }

    let json: GraphQLResponse<TData>;
    try {
      json = JSON.parse(text) as GraphQLResponse<TData>;
    } catch {
      throw new Error(
        `GitHub GraphQL returned non-JSON response: ${text.slice(0, 2000)}`,
      );
    }

    if (json.errors?.length) {
      const msg = `GitHub GraphQL errors${
        requestId ? ` (request ${requestId})` : ""
      }: ${json.errors.map((e) => e.message).join(" | ")}`;
      if (attempt <= retries) {
        await sleep(400 * 2 ** (attempt - 1) + Math.floor(Math.random() * 400));
        continue;
      }
      throw new GraphQLRequestError(msg, json.errors);
    }

    if (!json.data) throw new Error("GitHub GraphQL returned no data.");
    return json.data;
  }
}

