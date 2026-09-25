import React, { useEffect, useMemo } from 'react';
import { blogPosts } from '../../data/blogPosts';
import { BlogCard } from './BlogCard';
import logoImg from '../../assets/logo.png';

interface BlogPostPageProps {
  slug: string;
  onBackToBlog: () => void;
  onBackToHome: () => void;
  onSelectPost: (slug: string) => void;
  onQuoteRequest?: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  slug,
  onBackToBlog,
  onBackToHome,
  onSelectPost,
  onQuoteRequest,
}) => {
  const post = blogPosts.find((p) => p.slug === slug);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Powiązane wpisy (wykluczając bieżący)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const sameCat = blogPosts.filter((p) => p.slug !== slug && p.category === post.category);
    const others = blogPosts.filter((p) => p.slug !== slug && p.category !== post.category);
    return [...sameCat, ...others].slice(0, 3);
  }, [post, slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#070707] text-gray-300 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">404: Artykuł nie został znaleziony</h1>
        <p className="text-gray-400 text-sm max-w-md mb-8">
          Wpis, którego szukasz, mógł zostać przeniesiony lub usunięty.
        </p>
        <button
          onClick={onBackToBlog}
          className="px-6 py-3 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-semibold cursor-pointer"
        >
          Wróć do listy artykułów
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-gray-300 font-sans selection:bg-[#c5a880] selection:text-black">
      {/* Top Header bar */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
            }}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img
              src={logoImg}
              alt="Werk Mebel"
              className="h-7 md:h-8 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          <div className="flex items-center gap-5">
            <button
              onClick={onBackToBlog}
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#c5a880] hover:text-white transition-colors cursor-pointer bg-transparent border-0"
            >
              <span className="text-xs transition-transform group-hover:-translate-x-1">←</span>
              <span>Wszystkie wpisy</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        {/* Nagłówek artykułu */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-light border-b border-white/10 pb-8">
            <time dateTime={post.publishedAt} className="text-gray-300">
              Opublikowano: {post.publishedAt}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span>Autor: Zespół Projektowy Werk Mebel</span>
          </div>
        </header>

        {/* Obrazek wyróżniający (Hero Cover) */}
        <div className="relative aspect-[16/9] overflow-hidden mb-14 bg-neutral-900 border border-white/10 shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lead artykułu */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed border-l-2 border-[#c5a880] pl-6 py-1">
            {post.excerpt}
          </p>
        </div>

        {/* Treść artykułu renderowana z bloków */}
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-300 font-light pb-16 border-b border-white/10">
          {post.content.map((block, idx) => {
            switch (block.type) {
              case 'paragraph':
                return <p key={idx}>{block.text}</p>;
              case 'heading2':
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-serif text-white pt-6 pb-2">
                    {block.text}
                  </h2>
                );
              case 'heading3':
                return (
                  <h3 key={idx} className="text-xl md:text-2xl font-serif text-gray-100 pt-4 pb-1">
                    {block.text}
                  </h3>
                );
              case 'list':
                return (
                  <ul key={idx} className="space-y-3 pl-6 list-disc marker:text-[#c5a880] my-6">
                    {block.items.map((item, i) => (
                      <li key={i} className="pl-1 text-sm md:text-base text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              case 'quote':
                return (
                  <blockquote
                    key={idx}
                    className="my-10 p-8 bg-[#0f0f0f] border-l-2 border-[#c5a880] text-gray-200 italic font-serif text-lg md:text-xl"
                  >
                    <p className="mb-3">„{block.quote}”</p>
                    {block.author && (
                      <footer className="text-xs uppercase tracking-[0.2em] text-[#c5a880] not-italic font-sans">
                        — {block.author}
                      </footer>
                    )}
                  </blockquote>
                );
              case 'image':
                return (
                  <figure key={idx} className="my-10">
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10">
                      <img
                        src={block.url}
                        alt={block.caption || post.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="text-xs text-gray-400 mt-3 font-light text-center">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* CTA wewnątrz artykułu */}
        <div className="my-16 p-8 md:p-12 bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-medium block mb-2">
              Planujesz inwestycję?
            </span>
            <h3 className="text-2xl font-serif text-white mb-2">
              Przekształć inspirację w gotowy projekt
            </h3>
            <p className="text-gray-400 text-sm font-light max-w-md">
              Odwiedź nasz salon w Alei Bielany lub prześlij rzuty do bezpłatnej wyceny wstępnej.
            </p>
          </div>
          <button
            onClick={() => {
              if (onQuoteRequest) onQuoteRequest();
              else onBackToHome();
            }}
            className="btn-premium btn-gold px-8 py-4 text-xs tracking-widest uppercase font-semibold shrink-0 cursor-pointer"
          >
            Umów konsultację →
          </button>
        </div>

        {/* Sekcja: Powiązane artykuły */}
        {relatedPosts.length > 0 && (
          <section className="pt-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-medium block mb-1">
                  Kontynuuj lekturę
                </span>
                <h2 className="text-2xl font-serif text-white">Powiązane wpisy</h2>
              </div>
              <button
                onClick={onBackToBlog}
                className="text-xs text-gray-400 hover:text-white uppercase tracking-widest underline underline-offset-4 cursor-pointer"
              >
                Zobacz wszystkie
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} onSelectPost={onSelectPost} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
