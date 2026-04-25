import Link from 'next/link';
import Hero from '@/components/hero';
import ContextStrip from '@/components/context-strip';
import Chapter from '@/components/chapter';
import MetricStrip from '@/components/metric-strip';
import Footer from '@/components/footer';
import CaseStudyAnimations from '@/components/casestudy-animations';

export const metadata = {
  title: 'TingTing — Abdul Rahim Rangrez',
  description:
    'Designing the full TingTing rapid-commerce ecosystem — four surfaces, five kinds of users, one shared truth.',
};

export default function TingTingPage() {
  return (
    <main>
      <CaseStudyAnimations />

      {/* ── Hero ──────────────────────────────── */}
      <div className="cs-hero">
        <Hero
          variant="casestudy"
          backLink={
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.06em',
                color: 'var(--muted)',
                textDecoration: 'none',
              }}
              className="underline-reveal"
            >
              ← Back to work
            </Link>
          }
          meta={
            <span>
              <span style={{ color: 'var(--red)' }}>NDA</span>
              {' · Sole Product Designer · Oct 2022 — Feb 2025'}
            </span>
          }
          headline={
            <span className="cs-headline" style={{ display: 'block' }}>
              From four disconnected interfaces to one system that actually{' '}
              <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>delivered</em> on its
              promise.
            </span>
          }
          sub="Designing the full TingTing rapid-commerce ecosystem — four surfaces, five kinds of users, one shared truth."
        />
      </div>

      {/* ── Context Strip ─────────────────────── */}
      <div style={{ padding: '0 2.5rem' }}>
        <ContextStrip
          rows={[
            { label: 'Role', value: 'Sole Product Designer' },
            { label: 'Team', value: 'Founder + 4 Engineers' },
            { label: 'Duration', value: '2.5 years' },
            { label: 'Scope', value: '4 surfaces — User, Driver, Store, Admin' },
          ]}
        />
      </div>

      {/* ── Chapter 1 ─────────────────────────── */}
      <Chapter
        number="01"
        title="Five users. One system."
        tension="Same order. Four truths. Nobody was right."
        body={[
          'TingTing looked like a grocery delivery app. The real product was four interfaces serving five humans — customer, driver, store owner, operations admin, and the marketing side that ran the push for every promotion. Each of them saw a different version of the same order.',
          'The customer saw a confirmation screen. The driver saw a pickup address. The store saw an order to pack. Operations saw a row in a spreadsheet. Marketing saw a conversion. When something went wrong — a missing item, a delay, a wrong address — every surface had its own version of the story, and none of them matched.',
          'The job was not to design screens. It was to design the shared logic so every surface showed the same truth.',
        ]}
        visuals={[
          { label: 'Ecosystem map — five users, four surfaces, one order' },
        ]}
      />

      {/* ── Chapter 2 ─────────────────────────── */}
      <Chapter
        number="02"
        title="When an order breaks, who hears it first?"
        tension="The smallest fix. The biggest impact."
        body={[
          'Operations was drowning. Orders were missing their SLA and nobody noticed until a customer called angry. The dashboard showed everything — but when everything is visible, nothing is loud.',
          'The options were two. Build a proper notification centre with priority queues, filters, and assignment rules — three weeks of engineering and training. Or build one sound.',
          'I built the sound. A single escalating audio alert — I called it the Siren — that played in the ops dashboard the moment an order crossed its SLA. No new screen. No new workflow. One sound. Missable orders became unmissable.',
          'The constraint that shaped this was the team. Four engineers and a peak-season deadline. A notification centre would have been correct. The Siren was shippable. And shippable in time is worth more than correct in theory.',
        ]}
        visuals={[
          { label: 'Ops dashboard — Siren alert state' },
        ]}
      />

      {/* ── Chapter 3 ─────────────────────────── */}
      <Chapter
        number="03"
        title="The Admin Layer."
        tension="The dashboard is not the product. The control is."
        body={[
          'The admin layer had three surfaces — Price Control, CRM, Operations Dashboard. Price Control was the most sensitive. A single mistake changed margins across 3,000+ SKUs. I designed it around three principles: show the impact before the save. Separate draft from live. Make rollback one click.',
          'The brand system had to survive a print shop in Malegaon and a Shopify store at the same time. Logo lockups, two typefaces, a color system built for cheap CMYK and accurate digital.',
        ]}
        visuals={[
          { label: 'Price Control — draft vs live state' },
          { label: 'CRM view + Operations dashboard' },
          { label: 'Brand system — logo, type, color' },
        ]}
      />

      {/* ── Metric Strip ──────────────────────── */}
      <div style={{ padding: '0 2.5rem' }}>
        <MetricStrip
          metrics={[
            { label: 'Downloads', value: '3,000+' },
            { label: 'Orders', value: '10,000+' },
            { label: 'Surfaces', value: '4' },
            { label: 'Years', value: '2.5' },
          ]}
        />
      </div>

      {/* ── Reflection ────────────────────────── */}
      <section
        style={{
          padding: 'var(--space-xl) 2.5rem',
          maxWidth: '860px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '2rem',
          }}
        >
          What I&rsquo;d do differently.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            'The Siren solved the problem but created a dependency on the sound. If someone muted the tab, orders still slipped. A proper escalation layer — something that noticed the dashboard was being ignored and routed to another channel — would have been more robust.',
            "The bigger lesson: when you design for a team of four, you design for today. When you design for a team of forty, you design for tomorrow. I was designing for today the whole time — and by the time tomorrow came, we were already rebuilding. Next time I'd spend the first week asking what the team looks like in year two, not year zero.",
          ].map((para, i) => (
            <p
              key={i}
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
      </section>

      {/* ── Links Out ─────────────────────────── */}
      <section
        style={{
          padding: '0 2.5rem var(--space-xl)',
          maxWidth: '860px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '1.5rem',
          }}
        >
          Read the full story
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Full case study on Notion →', href: '#' },
            { label: 'Long-form on Medium →', href: '#' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--ink)',
                textDecoration: 'none',
              }}
              className="underline-reveal"
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.06em',
              color: 'var(--muted)',
              textDecoration: 'none',
            }}
            className="underline-reveal"
          >
            ← Back to work
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
