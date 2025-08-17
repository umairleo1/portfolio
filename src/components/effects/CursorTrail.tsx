import React, { useEffect, useRef } from 'react';
import '@/styles/components/CursorTrail.css';

const CursorTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dots = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const createDots = () => {
      if (!trailRef.current) return;

      // Create trail dots
      for (let i = 0; i < 12; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.left = '-10px';
        dot.style.top = '-10px';
        trailRef.current.appendChild(dot);
        dots.current.push(dot);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const animateTrail = () => {
      let x = mousePosition.current.x;
      let y = mousePosition.current.y;

      dots.current.forEach((dot, index) => {
        // Center the dot on the cursor position
        dot.style.left = `${x - 4}px`; // Offset by half the dot width (4px)
        dot.style.top = `${y - 4}px`;  // Offset by half the dot height (4px)
        
        // Create delay effect for trailing
        if (index > 0) {
          const prevDot = dots.current[index - 1];
          if (prevDot) {
            const prevX = parseFloat(prevDot.style.left) + 4; // Add back the offset
            const prevY = parseFloat(prevDot.style.top) + 4;
            
            x = x + (prevX - x) * 0.8; // Smooth trailing effect
            y = y + (prevY - y) * 0.8;
          }
        }
        
        // Scale and opacity based on position in trail
        const scale = Math.max(0.1, (15 - index) / 15);
        const opacity = scale * 0.6;
        
        dot.style.transform = `translate(-50%, -50%) scale(${scale})`;
        dot.style.opacity = opacity.toString();
      });

      requestAnimationFrame(animateTrail);
    };

    createDots();
    document.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      const currentTrailRef = trailRef.current;
      if (currentTrailRef) {
        currentTrailRef.innerHTML = '';
      }
      dots.current = [];
    };
  }, []);

  return <div ref={trailRef} className="cursor-trail-container"></div>;
};

export default CursorTrail;