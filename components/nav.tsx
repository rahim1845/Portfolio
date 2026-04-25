'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/work/tingting', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 800,
        padding: '1.5rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(244, 241, 235, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.125rem',
          fontWeight: 700,
          color: 'var(--ink)',
          textDecoration: 'none',
          letterSpacing: '-0.03em',
        }}
      >
        AR
      </Link>

      <nav style={{ display: 'flex', gap: '2rem' }}>
        {links.map(({ href, label }) => {
          const isActive =
            href === '/'
              ? pathname === '/'
              : pathname.startsWith(href.split('/').slice(0, 2).join('/'));

          return (
            <Link
              key={href}
              href={href}
              style={{
                position: 'relative',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--ink)' : 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              className={isActive ? 'nav-active' : ''}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
