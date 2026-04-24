import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
        <FileQuestion className="size-6 text-muted-foreground" aria-hidden />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
      </div>
      <Button variant="outline" className="rounded-2xl" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
