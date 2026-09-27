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
        backgroundColor: "rgba(185, 243, 107, 0.08)",
        border: "1px solid rgba(185, 243, 107, 0.22)",
        letterSpacing: "0.03em",
      }}
      className="inline-block px-2.5 py-1 rounded-full font-medium"
    >
      {label}
    </span>
  );
}
