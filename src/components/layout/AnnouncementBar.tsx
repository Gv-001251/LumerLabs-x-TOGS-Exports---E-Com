import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#060D1A] text-slate-200 text-xs border-b border-slate-800/80 py-2 px-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Globe className="w-3 h-3 text-amber-400" />
            B2B GLOBAL
          </span>
          <span className="text-slate-300 font-medium tracking-wide">
            Your Global Manufacturing Partner
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <span className="hidden md:inline">Commercial Procurement &amp; OEM/ODM Inquiries</span>
          <span className="hidden md:inline text-slate-700">|</span>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
