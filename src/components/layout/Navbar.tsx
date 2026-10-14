"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { companyConfig } from "@/data/company";
import SearchModal from "@/components/ui/SearchModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu is closed on link click

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#0A192F]/95 backdrop-blur-md shadow-md border-b border-slate-800"
            : "bg-[#0A192F] border-b border-slate-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: TOGS EXPORTS Wordmark + Tagline */}
            <Link
              href="/"
              className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
              aria-label="TOGS Exports Home"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm tracking-wider shadow-sm group-hover:from-amber-400 group-hover:to-amber-500 transition-colors">
                  TE
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-white font-mono uppercase group-hover:text-amber-300 transition-colors">
                    TOGS <span className="text-amber-400">EXPORTS</span>
                  </span>
                  <span className="hidden lg:block text-[10px] tracking-wider text-slate-400 font-medium uppercase">
                    Connecting Global Markets with Quality Products
                  </span>
                </div>
              </div>
            </Link>

            {/* Centre: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {companyConfig.navLinks
                .filter((link) => link.href !== "/contact") // Keep primary top bar focused; contact in menu
                .map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors relative ${
                        isActive
                          ? "text-amber-400 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full" />
                      )}
                    </Link>
                  );
                })}
            </nav>

            {/* Right: Search + Quote Button + Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-700/60 transition-colors flex items-center gap-2 text-xs"
                aria-label="Search products and capabilities"
              >
                <Search className="w-4 h-4 text-slate-300" />
                <span className="hidden xl:inline text-slate-400">Search...</span>
                <kbd className="hidden xl:inline text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">
                  ⌘K
                </kbd>
              </button>

              {/* Prominent Request a Quote Button */}
              <Link
                href="/request-quote"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md font-semibold text-xs tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-sm transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0A192F] border-b border-slate-800 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-1">
              <div className="pb-3 mb-2 border-b border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                  Menu &amp; Capabilities
                </span>
              </div>
              {companyConfig.navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                      isActive
                        ? "text-amber-400 bg-slate-800/80 font-semibold"
                        : "text-slate-200 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <Link
                  href="/request-quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md font-bold text-xs tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-sm"
                >
                  <span>Request a Commercial Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>B2B Export &amp; Custom Manufacturing</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
