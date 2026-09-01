'use client';

import React, { useEffect, useRef, useState } from 'react';

function StatItem({ targetValue, suffix = '', label, refCode, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  const numericTarget = parseInt(targetValue, 10) || 0;

  useEffect(() => {
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp = null;
          const duration = 1500; // 1.5 seconds

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easedProgress * numericTarget);

            setCount(currentCount);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          setTimeout(() => {
            window.requestAnimationFrame(step);
          }, delay);

          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [numericTarget, delay, hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="py-md md:py-lg flex flex-col items-center justify-center text-center relative"
    >
      <span className="absolute top-sm right-sm font-label-mono text-label-mono text-secondary font-bold hidden md:block text-[10px]">
        {refCode}
      </span>
      <span className="font-headline-md text-headline-md text-primary mb-xs">
        {hasAnimated ? count : 0}
        {suffix}
      </span>
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function AnimatedStats({ stats }) {
  const years = stats?.yearsInOperation ? String(stats.yearsInOperation).replace('+', '') : '12';
  const countries = stats?.partnerCountries ? String(stats.partnerCountries) : '2';
  const projects = stats?.projectsCompleted ? String(stats.projectsCompleted).replace('+', '') : '150';

  const STATS = [
    { value: years, suffix: '+', label: 'Years in Operation', ref: 'STAT-01', delay: 0 },
    { value: countries, suffix: '', label: 'International Partner Countries', ref: 'STAT-02', delay: 200 },
    { value: projects, suffix: '+', label: 'Projects Completed', ref: 'STAT-03', delay: 400 },
  ];

  return (
    <section className="border-b border-outline-variant bg-surface-container-lowest" aria-label="Company statistics">
      <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
          {STATS.map((stat) => (
            <StatItem
              key={stat.ref}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              refCode={stat.ref}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
