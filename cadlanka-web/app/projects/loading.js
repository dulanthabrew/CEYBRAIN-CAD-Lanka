import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import SkeletonCard from '@/components/SkeletonCard';

export default function ProjectsLoading() {
  return (
    <>
      <Header />
      <main>
        {/* Page header skeleton */}
        <header className="bg-surface border-b border-outline-variant">
          <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop py-lg">
            <Breadcrumb
              items={[
                { label: 'HOME', href: '/' },
                { label: 'PROJECTS' },
              ]}
            />
            <div className="mt-md">
              <div className="flex items-center gap-sm font-label-mono text-label-mono text-outline uppercase tracking-widest mb-sm">
                <span className="w-8 h-px bg-outline block" />
                Project Portfolio
              </div>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md">
                Engineering Projects
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-secondary pl-md">
                A selection of infrastructure and mechanical design projects delivered to international standards across Norway, the United Kingdom, and beyond.
              </p>
            </div>
          </div>
        </header>

        {/* 2-per-row Skeleton Grid — §18.1 */}
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop py-xl">
          {/* Skeleton category filter bar */}
          <div className="flex flex-wrap gap-sm mb-lg border-b border-outline-variant pb-md">
            {['All Projects', 'Railway', 'Tram Systems', 'Overhead Line', 'Components'].map((cat, i) => (
              <div
                key={cat}
                className={`font-label-mono text-label-mono px-sm py-xs rounded border uppercase tracking-wider ${
                  i === 0
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface-container-lowest text-outline border-outline-variant/60'
                }`}
              >
                {cat}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
