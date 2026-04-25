import Hero from '@/components/hero';
import SectionLabel from '@/components/section-label';
import FeaturedWork from '@/components/featured-work';
import WritingList from '@/components/writing-list';
import Footer from '@/components/footer';
import HomeAnimations from '@/components/home-animations';
import Link from 'next/link';
import { posts } from '@/lib/data/writing';
import { experience } from '@/lib/data/experience';

export default function Home() {
  const recentPosts = posts.slice(0, 4);

  return (
    <main>
      <HomeAnimations />

      {/* ── Hero ──────────────────────────────── */}
      <Hero
        variant="home"
        eyebrow="Product Designer · Mumbai · Available 2026"
        headline={
          <>
            Make the product
            <br />
            make sense
            <br />
            before it{' '}
            <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>exists.</em>
          </>
        }
        sub="I design systems that carry the weight of a product's logic — from the first unclear idea to the screen that ships."
      />

      {/* ── Selected Work ─────────────────────── */}
      <section style={{ padding: '0 2.5rem var(--space-2xl)' }}>
        <div className="reveal">
          <SectionLabel number="01" title="Selected Work" />
        </div>
        <div className="reveal">
          <FeaturedWork
            tag="Full Ecosystem"
            meta="Oct 2022 — Feb 2025 · NDA · Sole Designer"
            title="From four disconnected interfaces to one system that actually delivered on its promise."
            href="/work/tingting"
          />
        </div>
      </section>

      {/* ── Writing ───────────────────────────── */}
      <section style={{ padding: '0 2.5rem var(--space-2xl)' }}>
        <div className="reveal">
          <SectionLabel number="02" title="Writing" />
        </div>
        <div className="reveal">
          <WritingList posts={recentPosts} />
        </div>
        <div
          className="reveal"
          style={{ marginTop: '2rem' }}
        >
          <Link
            href="/writing"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              color: 'var(--muted)',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            className="underline-reveal"
          >
            All writing →
          </Link>
        </div>
      </section>

      {/* ── About ─────────────────────────────── */}
      <section style={{ padding: '0 2.5rem var(--space-2xl)' }}>
        <div className="reveal">
          <SectionLabel number="03" title="About" />
        </div>
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.382fr 0.618fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '1rem',
              }}
            >
              Mumbai, India
            </p>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--muted)',
                letterSpacing: '-0.03em',
              }}
            >
              AR
            </div>
          </div>

          {/* Right */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--ink)',
                marginBottom: '2rem',
              }}
            >
              I came to design through mechanical engineering — which means I see products the way I
              see machines. An assembly of parts, each with a reason to exist, and a system that
              fails if one part fakes its job.
              <br />
              <br />I design the logic before I design the screen.
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                color: 'var(--muted)',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
              className="underline-reveal"
            >
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────── */}
      <section style={{ padding: '0 2.5rem var(--space-2xl)' }}>
        <div className="reveal">
          <SectionLabel number="04" title="Experience" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experience.map(({ company, role, years }, i) => (
            <div
              key={company}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.5fr 0.3fr 0.2fr',
                alignItems: 'baseline',
                padding: '1.75rem 0',
                borderBottom: '1px solid var(--border)',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                }}
              >
                {company}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  color: 'var(--muted)',
                }}
              >
                {role}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  color: 'var(--muted)',
                  textAlign: 'right',
                }}
              >
                {years}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer / Contact ──────────────────── */}
      <div style={{ padding: '0 0' }}>
        <div style={{ padding: '0 2.5rem' }}>
          <div className="reveal">
            <SectionLabel number="05" title="Contact" />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
