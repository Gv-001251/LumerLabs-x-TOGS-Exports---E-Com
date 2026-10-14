import type { Metadata } from "next";
import {
  Mail,
  Clock,
  ShieldCheck,
  Globe2,
  AlertCircle,
} from "lucide-react";
import QuoteForm from "@/components/enquiry/QuoteForm";
import { companyConfig } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact & Commercial Enquiries | TOGS Exports",
  description:
    "Submit business and procurement inquiries to TOGS Exports. Connect with our engineering, OEM/ODM, and export logistics team.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Commercial Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact &amp; Business Enquiries
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Connect with our technical engineering, contract manufacturing, and export operations teams. Submit your commercial requirements or request technical drawing evaluations.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Inquiry Routing & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Commercial Communication Protocol */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Inquiry Routing &amp; Response Timeline
              </h2>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">
                      24-Hour Business Response:
                    </strong>
                    All commercial requests and RFQ submissions are acknowledged and assigned to an engineering specialist within one business day.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">
                      Mutual NDA Protection:
                    </strong>
                    We routinely execute bilateral Non-Disclosure Agreements prior to evaluating proprietary 2D/3D CAD technical drawings.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">
                      International Account Management:
                    </strong>
                    Direct communication with bilingual technical coordinators experienced with European, North American, and Asia-Pacific standards.
                  </div>
                </div>
              </div>

              {/* Inquiry Department Channels */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Commercial Department Channels:
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-900 block">
                      1. Procurement &amp; Product Catalogue Quotes
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      Batch quotations for standard turned parts, gears, and packaging supplies.
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-900 block">
                      2. OEM/ODM Custom Manufacturing Review
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      DFM analysis for client-supplied 3D CAD models and prototype pilots.
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-900 block">
                      3. Export Logistics &amp; Customs Documentation
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      Freight forwarding queries, Incoterms, and certificate preparation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Contact Notice */}
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold block">Client Information Notice:</span>
                <p className="leading-relaxed">
                  {companyConfig.contactPlaceholders.inquiryNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
