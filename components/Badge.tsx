// components/Badge.tsx
// ─────────────────────────────────────────
// Reusable badge for tech stack labels.
// Usage: <Badge label="React" />
// ─────────────────────────────────────────

interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        color: "var(--color-accent)",
        backgroundColor: "var(--color-accent-dim)",
        border: "1px solid var(--color-accent)30",
        letterSpacing: "0.03em",
      }}
      className="inline-block px-2 py-0.5 rounded-sm font-medium"
    >
      {label}
    </span>
  );
}
