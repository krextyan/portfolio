// app/logs/[slug]/page.tsx
// ─────────────────────────────────────────
// Dynamic log detail page ( /logs/[slug] )
//
// Next.js will call generateStaticParams at
// build time to pre-render one page per log.
// Adding a new .md file auto-creates a page.
// ─────────────────────────────────────────

import type { Metadata } from "next";
import { getAllLogSlugs, getLogBySlug, getAllLogs } from "@/lib/logs";
import { notFound } from "next/navigation";
import Link from "next/link";

// ── Static generation ─────────────────────
// Tell Next.js all the slugs to pre-render.
export async function generateStaticParams() {
  const slugs = getAllLogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ── Dynamic metadata ──────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const log = await getLogBySlug(slug);
    return { title: log.title };
  } catch {
    return { title: "Log not found" };
  }
}

// ── Page component ────────────────────────
export default async function LogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Try to load the log; show 404 if slug doesn't match a file
  let log;
  try {
    log = await getLogBySlug(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(log.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Get navigation context
  const allLogs = getAllLogs();
  const currentIndex = allLogs.findIndex((l) => l.slug === slug);
  const nextLog = currentIndex > 0 ? allLogs[currentIndex - 1] : null; // Newer log
  const prevLog = currentIndex < allLogs.length - 1 ? allLogs[currentIndex + 1] : null; // Older log

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/logs"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--color-muted)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          marginBottom: "2.5rem",
        }}
        className="hover:opacity-70 transition-opacity"
      >
        ← All logs
      </Link>

      {/* Log header */}
      <header className="mb-10">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "0.75rem",
          }}
        >
          {formattedDate}
        </p>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            lineHeight: 1.2,
            background: "radial-gradient(circle at center, var(--color-text) 20%, var(--color-accent) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {log.title}
        </h1>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--color-border)",
            marginTop: "1.5rem",
          }}
        />
      </header>

      {/* ── Rendered Markdown content ─────────
          The "prose" class applies the styles
          defined in app/globals.css
      ─────────────────────────────────────── */}
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: log.contentHtml }}
      />

      {/* Navigation Buttons */}
      <nav 
        style={{ 
          marginTop: "4rem", 
          paddingTop: "2rem", 
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "1rem"
        }}
      >
        {prevLog ? (
          <Link
            href={`/logs/${prevLog.slug}`}
            style={{
              flex: 1,
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid var(--color-border)",
              transition: "all 0.2s ease"
            }}
            className="hover:border-[var(--color-accent)] group"
          >
            <span style={{ fontSize: "0.7rem", color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>← PREVIOUS</span>
            <span style={{ fontSize: "0.9rem", color: "var(--color-text)", fontWeight: 500 }} className="group-hover:text-[var(--color-accent)]">
              {prevLog.title}
            </span>
          </Link>
        ) : (
          <div style={{ flex: 1 }} />
        )}

        {nextLog ? (
          <Link
            href={`/logs/${nextLog.slug}`}
            style={{
              flex: 1,
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0.5rem",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid var(--color-border)",
              transition: "all 0.2s ease",
              textAlign: "right"
            }}
            className="hover:border-[var(--color-accent)] group"
          >
            <span style={{ fontSize: "0.7rem", color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>NEXT →</span>
            <span style={{ fontSize: "0.9rem", color: "var(--color-text)", fontWeight: 500 }} className="group-hover:text-[var(--color-accent)]">
              {nextLog.title}
            </span>
          </Link>
        ) : (
          <div style={{ flex: 1 }} />
        )}
      </nav>
    </div>
  );
}
