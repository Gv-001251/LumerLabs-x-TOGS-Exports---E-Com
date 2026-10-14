import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { companyConfig } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#060D1A] text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/90">
          {/* Col 1 & 2: Brand Information & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm tracking-wider">
                  TE
                </div>
                <span className="font-extrabold text-2xl tracking-wider text-white font-mono uppercase group-hover:text-amber-300 transition-colors">
                  TOGS <span className="text-amber-400">EXPORTS</span>
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm font-medium leading-relaxed">
              {companyConfig.tagline}
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              International B2B manufacturing and export organization providing precision-engineered components, OEM/ODM contract production, and export-grade industrial supply solutions.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Commercial B2B Procurement Portal</span>
              </div>
            </div>
          </div>

          {/* Col 3: Products & Catalogue */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Product Catalogue
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products?category=industrial-components"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Industrial Components
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=engineered-parts"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Engineered Parts
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=custom-manufacturing"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Custom Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=packaging-supplies"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Packaging &amp; Supplies
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline pt-1"
                >
                  <span>Browse Full Catalogue</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Manufacturing & Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/manufacturing"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Manufacturing Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/oem-odm"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  OEM / ODM Contract Services
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Quality Assurance &amp; Metrology
                </Link>
              </li>
              <li>
                <Link
                  href="/exports"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Export Capabilities &amp; Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/#buyer-journey"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Buyer Journey &amp; Milestones
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Business Enquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Business Inquiries
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/request-quote"
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Request a Formal Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact &amp; Inquiries
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-400 leading-normal">
                Official commercial contacts, factory physical addresses, and authorized export representatives will be confirmed upon client onboarding.
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary Info & Concept Disclosure */}
        <div className="pt-8 space-y-6">
          {/* Mandatory Lumer Labs Concept Disclosure */}
          <div className="p-4 rounded-lg bg-slate-900/90 border border-amber-500/30 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-start gap-2.5">
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 uppercase tracking-wider shrink-0 mt-0.5 border border-amber-500/40">
                Notice
              </span>
              <p>
                {companyConfig.conceptDisclosure}
              </p>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Lumer Labs credit, Privacy & Terms placeholders */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; 2026 TOGS EXPORTS Concept by Lumer Labs. All rights reserved.
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">
                Terms &amp; Trade Conditions
              </Link>
              <span>&bull;</span>
              <span className="text-amber-400/90 font-medium">Concept by Lumer Labs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
