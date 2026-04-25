'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export type HeroVariant = 'home' | 'casestudy' | 'writing' | 'about';

interface HeroProps {
  variant: HeroVariant;
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  sub?: React.ReactNode;
  meta?: React.ReactNode;
  backLink?: React.ReactNode;
}

export default function Hero({ variant, eyebrow, headline, sub, meta, backLink }: HeroProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    const eyebrowEl = root.querySelector('.hero-eyebrow');
    const headlineEl = root.querySelector('.hero-headline');
    const subEl = root.querySelector('.hero-sub');
    const metaEl = root.querySelector('.hero-meta');

    if (eyebrowEl) tl.from(eyebrowEl, { y: 20, opacity: 0, duration: 0.6 });
    if (headlineEl) {
      tl.from(
        headlineEl,
        { y: 60, opacity: 0, duration: 1 },
        eyebrowEl ? '-=0.3' : '0'
      );
    }
    if (subEl) tl.from(subEl, { y: 20, opacity: 0, duration: 0.7 }, '-=0.5');
    if (metaEl) tl.from(metaEl, { opacity: 0, duration: 0.5 }, '-=0.2');
  }, []);

  const isHome = variant === 'home';

  return (
    <section
      ref={rootRef}
      style={{
        minHeight: isHome ? '100svh' : 'auto',
        padding: isHome ? '0 2.5rem' : '8rem 2.5rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isHome ? 'center' : 'flex-start',
        position: 'relative',
        paddingTop: isHome ? '6rem' : '10rem',
      }}
    >
      {backLink && (
        <div
          style={{
            position: 'absolute',
            top: '7rem',
            left: '2.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--muted)',
            letterSpacing: '0.04em',
          }}
        >
          {backLink}
        </div>
      )}

      {eyebrow && (
        <div
          className="hero-eyebrow"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '2rem',
          }}
        >
          {eyebrow}
        </div>
      )}

      <h1
        className="hero-headline"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: isHome
            ? 'clamp(3.5rem, 9vw, 12rem)'
            : 'clamp(2.5rem, 6vw, 6rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.02,
          maxWidth: isHome ? '18ch' : '22ch',
          marginBottom: sub ? '2rem' : '0',
        }}
      >
        {headline}
      </h1>

      {sub && (
        <p
          className="hero-sub"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--muted)',
            maxWidth: '52ch',
            marginBottom: meta ? '2rem' : '0',
          }}
        >
          {sub}
        </p>
      )}

      {meta && (
        <div
          className="hero-meta"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.06em',
            color: 'var(--muted)',
          }}
        >
          {meta}
        </div>
      )}

      {isHome && (
        <>
          {/* Scroll indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 48,
                height: 1,
                background: 'var(--muted)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  background: 'var(--ink)',
                  animation: 'slideRight 1.6s cubic-bezier(0.76,0,0.24,1) infinite',
                }}
              />
            </div>
          </div>

          {/* Mumbai time */}
          <MumbaiTime />
        </>
      )}

      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

function MumbaiTime() {
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function update() {
      const now = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      if (timeRef.current) timeRef.current.textContent = `Mumbai ${now}`;
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '2.5rem',
        right: '2.5rem',
      }}
    >
      <span
        ref={timeRef}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.08em',
          color: 'var(--muted)',
        }}
      />
    </div>
  );
}
