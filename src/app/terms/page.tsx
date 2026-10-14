import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Trade & Commercial Conditions | TOGS Exports Concept",
  description: "Terms and commercial conditions placeholder for TOGS Exports B2B manufacturing website concept.",
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <SectionHeader
          eyebrow="Commercial Framework"
          title="Terms &amp; Trade Conditions (Concept Document)"
          description="General conditions governing international B2B inquiries, formal commercial quotations, and export transactions."
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <strong>Demonstration Notice:</strong> These terms are illustrative placeholders created by Lumer Labs for concept demonstration purposes. Formal binding commercial contracts, Incoterms, and payment clauses will be issued directly by TOGS Exports.
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Quotations and Price Validity</h2>
            <p>
              All commercial proposals, unit prices, and tooling costs provided in response to requests are valid for the specific duration stated in the formal quotation sheet (typically 30 calendar days), subject to raw material metal index volatility.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. International Incoterms</h2>
            <p>
              Delivery terms (FOB, CIF, CFR, EXW, FCA) are interpreted in strict accordance with Incoterms 2020 published by the International Chamber of Commerce (ICC). Transfer of risk occurs at the designated agreed milestone.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Tooling Ownership &amp; IP Protection</h2>
            <p>
              Unless otherwise specified in writing, custom tooling, dies, and fixtures fabricated for customer OEM orders remain the exclusive intellectual property of the customer upon full settlement of tooling invoices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Sample Approvals &amp; Tolerance Acceptance</h2>
            <p>
              Full-scale mass production commences only following written customer sign-off on First Article Inspection (FAI) pilot samples and dimensional inspection sheets.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
