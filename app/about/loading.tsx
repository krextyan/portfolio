export default function AboutLoading() {
  return (
    <main className="mx-auto max-w-6xl animate-pulse px-6 pb-20 pt-0 md:-mt-16 md:pb-28">
      <div className="mb-10 space-y-4">
        <div className="h-3 w-32 rounded bg-[var(--color-border)]" />
        <div className="h-12 w-56 rounded bg-[var(--color-border)]" />
        <div className="h-5 w-full max-w-2xl rounded bg-[var(--color-border)]" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="h-96 rounded-[var(--radius-lg)] bg-[var(--color-border)]" />
        <div className="space-y-6">
          <div className="h-48 rounded-[var(--radius-lg)] bg-[var(--color-border)]" />
          <div className="grid gap-3 sm:grid-cols-3">{[1, 2, 3].map((item) => <div key={item} className="h-32 rounded-[var(--radius-md)] bg-[var(--color-border)]" />)}</div>
        </div>
      </div>
      <div className="mt-16 grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="space-y-5">{[1, 2].map((item) => <div key={item} className="h-80 rounded-[var(--radius-lg)] bg-[var(--color-border)]" />)}</div>
        <div className="space-y-5">{[1, 2].map((item) => <div key={item} className="h-64 rounded-[var(--radius-lg)] bg-[var(--color-border)]" />)}</div>
      </div>
    </main>
  );
}
