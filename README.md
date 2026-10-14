# TOGS Exports — International B2B Manufacturing Website Concept
### Concept Architecture & Prototype by Lumer Labs

---

## 1. Executive Summary

This website is a production-grade corporate website concept developed by **Lumer Labs** for **TOGS Exports**, an international B2B manufacturing and export organization.

The concept was developed to fulfill the key client requirements identified in TOGS Exports' web development announcement:
- International B2B manufacturing website with established corporate design
- Structured product showcasing & technical specification catalogue
- Manufacturing capabilities & stage-gate workflow demonstration
- OEM/ODM contract manufacturing frameworks & intellectual property security
- Quality assurance protocols & metrology inspection workflows
- Global export logistics, Incoterms, and customs documentation
- Integration readiness for **Zoho CRM** and **Zoho Forms**
- Architectural translation guide for **WordPress** development
- Conversion-focused B2B lead generation & quotation intake system

> [!IMPORTANT]
> **Demonstration & Independent Concept Disclosure**
> Concept website by Lumer Labs for demonstration purposes. Product information, specifications, capabilities, certifications, contact details, and integrations are illustrative and subject to verification by TOGS Exports. This website is not an official TOGS Exports website.

---

## 2. Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (Deep corporate navy `#0A192F`, industrial blue, cool grey, restrained warm amber `#D97706`)
- **Icons:** Lucide React
- **Typography:** Inter (via `next/font/google`)
- **Assets:** Custom high-resolution editorial photography of modern CNC manufacturing facilities, metrology labs, export packaging, and deepwater container ports.

---

## 3. Website Structure & Implemented Routes

| Route | Page Title | Key Sections & Features |
| :--- | :--- | :--- |
| `/` | **Home** | Slim announcement bar, sticky navigation with live search trigger, editorial hero section, 4 capability highlights, product category showcase, 4-stage manufacturing process, OEM/ODM comparison, quality checkpoints with neutral compliance panel, global export logistics, 4-step buyer journey timeline, FAQ accordion, high-conversion lead generation banner, corporate footer. |
| `/products` | **Product Catalogue** | Real-time part search, category filter pills, responsive grid, illustrative specification snippets, "View Details", "Request a Quote" slide-over drawer integration. |
| `/products/[slug]` | **Product Details** | Multi-view thumbnail gallery, technical overview, full specification table (tolerances, materials, surface finishes), customization options, representative applications, export packaging standards, and direct quote form. |
| `/manufacturing` | **Capabilities** | In-depth stage-gate production methodology (Requirement Assessment, Planning, Production, Quality Review), machinery envelope breakdown, tolerance standards, and drawing assessment CTA. |
| `/oem-odm` | **OEM/ODM Services** | Detailed comparison table between OEM and ODM engagement models, 4-phase contract lifecycle, 5 core capabilities, and intellectual property/NDA governance framework. |
| `/quality` | **Quality Assurance** | 4 inspection gates (IQC, In-Process Checks, Final Metrology CMM Inspection, Export Documentation Dossier), optical metrology lab breakdown, and mandatory neutral **Quality & Compliance Information** panel. |
| `/exports` | **Export Capabilities** | International trade operations, Incoterms 2020 definitions (FOB, CIF, CFR, EXW, FCA), moisture-barrier heavy export packaging, and procurement trade FAQ. |
| `/contact` | **Contact & Inquiries** | Commercial department routing, 24-hour response timeline commitment, mutual NDA assurance, and interactive inquiry form. |
| `/request-quote` | **Request a Quote** | Enterprise B2B commercial quote intake desk, required field validation, corporate email validation, simulated submission latency, reference ID generator, and developer payload inspector. |
| `/privacy` | **Privacy Policy** | B2B data governance and technical drawing confidentiality terms placeholder. |
| `/terms` | **Terms of Trade** | Commercial conditions, price validity, tooling ownership, and Incoterm clauses placeholder. |
| `/not-found` | **Custom 404** | Branded not-found error page with direct navigation links back to catalogue and home. |

---

## 4. Zoho CRM Integration Architecture

TOGS Exports explicitly highlighted Zoho tools and integrations. This concept demonstrates a production-grade, integration-ready architecture:

- **Centralized Schema:** `src/types/enquiry.ts` defines the typed payload for commercial inquiries.
- **Zoho CRM Adapter:** `src/lib/zohoAdapter.ts` maps frontend fields to the official **Zoho CRM REST API v2/v3 Leads module** schema (`Company`, `Last_Name`, `First_Name`, `Email`, `Country`, `Product_Category_Interest`, `Estimated_Order_Volume`, `Technical_Specifications`, `Lead_Source`).
- **Interactive Developer Inspector:** Submitting the quote form displays the exact prepared JSON payload that would be posted to `https://www.zohoapis.com/crm/v2/Leads`.
- **Environment Variables Template:** `.env.example` documents all OAuth credentials (`ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN`, `ZOHO_ORG_ID`).
- **Detailed Integration Guide:** See [`docs/ZOHO_INTEGRATION_GUIDE.md`](./docs/ZOHO_INTEGRATION_GUIDE.md).

---

## 5. WordPress Implementation Readiness

While this demonstration utilizes Next.js to provide a fast and reactive user experience, the system was designed with WordPress readiness in mind:

- **Modular Architecture:** Data files (`src/data/`) are decoupled from UI components.
- **CPT Mapping:** Directly maps to WordPress Custom Post Types (`togs_product`, `togs_capability`, `togs_faq`).
- **ACF Schema:** Technical specification tables map to ACF Repeater fields.
- **Form Alternatives:** Fully documented for Gravity Forms, WPForms, or native Zoho Web-to-Lead embeds.
- **Detailed Translation Architecture:** See [`docs/WORDPRESS_IMPLEMENTATION_ARCHITECTURE.md`](./docs/WORDPRESS_IMPLEMENTATION_ARCHITECTURE.md).

---

## 6. How to Run Locally

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm (v9+)

### Installation & Execution
```bash
# Clone or navigate to the project directory
cd E-com

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Production Build & Verification
```bash
# Run type check and production Next.js build
npm run build

# Start production server
npm run start
```

---

## 7. Deployment Instructions (Vercel / Cloudflare / Netlify)

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into **Vercel** or **Cloudflare Pages**.
3. Select framework preset: **Next.js**.
4. Set build command: `npm run build` and output directory: `.next`.
5. Deploy.
