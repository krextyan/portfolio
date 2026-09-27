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

  // Get navigation context for the scrollable log list
  const allLogs = getAllLogs();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_22rem] gap-12 lg:gap-16 items-start">
        <div className="sm:pr-[22rem] md:pr-[24rem] lg:pr-0">
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
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                lineHeight: 1.2,
                color: "var(--color-text)",
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
        </div>

        {/* Scrollable log navigation */}
        <aside className="log-archive glass-card flex flex-col overflow-hidden rounded-[var(--radius-md)] sm:top-24 sm:z-40 sm:h-[calc(100vh-15rem)] sm:w-[22rem]">
          <div className="px-5 py-4 border-b border-[var(--color-border)]">
            <p className="page-kicker">All logs</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Browse the archive</p>
          </div>
          <nav aria-label="Log archive" className="min-h-0 flex-1 overflow-y-auto overscroll-contain divide-y divide-[var(--color-border)]">
            {allLogs.map((item) => {
              const isActive = item.slug === slug;
              const itemDate = new Date(item.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });

              return (
                <Link
                  key={item.slug}
                  href={`/logs/${item.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`group block px-5 py-4 transition-colors duration-200 hover:bg-[var(--color-accent-dim)] ${
                    isActive ? "bg-[var(--color-accent-dim)]" : ""
                  }`}
                >
                  <p className={`text-sm font-medium leading-snug transition-colors ${
                    isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text)] group-hover:text-[var(--color-accent)]"
                  }`}>
                    {item.title}
                  </p>
                  <p className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">
                    {itemDate}
                  </p>
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </div>
  );
}
