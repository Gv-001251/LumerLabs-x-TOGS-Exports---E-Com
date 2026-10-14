import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { oemOdmPillars, oemCapabilitiesList } from "@/data/oemOdm";

export default function OemOdmHomeSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            align="center"
            eyebrow="Contract Manufacturing"
            title="Your Vision. Our Manufacturing Approach."
            description="Whether you possess fully engineered 3D CAD models ready for tooling or require concept co-development, our OEM and ODM contract frameworks ensure intellectual property integrity and repeatable industrial quality."
          />
        </div>

        {/* OEM vs ODM Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {oemOdmPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-[#0A192F] text-amber-400">
                    {pillar.category} Model
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-3 border-t border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Core Advantages:
                  </span>
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">Non-Disclosure Protected</span>
                <Link
                  href="/oem-odm"
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                >
                  <span>Review {pillar.category} Lifecycle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 5 OEM/ODM Capabilities Pill Strip */}
        <div className="bg-[#0A192F] text-white rounded-xl p-8 shadow-lg border border-slate-800">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Comprehensive Service Architecture
            </span>
            <h4 className="text-xl font-bold text-white">
              End-to-End Contract Manufacturing Capabilities
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oemCapabilitiesList.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 border border-amber-400/30">
                    {idx + 1}
                  </span>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    {item.title}
                  </h5>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Direct CTA card */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  Custom Inquiries
                </span>
                <p className="text-xs text-slate-300 mt-1">
                  Ready to evaluate technical drawings or explore private-label production?
                </p>
              </div>
              <div className="pt-3">
                <Link
                  href="/request-quote"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors uppercase tracking-wider"
                >
                  <span>Discuss a Custom Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
