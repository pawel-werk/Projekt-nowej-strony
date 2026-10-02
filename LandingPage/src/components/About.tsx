import React from 'react';
import { TranslationSchema } from '../data/translations';

interface AboutProps {
  tr: TranslationSchema;
  onOpenTeam: () => void;
}

export const About: React.FC<AboutProps> = ({ tr, onOpenTeam }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story and stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3 text-[#c8a96e] font-medium">
              {tr.about.eyebrow}
            </p>
            <h2
              className="font-serif mb-6 text-[#0a0a0a]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              {tr.about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg font-light">
              {tr.about.body}
            </p>
            
            {/* Przycisk CTA kierujący do podstrony Zespołu */}
            <div className="mt-10 flex justify-start">
              <button
                onClick={onOpenTeam}
                aria-label="Przejdź do podstrony Poznaj nasz zespół"
                className="inline-flex items-center gap-3 border border-[#0a0a0a] text-[#0a0a0a] hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors cursor-pointer px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-medium bg-transparent"
              >
                <span>Poznaj nasz zespół</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-[#e0ddd8]">
            {tr.about.stats.map((s, i) => (
              <div key={i} className="bg-white p-8 group hover:bg-[#f9f8f6] transition-colors">
                <p className="font-serif text-4xl lg:text-5xl text-[#0a0a0a] leading-none mb-2">
                  {s.val}
                </p>
                <p className="text-xs tracking-widest uppercase text-[#6b6b6b]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature image banner */}
        <div className="relative mb-24 overflow-hidden bg-gray-100 h-96 lg:h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1632583824020-937ae9564495?w=1400&h=600&fit=crop&auto=format"
            alt="Warsztat mebli Werk Mebel Wrocław"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute left-8 lg:left-12 bottom-8 lg:bottom-12">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-2 font-medium">
              Wrocław · od 2011
            </p>
            <p className="text-white font-serif text-2xl lg:text-4xl leading-tight">
              Meble z duszą.<br />
            </p>
          </div>
        </div>

        {/* Sekcja 6 Kroków - Nowy Nagłówek */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c8a96e]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c8a96e] font-medium">
              {tr.about.processEyebrow}
            </span>
          </div>
          <h2
            className="font-serif text-[#0a0a0a] tracking-tight"
            style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
          >
            {tr.about.processTitle}
          </h2>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0ddd8]">
          {tr.about.process.map((p) => (
            <div
              key={p.step}
              className="card-interactive bg-white p-8 group hover:bg-black transition-colors duration-300"
            >
              <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[#c8a96e] font-semibold">
                {p.step}
              </p>
              <h3 className="font-serif text-xl font-medium mb-3 text-[#0a0a0a] group-hover:text-white transition-colors">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6b6b6b] group-hover:text-gray-300 transition-colors font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};