"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#0A192F] text-amber-400 hover:bg-slate-800 shadow-xl border border-slate-700/80 transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
