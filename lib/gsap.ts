'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export function revealOnScroll(elements: Element[] | NodeListOf<Element>) {
  elements.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  });
}

export function splitIntoWords(el: Element): HTMLSpanElement[] {
  const text = el.textContent || '';
  const words = text.split(' ');
  el.textContent = '';
  return words.map((word, i) => {
    const span = document.createElement('span');
    span.textContent = word + (i < words.length - 1 ? ' ' : '');
    span.style.display = 'inline-block';
    span.style.overflow = 'hidden';
    span.className = 'word';
    el.appendChild(span);
    return span;
  });
}
