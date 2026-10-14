import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "blue" | "neutral" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-slate-100 text-slate-800 border-slate-200",
    gold: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    neutral: "bg-slate-800 text-slate-200 border-slate-700",
    outline: "bg-transparent text-slate-700 border-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold tracking-wider uppercase border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
