import React, { useState } from 'react';
import { TranslationSchema } from '../data/translations';
import { portfolioItems, PortfolioItem } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  tr: TranslationSchema;
  lang: 'pl' | 'en';
  onSelectProjectForQuote: (title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ tr, lang, onSelectProjectForQuote }) => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [modalProject, setModalProject] = useState<PortfolioItem | null>(null);

  const filterKeys = ["Wszystkie", "Kuchnie", "Garderoby", "Wnętrza", "Łazienki"];
  const filterKeysEn = ["All", "Kitchens", "Wardrobes", "Interiors", "Bathrooms"];

  const filteredItems = activeFilter === 0
    ? portfolioItems
    : portfolioItems.filter((item) =>
        lang === "pl"
          ? item.category === filterKeys[activeFilter]
          : item.categoryEn === filterKeysEn[activeFilter]
      );

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Portfolio & Realizacje
            </span>
          </div>
          <h2
            className="font-serif mb-3 text-[#0a0a0a]"
            style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)" }}
          >
            {tr.portfolio.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl font-light">
            Kliknij w wybraną realizację, aby przejrzeć pełną galerię ujęć, użyte materiały oraz opis techniczny.
          </p>
        </div>

        {/* Zakładki filtrów */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-12 border-b border-[#e8e6e1] pb-4">
          {tr.portfolio.filters.map((f, i) => {
            const isActive = activeFilter === i;
            return (
              <button
                key={i}
                onClick={() => setActiveFilter(i)}
                className={`relative text-xs tracking-[0.2em] uppercase transition-all pb-4 -mb-[17px] font-medium cursor-pointer ${
                  isActive
                    ? 'text-[#0a0a0a]'
                    : 'text-gray-400 hover:text-[#0a0a0a]'
                }`}
              >
                {f}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0a0a0a]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Równa siatka 3 kolumny - każdy kafelek to idealny poziomy prostokąt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const title = lang === 'pl' ? item.title : item.titleEn;
            const category = lang === 'pl' ? item.category : item.categoryEn;
            const photoCount = item.gallery?.length || 1;

            return (
              <div
                key={item.id}
                style={{ aspectRatio: '16 / 10', width: '100%' }}
                className="group relative overflow-hidden bg-neutral-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                onClick={() => setModalProject(item)}
              >
                {/* Zdjęcie kafelka */}
                <img
                  src={item.img}
                  alt={title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="transition-transform duration-700 ease-out group-hover:scale-108 block"
                />

                {/* Znacznik liczby ujęć w lewym górnym rogu */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-white text-[9px] tracking-[0.2em] uppercase font-mono transition-all duration-300 group-hover:border-[#c5a880]">
                  <span className="text-[#c5a880]">⊞</span>
                  <span>{photoCount} {photoCount === 1 ? 'ujęcie' : photoCount < 5 ? 'ujęcia' : 'ujęć'}</span>
                </div>

                {/* Elegancka, przejrzysta nakładka tekstowa po najechaniu */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 z-10">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-mono font-medium">
                        {category}
                      </span>
                      <span className="text-white/40 text-[10px]">·</span>
                      <span className="text-[10px] tracking-wider uppercase text-neutral-300 font-mono">
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-white font-serif text-xl md:text-2xl font-normal leading-snug mb-3">
                      {title}
                    </h3>

                    <div className="inline-flex items-center gap-2 text-white text-[11px] tracking-[0.2em] uppercase font-medium pt-2 border-t border-white/15 w-full">
                      <span className="text-neutral-200">
                        {lang === 'pl' ? 'Zobacz realizację' : 'View project'}
                      </span>
                      <span className="text-[#c5a880] transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal szczegółów projektu */}
      <ProjectModal
        project={modalProject}
        lang={lang}
        onClose={() => setModalProject(null)}
        onQuoteThisProject={onSelectProjectForQuote}
      />
    </section>
  );
};

export default Portfolio;