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

  // Scroll listener for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background wash/bleed
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full h-20 flex items-center justify-between px-margin-mobile md:px-margin-desktop transition-all duration-300 ${
          scrolled
            ? 'bg-primary border-b border-on-primary-container/40 shadow-lg'
            : 'bg-primary border-b border-on-primary-container'
        }`}
      >
        {/* Real Logo — Next.js Image with SEO alt text and priority */}
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

                  {/* 2px Safety Orange animated underline bar */}
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

        {/* "Get a Quote" CTA — Safety Orange */}
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

      {/* Mobile navigation drawer — 100% Solid Deep Navy for crisp contrast across all pages */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-50 bg-[#051625] border-t border-on-primary-container flex flex-col justify-between pb-xl overflow-y-auto">
          <div>
            <ul className="flex flex-col w-full">
              {NAV_LINKS.map(({ label, href }, idx) => {
                const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
                const refNum = String(idx + 1).padStart(2, '0');
                return (
                  <li
                    key={href}
                    className={`border-b border-on-primary-container/30 relative transition-colors ${
                      isActive ? 'bg-primary-container/60' : 'hover:bg-primary-container/30'
                    }`}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`group relative flex items-center justify-between px-margin-mobile py-lg font-button-text text-button-text transition-colors ${
                        isActive ? 'text-secondary-container font-semibold' : 'text-white hover:text-secondary-container'
                      }`}
                    >
                      {/* Left vertical Safety Orange indicator */}
                      <span
                        className={`absolute left-0 top-0 bottom-0 w-[4px] bg-secondary-container transition-all duration-200 ease-out ${
                          isActive
                            ? 'opacity-100 scale-y-100'
                            : 'opacity-0 scale-y-0 group-hover:opacity-50 group-hover:scale-y-100'
                        }`}
                      />
                      <span className="text-body-lg uppercase tracking-wider font-semibold text-white">
                        {label}
                      </span>
                      <span
                        className={`font-label-mono text-label-mono font-bold ${
                          isActive ? 'text-secondary-container' : 'text-primary-fixed-dim'
                        } group-hover:text-secondary-container transition-colors`}
                      >
                        {`${refNum} //`}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA & Footer details inside drawer */}
          <div className="px-margin-mobile pt-lg border-t border-on-primary-container/60 flex flex-col gap-md bg-[#051625]">
            <div className="dimension-line mb-xs" />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-secondary-container text-white font-button-text text-button-text py-md px-md rounded shadow-md hover:bg-secondary active:scale-[0.98] transition-all uppercase tracking-wider"
            >
              Get a Quote →
            </Link>
            <div className="font-label-mono text-label-mono text-primary-fixed-dim text-center uppercase tracking-widest text-[11px] pt-xs">
              CAD Lanka Engineering • Sri Lanka / Norway / UK
            </div>
          </div>
        </div>
      )}
    </>
  );
}
