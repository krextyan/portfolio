// app/layout.tsx
// ─────────────────────────────────────────
// Root layout — wraps every page.
// This is where global fonts, metadata, and
// shared UI (Navbar, Footer) live.
// ─────────────────────────────────────────

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ParticlesBackground from "@/components/ParticlesBackground";

// ── Site-wide SEO metadata ────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://itchan-portfolio.vercel.app"),
  title: {
    default: "Christian Lapeña — Developer",
    template: "%s | Christian Lapeña",
  },
  description:
    "Full-stack developer building fast, clean, user-focused software.",
  keywords: ["Christian Lapeña", "itchan portfolio", "Software Developer", "Portfolio", "Next.js", "Vercel", "Xs Portfolio"],
  authors: [{ name: "Christian Lapeña" }],
  creator: "Christian Lapeña",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itchan-portfolio.vercel.app",
    siteName: "Christian Lapeña Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — DM Serif Display + DM Sans + JetBrains Mono + Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..400&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <ParticlesBackground />
        <Navbar />

        {/* Main content area — grows to fill available height */}
        <main className="flex-1">{children}</main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
