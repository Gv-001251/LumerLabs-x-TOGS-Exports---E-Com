"use client";

import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/enquiry/QuoteForm";
import { Lock } from "lucide-react";

export default function RequestQuoteClient() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const product = searchParams.get("product");

  let prefilled = "";
  if (product) prefilled = product;
  else if (service) prefilled = `${service} Custom Manufacturing Project`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Info Column (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
              Quotation Framework
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              What to Expect After Submission
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our engineering estimating desk follows a disciplined process to evaluate your drawings and deliver an itemized commercial quotation.
            </p>
          </div>

          <div className="space-y-4 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div>
                <strong className="text-slate-900 block">Drawing &amp; Specification Intake</strong>
                <span className="text-slate-600">
                  Initial review of 2D PDF tolerances, 3D STEP solid models, and metallurgy requirements.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div>
                <strong className="text-slate-900 block">Design for Manufacturability (DFM)</strong>
                <span className="text-slate-600">
                  Identifying cost-saving tooling adjustments, optimal material stock, and surface finish cycles.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div>
                <strong className="text-slate-900 block">Itemized Commercial Quotation</strong>
                <span className="text-slate-600">
                  Delivery of formal proposal detailing unit pricing, tooling setup, sample lead time, and Incoterms.
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>Confidentiality Guaranteed</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              All proprietary drawings, CAD models, and business specifications remain strictly confidential.
            </p>
          </div>
        </div>

        {/* Integration Architecture Highlight */}
        <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-3">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
            System Architecture
          </span>
          <h3 className="text-base font-bold text-white">
            Zoho CRM &amp; Form Ready Architecture
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            This inquiry system is architected with a decoupled data layer ready to connect to Zoho CRM (Leads module), Zoho Forms, or webhook endpoints with zero client-side credential exposure.
          </p>
        </div>
      </div>

      {/* Right Column: Quote Form (7 cols) */}
      <div className="lg:col-span-7">
        <QuoteForm prefilledProduct={prefilled} />
      </div>
    </div>
  );
}
