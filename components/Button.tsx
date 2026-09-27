// components/Button.tsx
// ─────────────────────────────────────────
// Reusable button / link component.
// Supports two visual variants:
//   - "primary"  → solid accent button
//   - "ghost"    → outline button
// ─────────────────────────────────────────

import Link from "next/link";

interface ButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Button({
  label,
  href,
  variant = "primary",
  external = false,
  download,
  onClick,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    fontWeight: 500,
    display: "inline-block",
    padding: "0.7rem 1.2rem",
    borderRadius: "999px",
    transition: "all var(--transition-smooth)",
    willChange: "transform, opacity, box-shadow",
    textDecoration: "none",
  };

  const variantStyle: React.CSSProperties =
    variant === "primary"
      ? {
          background: "linear-gradient(135deg, var(--color-accent), #8bdc78)",
          color: "#071009",
          border: "1px solid rgba(211, 255, 173, 0.65)",
          boxShadow: "0 10px 24px rgba(110, 202, 117, 0.16)",
        }
      : {
          backgroundColor: "rgba(255, 255, 255, 0.035)",
          color: "var(--color-text)",
          border: "1px solid var(--color-border-strong)",
        };

  const combinedStyle = { ...baseStyle, ...variantStyle };

  // External links use <a>, internal links use Next.js <Link>
  if (external || download) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        style={combinedStyle}
        onClick={onClick}
        className="hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_30px_rgba(110,202,117,0.2)] active:translate-y-0"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} style={combinedStyle} className="hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_30px_rgba(110,202,117,0.2)] active:translate-y-0" onClick={onClick}>
      {label}
    </Link>
  );
}
