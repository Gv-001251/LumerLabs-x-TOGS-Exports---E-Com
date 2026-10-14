import { CapabilityStage } from "@/types";

export const capabilityStages: CapabilityStage[] = [
  {
    step: "01",
    title: "Requirement Assessment",
    subtitle: "Technical Feasibility & Engineering Review",
    description:
      "Reviewing client 2D/3D technical drawings (STEP, IGES, DXF), material specifications, tolerance thresholds, and annual volume requirements to define production pathways.",
    points: [
      "Design for Manufacturability (DFM) analysis",
      "Material alloy selection & equivalent standard matching",
      "Cost-efficiency & tooling estimation review",
      "Confidentiality & Non-Disclosure Agreement (NDA) execution",
    ],
    icon: "FileSearch",
  },
  {
    step: "02",
    title: "Manufacturing Planning",
    subtitle: "Tooling, Fixturing & Production Scheduling",
    description:
      "Formulating custom machining programs, tooling procurement, quality control check-sheets, and establishing process parameter limits.",
    points: [
      "CAM programming & tool path simulation",
      "Custom jig & fixture fabrication",
      "Production timeline & batch staging schedule",
      "Incoming raw material certification checks",
    ],
    icon: "CalendarCheck",
  },
  {
    step: "03",
    title: "Production Coordination",
    subtitle: "Controlled Machining & Precision Fabrication",
    description:
      "Executing controlled production runs across multi-axis CNC machines, automated laser-cutting stations, robotic welding lines, and secondary finishing.",
    points: [
      "First Article Inspection (FAI) pilot approval",
      "Real-time machine monitoring & statistical process control",
      "Surface treatments (anodizing, plating, heat-treating)",
      "Assembly line coordination & serialisation",
    ],
    icon: "Cpu",
  },
  {
    step: "04",
    title: "Quality Review",
    subtitle: "Metrology, Certification & Export Packing",
    description:
      "Comprehensive dimensional inspection on calibrated CMMs, non-destructive testing, full documentation dossier compilation, and export packaging.",
    points: [
      "100% critical dimension verification",
      "Mill test & material compliance dossiers",
      "Moisture-barrier protective packaging",
      "Final pre-shipment sign-off & container loading",
    ],
    icon: "CheckCircle2",
  },
];

export const manufacturingTechOverview = [
  {
    title: "Multi-Axis CNC Machining",
    description: "High-speed 3-axis, 4-axis, and 5-axis CNC milling and Swiss-turn multi-spindle lathes for intricate geometrical geometries.",
    specs: "Tolerances down to ±0.005 mm | Work envelopes up to 1,500 mm",
  },
  {
    title: "Laser Cutting & Sheet Fabrication",
    description: "High-power fiber laser cutting paired with CNC press brakes for clean-edged sheet components in steel, stainless, and aluminum.",
    specs: "Sheet thickness 0.5 mm – 25 mm | Complex contouring",
  },
  {
    title: "Robotic & Certified Welding",
    description: "Automated robotic MIG/TIG welding cells providing uniform weld penetration, minimal thermal distortion, and structural durability.",
    specs: "AWS D1.1 / ISO 5817 Level B standards alignment",
  },
  {
    title: "Surface Finishing & Heat Treatment",
    description: "Electrochemical passivation, hard anodizing, zinc-nickel plating, induction hardening, and powder coating.",
    specs: "Corrosion resistance up to 720+ hours salt spray",
  },
];
