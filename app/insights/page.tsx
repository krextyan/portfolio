import type { Metadata } from "next";
import Link from "next/link";
import InsightCard from "@/components/InsightCard";
import { getAllInsightCategories, getAllInsightTags, getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes, lessons, and practical thoughts from building digital projects.",
};

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; tag?: string; sort?: string }>;
}) {
  const { category, tag, sort } = await searchParams;
  const insights = getAllInsights();
  const categories = getAllInsightCategories();
  const tags = getAllInsightTags();
  const currentSort = sort === "oldest" ? "oldest" : "newest";

  const filteredInsights = insights
    .filter((insight) => !category || insight.category === category)
    .filter((insight) => !tag || insight.tags.includes(tag))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return currentSort === "oldest" ? dateA - dateB : dateB - dateA;
    });

  const clearFiltersHref = currentSort === "newest" ? "/insights" : "/insights?sort=oldest";

  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-0 md:-mt-16 md:pb-28">
      <header className="mb-12 max-w-3xl">
        <p className="page-kicker mb-3">Notes / 001</p>
        <h1 className="page-title">Insights</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          Curated thoughts, lessons, and practical observations from building projects, learning new tools, and solving real problems.
        </p>
      </header>

      {insights.length > 0 && (
        <div className="glass-card mb-8 flex flex-col gap-5 rounded-[var(--radius-md)] p-4 backdrop-blur-xl md:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)]">Category</span>
            <FilterLink href="/insights" label="All" active={!category} />
            {categories.map((item) => (
              <FilterLink key={item} href={`/insights?category=${encodeURIComponent(item)}`} label={item} active={category === item} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)]">Tag</span>
            <FilterLink href="/insights" label="All" active={!tag} />
            {tags.map((item) => (
              <FilterLink key={item} href={`/insights?tag=${encodeURIComponent(item)}`} label={item} active={tag === item} />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
              Showing {filteredInsights.length} of {insights.length} notes
            </span>
            <div className="flex items-center gap-2">
              <Link href={`/insights?${category ? `category=${encodeURIComponent(category)}&` : ""}${tag ? `tag=${encodeURIComponent(tag)}&` : ""}sort=newest`} className={`rounded-md px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider transition-all ${currentSort === "newest" ? "bg-[var(--color-accent)] text-black" : "text-[var(--color-muted)] hover:text-[var(--color-text)]"}`}>Newest</Link>
              <Link href={`/insights?${category ? `category=${encodeURIComponent(category)}&` : ""}${tag ? `tag=${encodeURIComponent(tag)}&` : ""}sort=oldest`} className={`rounded-md px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider transition-all ${currentSort === "oldest" ? "bg-[var(--color-accent)] text-black" : "text-[var(--color-muted)] hover:text-[var(--color-text)]"}`}>Oldest</Link>
            </div>
          </div>
        </div>
      )}

      {filteredInsights.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredInsights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-[var(--radius-lg)] px-6 py-16 text-center backdrop-blur-xl md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">Insight archive / empty</p>
          <h2 className="section-heading mt-3 text-2xl font-semibold text-[var(--color-text)]">No insights added yet</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
            {/* Add insight records to <span className="text-[var(--color-text)]">data/insights.json</span> and they will appear here automatically. */}
          </p>
          {(category || tag) && (
            <Link href={clearFiltersHref} className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:opacity-70">
              Clear filters -&gt;
            </Link>
          )}
        </div>
      )}
    </main>
  );
}

function FilterLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-3 py-1.5 font-mono text-[0.65rem] transition-all ${active ? "border-[var(--color-accent)] bg-[var(--color-accent-dim)] text-[var(--color-accent)]" : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"}`}
    >
      {label}
    </Link>
  );
}
