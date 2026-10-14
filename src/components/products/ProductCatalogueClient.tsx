"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  ArrowRight,
  Package,
  FileText,
  X,
} from "lucide-react";
import { sampleProducts, productCategories } from "@/data/products";
import QuoteDrawer from "@/components/ui/QuoteDrawer";

export default function ProductCatalogueClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeQuoteProduct, setActiveQuoteProduct] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.summary.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.specifications.some(
          (s) =>
            s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenQuoteDrawer = (productName: string) => {
    setActiveQuoteProduct(productName);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by part name or material..."
            className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === "all"
                ? "bg-[#0A192F] text-amber-400 shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Products ({sampleProducts.length})
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? "bg-[#0A192F] text-amber-400 shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div>
          Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> demonstration products
          {selectedCategory !== "all" && (
            <span> in <span className="font-semibold text-blue-700">{productCategories.find(c => c.id === selectedCategory)?.name}</span></span>
          )}
        </div>

        {(searchQuery || selectedCategory !== "all") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-blue-700 hover:underline font-semibold flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Product Card Image */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-amber-400 border border-slate-700">
                    {product.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider block">
                    Illustrative Sample Part
                  </span>
                </div>
              </div>

              {/* Product Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.summary}
                  </p>
                </div>

                {/* Key Spec Snippets */}
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-1.5 text-[11px]">
                  {product.specifications.slice(0, 3).map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center text-slate-600">
                      <span className="font-medium text-slate-500">{spec.label}:</span>
                      <span className="font-semibold text-slate-900 truncate ml-2 max-w-[55%] text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons: View Details + Request a Quote */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-md text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleOpenQuoteDrawer(product.name)}
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-md text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs text-center"
                  >
                    <span>Quote</span>
                    <FileText className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-xl border border-slate-200 space-y-3">
          <Package className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            No products match your search query
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search keywords or select &ldquo;All Products&rdquo; to view the entire demonstration catalogue.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 rounded-md text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Quote Slide-Over Drawer */}
      <QuoteDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        productName={activeQuoteProduct}
      />
    </div>
  );
}
