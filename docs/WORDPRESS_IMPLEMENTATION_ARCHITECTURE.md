# WordPress Implementation Architecture & Translation Guide
## TOGS Exports B2B Manufacturing Website Concept — By Lumer Labs

---

### Executive Summary

TOGS Exports' recruitment and developer announcement specifically references **WordPress website development** alongside Zoho ecosystem integration.

This concept has been engineered by Lumer Labs using **Next.js (App Router, React, TypeScript, Tailwind CSS)** to provide a fast, responsive, and interactive prototype demonstrating the visual standard, page hierarchy, and catalogue structure.

Because our data models, content strings, and layout components are strictly decoupled, this concept can be seamlessly translated into either:
1. **A Native Corporate WordPress Theme (Block Theme / FSE or Custom Hybrid)**, or
2. **A Headless WordPress Setup (WordPress as CMS + Next.js as High-Performance Frontend)**.

This document serves as our technical briefing for translating this concept into a full WordPress production release.

---

### 1. WordPress Content Model & Custom Post Types (CPT)

Our TypeScript schemas in `src/types/index.ts` map 1-to-1 to native WordPress Custom Post Types and Advanced Custom Fields (ACF Pro):

#### A. Custom Post Type: `togs_product` (Products)
- **Slug:** `/products/%postname%/`
- **Taxonomies:**
  - `product_category`: Hierarchical taxonomy matching `industrial-components`, `engineered-parts`, `custom-manufacturing`, `packaging-supplies`.
  - `material_tag`: Non-hierarchical taxonomy for fast filtering by alloy (e.g. `Alloy Steel`, `Stainless 316`, `Brass`, `Titanium`).
- **ACF Field Group: "Technical Specifications & Manufacturing Details"**
  - `specifications` (Repeater: `label` [text], `value` [text])
  - `customization_options` (Repeater: `option_text` [text])
  - `applications` (Repeater: `application_text` [text])
  - `packaging_notes` (Textarea)
  - `product_gallery` (Gallery field)
  - `export_ready` (True / False toggle)

#### B. Custom Post Type: `togs_capability` (Manufacturing Capabilities)
- **Slug:** `/manufacturing/%postname%/`
- **ACF Fields:** `stage_number`, `operational_controls` (repeater), `machinery_specs`, `supporting_photo`.

#### C. Custom Post Type: `togs_faq` (Commercial FAQ)
- **Taxonomy:** `faq_category` (`OEM/ODM`, `Quality`, `Exports`, `Ordering`, `General`).
- **Fields:** `question` (post title), `answer` (WYSIWYG editor).

---

### 2. Reusable Page Templates & Layout Blocks

The modular React components built in this project translate directly to Gutenberg Custom Blocks (via ACF Blocks or Native Block Editor):

| Concept React Component | WordPress Template / Block Equivalent |
| :--- | :--- |
| `AnnouncementBar.tsx` | Site Header Template Part (Theme Customizer or FSE Block) |
| `Navbar.tsx` | Sticky Header Block with WordPress Navigation Menu |
| `HeroSection.tsx` | Custom ACF Block: `togs/hero-editorial` |
| `CapabilityStrip.tsx` | Custom ACF Block: `togs/capability-strip` |
| `ProductCategoriesGrid.tsx` | Custom Query Loop Block filtered by `product_category` |
| `ManufacturingProcessSection.tsx`| Custom ACF Block: `togs/process-timeline` |
| `OemOdmHomeSection.tsx` | Custom ACF Block: `togs/oem-odm-comparison` |
| `QualityAssuranceSection.tsx` | Custom ACF Block: `togs/quality-checkpoints` |
| `GlobalExportSection.tsx` | Custom ACF Block: `togs/global-logistics-banner` |
| `BuyerJourneySection.tsx` | Custom ACF Block: `togs/buyer-journey-timeline` |
| `QuoteForm.tsx` | Reusable Form Block (Gravity Forms / WPForms / CF7 with Zoho Add-on) |
| `Footer.tsx` | Site Footer Template Part with Legal Disclosure Widget |

---

### 3. Editable Product Catalogue & B2B Mode Options

To maintain a true B2B catalogue on WordPress (avoiding unnecessary retail e-commerce cart/checkout):

1. **Option 1: Custom CPT Catalogue (Cleanest & Lightweight)**
   - Utilize native WordPress CPT `togs_product`.
   - No WooCommerce bloat; fastest possible page loads, zero database overhead.
   - Quotation forms automatically link to the active product ID via query string or hidden field.

2. **Option 2: WooCommerce in B2B / Catalogue Mode**
   - Install WooCommerce.
   - Activate catalogue mode (disable "Add to Cart", hide prices, disable cart and checkout endpoints).
   - Install **WooCommerce Request a Quote** or custom hook replacing "Add to Cart" with our "Request a Quote" modal.

---

### 4. Enquiry Forms & Zoho CRM Integration in WordPress

In WordPress, connecting inquiries to Zoho CRM is achieved through any of the following reliable solutions:

1. **Gravity Forms + Zoho CRM Add-On (Official):**
   - Official integration with field mapping, error logging, and lead scoring.
   - Built-in conditional logic to route OEM inquiries to designated engineering desks.
2. **WPForms + Zoho CRM Integration:**
   - Drag-and-drop form builder with automatic Zoho CRM contact/lead creation.
3. **Custom REST API Endpoint / Webhook:**
   - A custom WordPress plugin endpoint (`/wp-json/togs/v1/enquiry`) using the exact logic documented in our `src/lib/zohoAdapter.ts`.

---

### 5. SEO & Multilingual International Trade Readiness

- **SEO Plugin:** Rank Math SEO or Yoast SEO configured with Product Schema markup (`Schema.org/Product`) for all catalogue items.
- **Multilingual Support:** Polylang Pro or WPML for delivering localized versions for key export territories (e.g., German, Spanish, Arabic, Japanese).
- **Fast Media Delivery:** WebP/AVIF auto-conversion via Cloudflare or Smush Pro.

---

### 6. Hosting & Deployment Considerations for WordPress

For enterprise-grade B2B stability and international response times:
- **Managed WordPress Hosting:** Kinsta, WP Engine, or AWS CloudFront + EC2/Lightsail.
- **Global CDN:** Cloudflare Enterprise or Enterprise CDN for edge caching in Europe, North America, Middle East, and Asia.
- **Staging & Version Control:** Git-based deployment via Bedrock/Trellis or GitHub Actions syncing to WP Engine / Kinsta staging environments.
