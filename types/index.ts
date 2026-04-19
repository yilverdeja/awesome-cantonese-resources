export type Level = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export type Category =
  | "Community"
  | "App"
  | "BrowserExtension"
  | "OpenSource"
  | "Creator"
  | "VideoChannel"
  | "Podcast"
  | "TV"
  | "Book"
  | "GradedReader"
  | "Dictionary"
  | "Tool"
  | "Pronunciation"
  | "Course"
  | "SelfStudy"
  | "Reference"
  | "Blog"
  | "Music"
  | "LanguageExchange"
  | "Map"
  | "Other";

export type Platform =
  | "Web"
  | "iOS"
  | "Android"
  | "Desktop"
  | "Chrome"
  | "Firefox"
  | "YouTube"
  | "Instagram"
  | "Facebook"
  | "Spotify"
  | "SoundCloud"
  | "RadioPublic"
  | "GoogleDrive"
  | "GoogleDocs"
  | "InPerson"
  | "Podcast"
  | "ArchiveOrg"
  | "GitHub"
  | "Reddit"
  | "Discord"
  | "Bilibili";

export type Cost = "Free" | "Freemium" | "Paid" | "Unknown" | null;

export type CollectionKind = "starter_kit" | "curated_list";

export interface Resource {
  id: string;
  name: string;
  category: Category;
  description: string;
  url: string;
  levels: Level[];
  tags: string[];
  /**
   * Child → parent links only (e.g. a project points to its creator or umbrella org).
   * Do not list children on the parent resource.
   */
  related_ids: string[];
  /** Use null when pricing does not apply (e.g. individuals, communities). */
  cost: Cost;
  platforms: Platform[];
  features: string[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  kind: CollectionKind;
  target_level?: Level | Level[];
  resource_ids: string[];
  order?: number;
}
