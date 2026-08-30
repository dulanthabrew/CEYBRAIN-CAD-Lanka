'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full h-20 flex items-center justify-between px-margin-mobile md:px-margin-desktop transition-all duration-300 ${
          scrolled
            ? 'bg-primary/90 backdrop-blur-md border-b border-on-primary-container/40 shadow-lg'
            : 'bg-primary border-b border-on-primary-container'
        }`}
      >
        {/* Real Logo — §22.4 Next.js Image with SEO alt text and priority */}
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="CAD Lanka Engineering Home"
        >
          <Image
            src="/images/logo-dark-bg.png"
            alt="CAD Lanka Engineering logo"
            width={240}
            height={40}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center h-full font-button-text text-button-text gap-xs">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <li key={href} className="h-full flex items-center">
                <Link
                  href={href}
                  className={`group relative h-full flex items-center px-sm transition-colors duration-200 ${
                    isActive ? 'text-secondary-container font-semibold' : 'text-on-primary hover:text-secondary-container'
                  }`}
                >
                  <span>{label}</span>

                  {/* 2px Safety Orange animated underline bar — §14.5 */}
                  <span
                    className={`absolute bottom-0 left-sm right-sm h-[2px] bg-secondary-container transition-all duration-200 ease-out origin-left ${
                      isActive
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* "Get a Quote" CTA — Safety Orange, every page per §2.5 */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-secondary-container text-white font-button-text text-button-text py-sm px-md rounded hover:bg-secondary active:scale-[0.98] transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger button with clear hover/tap feedback */}
        <button
          className="md:hidden text-on-primary p-xs rounded border border-on-primary-container/40 hover:border-secondary-container hover:text-secondary-container active:scale-95 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation drawer — §15.5 visual redesign & §16 fix */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-primary/95 bg-blueprint-dark backdrop-blur-lg border-t border-on-primary-container flex flex-col justify-between pb-xl">
          <div>
            <ul className="flex flex-col w-full">
              {NAV_LINKS.map(({ label, href }, idx) => {
                const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
                const refNum = String(idx + 1).padStart(2, '0');
                return (
                  <li
                    key={href}
                    className="border-b border-on-primary-container/40 relative animate-slide-in-right"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`group relative flex items-center justify-between px-margin-mobile py-lg font-button-text text-button-text transition-colors ${
                        isActive ? 'text-secondary-container font-semibold' : 'text-on-primary hover:text-secondary-container'
                      }`}
                    >
                      {/* Left vertical Safety Orange indicator — §14.5 */}
                      <span
                        className={`absolute left-0 top-0 bottom-0 w-[4px] bg-secondary-container transition-all duration-200 ease-out ${
                          isActive
                            ? 'opacity-100 scale-y-100'
                            : 'opacity-0 scale-y-0 group-hover:opacity-50 group-hover:scale-y-100'
                        }`}
                      />
                      <span className="text-body-lg uppercase tracking-wider">{label}</span>
                      <span className="font-label-mono text-label-mono text-outline group-hover:text-secondary-container transition-colors">
                        {`${refNum} //`}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA & Footer details inside drawer */}
          <div className="px-margin-mobile pt-lg border-t border-on-primary-container/60 flex flex-col gap-md">
            <div className="dimension-line mb-xs" />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-secondary-container text-white font-button-text text-button-text py-md px-md rounded shadow-md hover:bg-secondary active:scale-[0.98] transition-all uppercase tracking-wider"
            >
              Get a Quote →
            </Link>
            <div className="font-label-mono text-label-mono text-outline text-center uppercase tracking-widest text-[11px] pt-xs">
              CAD Lanka Engineering • Sri Lanka / Norway / UK
            </div>
          </div>
        </div>
      )}
    </>
  );
}
