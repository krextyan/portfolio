"use client";

import { motion } from "framer-motion";

export default function MaintenanceView() {
  const currentYear = new Date().getFullYear();

  return (
    <main
      className="flex-1 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 relative z-10 selection:bg-[var(--color-accent)] selection:text-[#0d0d0f]"
      role="main"
      aria-label="Maintenance Mode"
    >
      {/* Decorative ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full pointer-events-none blur-3xl opacity-20 -z-10"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card backdrop-blur-xl w-full max-w-xl rounded-[var(--radius-md)] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Subtle accent border line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Live status badge */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs tracking-wider uppercase font-medium"
            style={{
              fontFamily: "var(--font-mono)",
              backgroundColor: "var(--color-accent-dim)",
              borderColor: "rgba(200, 251, 87, 0.25)",
              color: "var(--color-accent)",
            }}
            role="status"
            aria-live="polite"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[var(--color-accent)]" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
            </span>
            System Updating
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
            lineHeight: 1.2,
          }}
        >
          Website Under Maintenance
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl font-medium mb-4"
          style={{
            color: "var(--color-accent)",
            fontFamily: "var(--font-body)",
          }}
        >
          I&apos;m currently working on something new for you.
        </p>

        {/* Informational Body Text */}
        <p
          className="text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto"
          style={{
            color: "var(--color-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          The website is temporarily unavailable while I make some updates and improvements. Please come back soon.
        </p>

        {/* Subtle decorative separator */}
        <div
          className="w-16 h-px mx-auto mb-8 opacity-40"
          style={{ backgroundColor: "var(--color-border)" }}
          aria-hidden="true"
        />

        {/* Social / Contact Links for visitors & recruiters */}
        <div className="flex flex-col items-center gap-3">
          <span
            className="text-xs uppercase tracking-wider font-mono"
            style={{ color: "var(--color-muted)" }}
          >
            Need to get in touch?
          </span>

          <div className="flex items-center justify-center gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/krextyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(200,251,87,0.35)]"
              style={{
                color: "var(--color-muted)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--color-border)",
              }}
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(200,251,87,0.35)]"
              style={{
                color: "var(--color-muted)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--color-border)",
              }}
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:krestyanstick25@gmail.com"
              className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(200,251,87,0.35)]"
              style={{
                color: "var(--color-muted)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--color-border)",
              }}
              aria-label="Send Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Subtle Copyright info */}
      <footer className="mt-8 text-xs text-center" style={{ color: "var(--color-muted)" }}>
        © {currentYear} Christian Lapeña.
      </footer>
    </main>
  );
}

