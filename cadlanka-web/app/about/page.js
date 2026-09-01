import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { getSiteSettings } from '@/lib/sanity';

export const metadata = {
  title: 'About Us',
  description:
    'CAD Lanka Engineering — an engineering design and CAD/BIM service company providing professional technical drawing, 3D modelling and engineering documentation since 2014.',
};

export const revalidate = 60;

const DEFAULT_NETWORK = [
  {
    id: 'NOR',
    country: 'Norway',
    tag: 'RAIL_INFRA',
    anchor: 'norway',
    description:
      'Strategic collaboration on advanced railway infrastructure, focusing on cold-weather material tolerances, overhead line electrification, and structural resilience for Scandinavian operating environments.',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Norwegian railway infrastructure and overhead electrification system in winter landscape',
  },
  {
    id: 'GBR',
    country: 'United Kingdom',
    tag: 'OLE_SYSTEMS',
    anchor: 'uk',
    description:
      'Partnership with UK rail contractors and engineering consultancies on overhead line equipment specification, MEP drawing coordination, and compliance documentation to British and European EN standards.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'UK railway engineering infrastructure — modern rail track and overhead electrification',
  },
];

const WHAT_WE_DO = [
  'Railway electrification drawings',
  'Railway engineering drawings',
  'MEP drawings and documentation',
  'Mechanical engineering drawings',
  'Electrical drawings',
  'HVAC drawings',
  'Plumbing and drainage drawings',
  'Fire protection drawings',
  '2D CAD drafting',
  '3D CAD modelling',
  'BIM and Revit modelling',
  'MEP coordination',
  'Shop and fabrication drawings',
  'As-built drawings',
  'Point-cloud to BIM modelling',
  'Engineering documentation',
];

const SOFTWARE_EXPERTISE = [
  { name: 'AutoCAD', category: '2D Drafting & Detailing' },
  { name: 'Autodesk Inventor', category: '3D Mechanical Parametric' },
  { name: 'Autodesk Revit', category: 'BIM & Multidisciplinary Modeling' },
  { name: 'Navisworks', category: 'Clash Detection & Coordination' },
  { name: 'Autodesk ReCap', category: 'Point-Cloud & Reality Capture' },
];

const WHY_CHOOSE_US = [
  'Experienced engineering drawing team',
  'Railway and infrastructure experience',
  'MEP drafting and BIM capabilities',
  'Professional 2D and 3D CAD services',
  'Detailed and coordinated documentation',
  'Flexible support for engineering companies and contractors',
  'Commitment to quality and deadlines',
  'International project experience',
];

