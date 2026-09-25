import React, { useState, useEffect } from 'react';
import { TopBarItem, TopBarProps } from '../types/topbar';

export const TopBar: React.FC<TopBarProps> = ({
  items,
  speedSeconds = 35,
  storageKey = 'werkmebel_topbar_dismissed',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem(storageKey);
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleDismiss = () => {
    sessionStorage.setItem(storageKey, 'true');
    setIsVisible(false);
  };

  if (!isVisible || !items || items.length === 0) {
    return null;
  }

  // Wewnętrzny renderer kafelków z niezawodną obsługą konsultacji i innych sekcji
  const renderTrack = (ariaHidden: boolean) => (
    <div
      className="flex items-center gap-12 shrink-0 select-none pr-12"
      aria-hidden={ariaHidden}
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          onClick={(e) => {
            if (item.url && item.url.startsWith('#')) {
              e.preventDefault();
              let targetId = item.url.substring(1); // np. "portfolio", "kontakt"

              // Zabezpieczenie: jeśli to konsultacja lub kontakt, upewniamy się, że szukamy właściwej sekcji formularza
              if (targetId === 'kontakt' || targetId === 'contact' || item.text.toLowerCase().includes('konsultac')) {
                const contactSection = document.getElementById('kontakt') || document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  return;
                }
              }

              // Standardowe wyszukiwanie dla pozostałych sekcji (np. realizacje / portfolio)
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
          tabIndex={ariaHidden ? -1 : 0}
          className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-gray-400 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#c5a880] focus-visible:outline-offset-2 py-0.5 cursor-pointer"
        >
          {item.badge && (
            <span className="text-[9px] px-2 py-0.5 font-semibold tracking-wider bg-[#c5a880]/20 text-[#c5a880] border border-[#c5a880]/40">
              {item.badge}
            </span>
          )}

          {item.icon && (
            <span className="text-xs leading-none opacity-80">{item.icon}</span>
          )}

          <span className={`font-medium ${item.highlight ? 'text-white' : 'text-gray-400'}`}>
            {item.text}
          </span>

          <span className="text-[10px] text-gray-700 font-mono">/</span>
        </a>
      ))}
    </div>
  );

  return (
    <aside
      aria-label="Ogłoszenia i aktualności"
      className="relative z-50 w-full bg-[#070707] text-gray-300 border-b border-white/10 text-xs overflow-hidden group"
    >
      <div className="relative flex items-center h-10 px-4">
        {/* Kontener pętli Marquee z płynnymi maskami po bokach */}
        <div className="flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          {/* Tor 1 */}
          <div
            className="flex items-center shrink-0 animate-marquee group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
            style={{ animationDuration: `${speedSeconds}s` }}
          >
            {renderTrack(false)}
          </div>

          {/* Tor 2 (bliźniaczy klon dla nieskończonego, bezszwowego przewijania) */}
          <div
            className="flex items-center shrink-0 animate-marquee group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
            style={{ animationDuration: `${speedSeconds}s` }}
          >
            {renderTrack(true)}
          </div>
        </div>

        {/* Przycisk zamknięcia paska */}
        <div className="pl-3 pr-1 shrink-0 bg-gradient-to-l from-[#070707] via-[#070707] to-transparent">
          <button
            onClick={handleDismiss}
            aria-label="Zamknij pasek ogłoszeń"
            className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#c5a880] cursor-pointer"
          >
            <span className="text-xs">✕</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default TopBar;