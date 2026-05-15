export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-24 animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="h-4 w-32 bg-[var(--color-border)] rounded"></div>
          <div className="space-y-3">
            <div className="h-12 w-3/4 bg-[var(--color-border)] rounded-lg"></div>
            <div className="h-12 w-1/2 bg-[var(--color-border)] rounded-lg"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-[var(--color-border)] rounded"></div>
            <div className="h-4 w-5/6 bg-[var(--color-border)] rounded"></div>
          </div>
          <div className="flex gap-3 pt-2">
            <div className="h-10 w-32 bg-[var(--color-border)] rounded-md"></div>
            <div className="h-10 w-32 bg-[var(--color-border)] rounded-md"></div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-64 bg-[var(--color-border)] rounded-full"></div>
        </div>
      </section>

      {/* Featured Projects Skeleton */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-48 bg-[var(--color-border)] rounded"></div>
          <div className="h-4 w-20 bg-[var(--color-border)] rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-64 bg-[var(--color-border)] rounded-xl"></div>
          <div className="h-64 bg-[var(--color-border)] rounded-xl"></div>
        </div>
      </section>

      {/* Recent Logs Skeleton */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-40 bg-[var(--color-border)] rounded"></div>
          <div className="h-4 w-20 bg-[var(--color-border)] rounded"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-24 bg-[var(--color-border)] rounded-xl"></div>
          <div className="h-24 bg-[var(--color-border)] rounded-xl"></div>
        </div>
      </section>
    </div>
  );
}