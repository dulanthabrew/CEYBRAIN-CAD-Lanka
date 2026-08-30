'use client';

import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden flex flex-col h-full animate-pulse">
      {/* Image placeholder */}
      <div className="h-64 bg-surface-container-high relative">
        <div className="absolute top-md left-md w-24 h-5 bg-outline-variant/40 rounded-sm" />
        <div className="absolute top-md right-md w-12 h-5 bg-outline-variant/40 rounded-sm" />
      </div>

      {/* Content placeholder */}
      <div className="p-lg flex flex-col gap-md flex-grow">
        <div className="w-full h-px bg-outline-variant" />
        <div className="w-3/4 h-6 bg-outline-variant/40 rounded-sm" />
        <div className="w-1/2 h-4 bg-outline-variant/30 rounded-sm" />
        <div className="mt-auto pt-sm border-t border-outline-variant flex justify-between items-center">
          <div className="w-20 h-4 bg-outline-variant/30 rounded-sm" />
          <div className="w-4 h-4 bg-outline-variant/40 rounded-sm" />
        </div>
      </div>
    </div>
  );
}
