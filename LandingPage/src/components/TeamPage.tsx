import React, { useEffect } from 'react';
import { teamMembers } from '../data/teamData';
import { TranslationSchema } from '../data/translations';
import { Footer } from './Footer';

interface TeamPageProps {
  onBackToHome: () => void;
  tr: TranslationSchema;
  onOpenPrivacy: () => void;
  onOpenBlog: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onBackToHome, tr, onOpenPrivacy, onOpenBlog }) => {
  useEffect(() => {
    document.title = "Poznaj nasz zespół | Werk Mebel";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#0a0a0a] font-sans selection:bg-[#c8a96e] selection:text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#e0ddd8] bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className="flex items-center gap-2 transition-opacity hover:opacity-70">
            <img src="/logo.svg" alt="Werk Mebel" className="h-7 md:h-8 w-auto object-contain" />
          </a>
          <button onClick={onBackToHome} className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-[#0a0a0a] transition-colors cursor-pointer bg-transparent border-0">
            <span className="text-xs transition-transform group-hover:-translate-x-1">←</span>
            <span>Powrót na stronę główną</span>
          </button>
        </div>
      </header>

      <main className="flex-1 pb-24">
        {/* Sekcja Intro */}
        <section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#c8a96e]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c8a96e] font-medium">
              Ludzie Werk Mebel
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0a0a0a] tracking-tight mb-6">
            Poznaj nas
          </h1>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Za każdym precyzyjnie wykonanym meblem stoją ludzie. Nasz zespół to połączenie artystycznej wizji, inżynieryjnej dokładności i rzemieślniczej pasji. Poznaj specjalistów, którzy stworzą Twoje wymarzone wnętrze.
          </p>
        </section>

        {/* Pozi