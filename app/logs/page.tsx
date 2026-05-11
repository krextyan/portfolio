// app/logs/page.tsx
// ─────────────────────────────────────────
// Logs index page ( /logs )
// Lists all activity log entries.
// ─────────────────────────────────────────

import type { Metadata } from "next";
import { getAllLogs } from "@/lib/logs";
import LogCard from "@/components/LogCard";

export const metadata: Metadata = {
  title: "Logs",
  description: "Weekly activity logs — what I'm building and learning.",
};

export default function LogsIndexPage() {
  const logs = getAllLogs();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "0.75rem",
          }}
        >
          Activity
        </p>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "var(--color-text)",
            lineHeight: 1.15,
          }}
        >
          Dev Logs
        </h1>
        <p
          style={{
            color: "var(--color-muted)",
            marginTop: "0.75rem",
            lineHeight: 1.7,
          }}
        >
          Weekly notes on what I&apos;m building, learning, and thinking about.
          Raw and honest.
        </p>
      </div>

      {/* Log list */}
      {logs.length === 0 ? (
        <p style={{ color: "var(--color-muted)" }}>No logs yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {logs.map((log) => (
            <LogCard key={log.slug} log={log} />
          ))}
        </div>
      )}
    </div>
  );
}
