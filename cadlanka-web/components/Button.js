/**
 * Button variants per DESIGN.md Components → Buttons:
 *   primary  — Safety Orange fill (#FE6B00), white text, 2px radius
 *   secondary — Steel Navy 1px outline, Steel Navy text, no fill
 *   ghost     — Monospaced text + arrow, lower-priority navigation
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-xs font-button-text text-button-text transition-all duration-150 focus-visible:outline-2 focus-visible:outline-secondary-container disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-secondary-container text-white rounded py-sm px-md hover:bg-secondary active:scale-[0.98]',
    secondary:
      'border border-primary text-primary rounded py-sm px-md hover:bg-primary hover:text-white active:scale-[0.98]',
    ghost:
      'font-label-mono text-label-mono text-primary hover:text-secondary transition-colors',
  };

  const classes = [base, variants[variant], className].join(' ');

  if (href) {
    const { default: Link } = require('next/link');
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {variant === 'ghost' && (
          <span aria-hidden="true" className="ml-xs">→</span>
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
      {variant === 'ghost' && (
        <span aria-hidden="true" className="ml-xs">→</span>
      )}
    </button>
  );
}
