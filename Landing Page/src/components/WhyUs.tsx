import React from 'react';
import { TranslationSchema } from '../data/translations';

interface WhyUsProps {
  tr: TranslationSchema;
}

// Minimalist, high-end architectural line icons (stroke-width 1.25 - 1.5)
const icons = [
  // 1. Architecture / Precision Measure (Ruler & Compass / Geometry)
  <svg key="measure" className="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 21V3l18 18M7.5 16.5l1.5-1.5M10.5 13.5l1.5-1.5M13.5 10.5l1.5-1.5M16.5 7.5l1.5-1.5" />
  </svg>,

  // 2. Comprehensive Coordination / Craftsmanship (Precision Blueprint & Tools)
  <svg key="craft" className="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>,

  // 3. Premium Certified Materials (German Quality Diamond / Shield Seal)
  <svg key="quality" className="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4.5v6c0 5.25-3.5 10-8 11.5-4.5-1.5-8-6.25-8-11.5v-6L12 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>,

  // 4. Guaranteed Schedule & Precision Deadlines (Timeline / Clock-Calendar)
  <svg key="time" className="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.3">
    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
  </svg>,
];

export const WhyUs: React.FC<WhyUsProps> = ({ tr }) => {
  return (
    <section className="py-28 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              {tr.pain.eyebrow}
            </span>
          </div>
          <h2
            className="text-white font-serif tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)" }}
          >
            {tr.pain.title}
          </h2>
        </div>

        {/* 2x2 Architectural Grid with Sleek White Line Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222222]">
          {tr.pain.items.map((item, i) => (
            <div
              key={i}
              className="p-10 lg:p-12 group bg-[#0e0e0e] hover:bg-white transition-colors duration-400 cursor-default"
            >
              {/* Elegant Line Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 text-white group-hover:bg-[#0a0a0a] group-hover:border-[#0a0a0a] group-hover:text-white transition-all duration-300 mb-8">
                {icons[i] || icons[0]}
              </div>

              {/* Problem (former strike-through, now refined & legible) */}
              <p className="text-[11px] tracking-[0.2em] uppercase mb-4 text-gray-400 group-hover:text-red-600/80 transition-colors font-medium">
                — {item.problem}
              </p>

              {/* Solution */}
              <p className="text-white text-base lg:text-lg leading-relaxed group-hover:text-[#0a0a0a] transition-colors duration-300 font-light">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
