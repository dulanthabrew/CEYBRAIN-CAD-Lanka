import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-blueprint flex items-center justify-center px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-lg border border-outline-variant bg-surface-container-lowest rounded p-xl relative corner-bracket">
          <div className="font-label-mono text-label-mono text-outline uppercase tracking-widest mb-md">
            ERR_404 // ROUTE_NOT_FOUND
          </div>
          <h1 className="font-headline-md text-headline-md text-primary mb-md">Page Not Found</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
            The requested route does not exist in the current build. Return to the home page or use the navigation above.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-sm bg-secondary-container text-white font-button-text text-button-text py-sm px-md rounded hover:bg-secondary transition-colors"
          >
            Return Home →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
