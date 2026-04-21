"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { HomeHeroGraphic } from "@/components/home/home-hero-graphic";

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
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div>
          <motion.p
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-sm font-medium text-primary"
          >
            Stop hunting for resources. Start learning.
          </motion.p>
          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            A curated directory of Cantonese resources—apps, courses, media,
            dictionaries, and communities—organized so you can find your next best
            step fast.
          </motion.p>
          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="rounded-2xl">
              <Link href="/resources">Browse the catalog</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl">
              <a href="#start-here">Start here</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="lg:justify-self-end"
        >
          <HomeHeroGraphic />
        </motion.div>
      </div>
    </section>
  );
}
