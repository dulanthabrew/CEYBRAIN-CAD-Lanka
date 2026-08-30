# CAD Lanka Engineering — Website & CMS User Guide

> **Official Content Management Guide for CAD Lanka Engineering (Pvt) Ltd**  
> This guide explains how you and your engineering team can easily manage portfolio projects, services, partner logos, company statistics, and contact information without writing any code.

---

## 📑 Table of Contents
1. [Accessing the Admin Dashboard (Sanity Studio)](#1-accessing-the-admin-dashboard)
2. [Inviting Team Members](#2-inviting-team-members)
3. [Managing Projects Portfolio](#3-managing-projects-portfolio)
4. [Managing Engineering Services](#4-managing-engineering-services)
5. [Managing Project Categories](#5-managing-project-categories)
6. [Managing Global Site Settings & Stats](#6-managing-global-site-settings--stats)
7. [Adding & Updating Partner Logos](#7-adding--updating-partner-logos)
8. [The Publishing Workflow](#8-the-publishing-workflow)
9. [Contact Form Submissions](#9-contact-form-submissions)
10. [Need Support?](#10-need-support)

---

## 1. Accessing the Admin Dashboard

Your content management system (Sanity Studio) is built directly into your website.

- **Live URL**: `https://your-domain.com/studio`  
  *(or `http://localhost:3000/studio` when running locally)*
- **Login**: Click **"Sign in with Google"** or **"Sign in with Email"** using your registered account.

Once logged in, you will see the sidebar with four main sections:
- **Site Settings** (Company stats, contact details, partner network, partner logos)
- **Projects** (Your engineering project showcase)
- **Categories** (Taxonomy tags like Railway, Tram Systems, Overhead Line)
- **Services** (Your 5 core service offerings)

---

## 2. Inviting Team Members

You can grant team members access to add projects or edit content:

1. Go to **[sanity.io/manage](https://www.sanity.io/manage)**.
2. Select your project: **CAD Lanka Engineering**.
3. Click the **"Members"** tab at the top.
4. Click **"Invite Member"** > Enter their email address.
5. Choose their role:
   - **Editor**: Can add, edit, and publish projects, services, and logos.
   - **Administrator**: Full permissions, including billing and member management.

---

## 3. Managing Projects Portfolio

The **Projects** section powers the filterable 2-per-row grid on `/projects` and the dynamic detail pages at `/projects/[slug]`.

### How to Add a New Project
1. In the Studio sidebar, click **"Projects"** > Click the **pencil / create button** at the top.
2. Fill in the project details:
   - **Project Title**: e.g., `Oslo Light Rail Expansion Phase II`
   - **Slug**: Click the **"Generate"** button on the right to automatically create the clean URL (e.g. `oslo-light-rail-expansion-phase-ii`).
   - **Category**: Select the relevant engineering category (*Railway*, *Tram Systems*, *Overhead Line*, or *Components*).
   - **Year**: e.g., `2024`
   - **Client**: e.g., `Nordic Rail Transit AS` *(leave blank to automatically display "Confidential")*.
   - **Location**: e.g., `Oslo, Norway`
   - **Description**: Summary of project scope and challenges overcome.
3. **Upload Project Images**:
   - **Cover Image**: The card thumbnail shown on the `/projects` grid.
   - **Hero Image**: The full-width banner at the top of the individual project detail page.
   - **Hotspot Tool**: Click the circular crosshair icon on any uploaded image and drag the target to the focal point (e.g. the train or drawing center) so it never gets cut off on mobile screens.
4. **Add Technical Specifications (Optional)**:
   - Click **"Add item"** under Specifications to add key-value pairs (e.g., `System Voltage` : `15kV AC 16.7Hz` or `Track Length` : `14.2 km double track`).
5. **Add Technical Execution Steps (Optional)**:
   - Add bullet points detailing engineering methodologies, software used, or standards met.
6. **Add Project Gallery Photos (Optional)**:
   - Upload multiple technical drawings, 3D renderings, or site photos.
   - Each photo has a **Caption** field that renders as `FIG 01 // Caption` with click-to-expand lightbox zoom.
7. Click the green **"Publish"** button in the bottom right corner.

---

## 4. Managing Engineering Services

The **Services** section controls the 5 service cards on the homepage and the full `/services` page.

### How to Edit or Add Services
1. Click **"Services"** in the sidebar.
2. Select an existing service (e.g. `CD-01`, `PD-02`, `RE-03`, `BIM-04`, `MEP-05`) or click create.
3. Update the fields:
   - **Service Title**: e.g. `2D CAD Tracing (Digitizing)`
   - **REF Code**: e.g. `CD-01`
   - **Description**: Detailed description of your service capabilities.
   - **Icon Name**: Standard icon name from **[fonts.google.com/icons](https://fonts.google.com/icons)** (e.g., `draw`, `precision_manufacturing`, `electric_bolt`, `view_in_ar`, `hvac`).
   - **Key Capabilities**: Add bullet points highlighting specific deliverables (e.g. *Microfiche conversion*, *Layer-structured CAD*).
   - **Service Image**: High-resolution image illustration representing the discipline.
4. Click **"Publish"**.

---

## 5. Managing Project Categories

Categories allow website visitors to filter projects on the portfolio page.

1. Click **"Categories"** in the sidebar.
2. The system includes:
   - `Railway`
   - `Tram Systems`
   - `Overhead Line`
   - `Components`
3. You can edit existing category titles or add new disciplines (e.g., `MEP Engineering`, `Substations`) as your portfolio expands.

---

## 6. Managing Global Site Settings & Stats

Click **"Site Settings"** in the sidebar to update company-wide parameters:

### Homepage Statistics
- **Years in Operation**: e.g., `12+`
- **International Partner Countries**: e.g., `2`
- **Projects Completed**: e.g., `150+`

### Contact Information
- **Email**: `rangana@cadlankaeng.com`
- **Phone**: `+94 71 83 52 747`
- **WhatsApp**: `+94 71 83 52 747`
- **Address**: `126 A Padagoda, Beruwala, Sri Lanka`

### International Network (Countries)
- Manage the descriptions and tags for your **Norway** and **United Kingdom** collaboration hubs displayed on the About page and footer.

---

## 7. Adding & Updating Partner Logos

Manage the trusted partner and client logos displayed on the homepage trust strip:

1. Go to **"Site Settings"** > Scroll to **"Client & Partner Logos"**.
2. Click **"Add item"** (or click an existing partner like **Poweron AS** or **Flatt Consulting**).
3. Fill in:
   - **Partner / Client Name**: e.g., `Poweron AS`
   - **Reference Code**: e.g., `PRT-NOR-01`
   - **Logo Image**: Click **Upload** and select your vector or transparent `.png` / `.svg` / `.webp` logo file.
   - **Partner Website URL**: e.g., `https://www.poweron.no`
4. Click **"Publish"**.

> **Pro Tip**: PNG or SVG logo files with transparent backgrounds look best. The website automatically ensures that logos are never cropped or distorted.

---

## 8. The Publishing Workflow

- **Auto-Save Drafts**: Sanity automatically saves every keystroke as a draft. Your changes are private and won't affect the live website until you are ready.
- **Publishing Live**: Whenever you are ready to push your changes live, click the green **"Publish"** button at the bottom right.
- **Instant Updates**: Your Next.js website revalidates content automatically within seconds of clicking Publish.

---

## 9. Contact Form Submissions

When a prospective client submits a message through the **Get in Touch** form on the homepage or `/contact` page:

1. **Email Delivery**: An automated email notification is instantly transmitted to `rangana@cadlankaeng.com`.
2. **Reply Directly**: The email's `Reply-To` header is set to the client's email address, so you can simply click **"Reply"** in your email client to respond to them directly.
3. **Format**: The inquiry email includes an engineering reference code, the client's name, company, email, timestamp, and their project requirements.

---

## 10. Need Support?

For technical support, custom feature extensions, or infrastructure queries, reach out to your development team at **Ceybrain**.

© 2014–Present CAD Lanka Engineering (Pvt) Ltd. All rights reserved.
