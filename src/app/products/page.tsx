import { Suspense } from "react";
import type { Metadata } from "next";
import ProductCatalogueClient from "@/components/products/ProductCatalogueClient";
import SectionHeader from "@/components/ui/SectionHeader";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Catalogue | Precision B2B Components & Supplies",
  description:
    "Explore TOGS Exports' demonstration B2B product catalogue across Industrial Components, Engineered Parts, Custom Manufacturing, and Packaging Supplies.",
};

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Commercial Product Catalogue"
            title="Industrial Components &amp; Manufacturing Solutions"
            description="Explore our demonstration product categories, technical specifications, and custom manufacturing options. All products shown are illustrative models designed to showcase the proposed catalogue architecture."
          />

          {/* Catalogue Illustrative Notice */}
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold">Catalogue Demonstration Disclaimer:</span>
              <p>
                The parts, technical tolerances, and materials displayed below are representative placeholders awaiting official product sheets and photography from TOGS Exports. Direct retail cart and instant payments are intentionally excluded to support bespoke B2B procurement workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Client Product Catalogue with Suspense */}
        <Suspense
          fallback={
            <div className="p-12 text-center text-slate-500 text-sm">
              Loading demonstration catalogue...
            </div>
          }
        >
          <ProductCatalogueClient />
        </Suspense>
      </div>
    </div>
  );
}
