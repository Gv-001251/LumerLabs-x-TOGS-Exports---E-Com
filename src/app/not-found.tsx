import Link from "next/link";
import { Home, Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 text-center shadow-xs space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 font-mono font-black text-xl flex items-center justify-center mx-auto border border-amber-200">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The specification sheet, catalogue section, or capability route you requested does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Package className="w-4 h-4" />
            <span>Browse Product Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
