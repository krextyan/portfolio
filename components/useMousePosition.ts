import { useState, useEffect, useCallback, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
  isIdle: boolean;
  velocity: { x: number; y: number };
}

const IDLE_TIMEOUT = 500; // ms before intensification kicks in
const SMOOTHING_FACTOR = 0.12; // Lower is smoother/slower

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    isIdle: true,
    velocity: { x: 0, y: 0 },
  });

  const lastPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const lastMoveTime = useRef(Date.now());
  const idleTimeoutId = useRef<NodeJS.Timeout | null>(null);

  const updatePosition = useCallback(() => {
    const now = Date.now();
    const dt = Math.max(1, now - lastMoveTime.current);

    // Calculate smoothed position
    const dx = targetPosition.current.x - lastPosition.current.x;
    const dy = targetPosition.current.y - lastPosition.current.y;
    
    const newX = lastPosition.current.x + dx * SMOOTHING_FACTOR;
    const newY = lastPosition.current.y + dy * SMOOTHING_FACTOR;

    const currentVelocity = {
      x: dx / dt,
      y: dy / dt,
    };

    lastPosition.current = { x: newX, y: newY };

    setMousePosition((prev) => ({
      x: newX,
      y: newY,
      isIdle: prev.isIdle,
      velocity: currentVelocity,
    }));

    animationFrameId.current = requestAnimationFrame(updatePosition);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    targetPosition.current = { x: event.clientX, y: event.clientY };
    lastMoveTime.current = Date.now();

    setMousePosition((prev) => (prev.isIdle ? { ...prev, isIdle: false } : prev));

    if (idleTimeoutId.current) clearTimeout(idleTimeoutId.current);
    idleTimeoutId.current = setTimeout(() => {
      setMousePosition((prev) => ({ ...prev, isIdle: true }));
    }, IDLE_TIMEOUT);

    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(updatePosition);
    }
  }, [updatePosition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      if (idleTimeoutId.current) clearTimeout(idleTimeoutId.current);
    };
  }, [handleMouseMove]);

  return mousePosition;
}