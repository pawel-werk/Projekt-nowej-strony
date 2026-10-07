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

        {/* Pozioma lista pracowników */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {teamMembers.map((member) => (
              <article 
                key={member.id} 
                className="group bg-white border border-[#e0ddd8] flex flex-col md:flex-row transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a96e]/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                {/* Obrazek - Zmienione proporcje z 1/3 na 2/5 i powiększony rozmiar ilustracji */}
                <div className="w-full md:w-2/5 lg:w-2/5 bg-[#f5f5f3] flex items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#e0ddd8] group-hover:bg-white transition-colors duration-500">
                  <div className="w-48 h-48 md:w-64 md:h-64 relative">
                    <img 
                      src={member.image} 
                      alt={`Grafika: ${member.role}`} 
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23c8a96e" stroke-width="1"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>';
                      }}
                    />
                  </div>
                </div>

                {/* Tekst - Zmienione proporcje na 3/5 */}
                <div className="w-full md:w-3/5 lg:w-3/5 p-8 md:p-10 flex flex-col justify-center text-left">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#0a0a0a] mb-2">{member.name}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-5 font-medium">{member.role}</p>
                  <p className="text-sm md:text-base text-gray-600 font-light mb-8 flex-grow leading-relaxed">
                    {member.description}
                  </p>

                  <div className="w-full pt-5 border-t border-[#e0ddd8] flex flex-wrap gap-x-8 gap-y-4">
                    <a href={`mailto:${member.email}`} className="text-xs tracking-wider text-gray-500 hover:text-[#0a0a0a] transition-colors flex items-center gap-2.5" aria-label={`Wyślij e-mail do ${member.name}`}>
                      <svg className="w-3.5 h-3.5 text-[#c8a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-xs tracking-widest text-[#c8a96e] hover:text-[#0a0a0a] transition-colors flex items-center gap-2.5" aria-label={`Zadzwoń do ${member.name}`}>
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {member.phone}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Stopka - Jasny motyw wymuszony atrybutem theme */}
      <Footer 
        tr={tr} 
        onOpenPrivacy={onOpenPrivacy} 
        onOpenBlog={onOpenBlog} 
        theme="light"
      />
    </div>
  );
};