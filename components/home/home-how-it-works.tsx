"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { getResourceById } from "@/lib/data";
import { Button } from "@/components/ui/button";

function Demo() {
  const reduceMotion = useReducedMotion();

  const chips = [
    { label: "Category: Dictionary", delay: 0.15 },
    { label: "Level: Advanced", delay: 0.95 },
  ] as const;

  const itemIds = ["pleco", "cantowords", "cantodict"] as const;
  const items = itemIds
    .map((id, index) => {
      const r = getResourceById(id);
      if (!r) return null;
      return {
        id,
        name: r.name,
        description: r.description,
        href: r.url,
        showAt: 0.35 + index * 0.7,
      };
    })
    .filter((v): v is NonNullable<typeof v> => Boolean(v));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <motion.span
            key={chip.label}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{
              delay: reduceMotion ? 0 : chip.delay,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
          >
            {chip.label}
          </motion.span>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {items.map((row) => (
          <motion.a
            key={row.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{
              delay: reduceMotion ? 0 : row.showAt,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            href={row.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-border/70 bg-background/70 px-4 py-3 outline-none transition-colors hover:bg-muted/30 focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-foreground">
                {row.name}
              </div>
              <div className="truncate text-xs text-muted-foreground">
                {row.description}
              </div>
            </div>
            <ExternalLink
              className="ml-4 size-4 shrink-0 text-muted-foreground opacity-70 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </motion.a>
        ))}
      </div>

      {!reduceMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.75, 0.55] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
    </div>
  );
}

export function HomeHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="space-y-8 scroll-mt-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <h2
            id="how-it-works-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Find what fits—fast
          </h2>
          <p className="text-muted-foreground leading-relaxed sm:text-lg">
            Use search and filters to narrow the catalog, or follow a starter kit
            when you want an ordered path.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary">
                1
              </span>
              <span>
                Start with a kit if you’re new (pronunciation → dictionary → input).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary">
                2
              </span>
              <span>
                Looking for something specific? Filter by category and level.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary">
                3
              </span>
              <span>
                Everything links out to the original creator—this is an index, not a
                walled garden.
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="w-fit rounded-2xl">
              <Link href="/resources">Explore resources</Link>
            </Button>
            <Button asChild variant="outline" className="w-fit rounded-2xl">
              <a href="#contribute">Help improve the list</a>
            </Button>
          </div>
        </div>

        <Demo />
      </div>
    </section>
  );
}

