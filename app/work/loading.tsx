export default function Loading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-0 md:-mt-16 md:pb-28 animate-pulse">
      <div className="space-y-4">
        <div className="h-10 w-48 bg-[var(--color-border)] rounded-lg"></div>
        <div className="h-4 w-full max-w-md bg-[var(--color-border)] rounded"></div>
      </div>
      
      <div className="flex flex-col gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="grid min-h-[24rem] grid-cols-1 overflow-hidden rounded-xl bg-[var(--color-border)] md:grid-cols-2" />
        ))}
      </div>
    </div>
  );
}