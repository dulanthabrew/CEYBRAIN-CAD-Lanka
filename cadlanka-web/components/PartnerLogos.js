'use client';

import React from 'react';
import { urlFor } from '@/lib/sanity';

export default function PartnerLogos({ logos = [] }) {
  // Only render if there are partner items configured
  const partnersList = logos && logos.length > 0 ? logos : [];

  if (partnersList.length === 0) {
    return null;
  }

  const isTwoPartners = partnersList.length <= 2;

  return (
    <section
      className="py-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant"
      aria-label="Trusted Industry Partners and Collaborators"
    >
      <div className="max-w-content mx-auto">
        {/* Section title header */}
        <div className="mb-md flex items-center justify-between font-label-mono text-label-mono text-outline text-[11px] uppercase tracking-wider border-b border-outline-variant/60 pb-xs">
          <div className="flex items-center gap-xs text-on-surface-variant">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            <span>International Engineering Collaborations & Partner Network</span>
          </div>
          <span className="font-label-mono text-[10px] text-outline opacity-70">
            NETWORK // ACTIVE
          </span>
        </div>

        {/* Real Logo Partner Cards */}
        <div
          className={
            isTwoPartners
              ? 'grid grid-cols-1 sm:grid-cols-2 gap-md max-w-4xl mx-auto items-stretch'
              : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md items-stretch'
          }
        >
          {partnersList.map((partner, idx) => {
            let logoSrc = null;
            if (partner.logoImage) {
              try {
                logoSrc = urlFor(partner.logoImage).width(800).fit('max').auto('format').url();
              } catch {
                // fallback
              }
            }

            const CardWrapper = partner.url ? 'a' : 'div';
            const linkProps = partner.url
              ? { href: partner.url, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            const isPoweron = partner.name?.toLowerCase().includes('poweron');
            const isFlatt = partner.name?.toLowerCase().includes('flatt');
            const countryLabel = partner.country || (isPoweron ? 'Norway' : isFlatt ? 'United Kingdom' : 'Partner Network');
            const domainLabel = partner.url ? partner.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : '';

            return (
              <CardWrapper
                key={partner._key || partner.id || idx}
                {...linkProps}
                className="w-full p-lg border border-outline-variant/80 rounded bg-surface-container-low flex flex-col justify-between hover:border-primary hover:bg-surface-container-lowest hover:shadow-tech transition-all duration-200 group cursor-pointer relative overflow-hidden min-h-[220px]"
              >
                {/* Top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-outline-variant group-hover:bg-secondary transition-colors" />

                {/* Top: Code & Country */}
                <div className="flex items-center justify-between font-label-mono text-[10px] text-outline mb-sm uppercase tracking-wider">
                  <span className="text-secondary font-bold">
                    {partner.code || `PRT-${String(idx + 1).padStart(2, '0')}`}
                  </span>
                  <span className="flex items-center gap-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline group-hover:bg-secondary transition-colors" />
                    {countryLabel}
                  </span>
                </div>

                {/* Center: Uploaded Logo Image with object-contain */}
                <div className="my-sm flex flex-col items-center justify-center text-center w-full flex-grow py-xs">
                  {logoSrc ? (
                    <div className="w-full h-16 md:h-20 flex items-center justify-center px-sm">
                      <img
                        src={logoSrc}
                        alt={partner.name || 'Partner logo'}
                        className="max-h-14 md:max-h-16 w-auto max-w-[92%] object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="font-headline-sm text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors tracking-tight uppercase">
                        {partner.name}
                      </div>
                      {domainLabel && (
                        <span className="font-label-mono text-label-mono text-[11px] text-outline mt-xs group-hover:text-primary transition-colors">
                          {domainLabel}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom: Status & External indicator */}
                <div className="pt-md mt-auto border-t border-outline-variant/50 flex items-center justify-between font-label-mono text-[10px] text-outline">
                  <span className="uppercase tracking-wider">VERIFIED PARTNER</span>
                  <span className="text-secondary group-hover:translate-x-0.5 transition-transform font-bold flex items-center gap-xs">
                    <span>{domainLabel || 'VISIT SITE'}</span>
                    <span>↗</span>
                  </span>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
