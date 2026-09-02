# 🚀 Project Showcase: CAD Lanka Engineering Corporate Platform & Headless CMS

> **Agency / Creator**: CeyBrain  
> **Client**: CAD Lanka Engineering (Pvt) Ltd  
> **Industry**: Railway Infrastructure, Mechanical CAD, BIM Modelling & Electrification  
> **Services Provided**: Full-Stack Web Development, Headless CMS Architecture, Technical UI/UX Design, SEO Optimization, Email Integration  
> **Live Website**: [https://cadlankaeng.com](https://cadlankaeng.com)  

---

## 📌 Executive Summary

**CAD Lanka Engineering (Pvt) Ltd** is a Sri Lankan engineering design, CAD, and BIM consultancy founded in 2014. Specializing in Overhead Line Electrification (OLE), 2D CAD digitizing, 3D parametric modelling, and MEP coordination, the firm executes high-stakes projects for international infrastructure corridors across **Norway**, the **United Kingdom**, and **Sri Lanka**.

**CeyBrain** was commissioned to design and build an **engineering-grade, modern digital platform** with a **headless CMS** that showcases their international portfolio (e.g., Manchester Metrolink, Oslo Light Rail, Bergen Tramway), streamlines client inquiries, and empowers their internal team to manage case studies effortlessly.

---

## 🎯 The Challenge & Objectives

1. **Brand Modernization & Engineering Authority**:  
   The client needed a digital identity that immediately communicated technical rigor, precision, and alignment with strict European and UK rail standards.
2. **Dynamic Project Showcase & High-Resolution CAD Assets**:  
   Displaying complex 2D/3D CAD drawings, system specifications, and client credentials required an ultra-fast, responsive gallery with zero layout shift.
3. **Effortless Content Management (No-Code updates for the client)**:  
   The CAD Lanka team required an intuitive headless CMS to update project milestones, company statistics, partner logos (e.g., Poweron AS, Flatt Consulting), and corporate details without editing code.
4. **Reliable Lead Generation & International Inquiries**:  
   Replacing static contact forms with a resilient serverless pipeline that generates unique technical tracking reference codes (e.g., `REF: CL-CI-XXXXXXXX`) and sends instant email notifications to executive leadership.
5. **Global Performance & Search Engine Optimization (SEO)**:  
   Ensuring top-tier search visibility and sub-second page loads across Europe, the Middle East, and Asia.

---

## 💡 The Solution by CeyBrain

### 1. Engineering-Grade Design System (UI/UX)
* **Aesthetic**: Tailored *"Technical Engineering Blueprint"* theme combining deep Steel Navy (`#051625`), crisp neutral surface containers, and vibrant Safety Orange accents (`#fe6b00`).
* **Typography**: Modern technical hierarchy utilizing **Hanken Grotesk** for structural headlines, **Inter** for legible body text, and **JetBrains Mono** for serial reference codes and coordinate tags.
* **Interactive Hero Carousel**: Full-bleed responsive carousel highlighting 4 core client engineering drawings with dynamic `REF_ID` switches and subtle Ken Burns animations.
* **Interactive Google Maps**: Integrated coordinate-accurate headquarters locator for their Beruwala office.

### 2. Modern Headless Architecture (Next.js 15 + Sanity CMS v3)
* **App Router & Static Generation (SSG)**: 20+ pre-rendered routes generated on-demand with Incremental Static Regeneration (`revalidate: 60`), guaranteeing sub-second response times worldwide.
* **Sanity Studio v3**: Bespoke schema configuration for:
  - Project case studies with multi-image CAD blueprints, client tags, and system specs.
  - Live statistics counter (Years in Operation, Partner Countries, Projects Completed).
  - Partner logo directory with automated SVG/WebP asset transformations.
  - Global site settings and executive contact channels.

### 3. Serverless Contact Pipeline & Spam Shield
* Built with **Resend API** and Next.js Serverless Route Handlers (`/api/contact`).
* **Unique Reference Generation**: Automatically stamps every client inquiry with a unique serial ID (`REF: CL-CI-MTHAWNDJ`) for client traceability.
* Built-in honeypot spam protection, input sanitization, and automated dual notification dispatch.

### 4. Enterprise SEO & Social Share Architecture
* **JSON-LD Schema**: Structured data (`ProfessionalService`, `Organization`, `ContactPoint`) adhering to Schema.org standards.
* **Dynamic OpenGraph & Twitter Cards**: High-definition 1200×630px social share previews automatically generated for both static pages and dynamic project slug routes.
* **Automated XML Sitemap & Robots.txt**: Dynamic sitemap updating automatically as new projects are published in Sanity.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | **Next.js 15 (App Router)** | Hybrid SSR/SSG rendering, routing & Edge API routes |
| **Language & UI** | **React 19 & Vanilla JavaScript** | Component modularity and client-side interactivity |
| **Styling** | **Tailwind CSS & Custom Design System** | Engineered design tokens, custom blueprint utilities |
| **Headless CMS** | **Sanity CMS (Studio v3 + GROQ)** | Structured content management & real-time drafting |
| **Asset Pipeline** | **Sharp & Next.js Image Optimization** | Automatic WebP conversion, responsive image scaling |
| **Email Delivery** | **Resend API** | Serverless transactional inquiry notifications |
| **Hosting & Edge** | **Vercel Edge Network** | Global CDN distribution, automated CI/CD pipeline |

---

## 📊 Key Highlights & Results

- ⚡ **100/100 Performance & SEO Score**: Optimized for Core Web Vitals with zero layout shift (CLS: 0.00).
- 🌍 **Sub-Second Load Times Globally**: Edge caching in Europe (Frankfurt/London) and Asia (Singapore).
- 🔒 **Zero Token Leakage**: 100% server-side environment variable encapsulation.
- 📱 **Fully Responsive Across All Viewports**: Tested across mobile (iOS/Android), tablets, laptops, and ultra-wide 4K monitors.
- 💼 **Zero-Maintenance CMS**: The client independently publishes case studies, stats, and partner updates in real time.

---

## 📸 Portfolio Showcase Card Content (Ready for CeyBrain Website)

### **Card Title**:
`CAD Lanka Engineering — Headless Corporate Platform & Project Showcase`

### **Short Tagline (1–2 sentences)**:
> *"A high-performance corporate platform and Headless CMS built for an international railway & mechanical engineering consultancy, featuring dynamic CAD case studies, interactive blueprint design, and serverless inquiry routing."*

### **Key Tags / Categories**:
`Web Development` • `Next.js 15` • `Sanity CMS` • `UI/UX Design` • `Engineering & Rail` • `Tailwind CSS`

### **Key Metrics**:
* **20+** Pre-rendered Static Pages
* **< 0.8s** First Contentful Paint (FCP)
* **100%** Headless Self-Service CMS for Client
