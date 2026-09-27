// app/page.tsx
// ─────────────────────────────────────────
// Home page ( / )
// Sections:
//   1. Hero — name + intro
//   2. Featured projects (first 2 from JSON)
//   3. Recent logs preview
// ─────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";
import { getAllLogs } from "@/lib/logs";
import ProjectCard from "@/components/ProjectCard";
import LogCard from "@/components/LogCard";
import Button from "@/components/Button";
import HeroStats from "@/components/HeroStats";
import type { Metadata } from "next";

const TOOL_ICON_SLUGS: Record<string, string> = {
  WordPress: "wordpress",
  HTML: "html5",
  JavaScript: "javascript",
  React: "react",
  Typescript: "typescript",
  Solidity: "solidity",
  "Web3.js": "web3dotjs",
  Vercel: "vercel",
  Ethereum: "ethereum",
  Figma: "figma",
  Flutter: "flutter",
  MongoDB: "mongodb",
  MySQL: "mysql",
  Unity: "unity",
  Git: "git",
  GitHub: "github",
  Supabase: "supabase",
  Firebase: "firebase",
  "Node.js": "nodedotjs",
  "Tailwind CSS": "tailwindcss",
  "Next.js": "nextdotjs",
};

export const metadata: Metadata = {
  title: "Home",
  description: "IT and software professional portfolio — digital tools, support, and practical solutions.",
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(3);
  const tools = Array.from(new Set([
    ...getAllProjects().flatMap((project) => project.techStack),
    "MySQL",
    "Unity",
    "Git",
    "GitHub",
  ]))
    .filter((tool) => tool !== "CSS");
  // Show only the 3 most recent logs on the home page
  const recentLogs = getAllLogs().slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Christian Lapena",
    "alternateName": "itchan",
    "url": "https://krextyan-portfolio.vercel.app/",
    "jobTitle": "IT and Software Professional",
    "sameAs": [
      "https://github.com/krextyan",
      "https://linkedin.com/in/your-profile"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-0 pb-20 md:pt-0 md:pb-28 md:-mt-16 flex flex-col gap-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) rotate(2deg) scale(1.02); }
        }
        @keyframes shadow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(0.7); opacity: 0.1; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-shadow {
          animation: shadow 5s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1.2); opacity: 0.3; }
          50% { transform: scale(0.7); opacity: 0; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 5s ease-in-out infinite;
        }
        @keyframes bounce-down {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(8px); }
          60% { transform: translateY(4px); }
        }
        .animate-bounce-down {
          animation: bounce-down 2s infinite;
        }
        @keyframes text-carousel {
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-20%); }
          50%, 70% { transform: translateY(-40%); }
          75%, 95% { transform: translateY(-60%); }
          100% { transform: translateY(-80%); }
        }
        .animate-text-carousel {
          animation: text-carousel 10s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background: linear-gradient(
            to right,
            var(--color-accent),
            #fb923c,
            #f87171,
            var(--color-accent)
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s linear infinite;
        }
        @keyframes highlight-wipe {
          from { background-size: 0% 100%; }
          to { background-size: 100% 100%; }
        }
        .animate-wipe-highlight {
          background-image: linear-gradient(to right, rgba(72, 255, 109, 0.25), rgba(32, 126, 185, 0.25));
          background-repeat: no-repeat;
          background-size: 0% 100%;
          background-position: 0 100%;
          animation: highlight-wipe 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1.5s; /* Mag-wait muna bago mag-wipe para mapansin ng user */
        }
        @keyframes tool-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tool-marquee-track {
          animation: tool-marquee 32s linear infinite;
        }
        .tool-marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* ── Section 1: Hero ──────────────────────── */}
      <section className="hero-section grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-10 md:gap-14 items-center">
        <div className="flex flex-col gap-5 order-2 md:order-1">
          {/* Subtle label above the name */}
          <div
            className="hero-role-label"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              height: "1.2rem", // Fixed height to match spans
              overflow: "hidden",
              lineHeight: "1.2rem",
            }}
          >
            <span className="mr-1.5 whitespace-nowrap">I am a </span>
            <div className="h-[1.2rem] shrink-0 overflow-hidden">
              <div className="flex flex-col animate-text-carousel self-start">
                <span style={{ height: "1.2rem" }} className="flex items-center font-bold whitespace-nowrap">Software</span>
                <span style={{ height: "1.2rem" }} className="flex items-center font-bold whitespace-nowrap">Web</span>
                <span style={{ height: "1.2rem" }} className="flex items-center font-bold whitespace-nowrap">Mobile</span>
                <span style={{ height: "1.2rem" }} className="flex items-center font-bold">UI/UX</span>
                <span style={{ height: "1.2rem" }} className="flex items-center font-bold">Software</span>
              </div>
            </div>
            <span className="ml-1.5"> Developer</span>
            
          </div>

          {/* Main headline */}
          <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
                color: "var(--color-text)",
              }}
            >
              <span>
                Hi, I&apos;m{" "}
                <span className="brick-name" aria-label="Christian">
                  {Array.from("Christian").map((letter, index) => (
                    <span key={index} aria-hidden="true" className="brick-name__letter">{letter}</span>
                  ))}
                </span>
              </span>

              <br />

              <span>
                I bring ideas to life through{" "}
                <span className="whitespace-nowrap animate-wipe-highlight">
                  code & design.
                </span>
              </span>
            </h1>

          {/* Short intro paragraph */}
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            I combine software development, IT support, and administrative skills to build useful tools, manage systems, organize information, and help teams work efficiently. I value clear communication, attention to detail, and practical solutions.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3 flex-wrap pt-2">
            <Button label="See my work →" href="/work" variant="primary" />
            <Button label="Read my logs" href="/logs" variant="ghost" />
          </div>
        </div>

        {/* Right side: Professional snapshot */}
        <div className="order-1 md:order-2">
          <HeroStats />
        </div>
      </section>

      {/* ── Scroll Indicator ─────────────────────── */}
      <div className="flex flex-col items-center gap-2 -mt-12 opacity-50 hover:opacity-100 transition-opacity cursor-default hidden md:flex">
        <span 
          style={{ 
            fontFamily: "var(--font-mono)", 
            fontSize: "0.65rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em",
            color: "var(--color-muted)"
          }}
        >
          Explore My Work
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent animate-bounce-down" />
      </div>

      {/* ── Section 2: Featured Projects ─────────── */}
      <section className="flex flex-col gap-6">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "1.6rem",
              color: "var(--color-text)",
            }}
          >
            Featured Work
          </h2>
          <Link
            href="/work"
            style={{ color: "var(--color-muted)", fontSize: "0.875rem" }}
            className="hover:opacity-70 transition-opacity"
          >
            View all →
          </Link>
        </div>

        {/* 3-column grid on desktop, 1-column on mobile */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
      </section>

      {/* ── Section 4: Recent Logs ───────────────── */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "1.6rem",
              color: "var(--color-text)",
            }}
          >
            Recent Logs
          </h2>
          <Link
            href="/logs"
            style={{ color: "var(--color-muted)", fontSize: "0.875rem" }}
            className="hover:opacity-70 transition-opacity"
          >
            All logs →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {recentLogs.map((log) => (
            <LogCard key={log.slug} log={log} glow />
          ))}
        </div>

        <Link
          href="/work"
          className="group mx-auto inline-flex items-center gap-3 border-b border-[var(--color-border)] pb-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <span>Explore all work</span>
          <span className="text-base text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-1.5">-&gt;</span>
        </Link>
      </section>

      {/* ── Section 3: Tools Marquee ─────────────── */}
      <section className="flex flex-col gap-5 overflow-hidden" aria-labelledby="tools-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="page-kicker mb-2">Toolbox</p>
            <h2
              id="tools-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1.6rem",
                color: "var(--color-text)",
              }}
            >
              Tools I work with
            </h2>
          </div>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)] sm:block">
            Selected from my projects
          </span>
        </div>

        <div
          className="relative overflow-hidden py-5"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 9%, black 91%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 9%, black 91%, transparent)",
          }}
        >
          <div className="tool-marquee-track flex w-max gap-3" style={{ willChange: "transform" }}>
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool}-${index}`}
                aria-hidden={index >= tools.length}
                className="group flex shrink-0 items-center gap-3 rounded-full border border-[var(--color-border)] bg-black/15 px-5 py-3 text-base font-medium text-[var(--color-muted)] backdrop-blur-xl transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
              >
                <img
                  src={`https://cdn.simpleicons.org/${TOOL_ICON_SLUGS[tool] ?? "code"}/b9f36b`}
                  alt=""
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="whitespace-nowrap">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Feedback CTA ────────── */}
      <section className="flex flex-col items-center py-10 border-t border-[var(--color-border)]">
        <p style={{ color: "var(--color-muted)", fontSize: "1.1rem" }}>
          What do you think of my portfolio?{" "}
          <Link href="/feedback" className="text-[var(--color-accent)] hover:underline transition-all font-medium">
            I’d love to hear your feedback!
          </Link>
        </p>
      </section>
    </div>
  );
}
