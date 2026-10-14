export interface BuyerJourneyStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const buyerJourneySteps: BuyerJourneyStep[] = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Submit your project scope, product categories of interest, technical drawings, or target specifications via our inquiry form.",
    deliverables: ["Technical drawing / BOM intake", "Mutual NDA protection", "Preliminary feasibility review"],
  },
  {
    number: "02",
    title: "Discuss Specifications",
    description:
      "Engage with our technical and commercial team to clarify metallurgy, machining tolerances, finishing, and order volumes.",
    deliverables: ["Design for Manufacturability (DFM) feedback", "Material grade confirmation", "Packaging & freight strategy"],
  },
  {
    number: "03",
    title: "Receive a Quotation",
    description:
      "Review a comprehensive commercial proposal detailing unit pricing, tooling setup (if applicable), lead times, and Incoterms.",
    deliverables: ["Itemized formal quotation", "Production milestone timetable", "Sample / pilot terms"],
  },
  {
    number: "04",
    title: "Proceed to Business Discussions",
    description:
      "Validate pre-production samples, finalize commercial purchase order agreements, and commence scheduled production and export dispatch.",
    deliverables: ["Sample verification sign-off", "Scheduled mass production", "Export logistics & document dispatch"],
  },
];
