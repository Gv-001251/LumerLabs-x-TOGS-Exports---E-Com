import { Suspense } from "react";
import type { Metadata } from "next";
import RequestQuoteClient from "@/components/enquiry/RequestQuoteClient";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Request a Quote | B2B Manufacturing & Export Proposals",
  description:
    "Submit your technical drawings and commercial requirements for a formal B2B manufacturing and export quotation from TOGS Exports.",
};

export default function RequestQuotePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="Commercial Quotation Desk"
            title="Request a B2B Manufacturing Quotation"
            description="Submit your product drawings, volume projections, and delivery requirements. All technical and commercial inquiries are evaluated under strict confidentiality."
          />
        </div>

        <Suspense
          fallback={
            <div className="p-12 text-center text-slate-500 text-sm">
              Loading quotation intake desk...
            </div>
          }
        >
          <RequestQuoteClient />
        </Suspense>
      </div>
    </div>
  );
}
