'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

interface FeaturedWorkProps {
  tag: string;
  meta: string;
  title: string;
  href: string;
}

export default function FeaturedWork({ tag, meta, title, href }: FeaturedWorkProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const { gsap: g } = { gsap };
    card.addEventListener('mouseenter', () => {
      g.to(card, { y: -4, duration: 0.4, ease: 'power3.out' });
    });
    card.addEventListener('mouseleave', () => {
      g.to(card, { y: 0, duration: 0.4, ease: 'power3.out' });
    });
  }, []);

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          background: '#100808',
          borderRadius: '2px',
          padding: '3.5rem',
          minHeight: '75vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          cursor: 'none',
        }}
      >
        {/* Radial gradient decoration */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(216, 58, 44, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Abstract depth element */}
        <div
          style={{
            position: 'absolute',
            right: '-4rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '28rem',
            height: '28rem',
            borderRadius: '50%',
            border: '1px solid rgba(216, 58, 44, 0.08)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-6rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40rem',
            height: '40rem',
            borderRadius: '50%',
            border: '1px solid rgba(216, 58, 44, 0.04)',
            pointerEvents: 'none',
          }}
        />

        {/* Top meta */}
        <div
          style={{
            position: 'absolute',
            top: '3.5rem',
            left: '3.5rem',
            right: '3.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--red)',
              background: 'rgba(216, 58, 44, 0.1)',
              padding: '0.3rem 0.6rem',
              borderRadius: '2px',
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.06em',
              color: 'rgba(244, 241, 235, 0.3)',
            }}
          >
            {meta}
          </span>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--paper)',
              maxWidth: '22ch',
              marginBottom: '2rem',
            }}
          >
            {title}
          </h3>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              color: 'var(--red)',
              textTransform: 'uppercase',
            }}
            className="card-cta"
          >
            Read case study
            <span style={{ transition: 'transform 0.3s ease' }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
