'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const curtain = curtainRef.current;
    if (!curtain) return;

    // Wipe up
    curtain.style.transition = 'none';
    curtain.style.transform = 'translateY(100%)';
    curtain.style.opacity = '1';
    curtain.offsetHeight; // force reflow

    curtain.style.transition = 'transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)';
    curtain.style.transform = 'translateY(0%)';

    const timer = setTimeout(() => {
      curtain.style.transition = 'transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)';
      curtain.style.transform = 'translateY(-100%)';
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {children}
      <div
        ref={curtainRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--paper)',
          zIndex: 9000,
          transform: 'translateY(-100%)',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
