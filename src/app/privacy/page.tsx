import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | TOGS Exports Concept",
  description: "Privacy policy placeholder for TOGS Exports B2B manufacturing website concept.",
};

export default function PrivacyPage() {
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
          eyebrow="Legal & Data Governance"
          title="Privacy Policy (Concept Document)"
          description="Framework governing the handling of B2B commercial inquiries, technical drawings, and business contact data."
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <strong>Demonstration Notice:</strong> This privacy policy is a structured placeholder prepared by Lumer Labs for concept presentation purposes. Official legal terms, registered entity details, and data controller disclosures will be finalized by TOGS Exports.
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Information Collection</h2>
            <p>
              When commercial procurement managers submit quotation requests, we collect professional contact details (Full Name, Business Email, Corporate Phone Number, Country, and Company Name) alongside technical CAD drawings and component specifications necessary to perform manufacturing feasibility reviews.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Technical Drawing Confidentiality</h2>
            <p>
              All customer technical drawings, 3D STEP/IGES CAD files, and proprietary engineering specifications are treated as confidential assets. We routinely execute bilateral Non-Disclosure Agreements (NDAs) prior to detailed DFM engineering evaluations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. CRM &amp; Processing Systems</h2>
            <p>
              Enquiries submitted through this platform are structured to integrate securely with enterprise CRM platforms (such as Zoho CRM) using encrypted server-side tokenized APIs. No personal data is sold or shared with unauthorized commercial parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Contact &amp; Rights</h2>
            <p>
              Commercial representatives may request updates, corrections, or deletion of their submitted procurement contact records at any time through our business inquiry channel.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
