import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import { getSiteSettings } from '@/lib/sanity';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with CAD Lanka Engineering for project inquiries, technical consultations, and partnership opportunities. Serving Norway and UK clients.',
};

export const revalidate = 60;

export default async function ContactPage() {
  let siteSettings = null;
  try {
    siteSettings = await getSiteSettings();
  } catch (err) {
    console.error('Error fetching site settings in ContactPage:', err);
  }

  const contact = siteSettings?.contactInfo || {
    email: 'pr@cadlankaeng.com',
    phone: '+94 71 83 52 747',
    whatsapp: '+94 71 83 52 747',
    address: '126 A Padagoda, Beruwala, Sri Lanka',
  };

  const placeName = 'CAD Lanka Engineering';
  const googleMapsExternalUrl = 'https://maps.app.goo.gl/ArHbrNfiKDi2pnSCA';
  const googleMapsEmbedUrl = 'https://maps.google.com/maps?q=CAD+Lanka+Engineering+(Pvt)+Ltd,+Padagoda,+Beruwala,+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed';

  return (
    <>
      <Header />
      <main>
        {/* Contact Header per §22.5 */}
        <header className="bg-surface border-b border-outline-variant">
          <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop py-lg">
            <Breadcrumb
              items={[
                { label: 'HOME', href: '/' },
                { label: 'CONTACT' },
              ]}
            />
            <div className="mt-md">
              <div className="flex items-center gap-sm font-label-mono text-label-mono text-secondary uppercase tracking-widest mb-sm font-bold">
                <span className="w-8 h-px bg-secondary block" />
                Direct Inquiry
              </div>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md">
                Get in Touch
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-secondary pl-md">
                Whether you have a project brief ready or are still in early scope — our engineering team is ready to engage.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop py-xl">
          {/* Contact grid: Sidebar + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">

            {/* Left sidebar — HQ info + network links */}
            <div className="flex flex-col gap-lg">

              {/* Headquarters */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-lg">
                <div className="flex justify-between items-start mb-md">
                  <h2 className="font-headline-sm text-headline-sm text-primary">Headquarters</h2>
                  <span className="font-label-mono text-label-mono text-secondary font-bold">HQ-01</span>
                </div>
                <div className="dimension-line mb-md" />
                <div className="flex flex-col gap-md font-body-sm text-body-sm text-on-surface-variant">
                  <div>
                    <div className="font-label-mono text-label-mono text-outline uppercase tracking-wider mb-xs">Company</div>
                    <p className="font-bold text-primary">{placeName}</p>
                  </div>
                  <div>
                    <div className="font-label-mono text-label-mono text-outline uppercase tracking-wider mb-xs">Address</div>
                    <p className="whitespace-pre-line text-on-surface-variant">{contact.address}</p>
                    <a
                      href={googleMapsExternalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-xs font-label-mono text-[11px] text-secondary hover:underline mt-xs"
                    >
                      <span>View on Google Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                  <div>
                    <div className="font-label-mono text-label-mono text-outline uppercase tracking-wider mb-xs">Email</div>
                    <a href={`mailto:${contact.email}`} className="text-secondary hover:underline">
                      {contact.email}
                    </a>
                  </div>
                  {contact.phone && (
                    <div>
                      <div className="font-label-mono text-label-mono text-outline uppercase tracking-wider mb-xs">Phone</div>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  )}
                  {contact.whatsapp && (
                    <div>
                      <div className="font-label-mono text-label-mono text-outline uppercase tracking-wider mb-xs">WhatsApp</div>
                      <a
                        href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {contact.whatsapp}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Global Network — Norway + UK only */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-lg">
                <div className="flex justify-between items-start mb-md">
                  <h2 className="font-headline-sm text-headline-sm text-primary">Global Network</h2>
                  <span className="font-label-mono text-label-mono text-secondary font-bold">NET-02</span>
                </div>
                <div className="dimension-line mb-md" />
                <ul className="flex flex-col gap-sm">
                  {[
                    { label: 'Norway Partners', href: '/about#norway', flag: '🇳🇴' },
                    { label: 'UK Partners', href: '/about#uk', flag: '🇬🇧' },
                  ].map((n) => (
                    <li key={n.label}>
                      <a
                        href={n.href}
                        className="flex items-center gap-sm font-label-mono text-label-mono text-primary hover:text-secondary transition-colors group"
                      >
                        <span>{n.flag}</span>
                        {n.label}
                        <span className="ml-auto text-outline group-hover:text-secondary transition-colors">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business hours */}
              <div className="bg-primary rounded p-lg">
                <h3 className="font-label-mono text-label-mono text-primary-fixed-dim uppercase tracking-wider mb-md">Response Time</h3>
                <div className="flex flex-col gap-sm font-label-mono text-label-mono">
                  <div className="flex justify-between text-on-primary-container">
                    <span>Mon – Fri</span>
                    <span className="text-on-primary">08:30 – 17:30 IST</span>
                  </div>
                  <div className="flex justify-between text-on-primary-container">
                    <span>Sat – Sun</span>
                    <span>Closed</span>
                  </div>
                  <div className="border-t border-on-primary-container pt-sm mt-sm flex items-center gap-xs text-on-primary">
                    <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse-dot" />
                    Replies within 2 business days
                  </div>
                </div>
              </div>
            </div>

            {/* Main form — 2 cols */}
            <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded p-lg md:p-xl relative corner-bracket">
              <div className="flex justify-between items-start mb-lg">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary mb-xs">Direct Inquiry Form</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Describe your project requirements and we&apos;ll respond with a tailored proposal.
                  </p>
                </div>
                <span className="font-label-mono text-label-mono text-secondary font-bold hidden md:block">REF: CL-CI-24</span>
              </div>
              <div className="dimension-line mb-lg" />
              <ContactForm />
            </div>
          </div>

          {/* Location / Google Map Section */}
          <section className="mt-xl pt-lg border-t border-outline-variant/80" aria-label="Head Office Location Map">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-sm mb-md">
              <div>
                <div className="flex items-center gap-xs font-label-mono text-label-mono text-outline text-[11px] uppercase tracking-wider mb-xs">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  <span>GEO LOCATION // HEADQUARTERS</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">{placeName}</h2>
              </div>
              <div className="flex items-center gap-md">
                <span className="font-label-mono text-[11px] text-outline hidden sm:inline">
                  BERUWALA, SRI LANKA
                </span>
                <a
                  href={googleMapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-mono text-label-mono text-xs px-sm py-xs rounded border border-outline-variant bg-surface-container-low text-primary hover:border-secondary hover:text-secondary transition-colors inline-flex items-center gap-xs"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="relative w-full h-[380px] md:h-[450px] rounded border border-outline-variant bg-surface-container-low overflow-hidden shadow-tech">
              <iframe
                title="CAD Lanka Engineering (Pvt) Ltd Location Map"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02]"
              />
              {/* Overlay Location Badge */}
              <div className="absolute bottom-4 left-4 bg-primary/95 text-on-primary backdrop-blur-sm border border-outline-variant/60 rounded p-sm md:p-md shadow-lg max-w-sm hidden sm:block">
                <div className="font-label-mono text-[10px] text-secondary-container uppercase tracking-wider mb-xs">
                  {placeName}
                </div>
                <div className="font-body-sm text-body-sm text-on-primary">
                  {contact.address}
                </div>
                <a
                  href={googleMapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-xs font-label-mono text-[10px] text-secondary-container hover:underline mt-xs"
                >
                  <span>Get Directions</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
