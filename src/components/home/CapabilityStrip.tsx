import Link from "next/link";
import { Factory, Cog, ShieldCheck, Globe, ArrowRight } from "lucide-react";

export default function CapabilityStrip() {
  const capabilities = [
    {
      title: "Product Manufacturing",
      description: "Precision-machined hardware, high-tolerance components, and repetitive production runs.",
      icon: Factory,
      href: "/manufacturing",
      badge: "Core Service",
    },
    {
      title: "OEM/ODM Solutions",
      description: "Custom component development, client drawing conversion, and private-label contract supply.",
      icon: Cog,
      href: "/oem-odm",
      badge: "Customization",
    },
    {
      title: "Quality-Focused Processes",
      description: "Multi-point metrology inspections, raw material verification, and full batch traceability.",
      icon: ShieldCheck,
      href: "/quality",
      badge: "Assurance",
    },
    {
      title: "Global Export Support",
      description: "Comprehensive export packaging, Incoterms coordination, and international documentation.",
      icon: Globe,
      href: "/exports",
      badge: "International",
    },
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-[#0A192F] text-amber-400 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-700 group-hover:text-blue-800">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
