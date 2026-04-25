'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function CaseStudyAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Pin hero briefly with parallax headline
      const hero = document.querySelector('.cs-hero');
      const headline = document.querySelector('.cs-headline');

      if (hero && headline) {
        ScrollTrigger.create({
          trigger: hero,
          start: 'top top',
          end: '+=400',
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            gsap.to(headline, { x: -self.progress * 80, duration: 0.3, overwrite: 'auto' });
          },
        });
      }

      // Section reveals
      gsap.utils.toArray<Element>('.reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 82%' },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
