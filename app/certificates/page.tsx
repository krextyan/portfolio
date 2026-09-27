import type { Metadata } from "next";
import { getAllCertificateCategories, getAllCertificateIssuers, getAllCertificates } from "@/lib/certificates";
import CertificatesClientPage from "./CertificatesClientPage";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Certificates and credentials earned through school, internships, and professional development.",
};

export default function CertificatesPage() {
  const certificates = getAllCertificates();

  return (
    <main className="max-w-6xl mx-auto px-6 pt-0 pb-20 md:pt-0 md:pb-28 md:-mt-16">
      <header className="mb-12 max-w-3xl">
        <p className="page-kicker mb-3">Credentials / 001</p>
        <h1 className="page-title">Certificates</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          A growing archive of certificates and credentials from academic work, internship experience, and continued learning.
        </p>
      </header>

      <CertificatesClientPage
        certificates={certificates}
        categories={getAllCertificateCategories()}
        issuers={getAllCertificateIssuers()}
      />
    </main>
  );
}