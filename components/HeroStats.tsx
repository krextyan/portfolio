export default function HeroStats() {
  return (
    <div className="hero-stats-panel" aria-label="Professional highlights">
      <div className="hero-stats-heading">
        <span className="page-kicker">A quick snapshot</span>
        <p>Built with intention, shipped with care.</p>
      </div>

      <a
        href="https://github.com/krextyan"
        target="_blank"
        rel="noopener noreferrer"
        className="snapshot-card glass-card backdrop-blur-xl group block overflow-hidden rounded-[var(--radius-md)] transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]"
        aria-label="View Christian Lapeña's GitHub contributions"
      >
        <div className="flex items-center justify-between gap-3 px-4 pt-4">
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-subtle)]">GitHub contributions</span>
            <p className="mt-1 text-sm font-medium text-[var(--color-text)]">@krextyan</p>
          </div>
          <span className="text-lg text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
        </div>
        <div className="mt-4 overflow-hidden border-y border-[var(--color-border)] bg-[rgba(4,9,7,0.5)] py-3">
          <img
            src="https://ghchart.rshah.org/b9f36b/krextyan"
            alt="GitHub contribution activity for krextyan"
            className="h-auto w-full opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
      </a>

      <div className="hero-stats" aria-label="Professional highlights">
        <div className="snapshot-card hero-stat glass-card backdrop-blur-xl">
          <span className="hero-stat-label">OJT Role</span>
          <strong>3+</strong>
          <span className="hero-stat-note">hands-on experiences</span>
        </div>
        <div className="snapshot-card hero-stat glass-card backdrop-blur-xl">
          <span className="hero-stat-label">Featured Projects</span>
          <strong>7+</strong>
          <span className="hero-stat-note">web, mobile & backend</span>
        </div>
        <div className="snapshot-card hero-stat glass-card backdrop-blur-xl">
          <span className="hero-stat-label">Detail-oriented</span>
          <strong>100%</strong>
          <span className="hero-stat-note">quality in every build</span>
        </div>
      </div>
    </div>
  );
}
