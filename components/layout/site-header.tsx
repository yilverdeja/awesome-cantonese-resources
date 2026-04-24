"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Menu, Moon, Star, Sun } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useTheme } from "next-themes";
import { siteConfig } from "@/lib/site-config";
import { githubRepoBaseUrl } from "@/lib/github-links";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const nav = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/collections", label: "Collections" },
] as const;

const STAR_THRESHOLD = 10;

function formatStarCount(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(count);
}

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.25.77-.55v-2.03c-3.13.68-3.79-1.32-3.79-1.32-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.5-.28-5.13-1.25-5.13-5.58 0-1.23.44-2.23 1.17-3.02-.12-.29-.51-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.7 10.7 0 0 1 5.65 0c2.15-1.45 3.1-1.15 3.1-1.15.62 1.55.23 2.69.11 2.98.73.79 1.17 1.79 1.17 3.02 0 4.34-2.64 5.29-5.15 5.57.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.78.55A11.25 11.25 0 0 0 12 .75Z"
      />
    </svg>
  );
}

function GithubRepoButton({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const repoBase = useMemo(
    () => (siteConfig.githubRepoUrl ? githubRepoBaseUrl(siteConfig.githubRepoUrl) : null),
    [],
  );
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    if (!repoBase) return;
    let cancelled = false;
    fetch("/api/github")
      .then((r) => r.json() as Promise<{ stars: number | null }>)
      .then((data) => {
        if (cancelled) return;
        setStars(typeof data.stars === "number" ? data.stars : null);
      })
      .catch(() => {
        if (cancelled) return;
        setStars(null);
      });
    return () => {
      cancelled = true;
    };
  }, [repoBase]);

  if (!repoBase) return null;

  const showStars = typeof stars === "number" && stars >= STAR_THRESHOLD;

  return (
    <a
      href={repoBase}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl border border-border/80 bg-background/60 px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground",
        "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className,
      )}
      aria-label="Open GitHub repository"
      title="Open GitHub repository"
    >
      {!showStars && <GitHubMark className="size-4 shrink-0" />}
      {showStars ? (
        <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-foreground">
          <Star className="size-3 text-amber-500 fill-amber-500" aria-hidden />
          {formatStarCount(stars)}
        </span>
      ) : null}
    </a>
  );
}

function NavLinks({
  className,
  onNavigate,
  variant = "desktop",
}: {
  className?: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {nav.map(({ href, label }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={cn(
              variant === "mobile"
                ? "rounded-2xl px-4 py-3 text-base font-medium transition-colors"
                : "rounded-2xl px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-primary/15 text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

function ThemeMobileRow({ onSwitch }: { onSwitch?: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
        onSwitch?.();
      }}
      disabled={!mounted}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
    >
      {isDark ? (
        <Moon className="size-4 shrink-0" aria-hidden />
      ) : (
        <Sun className="size-4 shrink-0" aria-hidden />
      )}
      <span className="flex-1 text-left">Appearance</span>
      {mounted ? (
        <span className="text-sm font-normal opacity-60">{isDark ? "Dark" : "Light"}</span>
      ) : null}
    </button>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-semibold tracking-tight text-foreground hover:opacity-90"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <NavLinks />
          <span className="h-6 w-px shrink-0 bg-border" aria-hidden />
          <ThemeToggle />
          <GithubRepoButton />
        </div>

        <div className="flex flex-1 justify-end md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon-sm" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="data-[side=right]:w-80 gap-0 p-0"
            >
              <SheetHeader className="px-5 pt-5 pb-0">
                <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1 px-3 pb-6">
                <NavLinks
                  className="flex-col items-stretch"
                  variant="mobile"
                />
                <Separator className="my-2" />
                {siteConfig.githubRepoUrl ? (
                  <a
                    href={githubRepoBaseUrl(siteConfig.githubRepoUrl) ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <GitHubMark className="size-4 shrink-0" />
                    <span className="flex-1">GitHub</span>
                    <ExternalLink className="size-3.5 shrink-0 opacity-40" aria-hidden />
                  </a>
                ) : null}
                <ThemeMobileRow onSwitch={() => setMobileOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
