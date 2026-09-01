'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

// Official CAD Lanka Engineering client project images
const SLIDES = [
  {
    id: 0,
    refId: 'CL-OLE-01',
    src: '/images/hero/hero-slide-1.webp',
    alt: 'CAD Lanka Engineering — 3D CAD modeling and railway overhead electrification engineering',
  },
  {
    id: 1,
    refId: 'CL-RLY-02',
    src: '/images/hero/hero-slide-2.webp',
    alt: 'CAD Lanka Engineering — Precision 2D technical drawings and engineering drafting',
  },
  {
    id: 2,
    refId: 'CL-ME-03',
    src: '/images/hero/hero-slide-3.webp',
    alt: 'CAD Lanka Engineering — Mechanical component CAD design and structural detailing',
  },
  {
    id: 3,
    refId: 'CL-BIM-04',
    src: '/images/hero/hero-slide-4.webp',
    alt: 'CAD Lanka Engineering — BIM Revit modeling and infrastructure technical documentation',
  },
];

const INTERVAL = 5000; // 5 seconds

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 150);
  }, [transitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  // Auto-rotate — pause-on-hover
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  return (
    <section
      className="relative w-full overflow-hidden border-b border-outline-variant"
      style={{ minHeight: '600px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero image carousel"
    >
      {/* Slide images */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={i !== current}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-primary opacity-80 z-10" />
          {/* Background image with subtle Ken Burns scale */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out transform ${
              i === current ? 'scale-105' : 'scale-100'
            }`}
            style={{ backgroundImage: `url('${slide.src}')` }}
            role="img"
            aria-label={slide.alt}
          />
        </div>
      ))}

      {/* Hero content — always on top */}
      <div className="relative z-20 px-margin-mobile md:px-margin-desktop py-xl lg:py-[120px] max-w-content mx-auto flex flex-col justify-center items-start min-h-[600px]">
        {/* REF label — switches dynamically per slide §19 */}
        <div className="font-label-mono text-label-mono text-secondary-fixed mb-md px-sm py-xs border border-secondary-fixed/30 bg-primary-container/50 inline-block uppercase tracking-widest backdrop-blur-sm transition-all duration-300">
          {`REF_ID: ${SLIDES[current].refId || 'CL-HR-01'}`}
        </div>

        {/* H1 */}
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white max-w-4xl mb-md leading-tight">
          Railway Electrification &bull; Mechanical Design &bull; MEP Drawings &bull; CAD Engineering &bull; Technical Documentation
        </h1>

        {/* Subheadline */}
        <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-3xl mb-lg border-l-2 border-secondary pl-md">
          CAD Lanka Engineering is an engineering design and CAD/BIM service company providing professional technical drawing, 3D modelling and engineering documentation solutions for railway, MEP, mechanical and infrastructure projects.
        </p>

        {/* CTAs — Centered on mobile (§20.2), left-aligned on desktop */}
        <div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto items-center sm:items-start">
          <Link
            href="/projects"
            className="w-full max-w-[280px] sm:max-w-none sm:w-auto bg-secondary-container text-white font-button-text text-button-text py-sm px-lg rounded flex items-center justify-center gap-xs hover:bg-secondary transition-colors text-center"
          >
            View Our Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link
            href="/contact"
            className="w-full max-w-[280px] sm:max-w-none sm:w-auto border border-primary-fixed text-primary-fixed font-button-text text-button-text py-sm px-lg rounded flex items-center justify-center hover:bg-primary-container transition-colors text-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Slide indicators (dots) — §15.3 */}
      <div className="absolute bottom-md left-1/2 -translate-x-1/2 z-30 flex items-center gap-sm">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-secondary-container w-7' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  );
}
