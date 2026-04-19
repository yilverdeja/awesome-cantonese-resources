"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-sm font-medium text-primary"
        >
          Cantonese (Yue) for learners everywhere
        </motion.p>
        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Browse dictionaries, courses, podcasts, video channels, and community
          projects—curated from open data so you can find the next best step in
          your Cantonese journey.
        </motion.p>
        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button asChild size="lg" className="rounded-2xl">
            <Link href="/resources">Browse resources</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-2xl">
            <Link href="/collections">View collections</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
