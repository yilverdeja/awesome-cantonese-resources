# Contributing to Awesome Cantonese Resources

This guide is for developers and technical contributors. If you just want to suggest a resource or report a bug, see the [non-technical options](#non-technical-contributions) below.

---

## Non-Technical Contributions

You don't need to write any code to contribute. Here are the easiest ways:

| What you want to do | Where to go |
|---|---|
| Suggest a new resource | [Discussions → Suggest Resources](https://github.com/yilverdeja/awesome-cantonese-resources/discussions/categories/suggest-resources) |
| Report a broken link or wrong info | [Open a Bug Report issue](https://github.com/yilverdeja/awesome-cantonese-resources/issues/new/choose) |
| Rate or leave feedback on a resource | [Discussions → Resource Ratings](https://github.com/yilverdeja/awesome-cantonese-resources/discussions/categories/resource-ratings) |
| Ask a question | [Discussions → Q&A](https://github.com/yilverdeja/awesome-cantonese-resources/discussions/categories/q-a) |

---

## Environment Setup

### Prerequisites

- **Node.js** 20 or later (check with `node -v`)
- **npm** 10 or later (comes with Node.js)
- A GitHub account with access to the repository

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yilverdeja/awesome-cantonese-resources.git
   cd awesome-cantonese-resources
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GITHUB_REPO_URL=https://github.com/yilverdeja/awesome-cantonese-resources
   ```

   Optional variables:
   ```env
   # Fallback contact email if GitHub is not configured
   NEXT_PUBLIC_SUGGESTIONS_EMAIL=

   # Fallback URL for a suggestion form
   NEXT_PUBLIC_SUGGESTIONS_FORM_URL=
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Updating Resources or Collections

Resources and collections are defined in JSON files under `/data/`. These are the canonical data sources — the README and web app are both generated from them.

### Adding or Editing a Resource (`data/resources.json`)

Each resource entry follows this schema:

```json
{
  "id": "unique-kebab-case-id",
  "name": "Display Name",
  "category": "App",
  "description": "One or two sentences describing the resource in plain English.",
  "url": "https://example.com/",
  "levels": ["Beginner", "Intermediate"],
  "tags": ["relevant", "tags"],
  "related_ids": [],
  "cost": "Free",
  "platforms": ["Web", "iOS"],
  "features": []
}
```

**Field reference:**

| Field | Required | Notes |
|---|---|---|
| `id` | Yes | Unique, stable, kebab-case. Never change once a resource is live (it's used as the Discussion ID key). |
| `name` | Yes | Official name of the resource. |
| `category` | Yes | Must be one of the valid `Category` values in `types/index.ts`. |
| `description` | Yes | Clear English description. |
| `url` | Yes | The canonical URL. |
| `levels` | Yes | Array of `Beginner`, `Intermediate`, `Advanced`, `All Levels`. |
| `tags` | Yes | Free-form labels used for search and filtering. |
| `related_ids` | Yes | Child → parent links only (e.g., a project pointing to its creator). Use `[]` if none. |
| `cost` | Yes | `Free`, `Freemium`, `Paid`, `Unknown`, or `null` if not applicable. |
| `platforms` | Yes | See `Platform` union in `types/index.ts` for valid values. |
| `features` | Yes | Notable capabilities (e.g., `"flashcards"`, `"romanization"`). Use `[]` if none. |

**After editing `resources.json`, regenerate the README:**
```bash
npm run readme
```

### Adding or Editing a Collection (`data/collections.json`)

Each collection entry:

```json
{
  "id": "unique-kebab-case-id",
  "title": "Collection Title",
  "description": "What this collection is for.",
  "kind": "starter_kit",
  "target_level": "Beginner",
  "order": 1,
  "resource_ids": ["resource-id-1", "resource-id-2"]
}
```

- `kind` is either `starter_kit` or `curated_list`
- `resource_ids` controls display order within the collection
- `order` controls sorting in the README (lower = appears first)

**After editing `collections.json`, regenerate the README:**
```bash
npm run readme
```

### Bot-Managed Files (Do Not Edit Manually)

The following files are automatically maintained by GitHub Actions and will be **rejected** if modified in a PR:

- `data/discussion-map.json` — maps resource IDs to GitHub Discussion node IDs
- `data/ratings.json` — computed ratings harvested from Discussion reactions

---

## Updating the Web App

The web app is a **Next.js 16** application using the App Router, Tailwind CSS v4, and shadcn/ui components.

### Project Structure

```
app/                    # Pages and API routes (Next.js App Router)
  layout.tsx            # Root layout (header, footer, theme)
  page.tsx              # Home page
  resources/page.tsx    # Resources explorer
  collections/          # Collections pages
components/
  home/                 # Home page sections (hero, how-it-works, contribute, etc.)
  resources/            # Resources explorer components
  collections/          # Collection components
  layout/               # Header, footer
  ui/                   # shadcn/ui primitives
lib/
  site-config.ts        # App-level configuration (reads from env vars)
  github-links.ts       # Helpers for building GitHub URLs
  data.ts               # Data loading functions
  site-stats.ts         # Computed stats for the home page
types/
  index.ts              # TypeScript types (Resource, Collection, Category, etc.)
```

### Adding a New Page

1. Create a directory under `app/` (e.g., `app/my-page/`)
2. Add a `page.tsx` file exporting a default React component
3. Add the page to the footer and/or header navigation if needed

### Styling

- Use **Tailwind CSS v4** utility classes
- Use **shadcn/ui** components from `components/ui/` for buttons, cards, badges, etc.
- Follow existing patterns: `rounded-2xl` on interactive elements, `text-muted-foreground` for secondary text
- Dark mode is handled automatically via `next-themes`

### Running Type Checks and Linting

```bash
npm run typecheck   # TypeScript type checking
npm run lint        # ESLint
npm run build       # Full production build (catches all errors)
```

---

## Updating Automation (GitHub Actions, Templates, Scripts)

### GitHub Actions Workflows (`.github/workflows/`)

| Workflow | Trigger | What it does |
|---|---|---|
| `gatekeeper.yml` | Pull request | Validates JSON, rejects bot-file edits, runs type checks |
| `lifecycle.yml` | Push to master | Creates/closes GitHub Discussions for added/removed resources |
| `harvester.yml` | Schedule (12h) | Harvests reaction counts from Discussions → `ratings.json` |
| `builder.yml` | Manual | Regenerates README and commits the result |
| `readme.yml` | Pull request | Verifies the README is up to date |

### Scripts (`scripts/`)

| Script | Command | Purpose |
|---|---|---|
| `generate-readme.ts` | `npm run readme` | Regenerates the auto-generated section of README.md |
| `validate-resources-json.py` | `python scripts/validate-resources-json.py` | Validates resource JSON structure |
| `gitops/validate-pr.ts` | Used by gatekeeper | Validates PR changes |
| `gitops/lifecycle.ts` | Used by lifecycle | Creates/closes Discussions |
| `gitops/harvest.ts` | Used by harvester | Collects ratings data |

### Adding Issue Templates

Issue templates live in `.github/ISSUE_TEMPLATE/`. YAML-format templates (`.yml`) are preferred over Markdown (`.md`) as they support structured fields and dropdowns.

The `config.yml` in that directory controls the issue chooser page and can link to external resources (discussions, documentation).

---

## Pull Request Guidelines

1. **One concern per PR** — don't mix resource data changes with app code changes.
2. **Run `npm run readme`** after any `data/` changes so the README stays in sync.
3. **Pass CI** — the gatekeeper workflow will reject PRs with type errors, lint failures, or invalid JSON.
4. **Do not edit bot-managed files** (`discussion-map.json`, `ratings.json`) — the PR will be blocked automatically.
5. Include a brief description of what changed and why.

---

## Questions?

Ask in [Discussions → Q&A](https://github.com/yilverdeja/awesome-cantonese-resources/discussions/categories/q-a).
