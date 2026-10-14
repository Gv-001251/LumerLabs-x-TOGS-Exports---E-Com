import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Factory, Globe2, ChevronRight } from "lucide-react";
import { companyConfig } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0A192F] text-white overflow-hidden border-b border-slate-800">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Restrained label above heading */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold tracking-wider text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{companyConfig.badgeText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl/tight font-extrabold tracking-tight text-white font-sans">
              Manufacturing Excellence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Global Reach.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {companyConfig.hero.subheadline}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-md transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <span>{companyConfig.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-semibold text-xs sm:text-sm tracking-wide text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 shadow-sm transition-all duration-150"
              >
                <span>{companyConfig.hero.secondaryCta}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Editorial Metrics / Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-400">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-amber-400" />
                  <span>Turnkey</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  Design-to-production coordination
                </div>
              </div>

              <div className="space-y-1 border-l border-slate-800 pl-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Controlled</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  Multi-stage metrology checks
                </div>
              </div>

              <div className="space-y-1 border-l border-slate-800 pl-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Worldwide</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  Export-ready freight &amp; docs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Factory Photography (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
                <Image
                  src="/images/hero-factory.jpg"
                  alt="Advanced precision CNC machining factory floor"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
              </div>

              {/* Inset Precision Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-[#0A192F]/90 backdrop-blur-md border border-slate-700/80 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-xs uppercase tracking-wider">
                    Precision Manufacturing Facility
                  </div>
                  <div className="text-[11px] text-slate-400">
                    High-tolerance CNC machining &amp; automated cells
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Concept
                </span>
              </div>
            </div>

            {/* Decorative subtle border glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/20 to-blue-500/20 blur-xl opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
