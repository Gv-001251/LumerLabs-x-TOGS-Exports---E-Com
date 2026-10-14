"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import QuoteForm from "@/components/enquiry/QuoteForm";

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function QuoteDrawer({
  isOpen,
  onClose,
  productName,
}: QuoteDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Request a Quote Drawer"
      >
        <div className="p-4 sm:p-6 bg-[#0A192F] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              B2B Commercial Quotation
            </span>
            <h3 className="text-lg font-bold text-white">
              {productName ? `Inquire: ${productName}` : "Request a Product Quotation"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close quote drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 flex-1">
          <QuoteForm prefilledProduct={productName} compact />
        </div>
      </div>
    </div>
  );
}
