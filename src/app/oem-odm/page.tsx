import type { Metadata } from "next";
import Link from "next/link";
import {
  Cog,
  Shield,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { oemOdmPillars, oemOdmWorkflow, oemCapabilitiesList } from "@/data/oemOdm";

export const metadata: Metadata = {
  title: "OEM / ODM Contract Services | Custom Manufacturing Solutions",
  description:
    "Explore TOGS Exports' contract manufacturing frameworks, custom OEM product fabrication, ODM collaborative design engineering, and bulk-order supply workflows.",
};

export default function OemOdmPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Cog className="w-3.5 h-3.5" />
            <span>Contract Manufacturing Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            OEM &amp; ODM Services: Your Vision. Our Manufacturing Approach.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Tailored contract manufacturing frameworks designed for international procurement managers, equipment developers, and brand owners seeking custom fabrication under rigorous intellectual property governance.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Comparison Section: OEM vs ODM */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Engagement Models"
            title="Understanding OEM vs ODM Contract Paths"
            description="Choose the contract structure that best fits your product development maturity, engineering assets, and commercial objectives."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {oemOdmPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#0A192F] text-amber-400">
                      {pillar.category} Model
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {pillar.tag}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {pillar.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {pillar.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/request-quote?service=${pillar.category}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                  >
                    <span>Initiate {pillar.category} Project Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Phase Lifecycle Workflow */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Milestone Management"
            title="Contract Manufacturing Lifecycle"
            description="Our proposed four-phase stage-gate process guarantees intellectual property protection, sample validation, and scheduled export dispatch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oemOdmWorkflow.map((stage) => (
              <div
                key={stage.step}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                    {stage.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-blue-700 font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Confidential Execution</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Core Capabilities Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Scope of Custom Solutions
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              End-to-End OEM/ODM Project Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oemCapabilitiesList.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <span className="w-7 h-7 rounded-full bg-[#0A192F] text-amber-400 text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            <div className="p-5 rounded-xl bg-gradient-to-br from-[#0A192F] to-[#122A4F] text-white flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Confidential DFM Review
                </span>
                <p className="text-xs text-slate-300 mt-1">
                  Ready to submit technical drawings or sample requests for your private label?
                </p>
              </div>
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                <span>Discuss a Custom Requirement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Service Capability Notice:</strong> OEM/ODM contract terms, tooling ownership, minimum order quantities (MOQs), and lead times are conditional and subject to commercial agreement with TOGS Exports.
          </p>
        </div>
      </div>
    </div>
  );
}
