import Link from 'next/link';
import Image from 'next/image';

// Standardized footer used identically on every page — §2.4
// Columns: Logo+tagline | Navigation | Global Network (Norway, UK only) | Legal
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t-2 border-on-primary-container w-full">
      <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop py-lg grid grid-cols-1 md:grid-cols-4 gap-gutter">

        {/* Col 1 — Brand + tagline + copyright */}
        <div className="flex flex-col gap-sm col-span-1 md:col-span-1">
          <Link href="/" className="hover:opacity-90 transition-opacity" aria-label="CAD Lanka Engineering Home">
            <Image
              src="/images/logo-dark-bg.png"
              alt="CAD Lanka Engineering logo"
              width={180}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="font-label-mono text-label-mono text-on-primary-container leading-relaxed">
            Engineering precision for global infrastructure. Headquartered in Sri Lanka, operating globally.
          </p>
          {/* System status indicator */}
          <div className="flex items-center gap-xs text-on-primary-container font-label-mono text-label-mono mt-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse-dot" />
            SYSTEM ONLINE
          </div>
          <p className="font-label-mono text-label-mono text-on-primary-container opacity-60 mt-auto pt-md border-t border-on-primary-container/30">
            © 2014–{year} CAD Lanka Engineering.<br />All rights reserved. Precision Built.
          </p>
        </div>

        {/* Col 2 — Navigation */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-mono text-label-mono text-on-primary border-b border-on-primary-container pb-xs mb-xs uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="flex flex-col gap-xs font-label-mono text-label-mono">
            {[
              ['Home', '/'],
              ['Services', '/services'],
              ['Projects', '/projects'],
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-on-primary-container hover:text-white hover:underline decoration-secondary-container underline-offset-4 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Global Network (Norway + UK only — §3.4, Germany/Austria removed) */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-mono text-label-mono text-on-primary border-b border-on-primary-container pb-xs mb-xs uppercase tracking-wider">
            Global Network
          </h4>
          <ul className="flex flex-col gap-xs font-label-mono text-label-mono">
            {[
              ['Norway Partners', '/about#norway'],
              ['UK Partners', '/about#uk'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-on-primary-container hover:text-white hover:underline decoration-secondary-container underline-offset-4 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Legal */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-mono text-label-mono text-on-primary border-b border-on-primary-container pb-xs mb-xs uppercase tracking-wider">
            Legal
          </h4>
          <ul className="flex flex-col gap-xs font-label-mono text-label-mono">
            {[
              ['Privacy Policy', '/privacy'],
              ['Terms of Service', '/terms'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-on-primary-container hover:text-white hover:underline decoration-secondary-container underline-offset-4 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
