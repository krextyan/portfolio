import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "How I Build",
  description: "A practical project process from the first idea to a tested and maintainable result.",
};

const buildStages = [
  {
    number: "01",
    phase: "Discover",
    title: "Start with the real problem",
    description: "Before choosing a tool or writing code, I learn what needs to improve, who will use the result, and what a successful outcome should look like.",
    actions: ["Clarify goals and audience", "Understand the current workflow", "Identify constraints and priorities"],
  },
  {
    number: "02",
    phase: "Plan",
    title: "Turn the idea into a direction",
    description: "I organize the requirements into a practical plan so the project can move forward with clear scope, useful milestones, and fewer surprises.",
    actions: ["Define features and deliverables", "Choose the right tools and structure", "Break the work into manageable steps"],
  },
  {
    number: "03",
    phase: "Design",
    title: "Make the experience understandable",
    description: "The interface and workflow should feel clear to the people using it. I shape the information, screens, and interactions before development becomes expensive to change.",
    actions: ["Map screens and user flow", "Create a visual direction", "Review usability and content"],
  },
  {
    number: "04",
    phase: "Build",
    title: "Develop in focused iterations",
    description: "I build the most important path first, keep progress visible, and make technical decisions that support reliability, maintainability, and real use.",
    actions: ["Implement core features", "Connect data and services", "Keep code and project files organized"],
  },
  {
    number: "05",
    phase: "Validate",
    title: "Test what was built",
    description: "A project is not finished when it only works in one scenario. I test key flows, check edge cases, fix issues, and use feedback to improve the result.",
    actions: ["Test features and user flows", "Debug and resolve issues", "Validate against the original goals"],
  },
  {
    number: "06",
    phase: "Launch & Improve",
    title: "Deliver something ready to use",
    description: "I prepare the final handoff, explain how the solution works, and keep future improvements in mind so the project can grow without losing clarity.",
    actions: ["Prepare the final version", "Document important decisions", "Identify useful next improvements"],
  },
];

const principles = [
  { label: "Clarity", text: "Make the goal, scope, and next step easy to understand." },
  { label: "Reliability", text: "Build carefully, test the important paths, and fix the details that matter." },
  { label: "Practicality", text: "Choose solutions that fit the people, resources, and workflow involved." },
];

export default function BuildPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-0 md:-mt-16 md:pb-28">
      <header className="max-w-3xl pb-14 md:pb-20">
        <p className="page-kicker mb-3">Build / 001</p>
        <h1 className="page-title">
          From first idea to a useful result.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          Every project starts with understanding. This is the practical process I use to turn a problem or idea into a clear, tested, and maintainable digital solution.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button label="View my work" href="/work" variant="primary" />
          <Button label="See my services" href="/services" variant="ghost" />
        </div>
      </header>

      <section aria-labelledby="process-heading">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="page-kicker mb-2">The process / 002</p>
            <h2 id="process-heading" className="section-heading text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
              How I approach a project
            </h2>
          </div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-subtle)]">01 - 06 / project flow</span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {buildStages.map((stage) => (
            <article key={stage.number} className="glass-card backdrop-blur-xl group flex h-full flex-col rounded-[var(--radius-lg)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)] md:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>{stage.number}</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">{stage.phase}</span>
              </div>
              <h3 className="section-heading mt-8 text-xl font-semibold leading-tight text-[var(--color-text)]">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{stage.description}</p>
              <ul className="mt-auto space-y-2 border-t border-[var(--color-border)] pt-5">
                {stage.actions.map((action) => (
                  <li key={action} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-[var(--color-border)] pt-12 md:mt-24 md:pt-16" aria-labelledby="principles-heading">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="page-kicker mb-3">Principles / 003</p>
            <h2 id="principles-heading" className="section-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">What guides the work.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.label} className="border-l border-[var(--color-border-strong)] pl-5">
                <h3 className="section-heading text-lg font-semibold text-[var(--color-text)]">{principle.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[rgba(15,25,19,0.5)] p-7 backdrop-blur-xl md:flex-row md:items-center md:p-10">
        <div>
          <p className="page-kicker mb-2">Ready to build?</p>
          <h2 className="section-heading text-2xl font-semibold text-[var(--color-text)] md:text-3xl">Bring the problem. We&apos;ll shape the next step.</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">A strong project does not need to begin with perfect answers. It needs a clear starting point and a process that keeps learning visible.</p>
        </div>
        <Link href="/feedback" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[#071009] transition-transform hover:-translate-y-0.5 hover:brightness-110">
          Start a conversation <span aria-hidden="true">-&gt;</span>
        </Link>
      </section>
    </main>
  );
}
