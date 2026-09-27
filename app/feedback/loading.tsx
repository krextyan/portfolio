export default function FeedbackLoading() {
  return (
    <main className="mx-auto flex max-w-3xl animate-pulse flex-col gap-12 px-6 py-20 md:py-28">
      <header className="space-y-4"><div className="h-12 w-48 rounded bg-[var(--color-border)]" /><div className="h-5 w-full max-w-xl rounded bg-[var(--color-border)]" /></header>
      <div className="h-[34rem] rounded-[var(--radius-lg)] bg-[var(--color-border)]" />
    </main>
  );
}
