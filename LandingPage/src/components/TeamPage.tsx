import React, { useEffect } from 'react';
import { teamMembers } from '../data/teamData';

interface TeamPageProps {
  onBackToHome: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onBackToHome }) => {
  useEffect(() => {
    document.title = "Poznaj nasz zespół | Werk Mebel";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#070707] text-gray-300 font-sans selection:bg-[#c5a880] selection:text-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img src="/logo.svg" alt="Werk Mebel" className="h-7 md:h-8 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
          <button onClick={onBackToHome} className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0">
            <span className="text-xs transition-transform group-hover:-translate-x-1">←</span>
            <span>Powrót na stronę główną</span>
          </button>
        </div>
      </header>

      <main className="pb-24">
        {/* Sekcja Intro */}
        <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Ludzie Werk Mebel
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-6">
            Poznaj nas
          </h1>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
            Za każdym precyzyjnie wykonanym meblem stoją ludzie. Nasz zespół to połączenie artystycznej wizji, inżynieryjnej dokładności i rzemieślniczej pasji. Poznaj specjalistów, którzy stworzą Twoje wymarzone wnętrze.
          </p>
        </section>

        {/* Siatka pracowników */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <article 
                key={member.id} 
                className="group bg-[#121212] border border-white/5 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c5a880]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Obrazek / Szkic */}
                <div className="w-32 h-32 mb-6 rounded-full bg-[#1a1a1a] flex items-center justify-center p-6 border border-white/5 group-hover:border-[#c5a880]/30 transition-colors">
                  <img 
                    src={member.image} 
                    alt={`Szkic: ${member.role}`} 
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      // Fallback, gdy obrazka fizycznie nie ma w folderze
                      e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23c5a880" stroke-width="1"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>';
                    }}
                  />
                </div>

                {/* Dane personalne */}
                <h3 className="font-serif text-xl text-white mb-2">{member.name}</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#c5a880] mb-5">{member.role}</p>
                <p className="text-sm text-gray-400 font-light mb-8 flex-grow leading-relaxed">
                  {member.description}
                </p>

                {/* Kontakty */}
                <div className="w-full pt-5 border-t border-white/10 flex flex-col gap-3">
                  <a href={`mailto:${member.email}`} className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors" aria-label={`Wyślij e-mail do ${member.name}`}>
                    {member.email}
                  </a>
                  <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-xs tracking-widest text-[#c5a880] hover:text-white transition-colors" aria-label={`Zadzwoń do ${member.name}`}>
                    {member.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};