import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ProjectsGrid from '@/components/ProjectsGrid';
import { getAllProjects } from '@/lib/sanity';

export const metadata = {
  title: 'Projects',
  description:
    'Explore CAD Lanka Engineering project portfolio — railway infrastructure, overhead line electrification, tram systems, and mechanical engineering across Norway and the UK.',
};

export const revalidate = 60; // ISR — revalidate every 60s

export default async function ProjectsPage() {
  let projects = [];
  try {
    projects = await getAllProjects();
  } catch {
    // Sanity not configured yet — ProjectsGrid will show seed content
  }

  return (
    <>
      <Header />
      <main>
        {/* Page header */}
        <header className="bg-blueprint border-b border-outline-variant">
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

        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop py-xl">
          <ProjectsGrid projects={projects} />
        </div>
      </main>
      <Footer />
    </>
  );
}
