import React, { useState, useEffect } from 'react';
import { TranslationSchema } from '../data/translations';

interface NavbarProps {
  tr: TranslationSchema;
  lang: 'pl' | 'en';
  hasTopBar?: boolean;
  onToggleLang: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  tr,
  lang,
  hasTopBar = false,
  onToggleLang,
  onScrollTo,
}) => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'services', id: 'services' },
    { key: 'portfolio', id: 'portfolio' },
    { key: 'about', id: 'about' },
    { key: 'contact', id: 'contact' },
  ] as const;

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        hasTopBar ? 'top-10' : 'top-0'
      } ${
        navScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e0ddd8] shadow-sm py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with automatic white/black contrast */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="group flex items-center gap-2 focus:outline-none transition-opacity duration-300 hover:opacity-80"
        >
          <img
            src="/logo.webp"
            alt="Werk Mebel - Made in Germany"
            className="h-8 md:h-9 w-auto object-contain transition-all duration-300"
            style={{
              filter: navScrolled ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ key, id }) => (
            <button
              key={key}
              onClick={() => handleNavClick(id)}
              className={`nav-link text-xs tracking-[0.2em] uppercase font-medium transition-colors cursor-pointer ${
                navScrolled ? 'text-[#0a0a0a] hover:text-[#c5a880]' : 'text-white hover:text-[#c5a880]'
              }`}
            >
              {tr.nav[key]}
            </button>
          ))}

          {/* Lang toggle button */}
          <button
            onClick={onToggleLang}
            className={`text-[11px] tracking-[0.2em] uppercase border px-3.5 py-1.5 transition-all duration-300 cursor-pointer ${
              navScrolled
                ? 'border-[#0a0a0a] text-[#0a0a0a] hover:border-[#c5a880] hover:text-[#c5a880]'
                : 'border-white/60 text-white hover:border-white hover:bg-white/10'
            }`}
            aria-label="Przełącz język"
          >
            {tr.nav.lang}
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 transition-transform duration-200 ${
              navScrolled ? 'bg-[#0a0a0a]' : 'bg-white'
            } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-opacity duration-200 ${
              navScrolled ? 'bg-[#0a0a0a]' : 'bg-white'
            } ${mobileMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-transform duration-200 ${
              navScrolled ? 'bg-[#0a0a0a]' : 'bg-white'
            } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-100 px-6 py-6 flex flex-col gap-5 shadow-2xl">
          {navItems.map(({ key, id }) => (
            <button
              key={key}
              onClick={() => handleNavClick(id)}
              className="text-left text-sm tracking-[0.2em] uppercase font-medium text-gray-900 hover:text-[#c5a880] transition-colors"
            >
              {tr.nav[key]}
            </button>
          ))}
          <button
            onClick={() => {
              onToggleLang();
              setMobileMenuOpen(false);
            }}
            className="text-left text-xs tracking-[0.2em] uppercase border border-gray-900 px-4 py-2 w-fit hover:border-[#c5a880] hover:text-[#c5a880]"
          >
            {tr.nav.lang}
          </button>
        </div>
      )}
    </nav>
  );
};