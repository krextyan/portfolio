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
  onClick?: (e: React.MouseEvent) => void;
}

export default function Button({
  label,
  href,
  variant = "primary",
  external = false,
  onClick,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    fontWeight: 500,
    display: "inline-block",
    padding: "0.55rem 1.25rem",
    borderRadius: "4px",
    transition: "all 0.4s ease-in-out",
    willChange: "transform, opacity, box-shadow",
    textDecoration: "none",
  };

  const variantStyle: React.CSSProperties =
    variant === "primary"
      ? {
          backgroundColor: "var(--color-accent)",
          color: "#0d0d0f",
          border: "1px solid var(--color-accent)",
        }
      : {
          backgroundColor: "transparent",
          color: "var(--color-text)",
          border: "1px solid var(--color-border)",
        };

  const combinedStyle = { ...baseStyle, ...variantStyle };

  // External links use <a>, internal links use Next.js <Link>
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={combinedStyle}
        onClick={onClick}
        className="hover:brightness-125 hover:contrast-125 hover:shadow-[0_0_20px_#c8fb57,0_0_40px_rgba(200,251,87,0.6)]"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} style={combinedStyle} className="hover:brightness-125 hover:contrast-125 hover:shadow-[0_0_20px_#c8fb57,0_0_40px_rgba(200,251,87,0.6)]" onClick={onClick}>
      {label}
    </Link>
  );
}
