// components/ProjectCard.tsx
// ─────────────────────────────────────────
// Card UI for a single project.
// Receives a Project object and renders:
//   - Image (optional)
//   - Title, description, category
//   - Tech stack badges
// ─────────────────────────────────────────

import Image from "next/image";
import Link from "next/link"; // Import Link for external links
import Badge from "./Badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
  showcase?: boolean;
}
export default function ProjectCard({ project, compact = false, showcase = false }: ProjectCardProps) {
  // Format: "May 2026"
  const formattedDate = new Date(project.completionDate).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" }
  );

  return (
    <article
      className={`project-card glass-card backdrop-blur-xl group flex overflow-hidden rounded-[var(--radius-lg)] transition-all duration-500 will-change-transform hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)] ${showcase ? "project-card-showcase flex-col md:grid md:grid-cols-2" : "flex-col hover:-translate-y-2"} ${compact ? "project-card-compact" : ""}`}
    >
      {/* ── Project image ─────────────────── */}
      <div
        style={{ backgroundColor: "var(--color-border)", position: "relative" }}
        className={`${showcase ? "min-h-[14rem] md:min-h-[24rem]" : "h-48"} w-full overflow-hidden bg-[var(--color-surface)]`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="project-card-image object-cover"
            // Prevents layout shift by reserving space before image loads
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          // Placeholder when no image is provided
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ color: "var(--color-muted)", fontSize: "0.8rem" }}
          >
            No image
          </div>
        )}
      </div>

      {/* ── Card body ────────────────────── */}
      <div className={`flex flex-col gap-3 ${compact ? "p-5" : showcase ? "justify-center p-6 md:p-10" : "flex-1 p-6"}`}>
        {/* Category + date row */}
        <div className="flex items-center justify-between">
          <span
            style={{
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {project.category}
          </span>
          <span
            style={{ color: "var(--color-muted)", fontSize: "0.75rem" }}
          >
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            color: "var(--color-text)",
            fontSize: "1.15rem",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {!compact && (
          <>
            {/* Description */}
            <p
              style={{ color: "var(--color-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}
              className="flex-1"
            >
              {project.description}
            </p>

            {/* Project Links (GitHub and Live Page) */}
            <div className="mt-2 flex flex-wrap gap-2">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  GitHub
                </Link>
              )}
              {project.liveLink && (
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-[var(--color-accent)] px-3 py-1.5 text-xs font-medium text-[#071009] shadow-[0_0_15px_rgba(185,243,107,0.2)] transition-all hover:brightness-110">
                  Live Site
                </Link>
              )}
            </div>
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <Badge key={tech} label={tech} />
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
