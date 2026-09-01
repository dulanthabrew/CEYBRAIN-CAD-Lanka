# CAD Lanka Engineering — Corporate Web Platform

> **Precision Engineering, 2D/3D CAD, BIM & Documentation Solutions**  
> High-performance digital platform for CAD Lanka Engineering (Pvt) Ltd, showcasing railway electrification (OLE), MEP drafting, 3D modelling, and international collaborations in Norway and the United Kingdom.

---

## 📐 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components, Route Handlers)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with an industrial precision design system
- **Typography**: Space Grotesk (Headlines), Inter (Body), JetBrains Mono (Technical labels & specifications)
- **Headless CMS**: [Sanity v3](https://sanity.io/) embedded at `/studio` with live GROQ queries
- **Image Optimization**: Next.js Image optimization + Sanity Image CDN with focal-point hotspot cropping
- **Forms & Email Delivery**: Server-side API endpoint with rate limiting and [Resend](https://resend.com/) email integration
- **SEO & Accessibility**: Dynamic XML sitemap, `robots.txt`, OpenGraph metadata, and semantic markup

---

## 📁 Repository Structure

```text
CEYBRAIN-CAD-Lanka/
├── cadlanka-web/                 # Main Next.js Web Application
│   ├── app/                      # Next.js App Router routes & layouts
│   │   ├── layout.js             # Root layout & typography setup
│   │   ├── page.js               # Homepage (Hero carousel, stats, 5 services, partners, contact)
│   │   ├── about/page.js         # About & Company story (Timeline since 2014, capabilities, vision/mission)
│   │   ├── services/page.js      # 5 Engineering Services with technical specifications
│   │   ├── projects/             # Projects portfolio
│   │   │   ├── page.js           # Filterable projects grid (2-per-row layout)
│   │   │   ├── loading.js        # Skeleton grid loader
│   │   │   └── [slug]/           # Dynamic project detail pages
│   │   │       ├── page.js       # Project detail view (Hotspot hero, specs, gallery)
│   │   │       └── loading.js    # Dedicated detail skeleton loader
│   │   ├── contact/page.js       # Direct inquiry & quote request form
│   │   ├── api/contact/route.js  # Server-side Resend email handler
│   │   ├── studio/[[...tool]]/   # Embedded Sanity Studio CMS
│   │   ├── favicon.ico           # Multi-resolution favicon
│   │   ├── icon.png              # App icon
│   │   ├── apple-icon.png        # Apple touch icon
│   │   ├── robots.js             # Automated robots.txt generator
│   │   └── sitemap.js            # Dynamic XML sitemap generator
│   ├── components/               # Reusable UI & engineering components
│   │   ├── Header.js             # Responsive navigation with Next.js Image logo
│   │   ├── Footer.js             # Global technical footer (2014–Present copyright)
│   │   ├── HeroCarousel.js       # Hero carousel with dynamic slide REF_IDs
│   │   ├── ProjectsGrid.js       # Filterable project cards with category tabs
│   │   ├── ProjectGallery.js     # Technical image gallery with lightbox modal
│   │   ├── PartnerLogos.js       # Verified partner marks (Poweron AS & Flatt Consulting)
│   │   ├── AnimatedStats.js      # Animated counting stats bar
│   │   ├── ContactForm.js        # Validated contact form
│   │   └── Breadcrumb.js         # Monospace technical breadcrumb navigation
│   ├── lib/
│   │   └── sanity.js             # Sanity client & GROQ query helpers
│   ├── sanity/                   # Sanity CMS schema definitions
│   │   └── schemas/
│   │       ├── project.js        # Portfolio project schema
│   │       ├── service.js        # Engineering service schema
│   │       ├── category.js       # Project category taxonomy schema
│   │       └── siteSettings.js   # Global settings singleton schema
│   ├── public/                   # Public static assets
│   │   ├── images/               # Optimized logos (logo-dark-bg.png, logo.png, webp variants)
│   │   └── favicon.ico           # Fallback favicon
│   ├── tailwind.config.js        # Custom theme color palette & spacing
│   ├── next.config.js            # Next.js image domains & Studio security headers
│   └── package.json              # Node.js dependencies & scripts
├── .gitignore                    # Git exclusions
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.18.0` or higher
- npm, yarn, or pnpm

### 1. Install Dependencies
Navigate into the web application directory:

```bash
cd cadlanka-web
npm install
```

### 2. Configure Environment Variables
Copy the example environment configuration:

```bash
cp .env.example .env.local
```

Fill in your configuration values in `.env.local`:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token

# Contact Form / Email (Resend)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL_TO=pr@cadlankaeng.com
CONTACT_EMAIL_FROM=noreply@cadlankaeng.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
Sanity Studio is accessible at [http://localhost:3000/studio](http://localhost:3000/studio).

---

## 🛠️ Available Scripts

Run these inside `cadlanka-web`:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts development server with hot reload |
| `npm run build` | Builds optimized production bundle and validates static generation |
| `npm run start` | Runs the production server |
| `npm run lint` | Runs ESLint code quality checks |

---

## 🌐 Content Management via Sanity Studio

Access `/studio` while running the app locally or on your production domain to manage:
1. **Projects**: Add, edit, or categorize portfolio projects with cover images, hero banners, specifications, and gallery photos.
2. **Services**: Manage the 5 core engineering services and descriptions.
3. **Categories**: Manage project filtering categories (Railway, Overhead Line, Tram Systems, Components).
4. **Site Settings**: Manage company stats, contact details, partner countries (Norway & UK), and verified partner logos.

---

## 🚢 Production Deployment (Vercel)

1. Import this repository into [Vercel](https://vercel.com).
2. Set the **Root Directory** to `cadlanka-web`.
3. Add the environment variables from `.env.example` in the Vercel Project Settings.
4. Deploy.

---

## 📄 License & Attribution

© 2014–Present CAD Lanka Engineering (Pvt) Ltd. All rights reserved. Precision engineering and CAD/BIM solutions.