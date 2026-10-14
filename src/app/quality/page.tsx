import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Info,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { qualityCheckpoints, neutralCompliancePanel } from "@/data/quality";

export const metadata: Metadata = {
  title: "Quality Assurance & Metrology | TOGS Exports",
  description:
    "Explore TOGS Exports' four-stage quality assurance protocol, coordinate metrology inspection, material testing reviews, and export compliance dossiers.",
};

export default function QualityPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Inspection &amp; Verification Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quality at Every Stage
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            From incoming raw material verification through statistical in-process checks to 3D coordinate metrology probing, our quality framework delivers verifiable precision for overseas procurement.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* 4 Checkpoint Stages */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Verification Workflow"
            title="Four Pillars of Quality Assurance"
            description="Every production consignment follows four structured inspection checkpoints prior to overseas dispatch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityCheckpoints.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                      {card.phase}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    {card.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Inspection Activities:
                    </span>
                    {card.activities.map((act, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  {card.standardNotice}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrology Laboratory & Inspection Equipment Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <div className="relative aspect-[4/3] w-full bg-slate-900">
              <Image
                src="/images/quality-assurance.jpg"
                alt="High-precision coordinate measuring machine inspecting engineered part"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
              Metrology Capabilities
            </span>

            <h3 className="text-2xl font-bold text-slate-900">
              Dimensional Accuracy &amp; Optical Metrology
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our proposed quality assurance model incorporates automated 3D CMM probing, optical profile projectors, digital surface roughness testing, and calibrated hard gauging to ensure 100% compliance with client engineering prints.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Full Dimensional Reports:</strong> Measured values mapped directly against ballooned client drawings.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Material Test Certificates:</strong> EN 10204 3.1 chemical and mechanical testing records per heat batch.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Surface Profiling:</strong> Ra/Rz micro-inch roughness verification before and after coating.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Neutral Quality & Compliance Information Panel */}
        <div className="bg-white rounded-2xl border-2 border-slate-300 p-8 sm:p-10 shadow-sm space-y-5">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded border border-blue-200">
              {neutralCompliancePanel.badge}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {neutralCompliancePanel.title}
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            {neutralCompliancePanel.description}
          </p>

          <div className="space-y-2.5 pt-2 border-t border-slate-100">
            {neutralCompliancePanel.bulletPoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Require specific audit documentation for your vendor onboarding?
            </span>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs"
            >
              <span>Inquire About Quality Credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
