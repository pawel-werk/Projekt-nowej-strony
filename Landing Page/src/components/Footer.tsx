import React from 'react';
import { TranslationSchema } from '../data/translations';
import logoImg from '../assets/logo.svg';

interface FooterProps {
  tr: TranslationSchema;
  onOpenPrivacy?: () => void;
  onOpenBlog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ tr, onOpenPrivacy, onOpenBlog }) => {
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPrivacy) {
      onOpenPrivacy();
    } else {
      window.location.hash = 'polityka-prywatnosci';
    }
  };

  return (
    <footer className="py-16 border-t bg-[#060606] border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main 3-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          <div>
            <img
              src={logoImg}
              alt="Werk Mebel"
              className="h-8 w-auto object-contain mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs font-light">
              {tr.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3 font-medium">Lokalizacja i kontakt</p>
            <a
              href="https://www.google.com/maps/place/Werk+Mebel/@51.0458333,16.959026,20z/data=!4m6!3m5!1s0x470fc36c4b6f72e5:0x5ff9cef353f07695!8m2!3d51.0458333!4d16.959335!16s%2Fg%2F11jcqlxy3b?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#c5a880] transition-colors text-sm font-light leading-relaxed inline-flex items-center gap-1"
            >
              {tr.footer.address} ↗
            </a>
            <a
              href="tel:+48717789080"
              className="text-gray-300 text-sm block mt-2 hover:text-[#c5a880] transition-colors"
            >
              {tr.footer.phone}
            </a>
            <a
              href="mailto:biuro@werkmebel.pl"
              className="text-gray-300 text-sm block mt-1 hover:text-[#c5a880] transition-colors"
            >
              {tr.footer.email}
            </a>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3 font-medium">Social Media</p>
            <div className="flex flex-col gap-2">
              {[
                { name: "Instagram", url: "https://instagram.com/werkmebel" },
                { name: "Facebook", url: "https://facebook.com/werkmebel" },
                { name: "Pinterest", url: "https://pinterest.com/werkmebel" },
                { name: "TikTok", url: "https://tiktok.com/@werk.mebel" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>{s.name}</span>
                  <span className="text-xs">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright, privacy link and centered distinction award */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Copyright left + Polityka Prywatności */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <p className="text-xs text-gray-500 font-light">{tr.footer.copy}</p>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <button
              onClick={() => {
                if (onOpenBlog) onOpenBlog();
                else window.location.hash = 'blog';
              }}
              className="text-xs text-gray-400 hover:text-[#c5a880] transition-colors underline underline-offset-4 decoration-white/20 cursor-pointer bg-transparent border-0 p-0 font-light"
            >
              Blog & Poradniki
            </button>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <button
              onClick={handlePrivacyClick}
              className="text-xs text-gray-400 hover:text-[#c5a880] transition-colors underline underline-offset-4 decoration-white/20 cursor-pointer bg-transparent border-0 p-0 font-light"
            >
              Polityka prywatności
            </button>
          </div>

          {/* Distinction award */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#c5a880] text-xs">✦</span>
            <span className="text-xs text-gray-400 tracking-wider uppercase font-medium">
              Złota Firma & Lider Jakości 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};