import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cadlankaeng.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | CAD Lanka Engineering',
    default: 'CAD Lanka Engineering — Precision Engineering for Global Railway Infrastructure',
  },
  description:
    'CAD Lanka Engineering specializes in 2D/3D CAD drafting, BIM coordination, overhead line electrification (OLE), and international railway infrastructure collaboration. Established in 2014.',
  keywords: [
    'CAD Lanka Engineering',
    'Railway CAD',
    'Overhead Line Electrification',
    'OLE Catenary Design',
    'BIM Revit Coordination',
    '2D to 3D CAD Conversion',
    'Mechanical Engineering Drafting',
    'Norway Railway Collaboration',
    'UK Rail Engineering',
    'Sri Lanka Engineering Consultancy',
  ],
  authors: [{ name: 'CAD Lanka Engineering (Pvt) Ltd' }],
  creator: 'CAD Lanka Engineering (Pvt) Ltd',
  publisher: 'CAD Lanka Engineering (Pvt) Ltd',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'CAD Lanka Engineering — Precision 2D/3D CAD, BIM & Railway Infrastructure',
    description:
      'High-precision engineering drafting, BIM modeling, and overhead line electrification solutions for international rail systems. Collaborating with Norway & the UK since 2014.',
    url: SITE_URL,
    siteName: 'CAD Lanka Engineering',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAD Lanka Engineering — Precision CAD & Railway Solutions',
    description:
      'Precision 2D/3D CAD drafting, BIM coordination, and railway electrification engineering. Serving European and global infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // Organization / ProfessionalService Schema markup for Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CAD Lanka Engineering (Pvt) Ltd',
    alternateName: 'CAD Lanka',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/og-card.png`,
    description:
      'Engineering design and CAD/BIM service company providing professional technical drawing, 3D modelling and engineering documentation since 2014.',
    foundingDate: '2014',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '126 A Padagoda',
      addressLocality: 'Beruwala',
      addressCountry: 'LK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94 71 83 52 747',
      contactType: 'customer service',
      email: 'pr@cadlankaeng.com',
      availableLanguage: ['English', 'Sinhala'],
    },
    areaServed: ['Norway', 'United Kingdom', 'Sri Lanka', 'Worldwide'],
    knowsAbout: [
      'Overhead Line Electrification (OLE)',
      '2D CAD Tracing and Vectorization',
      '3D Mechanical Modeling',
      'BIM & Revit Coordination',
      'MEP Engineering Drafting',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
