import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Technology, support, and digital organization services for people and teams.",
};

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Responsive, practical websites designed to communicate clearly and work reliably across devices.",
    deliverables: ["Business and portfolio websites", "Responsive page layouts", "Content and basic code updates"],
  },
  {
    number: "02",
    title: "Mobile Applications",
    description: "Useful mobile experiences that turn real workflows into simple, accessible digital tools.",
    deliverables: ["Flutter application development", "Authentication and cloud data", "Feature testing and refinement"],
  },
  {
    number: "03",
    title: "IT Support & Systems",
    description: "Dependable technical support for everyday tools, systems, connectivity, and troubleshooting needs.",
    deliverables: ["Technical issue diagnosis", "Basic system and network support", "User-focused setup and guidance"],
  },
  {
    number: "04",
    title: "Website Maintenance",
    description: "Ongoing updates that keep website content accurate, organized, and aligned with changing needs.",
    deliverables: ["WordPress content updates", "Layout and information changes", "Basic maintenance and checks"],
  },
  {
    number: "05",
    title: "Documentation & Records",
    description: "Clear, structured documentation that helps projects, teams, and daily operations stay organized.",
    deliverables: ["Technical and project documentation", "Reports, proposals, and manuscripts", "Digital file and record organization"],
  },
  {
    number: "06",
    title: "UI/UX & Digital Tools",
    description: "Thoughtful interface direction and lightweight digital tools built around the people who use them.",
    deliverables: ["Wireframes and interface planning", "Figma-based design support", "Workflow and usability improvements"],
  },
];

const processSteps = [
  { number: "01", title: "Understand", description: "We clarify the goal, audience, current workflow, and most important requirements." },
  { number: "02", title: "Plan", description: "I shape a practical direction, define the deliverables, and identify the right tools." },
  { number: "03", title: "Build", description: "The solution is developed with clear communication, organized progress, and useful iterations." },
  { number: "04", title: "Refine", description: "We test, review, and improve the result so it is ready to use and easier to maintain." },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-0 md:-mt-16 md:pb-28">
      <header className="max-w-3xl pb-14 md:pb-20">
        <p className="page-kicker mb-3">Services / 001</p>
        <h1 className="page-title">
          Technology that helps work move forward.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          I help individuals, small teams, and growing organizations build useful digital tools, keep systems organized, and solve practical technology needs with clarity.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button label="Start a conversation" href="/feedback" variant="primary" />
          <Button label="View selected work" href="/work" variant="ghost" />
        </div>
      </header>

      <section aria-labelledby="services-heading">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="page-kicker mb-2">What I can help with</p>
            <h2 id="services-heading" className="section-heading text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
              Practical services
            </h2>
          </div>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-subtle)] sm:block">
            Built around your workflow
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="glass-card backdrop-blur-xl group flex h-full flex-col rounded-[var(--radius-lg)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)] md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="font-mono text-sm"
                  style={{ color: "var(--color-accent)" }}
                >
                  {service.number}
                </span>
                <span className="h-px w-12 bg-[var(--color-border-strong)] transition-all duration-500 group-hover:w-20 group-hover:bg-[var(--color-accent)]" />
              </div>
              <h3 className="section-heading mt-8 text-xl font-semibold text-[var(--color-text)]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{service.description}</p>
              <div className="mt-6 border-t border-[var(--color-border)] pt-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--color-subtle)]">Typical deliverables</p>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3 text-sm text-[var(--color-muted)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-[var(--color-border)] pt-12 md:mt-24 md:pt-16" aria-labelledby="process-heading">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="page-kicker mb-3">Process / 002</p>
            <h2 id="process-heading" className="section-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">
              Clear from first conversation to final handoff.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              Every project starts with the real need, then moves through a focused process that keeps decisions visible and progress practical.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.number} className="border-l border-[var(--color-border-strong)] pl-5">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--color-accent)" }}
                >
                  {step.number}
                </span>
                <h3 className="section-heading mt-2 text-lg font-semibold text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[rgba(15,25,19,0.5)] p-7 backdrop-blur-xl md:flex-row md:items-center md:p-10">
        <div>
          <p className="page-kicker mb-2">Have a project in mind?</p>
          <h2 className="section-heading text-2xl font-semibold text-[var(--color-text)] md:text-3xl">Let&apos;s make the next step useful.</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">Share what you are trying to build, improve, or organize. We can start with the problem and shape the right solution from there.</p>
        </div>
        <Button label="Contact me" href="/feedback" variant="primary" />
      </section>
    </main>
  );
}
