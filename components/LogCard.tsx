// components/LogCard.tsx
// ─────────────────────────────────────────
// Preview card for an activity log entry.
// Links to the full log detail page.
// ─────────────────────────────────────────

import Link from "next/link";
import type { LogMeta } from "@/lib/types";

interface LogCardProps {
  log: LogMeta;
}

export default function LogCard({ log }: LogCardProps) {
  const formattedDate = new Date(log.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/logs/${log.slug}`}
      style={{
        display: "block",
        backgroundColor: "rgba(255, 255, 255, 0.05)", // Mas transparent para sa "real glass" look
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
        padding: "1.25rem 1.5rem",
        textDecoration: "none",
        transition: "all 0.3s ease-in-out",
        willChange: "transform",
      }}
      className="hover:border-[var(--color-accent)] hover:shadow-[0_0_40px_5px_rgba(200,251,87,0.8)] group hover:scale-[1.05]"
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
          fontFamily: "'Poppins', sans-serif",
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
