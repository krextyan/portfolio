// lib/projects.ts
// ─────────────────────────────────────────
// Helper functions for loading project data.
// All project data lives in data/projects.json.
// To add a project: edit that JSON file only.
// ─────────────────────────────────────────

import type { Project } from "./types";
import projectsData from "@/data/projects.json";

/**
 * Returns all projects, sorted by completion date (newest first).
 */
export function getAllProjects(): Project[] {
  const projects = projectsData as Project[];
  return projects.sort(
    (a, b) =>
      new Date(b.completionDate).getTime() -
      new Date(a.completionDate).getTime()
  );
}

/**
 * Returns the first N projects (for featured sections).
 * @param count - how many to return (default: 2)
 */
export function getFeaturedProjects(count = 2): Project[] {
  return getAllProjects().slice(0, count);
}

/**
 * Returns all unique categories across all projects.
 * Used to build the filter UI on the /work page.
 */
export function getAllCategories(): string[] {
  const projects = getAllProjects();
  const categoriesSet = new Set(projects.map((p) => p.category));
  return Array.from(categoriesSet).sort();
}

/**
 * Returns all unique tech stack entries across all projects.
 * Used to build the tech filter UI on the /work page.
 */
export function getAllTechStack(): string[] {
  const projects = getAllProjects();
  const techSet = new Set(projects.flatMap((p) => p.techStack));
  return Array.from(techSet).sort();
}
