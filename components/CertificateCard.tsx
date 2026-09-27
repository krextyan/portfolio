import Link from "next/link";
import Image from "next/image";
import type { Certificate } from "@/lib/types";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const formattedDate = new Date(certificate.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <article className="glass-card backdrop-blur-xl flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)] md:p-7">
      {certificate.image && (
        <div className="relative -mx-6 -mt-6 mb-6 h-48 overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)] md:-mx-7 md:-mt-7">
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate image`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-accent-dim)] font-mono text-lg text-[var(--color-accent)]">
          //
        </div>
        <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-[var(--color-subtle)]">
          {certificate.category}
        </span>
      </div>

      <h2 className="section-heading text-xl font-semibold leading-tight text-[var(--color-text)]">
        {certificate.title}
      </h2>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
        {certificate.issuer}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
        {certificate.description}
      </p>

      <div className="mt-6 border-t border-[var(--color-border)] pt-4">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-subtle)]">
            Issued {formattedDate}
          </span>
          {certificate.credentialUrl && (
            <Link
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-accent)] transition-opacity hover:opacity-70"
            >
              Verify -&gt;
            </Link>
          )}
        </div>

        {certificate.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--color-border)] bg-black/15 px-2.5 py-1 font-mono text-[0.62rem] text-[var(--color-muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}