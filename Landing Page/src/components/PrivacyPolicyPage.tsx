import React from 'react';
import { privacySections, PRIVACY_INTRO, PRIVACY_LAST_UPDATED } from '../data/privacyData';
import logoImg from '../assets/logo.png';

interface PrivacyPolicyPageProps {
  onBackToHome?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBackToHome }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-gray-300 font-sans selection:bg-[#c5a880] selection:text-black">
      {/* Minimalistyczny luksusowy nagłówek podstrony */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              if (onBackToHome) {
                e.preventDefault();
                onBackToHome();
              }
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

          <a
            href="/"
            onClick={(e) => {
              if (onBackToHome) {
                e.preventDefault();
                onBackToHome();
              }
            }}
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-xs transition-transform group-hover:-translate-x-1">←</span>
            <span>Powrót do strony głównej</span>
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Tytuł dokumentu i meta dane */}
        <div className="mb-14 border-b border-white/10 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Ochrona Danych Osobowych
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">
            Polityka Prywatności
          </h1>

          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-6">
            {PRIVACY_INTRO}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-light">
            <p>
              Ostatnia aktualizacja: <span className="text-white font-medium">{PRIVACY_LAST_UPDATED}</span>
            </p>
            <span>·</span>
            <p>Serwis: werkmebel.pl</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Spis treści (kotwice boczne) */}
          <nav
            aria-label="Spis treści polityki prywatności"
            className="lg:col-span-4 lg:sticky lg:top-24 h-fit p-6 bg-[#0f0f0f] border border-white/10 rounded-sm"
          >
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-medium mb-4 pb-3 border-b border-white/10">
              Spis treści
            </p>
            <ul className="space-y-3 text-xs font-light">
              {privacySections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className="flex items-baseline gap-2.5 text-gray-400 hover:text-[#c5a880] transition-colors py-0.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#c5a880] focus-visible:outline-offset-2"
                  >
                    <span className="font-mono text-[10px] text-gray-600">{sec.number}.</span>
                    <span className="leading-snug">{sec.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Treść dokumentu */}
          <div className="lg:col-span-8 space-y-14">
            {privacySections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 border-b border-white/5 pb-12 last:border-b-0"
              >
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-mono text-sm text-[#c5a880] font-light">{sec.number}</span>
                  <h2 className="text-xl md:text-2xl font-serif text-white font-normal">
                    {sec.title}
                  </h2>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-gray-300 font-light">
                  {sec.content.map((paragraph, idx) => (
                    <p key={idx} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
