export default function Loading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-20 pt-0 md:-mt-16 md:pb-28">
      {/* Hero Section Skeleton */}
      <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.08fr_0.92fr] md:gap-14">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="h-4 w-32 bg-[var(--color-border)] rounded-full"></div>
          <div className="space-y-3">
            <div className="h-12 w-3/4 rounded-lg bg-[var(--color-border)]"></div>
            <div className="h-12 w-1/2 rounded-lg bg-[var(--color-border)]"></div>
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
        <div className="order-1 flex flex-col gap-4 md:order-2">
          <div className="h-24 rounded-[var(--radius-md)] bg-[var(--color-border)]"></div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => <div key={item} className="aspect-square rounded-[var(--radius-md)] bg-[var(--color-border)]" />)}
          </div>
        </div>
      </section>

      {/* Featured Projects Skeleton */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-48 bg-[var(--color-border)] rounded"></div>
          <div className="h-4 w-20 bg-[var(--color-border)] rounded"></div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => <div key={item} className="h-64 rounded-xl bg-[var(--color-border)]" />)}
        </div>
      </section>

      {/* Recent Logs Skeleton */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-40 bg-[var(--color-border)] rounded"></div>
          <div className="h-4 w-20 bg-[var(--color-border)] rounded"></div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => <div key={item} className="h-36 rounded-xl bg-[var(--color-border)]" />)}
        </div>
      </section>
    </div>
  );
}