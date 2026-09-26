import React, { useState, useEffect } from 'react';

export const ImagePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Sprawdzamy, czy użytkownik już dzisiaj zamknął pop-up
    const hasSeenPopup = sessionStorage.getItem('werkmebel_popup_seen');
    
    if (!hasSeenPopup) {
      // Wyświetl po 4 sekundach (4000 milisekund)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('werkmebel_popup_seen', 'true');
  };

  if (!isOpen) return null;

  return (
    // Wyciemnione tło (overlay) z obsługą kliknięcia obok grafiki
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity"
      onClick={handleClose}
    >
      <div 
        className="relative max-w-3xl w-full animate-[fadeIn_0.5s_ease-out]"
        onClick={(e) => e.stopPropagation()} // Blokuje zamknięcie po kliknięciu w samą grafikę
      >
        {/* Przycisk X */}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 md:-right-12 text-white hover:text-[#c5a880] transition-colors p-2 cursor-pointer focus:outline-none"
          aria-label="Zamknij"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Grafika promocyjna */}
        <img
          src="/Popup.jpg" // ZMIEŃ ROZSZERZENIE jeśli wrzucisz np. popup.jpg
          alt="Promocja Werk Mebel"
          className="w-full h-auto object-contain shadow-2xl"
        />
      </div>
    </div>
  );
};