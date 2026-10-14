import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CapabilityStrip from "@/components/home/CapabilityStrip";
import ProductCategoriesSection from "@/components/home/ProductCategoriesSection";
import ManufacturingSection from "@/components/home/ManufacturingSection";
import OemOdmHomeSection from "@/components/home/OemOdmHomeSection";
import QualityAssuranceSection from "@/components/home/QualityAssuranceSection";
import GlobalExportSection from "@/components/home/GlobalExportSection";
import BuyerJourneySection from "@/components/home/BuyerJourneySection";
import LeadGenBanner from "@/components/home/LeadGenBanner";
import Accordion from "@/components/ui/Accordion";
import SectionHeader from "@/components/ui/SectionHeader";
import { b2bFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "TOGS Exports | International B2B Manufacturing & Global Trade",
  description:
    "Explore manufacturing solutions, product capabilities, and OEM/ODM services designed to support businesses across international markets.",
};

export default function HomePage() {
  const faqItems = b2bFaqs.map((faq, idx) => ({
    id: `faq-${idx}`,
    title: faq.question,
    category: faq.category,
    content: <p className="text-slate-600 leading-relaxed">{faq.answer}</p>,
  }));

  return (
    <div className="flex flex-col">
      {/* 4.C Hero Section */}
      <HeroSection />

      {/* 4.D Capability Highlights */}
      <CapabilityStrip />

      {/* 4.E Product Categories */}
      <ProductCategoriesSection />

      {/* 4.F Manufacturing Capabilities */}
      <ManufacturingSection />

      {/* 4.G OEM/ODM Services */}
      <OemOdmHomeSection />

      {/* 4.H Quality Assurance */}
      <QualityAssuranceSection />

      {/* 4.I International Export Support */}
      <GlobalExportSection />

      {/* 4.J Buyer Journey */}
      <BuyerJourneySection />

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeader
              align="center"
              eyebrow="Commercial FAQ"
              title="Frequently Asked Inquiries"
              description="Common questions regarding our B2B manufacturing workflows, technical drawing evaluation, export logistics, and OEM contract protocols."
            />
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>

      {/* 4.K Lead Generation Banner */}
      <LeadGenBanner />
    </div>
  );
}
