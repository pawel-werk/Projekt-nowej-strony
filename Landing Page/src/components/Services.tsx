import React from 'react';
import { TranslationSchema } from '../data/translations';

interface ServicesProps {
  tr: TranslationSchema;
  lang: 'pl' | 'en';
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ tr, lang, onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#f5f5f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              {tr.services.eyebrow}
            </span>
          </div>
          <h2
            className="font-serif text-[#0a0a0a]"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            {tr.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0ddd8]">
          {tr.services.items.map((s, i) => (
            <div
              key={i}
              onClick={() => onSelectService(s.title)}
              className="card-interactive bg-white p-8 lg:p-10 group hover:bg-[#0a0a0a] cursor-pointer relative flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectService(s.title)}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-400 transition-colors">
                    Indywidualny projekt
                  </span>
                </div>

                <h3 className="font-serif text-2xl mb-4 text-[#0a0a0a] group-hover:text-white transition-colors">
                  {s.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#6b6b6b] group-hover:text-gray-300 transition-colors font-light">
                  {s.desc}
                </p>
              </div>

              {/* Action indicator */}
              <div className="mt-10 pt-6 border-t border-gray-100 group-hover:border-white/10 flex items-center justify-between text-xs tracking-[0.18em] uppercase font-medium text-[#0a0a0a] group-hover:text-[#c5a880] transition-colors">
                <span>{lang === "pl" ? "Zapytaj o wycenę" : "Request a quote"}</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
