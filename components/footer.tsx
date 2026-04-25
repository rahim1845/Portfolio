import Link from 'next/link';

interface FooterProps {
  headline?: React.ReactNode;
}

export default function Footer({ headline }: FooterProps) {
  const defaultHeadline = (
    <>
      Let&rsquo;s make something{' '}
      <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>sensible.</em>
    </>
  );

  return (
    <footer
      style={{
        padding: 'var(--space-2xl) 2.5rem var(--space-l)',
        borderTop: '1px solid var(--border)',
        background: 'var(--paper)',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          marginBottom: 'var(--space-xl)',
          maxWidth: '18ch',
        }}
      >
        {headline || defaultHeadline}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.382fr 0.618fr',
          gap: '3rem',
          marginBottom: 'var(--space-xl)',
        }}
      >
        {/* Email */}
        <div>
          <a
            href="mailto:abdulrahimrangrez@gmail.com"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
              fontWeight: 600,
              color: 'var(--ink)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
            className="underline-reveal"
          >
            abdulrahimrangrez@gmail.com
          </a>
        </div>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {[
            { label: 'Twitter', href: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'LinkedIn', href: '#' },
            { label: 'Medium', href: '#' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
              className="underline-reveal"
            >
              {label} →
            </a>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--muted)',
            letterSpacing: '0.04em',
          }}
        >
          © 2026 Rahim Rangrez
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--muted)',
            letterSpacing: '0.04em',
          }}
        >
          Built with intent.
        </span>
      </div>
    </footer>
  );
}
