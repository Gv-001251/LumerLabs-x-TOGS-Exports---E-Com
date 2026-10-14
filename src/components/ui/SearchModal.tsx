"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Package, Wrench, Shield, Globe } from "lucide-react";
import { sampleProducts, productCategories } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredProducts = normalizedQuery
    ? sampleProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(normalizedQuery) ||
          p.summary.toLowerCase().includes(normalizedQuery) ||
          p.categoryLabel.toLowerCase().includes(normalizedQuery) ||
          p.specifications.some(
            (s) =>
              s.label.toLowerCase().includes(normalizedQuery) ||
              s.value.toLowerCase().includes(normalizedQuery)
          )
      )
    : sampleProducts.slice(0, 4);

  const filteredCategories = normalizedQuery
    ? productCategories.filter(
        (c) =>
          c.name.toLowerCase().includes(normalizedQuery) ||
          c.description.toLowerCase().includes(normalizedQuery)
      )
    : productCategories;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Search catalogue and capabilities"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, specifications, or capabilities..."
            className="w-full text-slate-800 placeholder-slate-400 text-sm focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="px-2 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 rounded border border-slate-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5 divide-y divide-slate-100">
          {/* Products Result */}
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>{query ? "Matching Products" : "Featured Products"}</span>
              <span className="text-[10px] font-normal text-slate-400">
                {filteredProducts.length} results
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="space-y-1.5">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={handleClose}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100 text-[#0A192F] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                        <Package className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {product.summary}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 py-3 text-center">
                No products match &ldquo;{query}&rdquo;. Try searching for &ldquo;machined&rdquo;, &ldquo;gear&rdquo;, or &ldquo;pallet&rdquo;.
              </p>
            )}
          </div>

          {/* Categories Result */}
          <div className="pt-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Product Categories
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.id}`}
                  onClick={handleClose}
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-colors text-left block"
                >
                  <div className="text-xs font-semibold text-slate-900">{cat.name}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">{cat.tagline}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Capabilities &amp; Services
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/manufacturing"
                onClick={handleClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <Wrench className="w-3.5 h-3.5 text-blue-600" />
                <span>Manufacturing Stages</span>
              </Link>
              <Link
                href="/oem-odm"
                onClick={handleClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <Package className="w-3.5 h-3.5 text-amber-600" />
                <span>OEM / ODM Contract Work</span>
              </Link>
              <Link
                href="/quality"
                onClick={handleClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Quality Assurance &amp; Metrology</span>
              </Link>
              <Link
                href="/exports"
                onClick={handleClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-indigo-600" />
                <span>Export Capabilities</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search demonstration records</span>
          <Link
            href="/products"
            onClick={handleClose}
            className="text-blue-700 hover:underline font-medium"
          >
            View full catalogue &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
