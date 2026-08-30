'use client';

import { useState, useEffect } from 'react';
import { urlFor } from '@/lib/sanity';

/**
 * Technical Gallery Component — §17.3
 * Renders a responsive grid of project images with captions and click-to-expand lightbox.
 * Handles zero-to-many images gracefully.
 */
export default function ProjectGallery({ gallery = [] }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section aria-labelledby="gallery-heading">
      <div className="flex items-center gap-sm font-label-mono text-label-mono text-outline uppercase tracking-widest mb-md">
        <span className="w-8 h-px bg-outline block" />
        Technical Gallery
      </div>
      <h2 id="gallery-heading" className="sr-only">
        Technical Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
        {gallery.map((img, i) => {
          let thumbUrl = img.url;
          let fullUrl = img.url;
          if (!thumbUrl && img.asset) {
            try {
              thumbUrl = urlFor(img).width(600).height(400).fit('crop').auto('format').url();
              fullUrl = urlFor(img).width(1600).auto('format').url();
            } catch {
              // Fallback
            }
          }
          const figLabel = `FIG ${String(i + 1).padStart(2, '0')}`;
          const captionText = img.caption || img.alt || `Gallery view ${i + 1}`;

          return (
            <div
              key={img._key || i}
              onClick={() => setActiveImage({ thumbUrl, fullUrl, captionText, figLabel, alt: img.alt })}
              className="group cursor-pointer bg-surface-container-lowest border border-outline-variant rounded overflow-hidden tech-card flex flex-col transition-all"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage({ thumbUrl, fullUrl, captionText, figLabel, alt: img.alt });
                }
              }}
              aria-label={`View full size: ${captionText}`}
            >
              {/* Image box with hover zoom */}
              <div className="aspect-[4/3] bg-surface-variant relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${thumbUrl || fullUrl}')` }}
                  role="img"
                  aria-label={img.alt || captionText}
                />
                <div className="absolute top-xs left-xs bg-primary/90 text-on-primary font-label-mono text-[10px] px-xs py-0.5 rounded-sm">
                  {figLabel}
                </div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-surface-container-lowest text-primary font-label-mono text-label-mono px-sm py-xs rounded border border-outline-variant uppercase tracking-wider shadow-md">
                    + ENLARGE
                  </span>
                </div>
              </div>

              {/* Caption footer */}
              <div className="p-sm bg-surface-container-lowest border-t border-outline-variant">
                <p className="font-label-mono text-label-mono text-on-surface-variant line-clamp-2">
                  {captionText}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-md flex items-center justify-center p-md animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface-container-lowest border border-outline-variant rounded overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="border-b border-outline-variant px-md py-sm flex justify-between items-center bg-blueprint">
              <div className="flex items-center gap-xs font-label-mono text-label-mono text-secondary-container">
                <span className="w-2 h-2 rounded-full bg-secondary-container" />
                {activeImage.figLabel}
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="text-on-surface-variant hover:text-primary font-label-mono text-label-mono px-xs py-0.5 border border-outline-variant rounded hover:border-primary transition-colors"
                aria-label="Close modal"
              >
                [ESC / CLOSE]
              </button>
            </div>

            {/* Modal image */}
            <div className="max-h-[70vh] bg-primary flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.fullUrl || activeImage.thumbUrl}
                alt={activeImage.alt || activeImage.captionText}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Modal caption */}
            <div className="p-md bg-surface-container-lowest border-t border-outline-variant">
              <p className="font-body-md text-body-md text-primary font-medium">
                {activeImage.captionText}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
