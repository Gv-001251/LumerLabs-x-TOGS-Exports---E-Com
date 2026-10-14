import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          {isCenter && <div className="h-px w-6 bg-amber-500/40" />}
          <span
            className={`text-xs font-bold tracking-widest uppercase ${
              isDark ? "text-amber-400" : "text-amber-600"
            }`}
          >
            {eyebrow}
          </span>
          <div className="h-px w-6 bg-amber-500/40" />
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
