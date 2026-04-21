"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

type ThemeToggleProps = {
  /** Called after theme change (e.g. close mobile sheet). */
  onSwitch?: () => void;
};

export function ThemeToggle({ onSwitch }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goDark = resolvedTheme !== "dark";
  const label = goDark ? "Switch to dark mode" : "Switch to light mode";

  const handleClick = () => {
    setTheme(goDark ? "dark" : "light");
    onSwitch?.();
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon-sm"
        className="rounded-2xl"
        disabled
        aria-hidden
      >
        <Moon className="size-4 opacity-0" />
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      className="rounded-2xl"
      onClick={handleClick}
      aria-label={label}
      title={label}
    >
      {goDark ? (
        <Moon className="size-4" aria-hidden />
      ) : (
        <Sun className="size-4" aria-hidden />
      )}
    </Button>
  );
}
