import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { productCategories } from "@/data/products";

export default function ProductCategoriesSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            eyebrow="Catalogue Overview"
            title="Explore Our Product Range"
            description="Discover product categories and manufacturing possibilities for your business. Representative sample categories configured to showcase catalogue structure."
          />

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors shrink-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
            >
              {/* Category Photography */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-amber-400 border border-slate-700 text-[11px] font-bold tracking-wider uppercase">
                    Sample Category
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {category.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    {category.tagline}
                  </p>
                </div>
              </div>

              {/* Category Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {category.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Manufacturing &amp; Material Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {category.keyHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-600">
                    {category.productCountPlaceholder}
                  </span>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:text-blue-900"
                  >
                    <span>Explore Category</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalogue Disclaimer Banner */}
        <div className="mt-10 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-700">Catalogue Notice:</strong> Product categories, specifications, and sample items shown above are illustrative placeholders designed for demonstration. Once client product listings and technical sheets are finalized, this catalogue seamlessly updates via our modular data architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
