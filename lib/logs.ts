// lib/logs.ts
// ─────────────────────────────────────────
// Helper functions for reading activity logs
// from the /content/logs directory.
//
// To add a new log: drop a .md file in
// /content/logs with the correct frontmatter.
// No code changes needed.
// ─────────────────────────────────────────

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { LogMeta, LogFull } from "./types";

// Absolute path to the logs folder
const LOGS_DIR = path.join(process.cwd(), "content/logs");

/**
 * Returns a list of all log metadata (no content body),
 * sorted by date descending (newest first).
 */
export function getAllLogs(): LogMeta[] {
  // Read all .md files from the logs directory
  const fileNames = fs.readdirSync(LOGS_DIR).filter((f) => f.endsWith(".md"));

  const logs: LogMeta[] = fileNames.map((fileName) => {
    // The slug is the filename without the .md extension
    const slug = fileName.replace(/\.md$/, "");

    // Read the file and parse frontmatter
    const fullPath = path.join(LOGS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
    };
  });

  // Sort newest first
  return logs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Returns full data for a single log by slug,
 * including the Markdown body rendered as HTML.
 */
export async function getLogBySlug(slug: string): Promise<LogFull> {
  const fullPath = path.join(LOGS_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse frontmatter (title, date) and the Markdown body
  const { data, content } = matter(fileContents);

  // Convert Markdown to HTML using remark
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    contentHtml,
  };
}

/**
 * Returns all slugs — needed for Next.js static generation
 * via generateStaticParams in the [slug] route.
 */
export function getAllLogSlugs(): string[] {
  const fileNames = fs.readdirSync(LOGS_DIR).filter((f) => f.endsWith(".md"));
  return fileNames.map((f) => f.replace(/\.md$/, ""));
}
