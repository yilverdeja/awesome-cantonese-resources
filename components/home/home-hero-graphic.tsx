"use client";

import { motion, useReducedMotion } from "framer-motion";

type IconProps = { className?: string };

function IconBook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M6.5 3.75h8.75c1.52 0 2.75 1.23 2.75 2.75v12.25c0 .41-.34.75-.75.75H8.25c-.97 0-1.75.78-1.75 1.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.5c0-1.52 1.23-2.75 2.75-2.75Zm0 1.5c-.69 0-1.25.56-1.25 1.25v12.05c.5-.35 1.1-.55 1.75-.55h9.75V6.5c0-.69-.56-1.25-1.25-1.25H6.5Z"
      />
    </svg>
  );
}

function IconPlay({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M9.25 6.84c0-1.1 1.2-1.78 2.14-1.2l8.25 5.16c.9.56.9 1.86 0 2.42l-8.25 5.16c-.94.58-2.14-.1-2.14-1.2V6.84ZM10.75 7.4v9.2L18.1 12 10.75 7.4Z"
      />
      <path
        fill="currentColor"
        d="M12 2.75c-5.1 0-9.25 4.15-9.25 9.25S6.9 21.25 12 21.25 21.25 17.1 21.25 12 17.1 2.75 12 2.75Zm0 1.5A7.75 7.75 0 1 1 4.25 12 7.76 7.76 0 0 1 12 4.25Z"
        opacity="0.35"
      />
    </svg>
  );
}

function IconMic({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M12 14.75a3.75 3.75 0 0 0 3.75-3.75V7.25A3.75 3.75 0 0 0 12 3.5 3.75 3.75 0 0 0 8.25 7.25V11A3.75 3.75 0 0 0 12 14.75Zm-2.25-7.5A2.25 2.25 0 0 1 12 5a2.25 2.25 0 0 1 2.25 2.25V11A2.25 2.25 0 0 1 12 13.25 2.25 2.25 0 0 1 9.75 11V7.25Z"
      />
      <path
        fill="currentColor"
        d="M6.25 11.5c.41 0 .75.34.75.75a5 5 0 0 0 10 0c0-.41.34-.75.75-.75s.75.34.75.75a6.5 6.5 0 0 1-5.75 6.45V21a.75.75 0 0 1-1.5 0v-2.3A6.5 6.5 0 0 1 5.5 12.25c0-.41.34-.75.75-.75Z"
        opacity="0.8"
      />
    </svg>
  );
}

function IconSearch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M10.5 3.75a6.75 6.75 0 1 0 4.21 12.03l3.26 3.26a.75.75 0 0 0 1.06-1.06l-3.26-3.26A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z"
      />
    </svg>
  );
}

function Tile({
  title,
  subtitle,
  icon,
  className,
  delay,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={[
        "rounded-2xl border border-border/70 bg-background/70 shadow-sm backdrop-blur",
        "px-4 py-3",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/12 text-primary">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-foreground">
            {title}
          </div>
          <div className="truncate text-xs text-muted-foreground">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function HomeHeroGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-xl">
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.20),transparent_55%),radial-gradient(circle_at_70%_65%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(244,63,94,0.14),transparent_60%)]"
        aria-hidden
      />

      <div className="relative grid gap-3 rounded-[2rem] border border-border/60 bg-muted/15 p-4 shadow-sm sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <Tile
            title="Pronunciation"
            subtitle="Jyutping, tones, listening"
            icon={<IconMic className="size-5" />}
            delay={0.1}
          />
          <Tile
            title="Video input"
            subtitle="Comprehensible channels"
            icon={<IconPlay className="size-5" />}
            delay={0.18}
            className="sm:translate-y-2"
          />
          <Tile
            title="Reading"
            subtitle="Graded stories, readers"
            icon={<IconBook className="size-5" />}
            delay={0.26}
            className="sm:-translate-y-1"
          />
          <Tile
            title="Find what fits"
            subtitle="Search + filters"
            icon={<IconSearch className="size-5" />}
            delay={0.34}
          />
        </div>

        {!reduceMotion ? (
          <>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-4 -top-4 size-20 rounded-full bg-primary/10 blur-2xl"
              animate={{ x: [0, 10, 0], y: [0, 6, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -right-6 size-24 rounded-full bg-emerald-500/10 blur-2xl dark:bg-emerald-400/10"
              animate={{ x: [0, -12, 0], y: [0, -8, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

