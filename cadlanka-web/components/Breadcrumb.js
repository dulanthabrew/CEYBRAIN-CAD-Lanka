import Link from 'next/link';

/**
 * Breadcrumb — monospace, > separators, per §2.3
 *
 * @param {Array<{label: string, href?: string}>} items
 *   e.g. [{ label: 'HOME', href: '/' }, { label: 'SERVICES' }]
 *   The last item is always the current page (no link, bold).
 */
export default function Breadcrumb({ items = [], dark = false }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-label-mono text-[11px] sm:text-label-mono uppercase tracking-widest max-w-full ${
        dark ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
      }`}
    >
      <ol className="flex flex-wrap items-center gap-y-xs gap-x-xs max-w-full">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-xs whitespace-nowrap max-w-full">
              {index > 0 && (
                <span className={`select-none px-0.5 ${dark ? 'text-primary-fixed-dim/70' : 'text-outline'}`}>
                  &gt;
                </span>
              )}
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className={`transition-colors inline-block ${
                    dark
                      ? 'text-primary-fixed hover:text-secondary-container'
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`inline-block align-bottom ${
                    isLast
                      ? `${dark ? 'text-white' : 'text-primary'} font-bold max-w-[150px] sm:max-w-none truncate`
                      : dark
                      ? 'text-primary-fixed-dim'
                      : 'text-on-surface-variant'
                  }`}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
