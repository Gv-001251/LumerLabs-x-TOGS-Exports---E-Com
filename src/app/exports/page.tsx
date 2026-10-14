import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  PackageCheck,
  Anchor,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { exportCapabilities } from "@/data/exports";
import Accordion from "@/components/ui/Accordion";
import { b2bFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Export Capabilities & International Trade | TOGS Exports",
  description:
    "Explore TOGS Exports' international shipping capabilities, export documentation, Incoterms coordination, and export-grade heavy packaging solutions.",
};

export default function ExportsPage() {
  const exportFaqs = b2bFaqs
    .filter((f) => f.category === "Exports" || f.category === "General" || f.category === "Ordering")
    .map((faq, idx) => ({
      id: `exp-faq-${idx}`,
      title: faq.question,
      category: faq.category,
      content: <p className="text-slate-600 leading-relaxed">{faq.answer}</p>,
    }));

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Cross-Border Commercial Trade</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connecting Businesses Across Markets
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Coordinating international B2B inquiries, customs-compliant documentation, multi-modal freight logistics, and robust export packaging standards for global commercial buyers.
          </p>

          <div className="pt-2">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <span>Start an Export Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Core Export Service Capabilities */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Export Operations"
            title="Comprehensive International Trade Support"
            description="Our proposed export operational architecture ensures that components and industrial supplies navigate international borders seamlessly."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-amber-400 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>

                  <h2 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Operational Elements:
                    </span>
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Logistics & Heavy Packaging Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Packaging Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <PackageCheck className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Export-Grade Packaging &amp; Preservation
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Overseas cargo experiences significant humidity variations, rough maritime handling, and extended transit durations. We configure heavy export packing specifically to withstand multi-week oceanic freight.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>ISPM-15 Heat-Treated Wood:</strong> Heat-treated timber pallets and crates stamped with IPPC marks for global biosecurity compliance.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>VCI Anti-Corrosion Protection:</strong> Vapor Corrosion Inhibitor films and desiccants prevent oxidation during sea transit.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Container Footprint Optimization:</strong> Modular stacking dimensions designed to maximize 20ft and 40ft High Cube container cube utilization.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/products?category=packaging-supplies"
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
              >
                <span>Explore Packaging Supplies Line</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Incoterms & Trade Terms Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Anchor className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Standardized Incoterms 2020 Definitions
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear allocation of shipping costs, insurance liabilities, and transfer-of-risk checkpoints between buyer and seller.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block">FOB (Free On Board)</span>
                  <span className="text-slate-600 text-[11px] block mt-1">
                    Delivered on board vessel at departure port; buyer arranges main maritime freight.
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block">CIF (Cost, Insurance &amp; Freight)</span>
                  <span className="text-slate-600 text-[11px] block mt-1">
                    Seller covers main freight and minimum maritime cargo insurance to destination port.
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block">CFR (Cost &amp; Freight)</span>
                  <span className="text-slate-600 text-[11px] block mt-1">
                    Seller handles transport to foreign port of arrival; buyer manages insurance coverage.
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block">EXW / FCA</span>
                  <span className="text-slate-600 text-[11px] block mt-1">
                    For buyers with nominated forwarders picking up directly from factory or consolidation hub.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/request-quote"
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
              >
                <span>Discuss Your Preferred Trade Terms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* International Trade FAQs */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Procurement FAQ"
            title="International Shipping &amp; Trade Inquiries"
            description="Answers to common buyer questions regarding payment mechanisms, container loading, and customs clearances."
          />

          <Accordion items={exportFaqs} />
        </div>

        {/* Notice */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Export Operations Note:</strong> Freight forwarders, designated discharge ports, and customs tariffs will be negotiated on an order-by-order basis with TOGS Exports. No claims regarding specific port departure volumes are implied by this demonstration concept.
          </p>
        </div>
      </div>
    </div>
  );
}
