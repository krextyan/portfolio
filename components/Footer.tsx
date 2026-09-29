// components/Footer.tsx
// ─────────────────────────────────────────
// Simple footer with links and copyright.
// ─────────────────────────────────────────

import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Build", href: "/build" },
  { label: "Certificates", href: "/certificates" },
  { label: "Insights", href: "/insights" },
  { label: "Logs", href: "/logs" },
  { label: "About Me", href: "/about" },
  { label: "Contact Me", href: "/feedback" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        color: "var(--color-muted)",
        fontFamily: "var(--font-body)",
      }}
      className="relative mt-20 overflow-hidden border-t border-[var(--color-border)] bg-[rgba(4,9,7,0.58)] py-12 backdrop-blur-xl md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 border-b border-[var(--color-border)] pb-10 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:gap-16">
          <div>
            <Link href="/" className="section-heading text-2xl font-semibold tracking-tight text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]">
              <span className="text-[var(--color-accent)]">X</span>&apos;s Portfolio
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              Practical technology, organized systems, and thoughtful digital solutions for people and teams.
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
              Available for opportunities
            </div>
            <div className="mt-6 space-y-2 border-t border-[var(--color-border)] pt-5 text-xs leading-relaxed text-[var(--color-muted)]">
              <a href="mailto:christianlapena.work@gmail.com" className="block transition-colors hover:text-[var(--color-accent)]">christianlapena.work@gmail.com</a>
              <a href="tel:+639388619791" className="block transition-colors hover:text-[var(--color-accent)]">(+63) 938-861-9791</a>
              <p>San Antonio-Arzadon, San Manuel, Pangasinan, Philippines, 2438</p>
              <a href="https://krextyan-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-[var(--color-accent)]">krextyan-portfolio.vercel.app</a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-subtle)]">Navigate</p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-subtle)]">Connect</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">Let&apos;s build something useful.</p>
            <div className="mt-4 flex gap-4 items-center">
          <a
            href="https://github.com/krextyan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:brightness-125 hover:shadow-[0_0_20px_rgba(185,243,107,0.2)] rounded-full p-1"
            style={{ color: "var(--color-muted)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest font-bold text-[var(--color-accent)] pointer-events-none whitespace-nowrap">
              GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/christian-lapeña-7a6874286"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:brightness-125 hover:shadow-[0_0_20px_rgba(185,243,107,0.2)] rounded-full p-1"
            style={{ color: "var(--color-muted)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest font-bold text-[var(--color-accent)] pointer-events-none whitespace-nowrap">
              LinkedIn
            </span>
          </a>

          <a
            href="mailto:christianlapena.work@gmail.com"
            aria-label="Email"
            className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:brightness-125 hover:shadow-[0_0_20px_rgba(185,243,107,0.2)] rounded-full p-1"
            style={{ color: "var(--color-muted)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest font-bold text-[var(--color-accent)] pointer-events-none whitespace-nowrap">
              Email
            </span>
          </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs text-[var(--color-subtle)] sm:flex-row sm:items-center">
          <p>© {year} Christian Lapeña. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


