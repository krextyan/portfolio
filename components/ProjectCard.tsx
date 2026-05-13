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
}
export default function ProjectCard({ project }: ProjectCardProps) {
  // Format: "May 2026"
  const formattedDate = new Date(project.completionDate).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" }
  );

  return (
    <article
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)", // Mas transparent para sa "real glass" look
        backdropFilter: "blur(12px)", // Glass blur effect
        WebkitBackdropFilter: "blur(12px)", // Support para sa Safari
        border: "1px solid rgba(255, 255, 255, 0.1)", // Mas manipis at translucent na border
        borderRadius: "12px", // Mas swabe na kanto
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        willChange: "transform",
      }}
      className="flex flex-col hover:border-[var(--color-accent)] hover:shadow-[0_0_40px_5px_rgba(200,251,87,0.8)] hover:scale-[1.05]"
    >
      {/* ── Project image ─────────────────── */}
      <div
        style={{ backgroundColor: "var(--color-border)", position: "relative" }}
        className="h-44 w-full overflow-hidden"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
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
      <div className="flex flex-col flex-1 p-5 gap-3">
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
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            color: "var(--color-text)",
            fontSize: "1.15rem",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{ color: "var(--color-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}
          className="flex-1"
        >
          {project.description}
        </p>

        {/* Project Links (GitHub and Live Page) */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm font-medium rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              GitHub
            </Link>
          )}
          {project.liveLink && (
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-accent)] text-[#0d0d0f] hover:brightness-110 transition-all shadow-[0_0_15px_rgba(200,251,87,0.3)]">
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
      </div>
    </article>
  );
}
