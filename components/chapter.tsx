'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

interface ChapterProps {
  number: string;
  title: string;
  tension: string;
  body: string[];
  visuals?: { label: string; aspect?: string }[];
}

export default function Chapter({ number, title, tension, body, visuals }: ChapterProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const reveals = root.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={rootRef}
      style={{
        padding: 'var(--space-xl) 2.5rem',
        maxWidth: '860px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div className="reveal" style={{ marginBottom: '2rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            color: 'var(--red)',
          }}
        >
          ({number})
        </span>
      </div>

      <h2
        className="reveal"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '1.25rem',
        }}
      >
        {title}
      </h2>

      <p
        className="reveal"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'var(--muted)',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
        }}
      >
        {tension}
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: visuals ? '3rem' : '0',
        }}
      >
        {body.map((para, i) => (
          <p
            key={i}
            className="reveal"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--ink)',
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {visuals && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginTop: '3rem',
          }}
        >
          {visuals.map(({ label, aspect = '56.25%' }) => (
            <div key={label} className="reveal">
              <div
                style={{
                  background: 'var(--cream)',
                  borderRadius: '2px',
                  position: 'relative',
                  paddingBottom: aspect,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      color: 'var(--muted)',
                      textAlign: 'center',
                      padding: '1rem',
                    }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
