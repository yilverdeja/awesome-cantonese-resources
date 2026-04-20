import { execFileSync } from "node:child_process";

export function git(args: string[], opts?: { cwd?: string }): string {
  return execFileSync("git", args, {
    cwd: opts?.cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trimEnd();
}

export function gitShowText(revAndPath: string): string | null {
  try {
    return execFileSync("git", ["show", revAndPath], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch {
    return null;
  }
}

export function gitDiffNameOnly(base: string, head: string): string[] {
  const out = git(["diff", "--name-only", `${base}..${head}`]);
  return out
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

