export interface SpecificationItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "industrial-components" | "engineered-parts" | "custom-manufacturing" | "packaging-supplies";
  categoryLabel: string;
  summary: string;
  description: string;
  featured?: boolean;
  image: string;
  gallery: string[];
  specifications: SpecificationItem[];
  customizationOptions: string[];
  applications: string[];
  packagingNote: string;
  exportReady: boolean;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  productCountPlaceholder: string;
  keyHighlights: string[];
}

export interface CapabilityStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: string;
}

export interface QualityCheckpoint {
  id: string;
  phase: string;
  title: string;
  description: string;
  activities: string[];
  standardNotice: string;
}

export interface ExportCapabilityItem {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Products" | "OEM/ODM" | "Quality" | "Exports" | "Ordering";
}
