import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, CheckCircle2 } from "lucide-react";

export default function LeadGenBanner() {
  return (
    <section className="bg-[#0A192F] text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-[#0E2242] to-slate-900 p-8 sm:p-12 lg:p-16 border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>International Commercial Inquiries</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Looking for a Manufacturing Partner?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us about your product, specifications, and business requirements. Our engineering and export specialists review technical packages to provide structured commercial proposals.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Confidential NDA review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>24hr quotation turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Custom OEM/ODM tooling</span>
              </div>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-semibold text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>General Business Enquiry</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
