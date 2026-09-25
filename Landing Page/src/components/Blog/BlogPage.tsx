import React, { useState, useMemo } from 'react';
import { blogPosts } from '../../data/blogPosts';
import { BlogCard } from './BlogCard';

interface BlogPageProps {
  onBackToHome: () => void;
  onSelectPost: (slug: string) => void;
}

const CATEGORIES = [
  'Wszystkie',
  'Kuchnie na wymiar',
  'Materiały i okucia',
  'Trendy i architektura',
  'Poradniki',
] as const;

export const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome, onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'Wszystkie') return blogPosts;
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#070707] text-gray-300 font-sans selection:bg-[#c5a880] selection:text-black flex flex-col">
      {/* Header podstrony */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
            }}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img
              src="/logo.svg"
              alt="Werk Mebel"
              className="h-7 md:h-8 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0"
          >
            <span className="text-xs transition-transform group-hover:-translate-x-1">←</span>
            <span>Strona główna</span>
          </button>
        </div>
      </header>

      {/* Główna sekcja */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex-1 w-full">
        {/* Wstęp nagłówkowy */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Baza Wiedzy & Inspiracje
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-5">
            Dziennik Rzemiosła i Architektury
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
            Eksperckie poradniki stolarskie, analizy ergonomii kuchennej oraz przegląd najtrwalszych
            materiałów ze świata architektury wnętrz tworzone przez zespół Werk Mebel.
          </p>
        </div>

        {/* Pasek filtrowania kategorii */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-12 border-b border-white/10 pb-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(6);
                }}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a880] text-black font-semibold'
                    : 'bg-[#121212] text-gray-400 hover:text-white hover:bg-[#1a1a1a] border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Siatka wpisów */}
        {displayedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="py-20 text-center bg-[#0f0f0f] border border-white/10 p-8">
            <p className="text-white font-serif text-xl mb-2">Brak wpisów w tej kategorii</p>
            <p className="text-gray-400 text-sm font-light mb-6">
              Wkrótce opublikujemy nowe artykuły w sekcji „{selectedCategory}”.
            </p>
            <button
              onClick={() => setSelectedCategory('Wszystkie')}
              className="text-xs tracking-widest uppercase text-[#c5a880] underline underline-offset-4 hover:text-white transition-colors"
            >
              Wróć do wszystkich wpisów
            </button>
          </div>
        )}

        {/* Przycisk „Załaduj więcej” (Paginacja) */}
        {visibleCount < filteredPosts.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-3.5 bg-transparent border border-white/20 hover:border-[#c5a880] text-white hover:text-[#c5a880] text-xs uppercase tracking-[0.2em] transition-all cursor-pointer font-medium"
            >
              Załaduj starsze artykuły ({filteredPosts.length - visibleCount})
            </button>
          </div>
        )}
      </main>
    </div>
  );
};