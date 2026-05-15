export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-12 animate-pulse">
      <div className="space-y-4">
        <div className="h-10 w-48 bg-[var(--color-border)] rounded-lg"></div>
        <div className="h-4 w-full max-w-md bg-[var(--color-border)] rounded"></div>
      </div>
      
      {/* Project Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-72 bg-[var(--color-border)] rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}