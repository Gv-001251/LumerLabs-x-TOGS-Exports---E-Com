import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Info } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { qualityCheckpoints, neutralCompliancePanel } from "@/data/quality";

export default function QualityAssuranceSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeader
            eyebrow="Integrity & Verification"
            title="Quality at Every Stage"
            description="Our proposed quality framework enforces rigorous checks across incoming raw stock, active machine cycles, coordinate metrology, and export documentation."
          />

          <Link
            href="/quality"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shrink-0"
          >
            <span>Quality Procedures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualityCheckpoints.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {card.phase}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Procedures:
                  </span>
                  {card.activities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <span className="leading-snug">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                {card.standardNotice}
              </div>
            </div>
          ))}
        </div>

        {/* Split: Metrology Lab Image + Neutral Compliance Information Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Metrology Photography */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <div className="relative aspect-[4/3] w-full bg-slate-900">
              <Image
                src="/images/quality-assurance.jpg"
                alt="3D Coordinate Measuring Machine (CMM) inspection in metrology lab"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Precision Metrology Demonstration
                </div>
                <div className="text-sm font-semibold">
                  3D CMM &amp; Dimensional Verification Station
                </div>
              </div>
            </div>
          </div>

          {/* Neutral Quality & Compliance Information Panel */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                {neutralCompliancePanel.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {neutralCompliancePanel.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {neutralCompliancePanel.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              {neutralCompliancePanel.bulletPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
              >
                <span>Request official quality credentials for your audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
