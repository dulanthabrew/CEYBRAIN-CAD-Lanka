# CAD Lanka Engineering — Web Application (`cadlanka-web`)

This directory contains the Next.js 15 web application and embedded Sanity Studio CMS for **CAD Lanka Engineering**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local

# 3. Start development server
npm run dev
```

- **Main Website**: [http://localhost:3000](http://localhost:3000)
- **Sanity Studio CMS**: [http://localhost:3000/studio](http://localhost:3000/studio)

---

## 🛠️ Available Scripts

- `npm run dev`: Start Next.js development server
- `npm run build`: Compile production build and validate all static / dynamic pages
- `npm run start`: Run production server
- `npm run lint`: Run ESLint checks

---

## 📐 Core Routes & Features

- `/`: Homepage with Hero Carousel (dynamic `REF_ID` codes per slide), Animated Stats (since 2014), 5 Core Services, Verified Partner Logos, and Direct Inquiry Form.
- `/services`: 5 Core Services with technical specifications and deliverables.
- `/projects`: Filterable engineering projects showcase (2-per-row grid) with zero-CLS skeleton loading state.
- `/projects/[slug]`: Project detail view with responsive hotspot hero banner, technical execution specs, and interactive gallery with lightbox zoom.
- `/about`: Company story (established in 2014), 5 approach pillars, CAD/BIM software capabilities, and Norwegian/UK international collaboration network.
- `/contact`: Direct inquiry form with Resend email delivery and verified contact details.
- `/studio`: Embedded Sanity Studio for full content management.
