// app/work/WorkClientPage.tsx
// ─────────────────────────────────────────
// Client Component for the Work page.
// Handles filter state and renders the
// filtered project grid.
//
// Why a separate file?
// Next.js requires "use client" in a file to
// use hooks (useState). We keep the parent
// page as a Server Component for data loading,
// and isolate the interactive parts here.
// ─────────────────────────────────────────

"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

interface WorkClientPageProps {
  projects: Project[];
  categories: string[];
  techOptions: string[];
}

export default function WorkClientPage({
  projects,
  categories,
  techOptions,
}: WorkClientPageProps) {
  // "All" means no filter applied
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeTech, setActiveTech] = useState<string>("All");

  // ── Filter logic ──────────────────────────────
  const filteredProjects = projects.filter((p) => {
    const categoryMatch =
      activeCategory === "All" || p.category === activeCategory;
    const techMatch =
      activeTech === "All" || p.techStack.includes(activeTech);
    return categoryMatch && techMatch;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* ── Filter controls ───────────────────── */}
      <div className="flex flex-col gap-4">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--color-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginRight: "0.5rem",
            }}
          >
            Category
          </span>
          {["All", ...categories].map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* Tech stack filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--color-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginRight: "0.5rem",
            }}
          >
            Tech
          </span>
          {["All", ...techOptions].map((tech) => (
            <FilterButton
              key={tech}
              label={tech}
              active={activeTech === tech}
              onClick={() => setActiveTech(tech)}
            />
          ))}
        </div>
      </div>

      {/* ── Result count ─────────────────────── */}
      <p
        style={{
          color: "var(--color-muted)",
          fontSize: "0.85rem",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "1rem",
        }}
      >
        Showing{" "}
        <span style={{ color: "var(--color-text)" }}>{filteredProjects.length}</span>{" "}
        of {projects.length} projects
      </p>

      {/* ── Project grid ─────────────────────── */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <p
          style={{
            color: "var(--color-muted)",
            textAlign: "center",
            padding: "3rem 0",
          }}
        >
          No projects match the selected filters.
        </p>
      )}
    </div>
  );
}

// ── Small helper component ─────────────────
// Pill button for filter selections.
function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        padding: "0.3rem 0.75rem",
        borderRadius: "999px",
        border: active
          ? "1px solid var(--color-accent)"
          : "1px solid var(--color-border)",
        backgroundColor: active ? "var(--color-accent-dim)" : "transparent",
        color: active ? "var(--color-accent)" : "var(--color-muted)",
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );
}
