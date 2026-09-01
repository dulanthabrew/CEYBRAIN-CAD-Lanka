/**
 * TechCard — DESIGN.md Technical Card spec:
 *   White bg, 1px gray border, 2px radius
 *   Optional monospace REF/serial label in top-right
 *   Hard 4px offset hover shadow (no blur)
 */
export default function TechCard({
  children,
  refCode,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <div
      className={[
        'bg-surface-container-lowest border border-outline-variant rounded relative',
        hover ? 'tech-card' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {refCode && (
        <span className="absolute top-md right-md font-label-mono text-label-mono text-secondary font-bold select-none">
          {refCode}
        </span>
      )}
      {children}
    </div>
  );
}
