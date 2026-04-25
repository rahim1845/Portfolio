interface ContextRow {
  label: string;
  value: string;
}

interface ContextStripProps {
  rows: ContextRow[];
}

export default function ContextStrip({ rows }: ContextStripProps) {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: `repeat(${rows.length}, 1fr)`,
        padding: '0',
      }}
    >
      {rows.map(({ label, value }, i) => (
        <div
          key={label}
          style={{
            padding: '2rem 2rem',
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
              marginBottom: '0.5rem',
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--ink)',
              lineHeight: 1.4,
            }}
          >
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}
