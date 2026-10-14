import { QualityCheckpoint } from "@/types";

export const qualityCheckpoints: QualityCheckpoint[] = [
  {
    id: "material-review",
    phase: "Stage 01",
    title: "Material & Specification Review",
    description:
      "Validation of raw steel billets, aluminum extrusions, brass stock, or polymer pellets before entering any production queue.",
    activities: [
      "Spectrometric chemical composition testing",
      "Tensile strength and hardness baseline verification",
      "Mill Test Certificate (MTC / EN 10204 3.1) review",
      "Raw material surface defect and dimensional checking",
    ],
    standardNotice: "Illustrative material verification protocol",
  },
  {
    id: "production-checks",
    phase: "Stage 02",
    title: "Production Quality Checks (In-Process)",
    description:
      "Real-time monitoring on shop floor machines to verify tool wear, spindle deflection, and dimensional stability during active production.",
    activities: [
      "First Article Inspection (FAI) before batch approval",
      "Hourly operator dimensional checks using calibrated micrometers",
      "Statistical Process Control (SPC) charting on critical dimensions",
      "Cutting fluid concentration and tool life cycle monitoring",
    ],
    standardNotice: "Illustrative in-process monitoring protocol",
  },
  {
    id: "product-inspection",
    phase: "Stage 03",
    title: "Product Inspection (Final Quality Control)",
    description:
      "Comprehensive metrology examination of finished parts before packing, ensuring strict conformity to approved client drawings.",
    activities: [
      "3D Coordinate Measuring Machine (CMM) automated probing",
      "Optical profile comparator analysis for complex contours",
      "Surface roughness tester (Ra/Rz) measurement",
      "Thread go/no-go gauge fitment and coating thickness gauging",
    ],
    standardNotice: "Illustrative metrology inspection protocol",
  },
  {
    id: "documentation-compliance",
    phase: "Stage 04",
    title: "Documentation & Compliance Dossier",
    description:
      "Compilation of complete verification dossiers accompanying every overseas export consignment.",
    activities: [
      "Inspection Reports with actual measured dimensional values",
      "Certificate of Analysis (COA) / Certificate of Conformance (COC)",
      "Heat treatment and surface coating process certificates",
      "Pre-shipment packaging verification and photo audit logs",
    ],
    standardNotice: "Illustrative export documentation protocol",
  },
];

export const neutralCompliancePanel = {
  title: "Quality & Compliance Information",
  badge: "CLIENT VERIFICATION NOTICE",
  description:
    "Quality certifications, third-party laboratory accreditations, and specific industry standards (such as ISO 9001, IATF 16949, CE, or RoHS) are company-specific credentials. For this demonstration website concept, official certification documents, scope of registration, and laboratory audit records will be provided directly by TOGS Exports upon commercial inquiry.",
  bulletPoints: [
    "Certificates and audit reports available on request for active procurement inquiries",
    "Customer-specific third-party inspection agencies (e.g. SGS, TÜV, Bureau Veritas) can be accommodated",
    "Full material traceability and batch numbering maintained per export consignment",
  ],
};
