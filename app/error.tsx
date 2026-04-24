"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
        <AlertTriangle className="size-6 text-muted-foreground" aria-hidden />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Something went wrong</h1>
        <p className="text-muted-foreground">
          An unexpected error occurred. You can try again or head back to the
          home page.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="outline" className="rounded-2xl" onClick={reset}>
          Try again
        </Button>
        <Button variant="ghost" className="rounded-2xl" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
