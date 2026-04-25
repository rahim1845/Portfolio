interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="section-rule" style={{ marginBottom: '3rem' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          whiteSpace: 'nowrap',
        }}
      >
        ({number}) {title}
      </span>
    </div>
  );
}
