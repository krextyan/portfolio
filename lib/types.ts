// lib/types.ts
// ─────────────────────────────────────────
// Shared TypeScript interfaces.
// Keep types here so components and pages
// stay in sync automatically.
// ─────────────────────────────────────────

/** A single project from data/projects.json */
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  completionDate: string; // ISO date string, e.g. "2026-05-02"
  category: string;
  image?: string; // optional path to image in /public
  githubLink?: string; // Optional GitHub repository link
  liveLink?: string;   // Optional live demo link
}

/** Metadata extracted from a Markdown log file's frontmatter */
export interface LogMeta {
  slug: string;   // filename without .md, used as the URL segment
  title: string;
  date: string;   // ISO date string
}

/** Full log data — metadata + rendered HTML content */
export interface LogFull extends LogMeta {
  contentHtml: string;
}
