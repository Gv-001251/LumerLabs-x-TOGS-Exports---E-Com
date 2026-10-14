import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Layers,
  CheckCircle2,
  AlertCircle,
  Globe2,
  FileText,
} from "lucide-react";
import { sampleProducts } from "@/data/products";
import ProductGallery from "@/components/products/ProductGallery";
import QuoteForm from "@/components/enquiry/QuoteForm";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sampleProducts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = sampleProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | TOGS Exports`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = sampleProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-700 transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-blue-700 transition-colors"
          >
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </nav>

        {/* Back Link */}
        <div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Top Split: Image Gallery (5 cols) + Product Overview & Quick Spec (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-5">
            <ProductGallery images={product.gallery} productName={product.name} />
          </div>

          {/* Overview Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                  {product.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                  Export Ready
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                {product.description}
              </p>
            </div>

            {/* Illustrative Notice Alert */}
            <div className="p-4 rounded-lg bg-amber-50/90 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-800">Sample Specification Notice:</strong>
                All parameters, tolerances, and metallurgical grades shown on this page are illustrative demonstrations. Verified client specifications will be incorporated upon TOGS Exports catalogue finalization.
              </div>
            </div>

            {/* Packaging & Shipping Protocol Note */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Package className="w-4 h-4 text-blue-600" />
                <span>Export Packaging Standards</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.packagingNote}
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#quote-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
              >
                <span>Request a Quote for this Product</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/manufacturing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span>View Manufacturing Capabilities</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Tabs/Sections: Technical Specs & Customisation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Key Specification Table (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Technical Specifications</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Representative tolerances and metallurgical parameters
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-slate-50/70" : "bg-white"}
                    >
                      <th className="py-2.5 px-4 font-semibold text-slate-700 w-1/3 border-b border-slate-100">
                        {spec.label}
                      </th>
                      <td className="py-2.5 px-4 text-slate-900 font-mono font-medium border-b border-slate-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Potential Customisation Options & Applications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Customization Options */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>Potential Customisation Options</span>
              </h3>

              <div className="space-y-2 text-xs text-slate-700">
                {product.customizationOptions.map((opt, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{opt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Applications */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                <Globe2 className="w-4 h-4 text-emerald-600" />
                <span>Representative Applications</span>
              </h3>

              <div className="space-y-2 text-xs text-slate-700">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Sourcing / Quote Section */}
        <div id="quote-section" className="pt-6">
          <QuoteForm
            prefilledProduct={`${product.name} (${product.categoryLabel})`}
          />
        </div>
      </div>
    </div>
  );
}
