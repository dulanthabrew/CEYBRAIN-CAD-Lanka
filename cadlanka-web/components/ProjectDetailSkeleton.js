'use client';

import React from 'react';

/**
 * Dedicated Skeleton for Project Detail page — §18.2
 * Matches exact structure of project detail page (hero banner, metadata row,
 * overview, execution steps, gallery grid, and system specs sidebar).
 */
export default function ProjectDetailSkeleton() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero banner skeleton */}
      <div className="w-full h-[280px] sm:h-[360px] md:h-[440px] bg-surface-container-high relative overflow-hidden border-b border-outline-variant">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
        <div className="absolute inset-0 flex items-end max-w-content mx-auto px-margin-mobile md:px-margin-desktop pb-md sm:pb-lg">
          <div className="bg-primary/85 border border-outline-variant/40 px-md py-xs rounded-sm w-64 h-7" />
        </div>
      </div>

      {/* Content grid */}
      <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">

          {/* Main content — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-xl">

            {/* Title + metadata row skeleton */}
            <div>
              <div className="h-10 w-3/4 bg-outline-variant/40 rounded-sm mb-lg" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-md border border-outline-variant rounded divide-x divide-outline-variant bg-surface-container-lowest p-sm">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="px-sm py-xs flex flex-col gap-xs">
                    <div className="w-14 h-3 bg-outline-variant/30 rounded-sm" />
                    <div className="w-20 h-4 bg-outline-variant/50 rounded-sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* Overview skeleton */}
            <div className="flex flex-col gap-md">
              <div className="w-36 h-4 bg-outline-variant/40 rounded-sm" />
              <div className="border-l-2 border-outline-variant/60 pl-md flex flex-col gap-sm">
                <div className="w-full h-4 bg-outline-variant/30 rounded-sm" />
                <div className="w-full h-4 bg-outline-variant/30 rounded-sm" />
                <div className="w-4/5 h-4 bg-outline-variant/30 rounded-sm" />
              </div>
            </div>

            {/* Technical Execution skeleton */}
            <div className="flex flex-col gap-md">
              <div className="w-44 h-4 bg-outline-variant/40 rounded-sm" />
              <div className="flex flex-col gap-md">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col gap-sm">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 rounded bg-outline-variant/40" />
                      <div className="w-48 h-5 bg-outline-variant/50 rounded-sm" />
                    </div>
                    <div className="w-full h-4 bg-outline-variant/30 rounded-sm pl-9" />
                    <div className="w-5/6 h-4 bg-outline-variant/30 rounded-sm pl-9" />
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Gallery skeleton */}
            <div className="flex flex-col gap-md">
              <div className="w-40 h-4 bg-outline-variant/40 rounded-sm" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden flex flex-col">
                    <div className="aspect-[4/3] bg-surface-container-high" />
                    <div className="p-sm border-t border-outline-variant">
                      <div className="w-3/4 h-3 bg-outline-variant/40 rounded-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back link placeholder */}
            <div className="pt-md border-t border-outline-variant">
              <div className="w-36 h-4 bg-outline-variant/30 rounded-sm" />
            </div>
          </div>

          {/* Sidebar — System Specifications skeleton */}
          <div className="flex flex-col gap-lg">
            <div className="bg-surface-container-lowest border border-outline-variant rounded sticky top-24 overflow-hidden">
              <div className="border-b border-outline-variant px-lg py-md flex justify-between items-center bg-surface">
                <div className="w-28 h-5 bg-outline-variant/50 rounded-sm" />
                <div className="w-16 h-4 bg-outline-variant/30 rounded-sm" />
              </div>
              <div className="divide-y divide-outline-variant">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="px-lg py-sm flex justify-between gap-md">
                    <div className="w-20 h-4 bg-outline-variant/30 rounded-sm" />
                    <div className="w-24 h-4 bg-outline-variant/40 rounded-sm" />
                  </div>
                ))}
              </div>
              <div className="border-t border-outline-variant px-lg py-md">
                <div className="w-full h-10 bg-secondary-container/40 rounded" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
