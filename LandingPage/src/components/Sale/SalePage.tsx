import React, { useState, useEffect } from 'react';
import { saleProducts } from '../../data/saleProducts';
import { SaleItem } from '../../types/sale';

interface SalePageProps {
  onBackToHome: () => void;
  onQuoteRequest: (productName: string) => void;
  onCustomDesignRequest: () => void;
}

export const SalePage: React.FC<SalePageProps> = ({ onBackToHome, onQuoteRequest, onCustomDesignRequest }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Wyprzedaż Ekspozycji | Werk Mebel - Luksusowe Meble";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Unikalne egzemplarze mebli na wymiar z naszych showroomów. Gotowe do odbioru od ręki w wyjątkowych cenach.");
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(price);
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
      {/* Nawigacja górna dla podstrony */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className