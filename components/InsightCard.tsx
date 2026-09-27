import Link from "next/link";
import type { Insight } from "@/lib/types";

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  const formattedDate = new Date(insight.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="glass-card backdrop-blur-xl flex h-full flex-col rounded-[var(--radius-lg)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)] md:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-accent)]">
          {insight.category}
        </span>
        <time dateTime={insight.date} className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">
          {formattedDate}
        </time>
      </div>

      <h2 className="section-heading mt-6 text-xl font-semibold leading-tight text-[var(--color-text)]">
        {insight.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{insight.excerpt}</p>

      {insight.body && (
        <p className="mt-4 whitespace-pre-line border-l border-[var(--color-border-strong)] pl-4 text-sm leading-relaxed text-[var(--color-muted)]">
          {insight.body}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-[var(--color-border)] pt-5">
        {insight.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-[var(--color-border)] bg-black/15 px-2.5 py-1 font-mono text-[0.62rem] text-[var(--color-muted)]">
            {tag}
          </span>
        ))}
        {insight.projectUrl && (
          <Link href={insight.projectUrl} className="ml-auto font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-accent)] transition-opacity hover:opacity-70">
            View project -&gt;
          </Link>
        )}
      </div>
    </article>
  );
}
