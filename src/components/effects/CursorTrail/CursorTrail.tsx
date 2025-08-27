import React, { useEffect, useRef, useState } from 'react';
import styles from './CursorTrail.module.css';

interface DotPosition {
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

const CursorTrail: React.FC = () => {
  const [dots, setDots] = useState<DotPosition[]>([]);
  const [hasMovedCursor, setHasMovedCursor] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const dotPositions = useRef<{ x: number; y: number }[]>([]);

  // Reduced dot count for better performance
  const DOT_COUNT = 8;
  const TRAIL_SPEED = 0.15;

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    // Initialize with empty positions - dots will appear on first mouse movement
    dotPositions.current = Array(DOT_COUNT)
      .fill(null)
      .map(() => ({ x: 0, y: 0 }));

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Initialize dots on first mouse movement
      if (!hasMovedCursor) {
        dotPositions.current = Array(DOT_COUNT)
          .fill(null)
          .map(() => ({ x: e.clientX, y: e.clientY }));
        setHasMovedCursor(true);
      }
    };

    const animateTrail = () => {
      // Only animate if cursor has moved
      if (!hasMovedCursor) {
        animationFrameRef.current = requestAnimationFrame(animateTrail);
        return;
      }

      const { x: targetX, y: targetY } = mousePosition.current;

      // Update first dot to mouse position
      if (dotPositions.current[0]) {
        dotPositions.current[0].x = targetX;
        dotPositions.current[0].y = targetY;
      }

      // Smooth trailing effect for other dots
      for (let i = 1; i < DOT_COUNT; i++) {
        const current = dotPositions.current[i];
        const target = dotPositions.current[i - 1];

        if (current && target) {
          current.x += (target.x - current.x) * TRAIL_SPEED;
          current.y += (target.y - current.y) * TRAIL_SPEED;
        }
      }

      // Calculate visual properties
      const newDots: DotPosition[] = dotPositions.current.map((pos, index) => ({
        x: pos.x,
        y: pos.y,
        scale: Math.max(0.2, (DOT_COUNT - index) / DOT_COUNT),
        opacity: Math.max(0.1, (DOT_COUNT - index) / DOT_COUNT) * 0.8,
      }));

      setDots(newDots);
      animationFrameRef.current = requestAnimationFrame(animateTrail);
    };

    // Start with empty dots - they will appear on first mouse movement

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasMovedCursor]);

  return (
    <div className={styles.cursorTrailContainer}>
      {hasMovedCursor &&
        dots.map((dot, index) => (
          <div
            key={index}
            className={styles.cursorDot}
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              transform: `translate(-50%, -50%) scale(${dot.scale})`,
              opacity: dot.opacity,
            }}
          />
        ))}
    </div>
  );
};

export default CursorTrail;
