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
    // Wyciemnione tło (overlay) z bezpiecznym marginesem p-4
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-md md:max-w-lg mx-auto animate-[fadeIn_0.5s_ease-out] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()} // Blokuje zamknięcie po kliknięciu w samą grafikę
      >
        {/* Przycisk X zoptymalizowany pod urządzenia mobilne */}
        <button
          onClick={handleClose}
          className="absolute -top-10 right-0 md:-right-10 text-white hover:text-[#c5a880] transition-colors p-2 cursor-pointer focus:outline-none z-10"
          aria-label="Zamknij"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Grafika z limitem wysokości do 80% ekranu */}
        <img
          src="https://i.postimg.cc/pLwCDmgK/Banner-rabat-A3-03-09.jpg"
          alt="Promocja Werk Mebel"
          className="w-full max-h-[80vh] object-contain shadow-2xl"
        />
      </div>
    </div>
  );
};