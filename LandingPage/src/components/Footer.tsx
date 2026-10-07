import React from 'react';
import { TranslationSchema } from '../data/translations';

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t bg-white border-[#e0ddd8]">
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
                className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs font-light">
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
                className="text-gray-600 hover:text-[#c8a96e] transition-colors text-sm font-light flex items-center gap-1 w-fit"
              >
                {tr.footer.address1Name} ↗
              </a>

              {/* Adres 2: Biuro projektowe */}
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x470fc3f4abef2f5b:0xe1594e460d5bc4da?sa=X&ved=1t:8290&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#c8a96e] transition-colors text-sm font-light flex items-center gap-1 w-fit"
              >
                {tr.footer.address2Name} ↗
              </a>
            </div>

            {/* Dane kontaktowe */}
            <a
              href="tel:+48717789080"
              className="text-gray-600 text-sm block mb-2 hover:text-[#c8a96e] transition-colors w-fit"
            >
              {tr.footer.phone}
            </a>
            <a
              href="mailto:biuro@werkmebel.pl"
              className="text-gray-600 text-sm block hover:text-[#c8a96e] transition-colors w-fit"
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
                  className="text-gray-600 text-sm hover:text-[#c8a96e] transition-colors flex items-center gap-1 w-fit"
                >
                  <span>{s.name}</span>
                  <span className="text-xs">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright, privacy link and centered distinction award */}
        <div className="pt-8 border-t border-[#e0ddd8] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Copyright left + Polityka Prywatności */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <p className="text-xs text-gray-400 font-light">{tr.footer.copy}</p>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <button
              onClick={() => {
                if (onOpenBlog) onOpenBlog();
                else window.location.hash = 'blog';
              }}
              className="text-xs text-gray-500 hover:text-[#c8a96e] transition-colors underline underline-offset-4 decoration-black/10 cursor-pointer bg-transparent border-0 p-0 font-light"
            >
              {tr.footer.links.blog}
            </button>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <button
              onClick={handlePrivacyClick}
              className="text-xs text-gray-500 hover:text-[#c8a96e] transition-colors underline underline-offset-4 decoration-black/10 cursor-pointer bg-transparent border-0 p-0 font-light"
            >
              {tr.footer.links.privacy}
            </button>
          </div>

          {/* Distinction award */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#c8a96e] text-xs">✦</span>
            <span className="text-xs text-gray-500 tracking-wider uppercase font-medium">
              {tr.footer.award}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};