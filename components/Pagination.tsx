// components/Pagination.tsx
// ─────────────────────────────────────────
// Premium pagination component for Logs.
// ─────────────────────────────────────────

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const renderLink = (page: number, label: string | number, isActive = false, isDisabled = false) => {
    if (isDisabled) {
      return (
        <span 
          key={label}
          className="px-4 py-2 text-[10px] font-mono text-white/20 border border-white/5 rounded-md cursor-not-allowed opacity-40 uppercase tracking-widest"
        >
          {label}
        </span>
      );
    }

    return (
      <Link
        key={label}
        href={`/logs?page=${page}`}
        className={`
          px-4 py-2 text-[10px] font-mono rounded-md border transition-all duration-300 uppercase tracking-widest
          ${isActive 
            ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[rgba(200,251,87,0.05)] shadow-[0_0_20px_rgba(200,251,87,0.15)]" 
            : "border-white/10 text-white/50 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-white/5"
          }
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="flex items-center justify-between w-full mb-10 pb-8 border-b border-white/5">
      {/* Navigation Controls */}
      <div className="flex gap-2">
        {renderLink(currentPage - 1, "Prev", false, currentPage === 1)}
        {renderLink(currentPage + 1, "Next", false, currentPage === totalPages)}
      </div>

      {/* Page Indicators */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => 
          renderLink(num, num, num === currentPage)
        )}
      </div>
    </nav>
  );
}