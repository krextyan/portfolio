// components/Navbar.tsx
// ─────────────────────────────────────────
// Responsive navigation bar.
// Links are defined in one array — add new
// pages by adding an entry here.
// ─────────────────────────────────────────

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Swal from "sweetalert2";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Logs", href: "/logs" },
  { label: "About Me", href: "/about" },
  { label: "Contact Me", href: "/feedback" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const showContact = () => {
    Swal.fire({
      title: "Contact Me",
      html: "Phone: (+63)938-861-9791<br>Email: krestyanstick25@gmail.com",
      icon: "info",
      background: "var(--color-surface)",
      color: "var(--color-text)",
      confirmButtonColor: "var(--color-accent)",
      confirmButtonText: "Close",
    });
  };

  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg)",
      }}
      className="sticky top-0 z-50"
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600,color: "var(--color-text)" }}
          className="text-lg tracking-tight hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <span style={{ color: "#c8fb57"}}>X</span>'s Web Portfolio
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text)] transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text)] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text)] transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Navigation links */}
        <ul
          className={`md:flex items-center gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-[var(--color-bg)]/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border-b md:border-none border-[var(--color-border)] p-6 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen 
              ? "flex flex-col opacity-100 translate-y-0 visible pointer-events-auto" 
              : "flex flex-col md:flex-row opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0 invisible md:visible pointer-events-none md:pointer-events-auto"
          }`}
        >
          {NAV_LINKS.map((link) => {
            // Highlight the current page link
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            if (link.label === "Contact Me") {
              return (
                <li key={link.href} className="py-2 md:py-0">
                  <Button
                    label={link.label}
                    href="#"
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      showContact();
                    }}
                  />
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: isActive ? "var(--color-accent)" : "var(--color-muted)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                  }}
                  className="transition-colors hover:opacity-80 block py-2 md:py-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
