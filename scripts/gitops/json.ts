import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

function sortObjectDeep(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortObjectDeep);
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const next: Record<string, unknown> = {};
    for (const k of Object.keys(obj).sort()) {
      next[k] = sortObjectDeep(obj[k]);
    }
    return next;
  }
  return value;
}

export function writeJsonStable(path: string, data: unknown): void {
  mkdirSync(dirname(path), { recursive: true });
  const sorted = sortObjectDeep(data);
  const text = JSON.stringify(sorted, null, 2) + "\n";
  writeFileSync(path, text, "utf8");
}