const APPROACH_PILLARS = [
  {
    title: 'Accuracy',
    desc: 'Zero-tolerance precision across all drafting and modelling deliverables.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: 'Coordination',
    desc: 'Multidisciplinary coordination and clash-free integration across MEP & structural assets.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    title: 'Quality',
    desc: 'Rigorous QA/QC protocols compliant with international ISO and European standards.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Flexibility',
    desc: 'Agile scaling and dedicated support tailored to engineering contractors and consultants.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
      </svg>
    ),
  },
  {
    title: 'On-Time Delivery',
    desc: 'Predictable delivery milestones and strict project timeline governance.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

export default async function AboutPage() {
  let siteSettings = null;
  try {
    siteSettings = await getSiteSettings();
  } catch (err) {
    console.error('Error fetching site settings in AboutPage:', err);
  }

  const countriesData = siteSettings?.partnerCountries?.length
    ? siteSettings.partnerCountries.map((c) => {
        const isNorway = c.country?.toLowerCase().includes('norway');
        return {
          id: isNorway ? 'NOR' : 'GBR',
          country: c.country,
          tag: c.tag || (isNorway ? 'RAIL_INFRA' : 'OLE_SYSTEMS'),
          anchor: isNorway ? 'norway' : 'uk',
          description: c.description,
          image: isNorway
            ? 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80&auto=format&fit=crop'
            : 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&auto=format&fit=crop',
          imageAlt: `${c.country} railway engineering collaboration`,
        };
      })
    : DEFAULT_NETWORK;

  return (
    <>
      <Header />
      <main className="flex flex-col gap-xl pb-xl">
        {/* Page header */}
        <header className="px-margin-mobile md:px-margin-desktop pt-lg bg-blueprint border-b border-outline-variant">
          <div className="max-w-content mx-auto">
            <Breadcrumb
              items={[
                { label: 'HOME', href: '/' },
                { label: 'ABOUT' },
              ]}
            />
            <div className="mt-md pb-xl">
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-md">
                Precision Built. Globally Deployed.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-secondary pl-md">
                CAD Lanka Engineering is an engineering design and CAD/BIM service company providing professional technical drawing, 3D modelling and engineering documentation solutions for railway, MEP, mechanical and infrastructure projects.
              </p>
              <div className="dimension-line mt-lg w-full max-w-xl" />
            </div>
          </div>
        </header>

        {/* Company Story + Mission Parameters */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

            {/* Timeline / Story — 7 cols */}
            <div className="md:col-span-7 bg-surface-container-lowest border border-outline-variant rounded p-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 blueprint-overlay pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-lg">
                <div className="flex justify-between items-start border-b border-surface-variant pb-sm">
                  <div>
                    <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest block mb-xs">
                      Corporate Trajectory
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary">Structural Integrity Since 2014</h2>
                  </div>
                  <span className="font-label-mono text-label-mono text-secondary font-bold border border-secondary/30 px-sm py-xs bg-surface-container-low flex-shrink-0">
                    REF_EST: 2014
                  </span>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Established in 2014, CAD Lanka Engineering has grown into a trusted engineering partner providing high-precision 2D CAD drafting, 3D parametric modelling, and comprehensive BIM documentation. We support engineering consultants, contractors, and project managers across international infrastructure corridors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md pt-sm border-t border-outline-variant">
                  <div className="flex flex-col gap-xs">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-secondary-container flex-shrink-0" />
                      <span className="font-label-mono text-label-mono text-secondary font-bold">PHASE 01 // FOUNDATION</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Specialized drafting and microfiche vectorization delivering exact CAD deliverables for local and regional industry.
                    </p>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full border border-secondary-container flex-shrink-0" />
                      <span className="font-label-mono text-label-mono text-secondary font-bold">PHASE 02 // GLOBAL EXPANSION</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Scaling into railway electrification (OLE) and MEP BIM coordination for engineering firms in Norway and the UK.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Approach (5 Pillars) — 5 cols */}
            <div className="md:col-span-5 bg-primary border border-primary rounded p-lg flex flex-col gap-md justify-between">
              <div>
                <h3 className="font-label-mono text-label-mono text-primary-fixed-dim uppercase tracking-widest mb-xs">Operational Principles</h3>
                <h2 className="font-headline-sm text-headline-sm text-on-primary">Our Approach</h2>
              </div>
              <ul className="flex flex-col gap-sm">
                {APPROACH_PILLARS.map((item, i, arr) => (
                  <li key={item.title} className={`flex items-start gap-sm ${i < arr.length - 1 ? 'border-b border-primary-fixed-dim/30 pb-xs' : ''}`}>
                    <span className="text-secondary-fixed flex-shrink-0 mt-xs">{item.icon}</span>
                    <div>
                      <strong className="font-body-md text-on-primary block">{item.title}</strong>
                      <span className="font-body-sm text-body-sm text-primary-fixed-dim leading-snug">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <ScrollReveal>
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-lg tech-card h-full flex flex-col justify-between">
                <div>
                  <div className="font-label-mono text-label-mono text-secondary mb-xs uppercase tracking-wider">01 // Strategic Outlook</div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Our Vision</h3>
                  <div className="dimension-line mb-md" />
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    To become a trusted engineering design, CAD and BIM service partner for companies in Norway, Sri Lanka and international markets, delivering reliable technical solutions and high-quality engineering documentation.
                  </p>
                </div>
                <div className="mt-md font-label-mono text-[10px] text-secondary font-bold uppercase tracking-wider">
                  HORIZON // INTERNATIONAL PARTNERSHIP
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-lg tech-card h-full flex flex-col justify-between">
                <div>
                  <div className="font-label-mono text-label-mono text-secondary mb-xs uppercase tracking-wider">02 // Core Mandate</div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Our Mission</h3>
                  <div className="dimension-line mb-md" />
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Our mission is to provide accurate, efficient and professional engineering drawing and modelling services that help our clients reduce design challenges, improve coordination and deliver projects successfully.
                  </p>
                </div>
                <div className="mt-md font-label-mono text-[10px] text-secondary font-bold uppercase tracking-wider">
                  MANDATE // ENGINEERING PRECISION
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What We Do & Software Capabilities */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            
            {/* What We Do — 8 cols */}
            <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded p-lg">
              <div className="flex justify-between items-center mb-md border-b border-outline-variant pb-xs">
                <div>
                  <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider block">Scope of Work</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">What We Do</h2>
                </div>
                <span className="font-label-mono text-[11px] text-outline hidden sm:block">16 TECHNICAL CAPABILITIES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-md gap-y-xs">
                {WHAT_WE_DO.map((item) => (
                  <div key={item} className="flex items-center gap-xs font-label-mono text-label-mono text-on-surface-variant py-xs">
                    <span className="w-1.5 h-1.5 bg-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Expertise — 4 cols */}
            <div className="lg:col-span-4 bg-surface-container-low border border-outline-variant rounded p-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-md border-b border-outline-variant pb-xs">
                  <div>
                    <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider block">Toolchain</span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">CAD &amp; BIM Expertise</h2>
                  </div>
                </div>
                <ul className="flex flex-col gap-sm font-label-mono">
                  {SOFTWARE_EXPERTISE.map((sw) => (
                    <li key={sw.name} className="p-xs bg-surface-container-lowest border border-outline-variant/60 rounded">
                      <div className="text-primary font-bold text-body-sm">{sw.name}</div>
                      <div className="text-[11px] text-outline">{sw.category}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-md pt-sm border-t border-outline-variant font-label-mono text-[10px] text-outline text-center uppercase">
                ISO &amp; EN Standards Compliant
              </div>
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto w-full">
          <div className="bg-blueprint border border-outline-variant rounded p-lg md:p-xl">
            <div className="text-center max-w-2xl mx-auto mb-lg">
              <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest block mb-xs">
                Client Advantage
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mb-xs">Why Choose Us</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We combine experienced drafting talent, flexible project collaboration models, and rigorous international standards compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md">
              {WHY_CHOOSE_US.map((point, idx) => (
                <div
                  key={point}
                  className="p-md bg-surface-container-lowest border border-outline-variant rounded flex flex-col justify-between tech-card"
                >
                  <span className="font-label-mono text-[10px] text-secondary font-bold mb-xs">
                    {`ADV_${String(idx + 1).padStart(2, '0')}`}
                  </span>
                  <p className="font-body-sm text-body-sm text-primary font-semibold leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* International Network — Norway + UK only (§3.4 & §22.3) */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-content mx-auto w-full" aria-labelledby="network-heading">
          <div className="flex flex-col gap-base border-l-4 border-secondary-container pl-md mb-lg">
            <h2 id="network-heading" className="font-headline-md text-headline-md text-primary">International Network</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Deploying engineering assets across critical European infrastructure corridors. Our collaborative framework ensures synchronized execution across time zones and regulatory environments.
            </p>
          </div>

          {/* 2 cards — Norway + UK confirmed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {countriesData.map((n, idx) => (
              <ScrollReveal key={n.id || idx} delay={idx * 150}>
                <div
                  id={n.anchor}
                  className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col tech-card overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="h-56 bg-surface-variant border-b border-surface-variant relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url('${n.image}')` }}
                      role="img"
                      aria-label={n.imageAlt}
                    />
                    <span className="font-headline-lg text-outline-variant font-bold absolute tracking-tighter opacity-20 select-none z-10">
                      {n.id}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-lg flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-sm font-label-mono text-label-mono">
                      <span className="text-secondary font-bold tracking-widest">{`${n.id} // ${n.tag}`}</span>
                      <span className="text-outline">OPERATIONAL_HUB</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">{n.country} Collaboration</h3>
                    <div className="dimension-line mb-md" />
                    <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">{n.description}</p>
                    <div className="pt-sm border-t border-outline-variant font-label-mono text-label-mono text-outline text-[11px] flex justify-between">
                      <span>STATUS: ACTIVE</span>
                      <span className="text-secondary font-semibold">PARTNER_NETWORK →</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
