export default function WatermarkOverlay() {
  return (
    <>
      {/* Repeating Diagonal Full-Screen Watermark Pattern */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none select-none z-50 overflow-hidden"
      >
        <svg
          className="w-full h-full opacity-[0.045] dark:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="lumer-labs-watermark"
              width="360"
              height="200"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-28)"
            >
              <text
                x="30"
                y="60"
                fill="currentColor"
                className="text-slate-900 fill-slate-900 font-black text-sm tracking-[0.25em] uppercase font-mono"
              >
                LUMER LABS
              </text>
              <text
                x="30"
                y="85"
                fill="currentColor"
                className="text-slate-700 fill-slate-700 font-semibold text-[10px] tracking-[0.18em] uppercase font-mono"
              >
                PROPRIETARY CONCEPT DEMO
              </text>

              <text
                x="210"
                y="160"
                fill="currentColor"
                className="text-slate-900 fill-slate-900 font-black text-sm tracking-[0.25em] uppercase font-mono"
              >
                LUMER LABS
              </text>
              <text
                x="210"
                y="185"
                fill="currentColor"
                className="text-slate-700 fill-slate-700 font-semibold text-[10px] tracking-[0.18em] uppercase font-mono"
              >
                PROPRIETARY CONCEPT DEMO
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lumer-labs-watermark)" />
        </svg>
      </div>

      {/* Floating Bottom-Left Security Concept Watermark Pill */}
      <div
        aria-hidden="true"
        className="fixed bottom-4 left-4 z-40 pointer-events-none select-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md text-slate-200 border border-slate-700/60 shadow-lg text-[11px] font-medium tracking-wide"
      >
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="font-bold text-white font-mono">LUMER LABS</span>
        <span className="text-slate-500">|</span>
        <span className="text-slate-300">Protected Client Concept Demo</span>
      </div>
    </>
  );
}
