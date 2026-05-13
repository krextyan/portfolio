// components/Navbar.tsx
// ─────────────────────────────────────────
// Responsive navigation bar.
// Links are defined in one array — add new
// pages by adding an entry here.
// ─────────────────────────────────────────

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Swal from "sweetalert2";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Logs", href: "/logs" },
  { label: "About Me", href: "/about" },
  { label: "Contact Me", href: "/feedback" }
];

/**
 * Animated Nav Link Component
 * Performs a "rolling" text animation on hover.
 */
function NavLink({ label, href, isActive, onClick }: { label: string; href: string; isActive: boolean; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="relative group py-2 md:py-0 block"
      onClick={onClick}
    >
      {/* Tight container for the rolling effect */}
      <div className="relative overflow-hidden">
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="relative flex flex-col"
        >
          {/* Primary Text (Slides Up) */}
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{ duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
            style={{ color: isActive ? "var(--color-accent)" : "var(--color-muted)" }}
            className="block font-body text-sm font-medium transition-colors duration-300 group-hover:text-[var(--color-accent)]"
          >
            {label}
          </motion.span>

          {/* Secondary Text (Slides Up from the bottom) */}
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="absolute inset-0 block font-body text-sm font-medium text-[var(--color-accent)]"
          >
            {label}
          </motion.span>
        </motion.div>
      </div>

      {/* Animated Underline */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[var(--color-accent)] origin-center transition-transform duration-300"
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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
        <Link
          href="/"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "var(--color-text)" }}
          className="text-lg tracking-tight z-[60] hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <span style={{ color: "var(--color-accent)" }}>X</span>'s Portfolio
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[var(--color-text)]"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-[var(--color-text)]"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[var(--color-text)]"
          />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {link.label === "Contact Me" ? (
                <Button
                  label={link.label}
                  href={link.href}
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    showContact();
                  }}
                />
              ) : (
                <NavLink
                  label={link.label}
                  href={link.href}
                  isActive={link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)}
                  onClick={() => setIsOpen(false)}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-[var(--color-bg)] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <ul className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      label={link.label}
                      href={link.href}
                      isActive={link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)}
                      onClick={() => {
                        setIsOpen(false);
                        if (link.label === "Contact Me") showContact();
                      }}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
