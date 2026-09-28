import React from 'react';
import { TranslationSchema } from '../data/translations';

interface HeroProps {
  tr: TranslationSchema;
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ tr, onScrollTo }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Image with Dark Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1684928365167-e91916573122?w=1600&h=1000&fit=crop&auto=format"
          alt="Luksusowe meble na wymiar"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/65 to-[#0a0a0a]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center">
        {/* Architectural Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-[1px] bg-[#c5a880]" />
          <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-[#c5a880] font-medium">
            {tr.hero.eyebrow}
          </span>
        </div>

        {/* Headline - perfectly proportioned and never cut off */}
        <h1
          className="text-white mb-6 leading-[1.06] font-serif tracking-tight"
          style={{ fontSize: "clamp(2.8rem, 6.2vw, 6rem)", whiteSpace: "pre-line" }}
        >
          {tr.hero.headline}
        </h1>

        <p className="text-gray-300/90 mb-9 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed font-light">
          {tr.hero.sub}
        </p>

        {/* Premium High-End Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 z-20">
          <button
            onClick={() => onScrollTo("portfolio")}
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a0a0a] hover:bg-[#c5a880] hover:text-white transition-all duration-300 text-xs tracking-[0.2em] uppercase font-semibold cursor-pointer shadow-lg hover:shadow-2xl"
          >
            <span>{tr.hero.cta1}</span>
            <span className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          <button
            onClick={() => onScrollTo("contact")}
            className="inline-flex items-center justify-center px-8 py-4 bg-black/40 hover:bg-white/10 text-white border border-white/30 hover:border-white transition-all duration-300 text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-md cursor-pointer"
          >
            <span>{tr.hero.cta2}</span>
          </button>
        </div>
      </div>
    </section>
  );
};