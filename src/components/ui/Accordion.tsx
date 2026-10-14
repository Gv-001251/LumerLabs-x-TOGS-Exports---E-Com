"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs transition-colors hover:border-slate-300"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                {item.category && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    {item.category}
                  </span>
                )}
                <span className="text-sm sm:text-base">{item.title}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-600" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
