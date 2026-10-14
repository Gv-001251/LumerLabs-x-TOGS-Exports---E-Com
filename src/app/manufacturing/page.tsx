import type { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  Cog,
  CheckCircle2,
  ArrowRight,
  Cpu,
  FileSearch,
  CalendarCheck,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { capabilityStages, manufacturingTechOverview } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Precision Engineering & Machining",
  description:
    "Explore TOGS Exports' manufacturing capabilities, multi-axis CNC machining, sheet metal fabrication, robotic welding, and precision engineering workflows.",
};

export default function ManufacturingPage() {
  const iconMap: Record<string, React.ElementType> = {
    FileSearch,
    CalendarCheck,
    Cpu,
    CheckCircle2: CheckCircle,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-20 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5" />
            <span>Operational Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Manufacturing Capabilities &amp; Engineering
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            From technical CAD drawing evaluation through multi-axis CNC machining to coordinate metrology inspection, explore our structured industrial production workflows designed for international B2B clients.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Capability Stages Detailed Section */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Stage-Gate Production Methodology"
            title="Four Pillars of Manufacturing Excellence"
            description="Our proposed operational workflow bridges client engineering requirements with shop-floor execution, maintaining rigorous quality gates at every step."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilityStages.map((stage) => {
              const Icon = iconMap[stage.icon] || Cpu;
              return (
                <div
                  key={stage.step}
                  className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-amber-400 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                        {stage.subtitle}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">
                      {stage.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Operational Controls:
                      </span>
                      {stage.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Machinery & Technology Breakdown Grid */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Machinery &amp; Processing"
            title="Production Disciplines &amp; Processing Envelopes"
            description="Representative equipment categories and processing standards for illustrative demonstration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {manufacturingTechOverview.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Cog className="w-5 h-5 text-amber-500" />
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-mono font-medium">
                  {item.specs}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustrative Notice */}
        <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sm">Manufacturing Concept Notice:</span>
            <p className="leading-relaxed">
              The manufacturing workflows, equipment categories, and machining tolerances outlined on this page represent the proposed website concept built by Lumer Labs. Official factory plant locations, specific CNC model counts, and certified tolerances will be confirmed by TOGS Exports.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#0A192F] text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">
              Have Technical Drawings Ready for Assessment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your 2D PDF and 3D STEP/IGES files for a confidential Design for Manufacturability review.
            </p>
          </div>

          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0 shadow-sm"
          >
            <span>Submit Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
