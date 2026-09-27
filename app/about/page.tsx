import Image from 'next/image';
import type { Metadata } from 'next';
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: 'About Me | IT and Software Professional',
  description: 'Profile of an IT and software professional focused on digital tools, support, and organized operations.',
};

const skillGroups = [
  { label: 'Digital', items: 'Websites, mobile interfaces, useful digital tools' },
  { label: 'Support', items: 'IT assistance, networking, troubleshooting' },
  { label: 'Operations', items: 'Records, documentation, organized workflows' },
];

const experienceEntries = [
  {
    type: 'Internship Experience',
    title: 'IT Technical & Documentation Intern',
    organization: 'Innovhub Makerspace OPC',
    period: 'Mapandan, Pangasinan | February 2026 - May 2026',
    role: 'Junior Web and Mobile Developer, Researcher, and Administrative Support',
    description: 'Supported website, system, documentation, and client-focused project work in a collaborative makerspace environment.',
    technologies: ['WordPress', 'Microsoft Excel', 'Microsoft Word', 'Google Workspace', 'Canva', 'Figma'],
    contributions: [
      'Prepared technical documentation, project reports, proposals, manuscripts, and portfolio materials.',
      'Assisted with WordPress website maintenance, content updates, and basic code modifications.',
      'Participated in system testing to verify functionality and identify possible issues.',
      'Managed client information, project data, digital files, and documentation records.',
      'Helped gather client requirements and coordinate discussions for proposed system applications.',
    ],
  },
  {
    type: 'Software Development Project',
    title: 'Workforce Attendance and Payroll Management System',
    organization: 'Mobile and cloud-based employee management system',
    period: '2026',
    role: 'Mobile Application Developer / System Developer',
    description: 'Developed a mobile-based system for employee attendance monitoring, employee information management, and payroll-related processes.',
    technologies: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Authentication', 'Supabase Storage', 'GitHub'],
    contributions: [
      'Built attendance features for time-in/time-out tracking and attendance record management.',
      'Integrated Firestore for employee data, attendance logs, payroll information, and system records.',
      'Implemented authentication, profile image storage, and notifications for payroll and attendance updates.',
      'Assisted with database structures, application data flow, testing, debugging, and feature validation.',
      'Collaborated with team members to improve the system based on project requirements.',
    ],
  },
];

