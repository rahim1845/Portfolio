interface Metric {
  label: string;
  value: string;
}

interface MetricStripProps {
  metrics: Metric[];
}

export default function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        margin: 'var(--space-l) 0',
      }}
    >
      {metrics.map(({ label, value }, i) => (
        <div
          key={label}
          style={{
            padding: '1.75rem 2rem',
            borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '0.375rem',
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
            }}
          >
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}
