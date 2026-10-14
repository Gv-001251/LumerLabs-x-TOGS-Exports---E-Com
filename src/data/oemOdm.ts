export interface OemOdmPillar {
  title: string;
  category: "OEM" | "ODM" | "Shared";
  tag: string;
  description: string;
  highlights: string[];
}

export const oemOdmPillars: OemOdmPillar[] = [
  {
    title: "Original Equipment Manufacturing (OEM)",
    category: "OEM",
    tag: "Built to Your Exact Drawings",
    description:
      "You supply the finished technical drawings, bill of materials (BOM), and material specifications; we coordinate manufacturing tooling, precision fabrication, quality inspection, and custom branding.",
    highlights: [
      "Strict fabrication to client CAD/CAM designs",
      "Confidential tooling ownership & IP protection",
      "Client-specified tolerances, coatings, and alloys",
      "Private-label branding and custom carton packaging",
    ],
  },
  {
    title: "Original Design Manufacturing (ODM)",
    category: "ODM",
    tag: "Concept-to-Production Co-Development",
    description:
      "You bring the functional concept and market requirements; we assist with design engineering, rapid prototyping, material optimization, and mass production delivery.",
    highlights: [
      "Design for Manufacturability (DFM) engineering",
      "Functional 3D prototyping and proof-of-concept testing",
      "Turnkey component sourcing and assembly",
      "Standardised base designs customized to your brand specs",
    ],
  },
];

export const oemOdmWorkflow = [
  {
    step: "Phase 1",
    title: "Specification & NDA Initiation",
    description:
      "Mutual Non-Disclosure Agreement execution followed by detailed review of product briefs, target application parameters, volume projections, and packaging criteria.",
  },
  {
    step: "Phase 2",
    title: "DFM & Prototyping Review",
    description:
      "Engineering analysis of component geometry, tooling feasibility, sample pilot run production, and client sign-off on first-article samples.",
  },
  {
    step: "Phase 3",
    title: "Pilot Run & Commercial Agreement",
    description:
      "Pre-production batch run to validate repeatable tolerances, agree on final unit pricing, lead times, and quality inspection criteria.",
  },
  {
    step: "Phase 4",
    title: "Mass Production & Export Dispatch",
    description:
      "Full scheduled mass production, continuous statistical quality control, custom client branding/packaging, and sea/air export logistics coordination.",
  },
];

export const oemCapabilitiesList = [
  {
    title: "Custom Product Development",
    desc: "From initial concept sketches or 2D technical drawings to full physical production validation.",
  },
  {
    title: "Product Specification Discussions",
    desc: "Collaborative refinement of metallurgy, tensile limits, surface coatings, and thermal tolerances.",
  },
  {
    title: "Manufacturing Requirements",
    desc: "Matching appropriate multi-axis tooling, CNC fixtures, stamping dies, or mould designs.",
  },
  {
    title: "Branding & Packaging Discussions",
    desc: "Client laser-marked logos, custom barcoding, serialisation, and tailored export cartons.",
  },
  {
    title: "Bulk-Order Enquiry Workflow",
    desc: "Structured milestone scheduling, tiered volume discounts, and phased container dispatch.",
  },
];
