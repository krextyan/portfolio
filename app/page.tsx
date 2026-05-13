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
import { getFeaturedProjects } from "@/lib/projects";
import { getAllLogs } from "@/lib/logs";
import ProjectCard from "@/components/ProjectCard";
import LogCard from "@/components/LogCard";
import Button from "@/components/Button";
import RobotChat from "@/components/RobotChat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Full-stack developer portfolio — projects, logs, and more.",
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(2);
  // Show only the 2 most recent logs on the home page
  const recentLogs = getAllLogs().slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Christian Lapeña",
    "alternateName": "itchan",
    "url": "https://krextyan-portfolio.vercel.app/",
    "jobTitle": "Software Developer",
    "sameAs": [
      "https://github.com/krextyan",
      "https://linkedin.com/in/your-profile"
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-24">
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
      `}} />

      {/* ── Section 1: Hero ──────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          {/* Subtle label above the name */}
          <div
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
            <div className="flex flex-col animate-text-carousel self-start">
              <span style={{ height: "1.2rem" }} className="flex items-center font-bold whitespace-nowrap">Software</span>
              <span style={{ height: "1.2rem" }} className="flex items-center font-bold whitespace-nowrap">Web</span>
              <span style={{ height: "1.2rem" }} className="flex items-center font-bold whitespace-nowrap">Mobile</span>
              <span style={{ height: "1.2rem" }} className="flex items-center font-bold">UI/UX</span>
              <span style={{ height: "1.2rem" }} className="flex items-center font-bold">Software</span>
            </div>
            <span className="ml-1.5"> Developer</span>
          </div>

          {/* Main headline */}
          <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
                color: "var(--color-text)",
              }}
            >
              <span className="whitespace-nowrap">
                Hi, I&apos;m{" "}
                <span className="animate-gradient-text">Christian</span>
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
            I specialize in full-stack web and mobile development — from backend
            APIs to polished UIs. I care about clean code, great UX, and shipping
            things that actually work.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3 flex-wrap pt-2">
            <Button label="See my work →" href="/work" variant="primary" />
            <Button label="Read my logs" href="/logs" variant="ghost" />
          </div>
        </div>

        {/* Right side: Floating image */}
        <div className="order-1 md:order-2">
          <RobotChat />
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
              fontFamily: "'Poppins', sans-serif",
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

        {/* 2-column grid on desktop, 1-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* ── Section 3: Recent Logs ───────────────── */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
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

        <div className="flex flex-col gap-3">
          {recentLogs.map((log) => (
            <LogCard key={log.slug} log={log} />
          ))}
        </div>
      </section>

      {/* ── Section 4: Feedback CTA ────────── */}
      <section className="flex flex-col items-center py-10 border-t border-[var(--color-border)]">
        <p style={{ color: "var(--color-muted)", fontSize: "1.1rem" }}>
          What do you think of my portfolio?{" "}
          <Link href="/feedback" className="text-[var(--color-accent)] hover:underline transition-all font-medium">
            Send feedback
          </Link>
        </p>
      </section>
    </div>
  );
}
