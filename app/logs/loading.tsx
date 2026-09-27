export default function Loading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-0 md:-mt-16 md:pb-28 animate-pulse">
      <div className="space-y-4">
        <div className="h-10 w-32 bg-[var(--color-border)] rounded-lg"></div>
        <div className="h-4 w-full max-w-xs bg-[var(--color-border)] rounded"></div>
      </div>

      {/* Logs List Skeleton */}
      <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-28 rounded-xl border border-transparent bg-[var(--color-border)]" />
        ))}
      </div>
    </div>
  );
}