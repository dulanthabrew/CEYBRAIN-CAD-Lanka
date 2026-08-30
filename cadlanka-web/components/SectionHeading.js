/**
 * SectionHeading — consistent section header pattern across all pages:
 *   eyebrow (monospace label with leading line) + large heading + optional description
 *   Per the reference screenshots and DESIGN.md typography.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  description,
  refCode,
  align = 'left', // 'left' | 'center'
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={['flex flex-col gap-sm', alignClass, className].join(' ')}>
      {eyebrow && (
        <div className={`flex items-center gap-sm font-label-mono text-label-mono text-outline uppercase tracking-widest ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="w-8 h-px bg-outline block flex-shrink-0" />
          {eyebrow}
          {refCode && (
            <span className="ml-auto font-label-mono text-label-mono text-outline hidden md:block">
              {refCode}
            </span>
          )}
        </div>
      )}
      <h2 className="font-headline-md text-headline-md text-primary">
        {heading}
      </h2>
      {description && (
        <p className={`font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-secondary pl-md ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
