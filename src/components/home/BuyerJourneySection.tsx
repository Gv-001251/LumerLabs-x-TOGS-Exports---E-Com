import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck, Layers, Calculator, Handshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { buyerJourneySteps } from "@/data/buyerJourney";

export default function BuyerJourneySection() {
  const iconList = [FileCheck, Layers, Calculator, Handshake];

  return (
    <section id="buyer-journey" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader
            align="center"
            eyebrow="Commercial Procurement Path"
            title="Structured Buyer Journey"
            description="From initial CAD drawing submission to formal commercial purchase orders and export delivery. A transparent four-step engagement process for global procurement managers."
          />
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Timeline Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {buyerJourneySteps.map((step, idx) => {
              const StepIcon = iconList[idx] || FileCheck;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Step Number + Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-amber-400 font-mono font-black text-base flex items-center justify-center shadow-xs">
                        {step.number}
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                        <StepIcon className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Milestone Deliverables:
                      </span>
                      {step.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>Phase {idx + 1} of 4</span>
                    <span className="text-blue-600 font-semibold">Stage Gate</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <span>Begin Step 1: Submit Your Project Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
