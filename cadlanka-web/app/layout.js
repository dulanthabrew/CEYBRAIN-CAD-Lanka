import './globals.css';

export const metadata = {
  title: {
    template: '%s | CAD Lanka Engineering',
    default: 'CAD Lanka Engineering — Precision Engineering for Global Railway Infrastructure',
  },
  description:
    'CAD Lanka Engineering specializes in overhead line electrification, mechanical design, and international railway infrastructure collaboration. Based in Sri Lanka, working globally.',
  keywords: ['CAD Lanka', 'railway engineering', 'overhead line', 'mechanical design', 'FEA', 'Sri Lanka'],
  openGraph: {
    siteName: 'CAD Lanka Engineering',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
