"use client";

import { useState } from "react";
import CertificateCard from "@/components/CertificateCard";
import type { Certificate } from "@/lib/types";

interface CertificatesClientPageProps {
  certificates: Certificate[];
  categories: string[];
  issuers: string[];
}

export default function CertificatesClientPage({
  certificates,
  categories,
  issuers,
}: CertificatesClientPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIssuer, setActiveIssuer] = useState("All");

  const filteredCertificates = certificates.filter((certificate) => {
    const categoryMatch =
      activeCategory === "All" || certificate.category === activeCategory;
    const issuerMatch =
      activeIssuer === "All" || certificate.issuer === activeIssuer;
    return categoryMatch && issuerMatch;
  });

  return (
    <div className="flex flex-col gap-8">
      {certificates.length > 0 && (
        <div className="glass-card backdrop-blur-xl flex flex-col gap-4 rounded-[var(--radius-md)] p-4 md:p-5">
          <FilterGroup
            label="Category"
            options={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
          <FilterGroup
            label="Issuer"
            options={issuers}
            active={activeIssuer}
            onChange={setActiveIssuer}
          />
        </div>
      )}

      <p className="border-t border-[var(--color-border)] pt-4 text-sm text-[var(--color-muted)]">
        Showing <span className="text-[var(--color-text)]">{filteredCertificates.length}</span> of {certificates.length} certificates
      </p>

      {filteredCertificates.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      ) : (
        <div className="glass-card backdrop-blur-xl rounded-[var(--radius-lg)] px-6 py-16 text-center md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">Certificate archive / empty</p>
          <h2 className="section-heading mt-3 text-2xl font-semibold text-[var(--color-text)]">No certificates added yet</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
            {/* Add certificate records to <span className="text-[var(--color-text)]">data/certificates.json</span> and they will appear here automatically. */}
          </p>
        </div>
      )}
    </div>
  );
}

function FilterGroup({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-muted)]">{label}</span>
      {Array.from(new Set(["All", ...options])).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full border px-3 py-1.5 font-mono text-[0.68rem] transition-all ${
            active === option
              ? "border-[var(--color-accent)] bg-[var(--color-accent-dim)] text-[var(--color-accent)]"
              : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}