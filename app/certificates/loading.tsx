export default function CertificatesLoading() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-0 pb-20 md:pt-0 md:pb-28 md:-mt-16">
      <div className="animate-pulse">
        <div className="h-3 w-32 rounded bg-white/10" />
        <div className="mt-4 h-12 w-64 rounded bg-white/10" />
        <div className="mt-4 h-5 w-full max-w-xl rounded bg-white/10" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="h-72 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/[0.03]" />
          ))}
        </div>
      </div>
    </main>
  );
}