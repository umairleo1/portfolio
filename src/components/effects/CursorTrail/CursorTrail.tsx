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
  const [isPaused, setIsPaused] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const dotPositions = useRef<{ x: number; y: number }[]>([]);
  const lastUpdateTime = useRef<number>(0);

  // Optimized constants for better performance
  const DOT_COUNT = 6; // Reduced further for better performance
  const TRAIL_SPEED = 0.18; // Slightly faster for smoother trail
  const THROTTLE_MS = 16; // 60fps target

  // Throttled mouse move handler for better performance
  const handleMouseMove = (e: MouseEvent) => {
    const now = performance.now();
    if (now - lastUpdateTime.current < THROTTLE_MS) return;

    lastUpdateTime.current = now;
    mousePosition.current = { x: e.clientX, y: e.clientY };

    // Initialize dots on first mouse movement
    if (!hasMovedCursor) {
      dotPositions.current = Array(DOT_COUNT)
        .fill(null)
        .map(() => ({ x: e.clientX, y: e.clientY }));
      setHasMovedCursor(true);
    }
  };

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    // Initialize with empty positions
    dotPositions.current = Array(DOT_COUNT)
      .fill(null)
      .map(() => ({ x: 0, y: 0 }));

    const animateTrail = () => {
      // Pause animation if page is not visible or animation is paused
      if (!hasMovedCursor || isPaused || document.hidden) {
        animationFrameRef.current = requestAnimationFrame(animateTrail);
        return;
      }

      const { x: targetX, y: targetY } = mousePosition.current;

      // Update first dot to mouse position
      if (dotPositions.current[0]) {
        dotPositions.current[0].x = targetX;
        dotPositions.current[0].y = targetY;
      }

      // Smooth trailing effect for other dots with optimized loop
      for (let i = 1; i < DOT_COUNT; i++) {
        const current = dotPositions.current[i];
        const target = dotPositions.current[i - 1];

        if (current && target) {
          // Use lerp for smoother interpolation
          const deltaX = target.x - current.x;
          const deltaY = target.y - current.y;
          current.x += deltaX * TRAIL_SPEED;
          current.y += deltaY * TRAIL_SPEED;
        }
      }

      // Calculate visual properties with optimized scale and opacity
      const newDots: DotPosition[] = dotPositions.current.map((pos, index) => {
        const factor = (DOT_COUNT - index) / DOT_COUNT;
        return {
          x: pos.x,
          y: pos.y,
          scale: Math.max(0.3, factor * 0.9), // Better scaling
          opacity: Math.max(0.15, factor * 0.85), // Better opacity curve
        };
      });

      setDots(newDots);
      animationFrameRef.current = requestAnimationFrame(animateTrail);
    };

    const startAnimation = () => {
      animateTrail();
    };

    // Performance optimization: pause when page is not visible
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    startAnimation();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              // Use transform3d for better GPU acceleration
              willChange: 'transform, opacity',
            }}
          />
        ))}
    </div>
  );
};

export default CursorTrail;
