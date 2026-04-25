import Hero from '@/components/hero';
import Footer from '@/components/footer';

export const metadata = {
  title: 'About — Abdul Rahim Rangrez',
  description: 'A designer who thinks in systems. Based in Mumbai, open to Dubai and remote globally.',
};

export default function AboutPage() {
  const details = [
    { label: 'Based in', value: 'Mumbai, India' },
    {
      label: 'Available for',
      value: 'Full-time roles at AI-first product companies. Remote, Dubai, or on-site.',
    },
    { label: 'Tools', value: 'Figma · Notion · Framer · Cursor · Claude' },
    {
      label: 'What I want to work on',
      value:
        'AI product design. Design systems that carry real weight. Interfaces for operational, logistical, and retail AI.',
    },
  ];

  return (
    <main>
      {/* ── Hero ──────────────────────────────── */}
      <Hero
        variant="about"
        eyebrow="About"
        headline={
          <>
            A designer who{' '}
            <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>thinks in systems.</em>
          </>
        }
      />

      {/* ── Body ──────────────────────────────── */}
      <section
        style={{
          padding: '0 2.5rem var(--space-xl)',
          maxWidth: '860px',
        }}
      >
        {[
          'I came to design through mechanical engineering, which means I see products the way I see machines — an assembly of parts, each with a reason to exist, and a system that fails if one part fakes its job. I design the logic before I design the screen.',
          'My best work sits at the intersection of systems, interfaces, and honest constraints. TingTing — a 2.5-year rapid-commerce build — is where that thinking is clearest: four surfaces, five kinds of users, one shared truth to maintain. The hardest design calls in that project were not about pixels. They were about what the system chose to surface, and what it chose to hide.',
          "I work best with founders and technical leads who have opinions. Not people who want me to make it 'look nice.' People who want me to make it make sense. I'm based in Mumbai, open to Dubai and remote globally.",
        ].map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.375rem)',
              fontWeight: 400,
              lineHeight: 1.7,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              maxWidth: '60ch',
              marginBottom: '1.75rem',
            }}
          >
            {para}
          </p>
        ))}
      </section>

      {/* ── Pull Quote ────────────────────────── */}
      <section style={{ padding: '0 2.5rem var(--space-xl)' }}>
        <blockquote
          style={{
            background: 'var(--cream)',
            borderLeft: '2px solid var(--red)',
            padding: '3rem',
            maxWidth: '54ch',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.55,
              color: 'var(--ink)',
              marginBottom: '1rem',
            }}
          >
            &ldquo;I&rsquo;m just a human trying my best to enjoy this world in a way I
            can.&rdquo;
          </p>
          <cite
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              fontStyle: 'normal',
            }}
          >
            — The Crucible Sanctum, founding principle
          </cite>
        </blockquote>
      </section>

      {/* ── Detail Grid ───────────────────────── */}
      <section style={{ padding: '0 2.5rem var(--space-2xl)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.382fr 0.618fr',
            gap: '0',
          }}
        >
          {details.map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: 'contents',
              }}
            >
              <div
                style={{
                  padding: '1.5rem 2rem 1.5rem 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  {label}
                </span>
              </div>
              <div
                style={{
                  padding: '1.5rem 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)',
                    lineHeight: 1.6,
                  }}
                >
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
