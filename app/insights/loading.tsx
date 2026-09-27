export default function InsightsLoading() {
  return (
    <main className="mx-auto max-w-6xl animate-pulse px-6 pb-20 pt-0 md:-mt-16 md:pb-28">
      <header className="mb-12 max-w-3xl space-y-4"><div className="h-3 w-28 rounded bg-[var(--color-border)]" /><div className="h-12 w-48 rounded bg-[var(--color-border)]" /><div className="h-10 w-full max-w-2xl rounded bg-[var(--color-border)]" /></header>
      <div className="mb-8 h-32 rounded-[var(--radius-md)] bg-[var(--color-border)]" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="h-72 rounded-[var(--radius-lg)] bg-[var(--color-border)]" />)}</div>
    </main>
  );
}
