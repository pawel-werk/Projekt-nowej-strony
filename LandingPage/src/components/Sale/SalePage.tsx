import React, { useState, useEffect } from 'react';
import { saleProducts } from '../../data/saleProducts';

interface SalePageProps {
  onBackToHome: () => void;
  onQuoteRequest: (productName: string) => void;
  onCustomDesignRequest: () => void;
}

export const SalePage: React.FC<SalePageProps> = ({ 
  onBackToHome, 
  onQuoteRequest, 
  onCustomDesignRequest 
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Wyprzedaż Ekspozycji | Werk Mebel - Luksusowe Meble";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content", 
        "Unikalne egzemplarze mebli na wymiar z naszych showroomów. Gotowe do odbioru od ręki w wyjątkowych cenach."
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pl-PL', { 
      style: 'currency', 
      currency: 'PLN', 
      maximumFractionDigits: 0 
    }).format(price);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBackToHome();
  };

  const handleScrollToProducts = () => {
    const el = document.getElementById('sale-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGeneralQuote = () => {
    onQuoteRequest("Ogólne pytanie o proces wyprzedaży");
  };

  const faqs = [
    {
      q: 'Czy meble z wyprzedaży są pełnowartościowe?',
      a: 'Tak, wszystkie prezentowane tutaj meble to egzemplarze ekspozycyjne z naszych salonów, które służyły wyłącznie do prezentacji wizualnej. Znajdują się w bardzo dobrym stanie, a przed przygotowaniem do wydania przechodzą gruntowny przegląd technologiczny i stolarski.'
    },
    {
      q: 'Gdzie mogę obejrzeć wybrany mebel?',
      a: 'Zapraszamy na prezentację na żywo do naszych showroomów. Przed wizytą prosimy o kontakt w celu upewnienia się, na jakiej dokładnie ekspozycji znajduje się wybrany przez Państwa model.'
    },
    {
      q: 'Czy istnieje możliwość modyfikacji wymiarów mebla z ekspozycji?',
      a: 'Meble ekspozycyjne sprzedajemy w standardzie "as is" (takie, jakie są widoczne). Wynika to z technologii produkcji elementów na konkretny wymiar. Drobne korekty, jak np. niewielkie docięcie blatu roboczego, można ustalić po indywidualnej konsultacji, jednak ingerencja w ustrój nośny szafek na ogół nie jest możliwa.'
    },
    {
      q: 'Jak przebiega odbiór lub dostawa?',
      a: 'Wskazane promocyjne ceny nie uwzględniają kosztów transportu oraz prac montażowych w lokalizacji klienta. Chętnie zorganizujemy profesjonalny, dedykowany dowóz oraz usługę instalacyjną — koszty te wyceniamy każdorazowo na zapytanie w zależności od odległości.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-gray-300 font-sans selection:bg-[#c5a880] selection:text-black">
      <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a 
            href="/" 
            onClick={handleLogoClick} 
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img 
              src="/logo.svg" 
              alt="Werk Mebel" 
              className="h-7 md:h-8 w-auto object-contain" 
              style={{ filter: 'brightness(0) invert(1)' }} 
            />
          </a>
          <button 
            onClick={onBackToHome} 
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0"
          >
            <span className="text-xs transition-transform group-hover:-translate-x-1">←</span>
            <span>Powrót na stronę główną</span>
          </button>
        </div>
      </header>

      <main className="pb-24">
        <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                Architektura Wnętrz
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-6">
              Wyprzedaż Ekspozycji
            </h1>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
              Przeglądaj ekskluzywne meble przygotowane pierwotnie jako ozdoba naszych salonów. To wyjątkowa okazja na unikalne bryły w obniżonej cenie, dostępne do odbioru natychmiastowego. Zwróć uwagę, że każdy model to pojedyncza sztuka.
            </p>
            <button 
              onClick={handleScrollToProducts} 
              className="btn-luxury btn-luxury-dark border-white/20 bg-[#121212] hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              Rozpocznij poszukiwania ↓
            </button>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            <div className="flex flex-col gap-3 border-l border-white/5 pl-5 md:border-none md:pl-0 group">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-mono text-[#c5a880] tracking-widest">01</span>
                <span className="w-8 h-[1px] bg-[#c5a880]/30 group-hover:bg-[#c5a880] transition-colors duration-300"></span>
              </div>
              <h3 className="text-white text-sm tracking-widest uppercase font-medium">Jakość Premium</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Solidne materiały i topowe okucia bez kompromisów jakościowych.</p>
            </div>
            
            <div className="flex flex-col gap-3 border-l border-white/5 pl-5 md:border-none md:pl-0 group">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-mono text-[#c5a880] tracking-widest