// app/logs/page.tsx
// ─────────────────────────────────────────
// Logs index page ( /logs )
// Lists all activity log entries.
// ─────────────────────────────────────────

import type { Metadata } from "next";
import Link from "next/link";
import { getAllLogs } from "@/lib/logs";
import LogCard from "@/components/LogCard";
import Pagination from "@/components/Pagination";

export const metadata: Metadata = {
  title: "Logs",
  description: "Weekly activity logs — what I'm building and learning.",
};

export default async function LogsIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; sort?: string }>;
}) {
  const { page, sort } = await searchParams;
  const currentSort = sort || "newest";
  const logs = getAllLogs();

  // Sorting logic
  const sortedLogs = [...logs].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return currentSort === "oldest" ? dateA - dateB : dateB - dateA;
  });

  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(sortedLogs.length / itemsPerPage);
  const paginatedLogs = sortedLogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

      {/* Premium Sorting UI */}
      <div className="flex justify-between items-end mb-8 pb-4 border-b border-white/5">
        <span className="text-[10px] font-mono text-[var(--color-muted)] uppercase tracking-[0.2em]">
          Showing {paginatedLogs.length} of {logs.length} entries
        </span>
        
        <div className="flex gap-4 items-center">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Sort:</span>
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
            <Link 
              href={`/logs?page=1&sort=newest`}
              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-md transition-all ${currentSort === 'newest' ? 'bg-[var(--color-accent)] text-black font-bold shadow-[0_0_15px_rgba(200,251,87,0.3)]' : 'text-white/40 hover:text-white'}`}
            >
              Newest
            </Link>
            <Link 
              href={`/logs?page=1&sort=oldest`}
              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-md transition-all ${currentSort === 'oldest' ? 'bg-[var(--color-accent)] text-black font-bold shadow-[0_0_15px_rgba(200,251,87,0.3)]' : 'text-white/40 hover:text-white'}`}
            >
              Oldest
            </Link>
          </div>
        </div>
      </div>

      {/* Log list */}
      {logs.length === 0 ? (
        <p style={{ color: "var(--color-muted)" }}>No logs yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {paginatedLogs.map((log) => (
            <LogCard key={log.slug} log={log} />
          ))}
        </div>
      )}

      {/* Premium Pagination at the bottom */}
      {logs.length > itemsPerPage && (
        <div className="mt-12">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
