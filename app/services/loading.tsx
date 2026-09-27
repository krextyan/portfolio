export default function ServicesLoading() {
  return (
    <main className="mx-auto max-w-6xl animate-pulse px-6 pb-20 pt-0 md:-mt-16 md:pb-28">
      <header className="max-w-3xl space-y-4 pb-14 md:pb-20">
        <div className="h-3 w-32 rounded bg-[var(--color-border)]" />
        <div className="h-16 w-full max-w-2xl rounded bg-[var(--color-border)]" />
        <div className="h-12 w-full max-w-xl rounded bg-[var(--color-border)]" />
        <div className="flex gap-3 pt-3"><div className="h-10 w-36 rounded-full bg-[var(--color-border)]" /><div className="h-10 w-32 rounded-full bg-[var(--color-border)]" /></div>
      </header>
      <div className="mb-7 h-8 w-64 rounded bg-[var(--color-border)]" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="h-80 rounded-[var(--radius-lg)] bg-[var(--color-border)]" />)}</div>
      <div className="mt-20 grid gap-10 border-t border-[var(--color-border)] pt-12 lg:grid-cols-[0.8fr_1.2fr]"><div className="h-40 rounded bg-[var(--color-border)]" /><div className="grid gap-4 sm:grid-cols-2">{[1, 2, 3, 4].map((item) => <div key={item} className="h-28 rounded bg-[var(--color-border)]" />)}</div></div>
    </main>
  );
}
