import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Anchor } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { exportCapabilities } from "@/data/exports";

export default function GlobalExportSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            align="center"
            eyebrow="International Trade Logistics"
            title="Connecting Businesses Across Markets"
            description="Facilitating streamlined cross-border B2B transactions. From multi-modal ocean and air freight coordination to comprehensive customs documentation and standardized Incoterms."
          />
        </div>

        {/* Global Port Visual Banner */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 relative mb-14 shadow-lg">
          <div className="relative aspect-[21/9] sm:aspect-[21/8] min-h-[260px] w-full">
            <Image
              src="/images/global-exports.jpg"
              alt="International deepwater container port and freight logistics"
              fill
              className="object-cover object-center opacity-85"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
          </div>

          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between max-w-xl text-white">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold tracking-wider uppercase w-fit">
              Global Supply Chain Management
            </span>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                Reliable Cross-Border Cargo Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Coordinating multi-modal freight strategies, container load optimization, and export-grade protective packaging to ensure seamless arrival worldwide.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
              >
                <span>Start an Export Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Export Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exportCapabilities.slice(0, 6).map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-amber-400 flex items-center justify-center text-sm font-bold shadow-xs">
                  0{idx + 1}
                </div>

                <h4 className="text-base font-bold text-slate-900">
                  {service.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2 space-y-1.5 border-t border-slate-200">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trade Notice */}
        <div className="mt-8 p-4 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Anchor className="w-4 h-4 text-blue-600" />
            <span>Supported Terms: FOB, CIF, CFR, EXW, and FCA per Incoterms 2020 definitions.</span>
          </div>

          <Link
            href="/exports"
            className="text-blue-700 hover:underline font-semibold inline-flex items-center gap-1"
          >
            <span>Read detailed export guidelines</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
