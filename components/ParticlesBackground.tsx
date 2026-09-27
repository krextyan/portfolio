"use client";

import { useMousePosition } from "./useMousePosition";

export default function ParticlesBackground() {
  const { x, y, isIdle } = useMousePosition();

  return (
    <div
      className={`ambient-background${isIdle ? " ambient-background-idle" : ""}`}
      style={{
        "--mouse-x": `${x}px`,
        "--mouse-y": `${y}px`,
      } as React.CSSProperties}
      aria-hidden="true"
    >
      <span className="ambient-grid-spotlight" />
    </div>
  );
}