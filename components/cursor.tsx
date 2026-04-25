'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    function onMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY };
      dot!.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    }

    function animate() {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      ringEl!.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    function onEnterLink() {
      setIsHovering(true);
    }
    function onLeaveLink() {
      setIsHovering(false);
    }

    document.addEventListener('mousemove', onMove);

    // Observe DOM for interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial setup
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--ink)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'transform 0.1s cubic-bezier(0.23,1,0.32,1), background 0.2s',
          transform: isHovering ? 'scale(0.6)' : 'scale(1)',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: `1px solid ${isHovering ? 'var(--red)' : 'var(--ink)'}`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'border-color 0.2s, transform 0.2s',
          transform: isHovering ? 'scale(1.6)' : 'scale(1)',
          opacity: 0.6,
        }}
      />
    </>
  );
}
