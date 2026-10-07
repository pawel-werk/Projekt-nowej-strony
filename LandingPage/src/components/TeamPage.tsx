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
    <div className="min-h-screen bg-[#f9f8f6] text-[#0a0a0a] font-sans selection:bg-[#c8a96e] selection:text-white">
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

      <main className="pb-24">
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
                {/* Obrazek / Szkic - Lewa strona (Desktop) / Góra (Mobile) */}
                <div className="w-full md:w-2/5 lg:w-1/3 bg-[#f5f5f3] flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-[#e0ddd8] group-hover:bg-white transition-colors duration-500">
                  <div className="w-32 h-32 md:w-36 md:h-36 relative">
                    <img 
                      src={member.image} 
                      alt={`Szkic: ${member.role}`} 
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23c8a96e" stroke-width="1"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>';
                      }}
                    />
                  </div>
                </div>

                {/* Dane personalne - Prawa strona */}
                <div className="w-full md:w-3/5 lg:w-2/3 p-8 md:p-10 flex flex-col justify-center text-left">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#0a0a0a] mb-2">{member.name}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-5 font-medium">{member.role}</p>
                  <p className="text-sm md:text-base text-gray-600 font-light mb-8 flex-grow leading-relaxed">
                    {member.description}
                  </p>

                  {/* Kontakty (optycznie oddzielone) */}
                  <div className="w-full pt-5 border-t border-[#e0ddd8] flex flex-wrap gap-x-8 gap-y-3">
                    <a href={`mailto:${member.email}`} className="text-xs tracking-wider text-gray-500 hover:text-[#0a0a0a] transition-colors flex items-center gap-2" aria-label={`Wyślij e-mail do ${member.name}`}>
                      <span className="text-[#c8a96e] opacity-70">✉</span> {member.email}
                    </a>
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-xs tracking-widest text-[#c8a96e] hover:text-[#0a0a0a] transition-colors flex items-center gap-2" aria-label={`Zadzwoń do ${member.name}`}>
                      <span className="text-[#0a0a0a] opacity-40">✆</span> {member.phone}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};