// components/LogCard.tsx
// ─────────────────────────────────────────
// Preview card for an activity log entry.
// Links to the full log detail page.
// ─────────────────────────────────────────

import Link from "next/link";
import type { LogMeta } from "@/lib/types";

interface LogCardProps {
  log: LogMeta;
  /** Adds the accent glow-edge hover treatment (used on the home page). */
  glow?: boolean;
}

export default function LogCard({ log, glow = false }: LogCardProps) {
  const formattedDate = new Date(log.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/logs/${log.slug}`}
      className={`glass-card backdrop-blur-xl block rounded-[var(--radius-md)] p-5 md:p-6 text-decoration-none transition-all duration-500 will-change-transform hover:-translate-y-1 group ${
        glow
          ? "snapshot-card"
          : "hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]"
      }`}
    >
      {/* Date */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--color-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "0.5rem",
        }}
      >
        {formattedDate}
      </p>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1.1rem",
          color: "var(--color-text)",
          lineHeight: 1.3,
        }}
        className="group-hover:opacity-80 transition-opacity"
      >
        {log.title}
      </h3>

      {/* Read arrow */}
      <p
        style={{
          color: "var(--color-accent)",
          fontSize: "0.8rem",
          marginTop: "0.75rem",
        }}
      >
        Read entry →
      </p>
    </Link>
  );
}