const educationEntries = [
  {
    type: 'Education',
    title: 'Bachelor of Science in Information Technology (BSIT)',
    organization: 'University of Eastern Pangasinan',
    period: 'Graduated: June 2026',
  },
  {
    type: 'Academic Project',
    title: 'CodeQuest: The Programming Adventure',
    organization: 'Capstone Project | 2026',
    period: 'Developer Support, System Testing & Documentation Specialist',
    technologies: ['C#', 'Unity', 'PHP', 'HTML/CSS', 'JavaScript', 'Firebase'],
    contributions: [
      'Assisted in developing and improving game system features based on project requirements.',
      'Performed debugging, system testing, feature validation, and troubleshooting during development.',
      'Collaborated with team members during system development and evaluation.',
      'Prepared and revised manuscript content and formatting based on evaluator feedback.',
      'Contributed to requirements documentation and user-related system documentation.',
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-0 pb-20 md:pt-0 md:pb-28 md:-mt-16">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-glow-color {
          0% { 
            transform: rotate(0deg); 
            filter: drop-shadow(0 0 15px var(--color-accent)) hue-rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg); 
            filter: drop-shadow(0 0 15px var(--color-accent)) hue-rotate(360deg); 
          }
        }
        .animate-spin-glow-color {
          animation: spin-glow-color 3s linear infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 25ch }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: var(--color-accent) }
        }
        .typing-effect {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid var(--color-accent);
          animation: typing 2s steps(20, end), blink-caret 0.75s step-end infinite;
        }
      `}} />

      <header className="mb-10 max-w-3xl">
        <p className="page-kicker mb-3">Profile / 001</p>
        <h1 className="page-title">About Me</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          An IT graduate who combines technical skills, dependable support, and organized execution to help people and teams work better.
        </p>
      </header>

      <section className="grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        {/* Identity panel */}
        <div className="glass-card backdrop-blur-xl rounded-[var(--radius-lg)] p-6 md:p-8">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: "var(--color-accent)" }}>Identity</span>
            <span className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
              Open to work
            </span>
          </div>

          <div className="mb-7 flex items-center gap-5">
            <div className="relative h-24 w-24 shrink-0 flex items-center justify-center">
              <div
                className="absolute -inset-2 rounded-full animate-spin-glow-color"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 20%, var(--color-accent), var(--color-accent))',
                }}
              />
              <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-4 border-[var(--color-surface-raised)]">
                <Image src="/images/profile.jpg" alt="Profile Photo" fill className="object-cover" priority />
              </div>
            </div>
            <div>
              <h2 className="section-heading text-2xl font-bold text-[var(--color-text)]">Christian Lapeña</h2>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">IT &amp; Software Professional</p>
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>Education</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">University of Eastern Pangasinan</p>
              <p className="mt-1 text-sm text-[var(--color-subtle)]">San Manuel, Pangasinan</p>
            </div>
          </div>

          <div className="border-t border-[var(--color-border)] pt-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--color-accent)" }}>Current mode</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Learning fast, supporting people well, and looking for an opportunity where I can contribute through technology, organization, and dependable day-to-day work.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2 border-t border-[var(--color-border)] pt-5">
            <div>
              <strong className="block font-display text-xl" style={{ color: "var(--color-accent)" }}>BSIT</strong>
              <span className="font-mono text-[0.58rem] uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>Degree</span>
            </div>
            <div>
              <strong className="block font-display text-xl" style={{ color: "var(--color-accent)" }}>IT</strong>
              <span className="font-mono text-[0.58rem] uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>Support</span>
            </div>
            <div>
              <strong className="block font-display text-xl" style={{ color: "var(--color-accent)" }}>01</strong>
              <span className="font-mono text-[0.58rem] uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>Focus</span>
            </div>
          </div>
        </div>

        {/* Technical profile */}
        <div className="flex flex-col gap-6">
          <div className="glass-card backdrop-blur-xl rounded-[var(--radius-lg)] p-6 md:p-8">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="section-heading text-xl font-semibold text-[var(--color-text)]">How I work</h2>
              <span className="font-mono text-[0.65rem]" style={{ color: "var(--color-accent)" }}>/ approach</span>
            </div>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">
              I bring together practical IT support, digital tools, and administrative organization. I like understanding the real need first, then providing a solution that is reliable, easy to use, and simple to maintain. My experience spans academic systems, internship work, technical testing, website updates, digital records, and project documentation.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="snapshot-card glass-card backdrop-blur-xl rounded-[var(--radius-md)] p-5 transition-transform duration-300 hover:-translate-y-1">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--color-accent)" }}>{group.label}</span>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="experience-heading">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="page-kicker mb-3">Experience / Education</p>
            <h2 id="experience-heading" className="section-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">
              Relevant experience
            </h2>
          </div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            Selected work record / 002
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="flex flex-col gap-5">
            {experienceEntries.map((entry) => (
              <article key={entry.title} className="glass-card backdrop-blur-xl rounded-[var(--radius-lg)] p-6 md:p-8">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-[var(--color-border)] pb-5">
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--color-accent)" }}>{entry.type}</p>
                    <h3 className="section-heading mt-2 text-xl font-semibold text-[var(--color-text)] md:text-2xl">{entry.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">{entry.organization}</p>
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">{entry.period}</span>
                </div>

                <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">Role: <span style={{ color: "" }}>{entry.role}</span></p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{entry.description}</p>

                <div className="mt-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "" }}>Technologies / tools</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(entry.technologies ?? []).map((technology) => (
                      <Badge key={technology} label={technology} />
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "" }}>Key contributions</p>
                  <ul className="mt-3 space-y-2">
                    {(entry.contributions ?? []).map((contribution) => (
                      <li key={contribution} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="page-kicker mb-3">Academic foundation</p>
              <h2 className="section-heading text-2xl font-semibold text-[var(--color-text)]">Education</h2>
            </div>

            {educationEntries.map((entry) => (
              <article key={entry.title} className="glass-card backdrop-blur-xl rounded-[var(--radius-lg)] p-6 md:p-7">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--color-accent)" }}>{entry.type}</p>
                <h3 className="section-heading mt-2 text-xl font-semibold text-[var(--color-text)]">{entry.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{entry.organization}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">{entry.period}</p>

                {'technologies' in entry && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {(entry.technologies ?? []).map((technology) => (
                      <Badge key={technology} label={technology} />
                    ))}
                  </div>
                )}

                {'contributions' in entry && (
                  <ul className="mt-6 space-y-2">
                    {(entry.contributions ?? []).map((contribution) => (
                      <li key={contribution} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
        <p className="font-mono text-xs text-[var(--color-subtle)]">Available for IT, support, and administrative opportunities</p>
        <Button label="Download CV" href="/resume.pdf" variant="primary" download="Resume - Christian Lapeña.pdf" />
      </div>
    </main>
  );
}
