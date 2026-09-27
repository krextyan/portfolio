// Helper functions for loading certificate data from JSON.

import certificatesData from "@/data/certificates.json";
import type { Certificate } from "./types";

export function getAllCertificates(): Certificate[] {
  return [...(certificatesData as Certificate[])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllCertificateCategories(): string[] {
  return Array.from(
    new Set(getAllCertificates().map((certificate) => certificate.category))
  ).sort();
}

export function getAllCertificateIssuers(): string[] {
  return Array.from(
    new Set(getAllCertificates().map((certificate) => certificate.issuer))
  ).sort();
}