// app/work/page.tsx
// ─────────────────────────────────────────
// Work page ( /work )
// Displays all projects with interactive
// filters by category and tech stack.
// ─────────────────────────────────────────

import type { Metadata } from "next";
import { getAllProjects, getAllCategories, getAllTechStack } from "@/lib/projects";
import WorkClientPage from "./WorkClientPage";

export const metadata: Metadata = {
  title: "Work",
  description: "A collection of projects I've built.",
};

// This is a Server Component — it loads data and passes it down.
// The filtering logic lives in WorkClientPage (a Client Component).
export default function WorkPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();
  const techOptions = getAllTechStack();

  return (
    <div className="max-w-6xl mx-auto px-6 pt-0 pb-20 md:pt-0 md:pb-28 md:-mt-16">
      {/* Page header */}
      <div className="mb-12">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "0.75rem",
          }}
        >
          Portfolio
        </p>
        <h1
          className="page-title"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            color: "var(--color-text)",
            lineHeight: 1.15,
          }}
        >
          My Work
        </h1>
        <p
          style={{
            color: "var(--color-muted)",
            marginTop: "0.75rem",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          {projects.length} projects across web, mobile, and backend development.
        </p>
      </div>

      {/* Client component handles all interactive filtering */}
      <WorkClientPage
        projects={projects}
        categories={categories}
        techOptions={techOptions}
      />
    </div>
  );
}
