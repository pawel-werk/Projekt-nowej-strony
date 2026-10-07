import React from 'react';
import { TranslationSchema } from '../data/translations';

interface FooterProps {
  tr: TranslationSchema;
  onOpenPrivacy?: () => void;
  onOpenBlog?: () => void;
  theme?: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ tr, onOpenPrivacy, onOpenBlog, theme = 'dark' }) => {
  // Zmienna pomocnicza sprawdzająca, czy używamy jasnego motywu
  const isLight = theme === 'light';

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPrivacy) {
      onOpenPrivacy();
    } else {
      window.location.hash = 'polityka-prywatnosci';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-16 border-t ${isLight ? 'bg-white border-[#e0ddd8]' : 'bg-[#060606] border-[#1a1a1a]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main 3-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          <div>
            <button
              onClick={scrollToTop}
              className="block mb-4 cursor-pointer focus:outline-none group"
              aria-label="Wróć na górę strony"
            >
              <img
                src="/logo.svg"
                alt="Werk Mebel"
                className={`h-8 w-auto object-contain transition-opacity duration-300 ${isLight ? 'opacity-70 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'}`}
                style={isLight ? undefined : { filter: 'brightness(0) invert(1)' }}
              />
            </button>
            <p className={`text-xs leading-relaxed max-w-xs font-light ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
              {tr.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-5 font-medium">Lokalizacja i kontakt</p>
            
            <div className="flex flex-col gap-3 mb-6">
              {/* Adres 1: Salon ekspozycyjny */}
              <a
                href="https://www.google.com/maps/place/Werk+Mebel/@51.0458333,16.959026,20z/data=!4m6!3m5!1s0x470fc36c4b6f72e5:0x5ff9cef353f07695!8m2!3d51.0458333!4d16.959335!16s%2Fg%2F11jcqlxy3b?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-light flex items-center gap-1 w-fit transition-colors hover:text-[#c8a96e] ${isLight ? 'text-gray-600' : 'text-gray-300'}`}
              >
                {tr.footer.address1Name} ↗
              </a>

              {/* Adres 2: Biuro projektowe */}
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x470fc3f4abef2f5b:0xe1594e460d5bc4da?sa=X&ved=1t:8290&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-light flex items-center gap-1 w-fit transition-colors hover:text-[#c8a96e] ${isLight ? 'text-gray-600' : 'text-gray-300'}`}
              >
                {tr.footer.address2Name} ↗
              </a>
            </div>

            {/* Dane kontaktowe */}
            <a
              href="tel:+48717789080"
              className={`text-sm block mb-2 transition-colors w-fit hover:text-[#c8a96e] ${isLight ? 'text-gray-600' : 'text-gray-300'}`}
            >
              {tr.footer.phone}
            </a>
            <a
              href="mailto:biuro@werkmebel.pl"
              className={`text-sm block transition-colors w-fit hover:text-[#c8a96e] ${isLight ? 'text-gray-600' : 'text-gray-300'}`}
            >
              {tr.footer.email}
            </a>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-5 font-medium">Social Media</p>
            <div className="flex flex-col gap-3">
              {[
                { name: "Instagram", url: "https://instagram.com/werkmebel" },
                { name: "Facebook", url: "https://facebook.com/werkmebel" },
                { name: "YouTube", url: "https://youtube.com/@WerkMebel" },
                { name: "TikTok", url: "https://tiktok.com/@werk.mebel" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm flex items-center gap-1 w-fit transition-colors ${isLight ? 'text-gray-600 hover:text-[#c8a96e]' : 'text-gray-400 hover:text-white'}`}
                >
                  <span>{s.name}</span>
                  <span className="text-xs">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright, privacy link and centered distinction award */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left ${isLight ? 'border-[#e0ddd8]' : 'border-[#1a1a1a]'}`}>
          {/* Copyright left + Polityka Prywatności */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <p className={`text-xs font-light ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>{tr.footer.copy}</p>
            <span className={`hidden sm:inline ${isLight ? 'text-gray-300' : 'text-gray-700'}`}>|</span>
            <button
              onClick={() => {
                if (onOpenBlog) onOpenBlog();
                else window.location.hash = 'blog';
              }}
              className={`text-xs transition-colors underline underline-offset-4 cursor-pointer bg-transparent border-0 p-0 font-light hover:text-[#c8a96e] ${isLight ? 'text-gray-500 decoration-black/10' : 'text-gray-400 decoration-white/20'}`}
            >
              {tr.footer.links.blog}
            </button>
            <span className={`hidden sm:inline ${isLight ? 'text-gray-300' : 'text-gray-700'}`}>|</span>
            <button
              onClick={handlePrivacyClick}
              className={`text-xs transition-colors underline underline-offset-4 cursor-pointer bg-transparent border-0 p-0 font-light hover:text-[#c8a96e] ${isLight ? 'text-gray-500 decoration-black/10' : 'text-gray-400 decoration-white/20'}`}
            >
              {tr.footer.links.privacy}
            </button>
          </div>

          {/* Distinction award */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#c8a96e] text-xs">✦</span>
            <span className={`text-xs tracking-wider uppercase font-medium ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
              {tr.footer.award}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};