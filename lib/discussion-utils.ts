import { getAllDiscussionUrls } from "@/lib/data";

export function getDiscussionUrl(resourceId: string): string | null {
  const urls = getAllDiscussionUrls();
  return urls[resourceId] ?? null;
}
