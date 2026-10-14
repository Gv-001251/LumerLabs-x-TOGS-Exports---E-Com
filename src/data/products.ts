import { Product, ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    id: "industrial-components",
    slug: "industrial-components",
    name: "Industrial Components",
    tagline: "High-Tolerance Machined & Turned Hardware",
    description:
      "Precision-turned shafts, bushings, brass fittings, and alloy mechanical components designed for rigorous industrial applications.",
    image: "/images/industrial-components.jpg",
    productCountPlaceholder: "Representative Category (8+ Sample Products)",
    keyHighlights: [
      "CNC turning and multi-axis milling",
      "Ferrous & non-ferrous alloy selections",
      "Surface passivation & anti-corrosion finishes",
      "Batch traceability per production lot",
    ],
  },
  {
    id: "engineered-parts",
    slug: "engineered-parts",
    name: "Engineered Parts",
    tagline: "Gears, Transmission Units & Structural Assemblies",
    description:
      "Heavy-duty mechanical drive units, precision helical gearing, splined shafts, and high-tensile brackets for industrial machinery.",
    image: "/images/engineered-parts.jpg",
    productCountPlaceholder: "Representative Category (6+ Sample Products)",
    keyHighlights: [
      "Helical, spur, and bevel gear profiles",
      "Heat treatment & surface induction hardening",
      "Dynamic balancing for rotational stability",
      "Dimensional verification on calibrated CMM",
    ],
  },
  {
    id: "custom-manufacturing",
    slug: "custom-manufacturing",
    name: "Custom Manufacturing",
    tagline: "Tailored OEM Fabrications & Robotic Laser Assemblies",
    description:
      "Bespoke engineering solutions manufactured to exact client technical drawings, CAD models, and performance requirements.",
    image: "/images/custom-manufacturing.jpg",
    productCountPlaceholder: "Representative Category (Configurable to Order)",
    keyHighlights: [
      "Sheet metal laser cutting & CNC press braking",
      "Robotic MIG & TIG certified welding",
      "Custom enclosure and chassis fabrication",
      "Prototyping through full mass-production scaling",
    ],
  },
  {
    id: "packaging-supplies",
    slug: "packaging-supplies",
    name: "Packaging & Industrial Supplies",
    tagline: "Export-Grade Heavy Packaging & Pallet Systems",
    description:
      "Engineered industrial protective supplies, ISPM-15 compliant heat-treated pallets, heavy-duty corrugated cartons, and barrier films for secure export shipping.",
    image: "/images/packaging-supplies.jpg",
    productCountPlaceholder: "Representative Category (Standard & Custom Sizes)",
    keyHighlights: [
      "ISPM-15 certified heat-treated timber pallets",
      "Moisture-barrier foil and VCI anti-rust wrapping",
      "High-tensile industrial polyester/steel banding",
      "Standardised container payload footprint compliance",
    ],
  },
];

