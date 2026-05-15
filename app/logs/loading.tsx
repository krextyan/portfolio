export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-10 animate-pulse">
      <div className="space-y-4">
        <div className="h-10 w-32 bg-[var(--color-border)] rounded-lg"></div>
        <div className="h-4 w-full max-w-xs bg-[var(--color-border)] rounded"></div>
      </div>

      {/* Logs List Skeleton */}
      <div className="flex flex-col gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-28 bg-[var(--color-border)] rounded-xl border border-transparent"></div>
        ))}
      </div>
    </div>
  );
}