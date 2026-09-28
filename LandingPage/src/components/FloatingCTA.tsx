import React, { useState, useEffect } from 'react';

interface FloatingCTAProps {
  label: string;
  onClick?: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ label, onClick }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactSection = document.getElementById('contact') || document.getElementById('kontakt');

      let isContactVisible = false;
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        isContactVisible = rect.top <= window.innerHeight - 80;
      }

      setShow(scrollY > 300 && !isContactVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    const contactSection = document.getElementById('contact') || document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-7 right-7 z-40 transition-all duration-400 ease-out ${
        show
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={handleClick}
        aria-label={label}
        className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#121212]/75 hover:bg-[#121212]/90 backdrop-blur-md border border-white/25 hover:border-[#c5a880] transition-all duration-300 cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.3)]"
      >
        {/* Ikona architektonicznego szkicu / projektu */}
        <svg
          className="w-3.5 h-3.5 text-[#c5a880] transition-transform duration-300 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>

        {/* Czysty, wyraźny biały tekst */}
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white group-hover:text-white transition-colors">
          {label}
        </span>

        {/* Ostra, wyraźna strzałka wektorowa */}
        <svg
          className="w-3.5 h-3.5 text-white/80 group-hover:text-[#c5a880] transition-all duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
};