export const sampleProducts: Product[] = [
  {
    id: "precision-component-a",
    slug: "precision-component-a",
    name: "Precision Component A — CNC Machined Shaft Assembly",
    category: "industrial-components",
    categoryLabel: "Industrial Components",
    summary:
      "Multi-step CNC turned alloy steel shaft designed for high rotational velocity and precision tolerance requirements.",
    description:
      "Precision Component A represents an illustrative high-tolerance turned component manufactured using multi-axis CNC lathes. Produced from certified high-tensile alloy steel with precision bearing journals, threaded ends, and micro-finished surface profiles. All technical specifications shown are illustrative samples to demonstrate the catalogue structure.",
    featured: true,
    image: "/images/industrial-components.jpg",
    gallery: [
      "/images/industrial-components.jpg",
      "/images/hero-factory.jpg",
      "/images/quality-assurance.jpg",
    ],
    specifications: [
      { label: "Sample Material", value: "AISI 4140 Alloy Steel / C45 (Illustrative)" },
      { label: "Machining Tolerance", value: "±0.005 mm (Subject to drawing review)" },
      { label: "Surface Roughness", value: "Ra 0.4 μm – Ra 0.8 μm" },
      { label: "Heat Treatment", value: "Induction hardening (50-54 HRC available)" },
      { label: "Surface Finish", value: "Black oxide / Manganese phosphate / Ground" },
      { label: "Diameter Range", value: "Ø 15 mm to Ø 120 mm" },
      { label: "Length Capability", value: "Up to 650 mm" },
      { label: "Inspection Method", value: "100% Go/No-Go Gauge & Optical Metrology" },
    ],
    customizationOptions: [
      "Alternate alloy selection (Stainless 304/316, Brass, Bronze, Titanium)",
      "Custom spline and keyway configurations per client CAD",
      "Protective coating options including zinc nickel, chrome plating, or passivation",
      "Custom laser etching with customer part numbers and batch codes",
    ],
    applications: [
      "Industrial gearboxes and speed reducers",
      "Automated conveyor drive systems",
      "Agricultural and construction equipment drivelines",
      "Fluid pump and compressor drives",
    ],
    packagingNote:
      "VCI anti-corrosion individual wrapping, vacuum sealed, packed in export-ready heavy cartons with foam partition dividers.",
    exportReady: true,
  },
  {
    id: "industrial-assembly-b",
    slug: "industrial-assembly-b",
    name: "Industrial Assembly B — Helical Gear & Drive Unit",
    category: "engineered-parts",
    categoryLabel: "Engineered Parts",
    summary:
      "Precision helical gear and pinion set engineered for quiet power transmission and extreme torque resistance.",
    description:
      "Industrial Assembly B demonstrates a matched helical gearset engineered for heavy industrial power transmission. Profile-ground gear teeth ensure minimal acoustic emission and exceptional contact ratio under load. Provided as an illustrative example of TOGS Exports' potential transmission component line.",
    featured: true,
    image: "/images/engineered-parts.jpg",
    gallery: [
      "/images/engineered-parts.jpg",
      "/images/hero-factory.jpg",
      "/images/quality-assurance.jpg",
    ],
    specifications: [
      { label: "Sample Material", value: "20MnCr5 / 8620 Case Hardening Steel" },
      { label: "Gear Quality Grade", value: "DIN 3961 / AGMA Class 10 (Illustrative)" },
      { label: "Module Range", value: "Module 1.5 to Module 8.0" },
      { label: "Helix Angle", value: "15° to 30° Left / Right hand" },
      { label: "Hardness Profile", value: "Case hardened 58-62 HRC (Core 30-38 HRC)" },
      { label: "Tooth Finish", value: "Profile ground (Reishauer method)" },
      { label: "Shaft Fit", value: "H7/k6 standard bore with DIN 6885 keyway" },
      { label: "Balancing", value: "Dynamic ISO 1940 Grade G2.5" },
    ],
    customizationOptions: [
      "Custom gear ratio matching and pinion pair lapping",
      "Non-standard tooth modifications (crown relief, tip easing)",
      "Alternative materials: Bronze worm gears, hardened stainless",
      "Pre-assembled with bearings, spacers, and retention rings",
    ],
    applications: [
      "Industrial speed reducers and planetary gearboxes",
      "Mining and material handling hoists",
      "Automated packaging machinery drives",
      "Marine winch and steering assemblies",
    ],
    packagingNote:
      "Heavy rust-inhibitor coated, oil-paper wrapped, individual foam cradles in wooden export crates.",
    exportReady: true,
  },
  {
    id: "custom-engineered-part-c",
    slug: "custom-engineered-part-c",
    name: "Custom Engineered Part C — Robotic Mounting Bracket",
    category: "custom-manufacturing",
    categoryLabel: "Custom Manufacturing",
    summary:
      "Multi-axis CNC milled and robotic welded structural bracket designed for automated robotic manipulator integration.",
    description:
      "Custom Engineered Part C serves as a demonstration of TOGS Exports' contract manufacturing capabilities for custom engineered structural assemblies. Features precision laser-cut sheet plates joined by robotic TIG welding and secondary 5-axis finish machining for critical locator pin holes.",
    featured: true,
    image: "/images/custom-manufacturing.jpg",
    gallery: [
      "/images/custom-manufacturing.jpg",
      "/images/hero-factory.jpg",
      "/images/quality-assurance.jpg",
    ],
    specifications: [
      { label: "Sample Material", value: "High-Strength Structural Steel (S355JR / ASTM A572)" },
      { label: "Welding Standard", value: "AWS D1.1 / ISO 5817 Level B compliance" },
      { label: "Machining Accuracy", value: "Pin centers true position within 0.02 mm" },
      { label: "Surface Finish", value: "Industrial electrostatic powder coat (RAL 7016)" },
      { label: "Plate Thickness", value: "4 mm to 16 mm welded composite" },
      { label: "Non-Destructive Testing", value: "Magnetic particle inspection on weld seams" },
      { label: "Weight", value: "Approx. 18.5 kg (Configurable)" },
      { label: "CAD Compatibility", value: "STEP, IGES, SolidWorks, DWG native imports" },
    ],
    customizationOptions: [
      "Full design adjustment based on client robot payload specifications",
      "Aluminum 6061-T6 lightweighting options for high-speed robotic arms",
      "Custom color powder coat, zinc plating, or anodized finishes",
      "Integrated threaded inserts and helicoils installed",
    ],
    applications: [
      "End-of-arm tooling mounts (EOAT)",
      "Automated factory floor robotic pedestals",
      "Heavy equipment sensor and vision camera brackets",
      "Renewable energy tracking frame pivots",
    ],
    packagingNote:
      "Heavy corrugated export boxes with custom molded edge guards on heat-treated ISPM-15 wooden pallets.",
    exportReady: true,
  },
  {
    id: "industrial-supply-product-d",
    slug: "industrial-supply-product-d",
    name: "Industrial Supply Product D — Heavy-Duty Export Shipping Pallet System",
    category: "packaging-supplies",
    categoryLabel: "Packaging & Industrial Supplies",
    summary:
      "ISPM-15 compliant heat-treated engineered timber pallet with integrated moisture-barrier and shock-absorbing foundation.",
    description:
      "Industrial Supply Product D illustrates TOGS Exports' capability in providing robust export packaging supplies. Built to international Phytosanitary standards (ISPM-15) for smooth customs clearance worldwide, ensuring heavy industrial cargo arrives at overseas destinations free from damage.",
    featured: true,
    image: "/images/packaging-supplies.jpg",
    gallery: [
      "/images/packaging-supplies.jpg",
      "/images/global-exports.jpg",
      "/images/quality-assurance.jpg",
    ],
    specifications: [
      { label: "Standard Dimensions", value: "1200 mm × 1000 mm (Standard ISO container footprint)" },
      { label: "Static Load Rating", value: "Up to 4,500 kg (Uniformly distributed)" },
      { label: "Dynamic Load Rating", value: "Up to 1,800 kg (Forklift handling)" },
      { label: "Compliance Mark", value: "ISPM-15 Heat Treatment (HT) certified stamp" },
      { label: "Moisture Content", value: "Kiln dried to <18% moisture" },
      { label: "Entry Configuration", value: "4-way forklift / pallet jack entry" },
      { label: "Fasteners", value: "Galvanized helical ring-shank drive nails" },
      { label: "Optional Add-on", value: "Heavy-gauge shrink shroud + desiccants" },
    ],
    customizationOptions: [
      "Euro-pallet standard (1200 × 800 mm) or custom crate bases",
      "Anti-slip top deck rubberized matting",
      "Client stencil branding and barcoding on pallet stringers",
      "Weatherproof plywood deck top sheets",
    ],
    applications: [
      "Overseas ocean container consolidation (20ft / 40ft High Cube)",
      "Heavy industrial machinery transport",
      "Automotive component export shipping",
      "Warehousing and automated high-bay racking",
    ],
    packagingNote:
      "Shipped in strapped pallet stacks of 15 units, weather-wrapped with corner protectors.",
    exportReady: true,
  },
  {
    id: "precision-turned-bushing-e",
    slug: "precision-turned-bushing-e",
    name: "Precision Turned Bushing E — High-Tolerance Alloy Sleeve",
    category: "industrial-components",
    categoryLabel: "Industrial Components",
    summary:
      "Precision-machined phosphor bronze and stainless steel flanged bushing with internal spiral lubrication grooves.",
    description:
      "A high-precision cylindrical sleeve engineered for low-friction pivot joints and high-load sleeve bearings. Machined to tight concentricity limits with polished internal bore.",
    featured: false,
    image: "/images/industrial-components.jpg",
    gallery: ["/images/industrial-components.jpg", "/images/hero-factory.jpg"],
    specifications: [
      { label: "Sample Material", value: "CuSn8 Phosphor Bronze / Stainless 316L" },
      { label: "Bore Tolerance", value: "ISO H7 (±0.012 mm illustrative)" },
      { label: "Outer Diameter", value: "ISO m6 press-fit" },
      { label: "Internal Features", value: "Figure-8 continuous oil lubrication groove" },
      { label: "Operating Temp Range", value: "-40°C to +260°C" },
      { label: "Surface Finish", value: "Ra 0.2 μm diamond-burnished bore" },
    ],
    customizationOptions: [
      "Self-lubricating graphite plug insertions",
      "Keyway locking notches or radial flange bolt patterns",
      "Alternative alloys: Aluminum Bronze (CuAl10Fe5Ni5)",
    ],
    applications: [
      "Hydraulic cylinder pivots",
      "Industrial injection moulding tie-bars",
      "Excavator boom arm linkages",
    ],
    packagingNote: "Individual heat-sealed polybags with desiccant in reinforced boxes.",
    exportReady: true,
  },
  {
    id: "die-cast-housing-f",
    slug: "die-cast-housing-f",
    name: "Die-Cast Housing F — Environmental Enclosure Unit",
    category: "custom-manufacturing",
    categoryLabel: "Custom Manufacturing",
    summary:
      "High-pressure aluminum die-cast electronic enclosure with CNC post-machined O-ring gasket channels and mounting bosses.",
    description:
      "An illustrative demonstration of high-volume die-casting and precision post-machining. Delivers IP67 ingress protection suitability with integrated electromagnetic shielding characteristics.",
    featured: false,
    image: "/images/custom-manufacturing.jpg",
    gallery: ["/images/custom-manufacturing.jpg", "/images/quality-assurance.jpg"],
    specifications: [
      { label: "Sample Alloy", value: "A380 Aluminum / ADC12 (Illustrative)" },
      { label: "Wall Thickness", value: "2.5 mm to 4.0 mm consistent wall design" },
      { label: "Ingress Capability", value: "IP66 / IP67 design readiness" },
      { label: "Finishing", value: "Vibratory deburring + Alodine conversion + Powder coat" },
      { label: "Pressure Testing", value: "100% pneumatic air-decay leak testing" },
    ],
    customizationOptions: [
      "Custom tool design and mould flow simulation",
      "EMI/RFI conductive gasket integration",
      "Custom thread tapping (Metric, UNC, NPT)",
    ],
    applications: [
      "Outdoor industrial sensor pods",
      "EV charger power distribution units",
      "Telecommunication junction enclosures",
    ],
    packagingNote: "Individual compartmentalized egg-crate trays in master cartons.",
    exportReady: true,
  },
  {
    id: "hydraulic-fitting-g",
    slug: "hydraulic-fitting-g",
    name: "Hydraulic Fitting G — High-Pressure Stainless Coupling",
    category: "industrial-components",
    categoryLabel: "Industrial Components",
    summary:
      "Forged and precision CNC threaded hydraulic adapter for high-pressure industrial fluid transfer lines.",
    description:
      "A rugged fluid conveyance component capable of withstanding severe hydraulic pressures. Precision single-point cut threads ensure zero-leak seals under heavy mechanical vibration.",
    featured: false,
    image: "/images/industrial-components.jpg",
    gallery: ["/images/industrial-components.jpg", "/images/hero-factory.jpg"],
    specifications: [
      { label: "Sample Material", value: "316 Stainless Steel (AISI 316/1.4401)" },
      { label: "Pressure Rating", value: "Working pressure up to 450 bar (6,500 psi)" },
      { label: "Thread Standard", value: "BSPP / NPT / JIC 37° Flare options" },
      { label: "Burst Safety Factor", value: "4:1 calculated burst ratio" },
    ],
    customizationOptions: [
      "Custom flare angles and metric DIN 2353 bite-type cutting rings",
      "Electro-polished bore for high-purity chemical media",
    ],
    applications: [
      "High-pressure marine hydraulic systems",
      "Offshore oil & gas control manifolds",
      "Industrial injection presses",
    ],
    packagingNote: "Protective plastic thread caps on all male/female ends.",
    exportReady: true,
  },
  {
    id: "engineered-fastener-h",
    slug: "engineered-fastener-h",
    name: "Engineered Fastener H — Grade-8 Heavy Industrial Stud",
    category: "engineered-parts",
    categoryLabel: "Engineered Parts",
    summary:
      "High-tensile alloy double-ended engineering stud designed for critical pressure vessel and pipeline flange joints.",
    description:
      "Illustrative high-integrity fastener manufactured from heat-treated alloy steel. Roll-threaded for enhanced fatigue endurance under cyclic thermal and pressure stresses.",
    featured: false,
    image: "/images/engineered-parts.jpg",
    gallery: ["/images/engineered-parts.jpg", "/images/quality-assurance.jpg"],
    specifications: [
      { label: "Sample Material", value: "ASTM A193 Grade B7 / B8M Stainless" },
      { label: "Thread Fabrication", value: "Cold rolled threads (UNC / Metric coarse)" },
      { label: "Tensile Strength", value: "Min. 860 MPa (125 ksi)" },
      { label: "Coating", value: "PTFE Xylan anti-galling / Zinc-Cobalt" },
    ],
    customizationOptions: [
      "Special pitch diameters and extra-length stud configurations",
      "Full material test reports (MTR) according to EN 10204 3.1",
    ],
    applications: [
      "Petrochemical flange connections",
      "Turbine casing closure bolts",
      "Heavy structural civil engineering anchors",
    ],
    packagingNote: "Wooden crate packaging with oil soak barrier.",
    exportReady: true,
  },
];
