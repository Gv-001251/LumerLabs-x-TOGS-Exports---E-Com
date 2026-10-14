import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileSearch, CalendarCheck, Cpu, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { capabilityStages } from "@/data/capabilities";

export default function ManufacturingSection() {
  const iconMap: Record<string, React.ElementType> = {
    FileSearch,
    CalendarCheck,
    Cpu,
    CheckCircle2: CheckCircle,
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <SectionHeader
            eyebrow="Workflow Architecture"
            title="From Requirements to Manufacturing Solutions"
            description="Our proposed operational workflow bridges international commercial requirements with precision shop floor execution. Demonstrating structured phases from technical drawing intake to export dispatch."
          />
        </div>

        {/* Split Layout: Left Process Stages (7 cols) + Right Editorial Image & Specs (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 4 Stages */}
          <div className="lg:col-span-7 space-y-4">
            {capabilityStages.map((stage) => {
              const IconComponent = iconMap[stage.icon] || Cpu;
              return (
                <div
                  key={stage.step}
                  className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-amber-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-amber-400" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="text-base font-bold text-slate-900">
                          {stage.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 w-fit">
                          {stage.subtitle}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {stage.description}
                      </p>

                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-700">
                        {stage.points.map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Manufacturing Machinery & Technical Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/custom-manufacturing.jpg"
                  alt="High-technology robotic laser fabrication and machining"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Industrial Technology Demonstration
                  </div>
                  <div className="text-sm font-semibold">
                    Multi-Axis Machining &amp; Robotic Automation
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                  Technical Capability Overview
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Machining Precision:
                    </span>
                    <span className="text-slate-600">
                      Standard ISO 2768-m/f tolerances, with critical features calibrated down to ±0.005 mm.
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Material Versatility:
                    </span>
                    <span className="text-slate-600">
                      Carbon steels, alloy steels (4140, 8620), stainless (304, 316L), brass, bronze, aluminum (6061, 7075).
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Production Scaling:
                    </span>
                    <span className="text-slate-600">
                      Flexible batch runs from pilot sample validation to continuous container-load volume deliveries.
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/manufacturing"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    <span>Explore Manufacturing Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
              <strong>Illustrative Workflow Note:</strong> The stages displayed illustrate the proposed B2B manufacturing and client review workflow. Specific factory machinery, operating centers, and inspection stations will be tailored to TOGS Exports&apos; verified setup.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
