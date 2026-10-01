import React, { useState, useEffect } from 'react';
import { saleProducts } from '../../data/saleProducts';
import { SaleItem } from '../../types/sale';

interface SalePageProps {
  onBackToHome: () => void;
  onQuoteRequest: (productName: string) => void;
  onCustomDesignRequest: () => void;
}

const CATEGORIES = ['Wszystkie', 'Kuchnie', 'Szafy i garderoby', 'Stoły i komody', 'Łazienkowe'] as const;

export const SalePage: React.FC<SalePageProps> = ({ onBackToHome, onQuoteRequest, onCustomDesignRequest }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    // Dynamic SEO update
    document.title = "Wyprzedaż Ekspozycji | Werk Mebel - Luksusowe Meble";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Unikalne egzemplarze mebli na wymiar z naszych showroomów. Gotowe do odbioru od ręki w wyjątkowych cenach.");
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredProducts = saleProducts
    .filter((p) => selectedCategory === 'Wszystkie' || p.category === selectedCategory)
    .sort((a, b) => sortOrder === 'asc' ? a.newPrice - b.newPrice : b.newPrice - a.newPrice);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(price);
  };

  const faqs = [
    {
      q: 'Czy meble z wyprzedaży są pełnowartościowe?',
      a: 'Tak, wszystkie oferowane produkty to meble ekspozycyjne w bardzo dobrym stanie. Służyły wyłącznie do prezentacji w naszych showroomach. Przed sprzedażą przechodzą pełen przegląd techniczny i stolarski.'
    },
    {
      q: 'Czy mogę obejrzeć wybrany mebel na żywo?',
      a: 'Oczywiście. Zapraszamy do naszego showroomu. Prosimy o wcześniejszy kontakt w celu potwierdzenia dostępności wybranego modelu na danej ekspozycji.'
    },
    {
      q: 'Czy mebel ekspozycyjny można dostosować do mojego wymiaru?',
      a: 'Z zasady meble ekspozycyjne sprzedawane są w formule "as is" (takie, jakie są). Drobne przeróbki (np. docięcie blatu) wyceniane są indywidualnie po konsultacji z naszym technologiem.'
    },
    {
      q: 'Jak wygląda kwestia dostawy i montażu?',
      a: 'Ceny wyprzedażowe nie obejmują transportu oraz montażu. Możemy zorganizować autoryzowany transport i montaż na terenie całego kraju – usługa ta wyceniana jest osobno. <!-- TODO: Zaktualizować dokładny cennik transportu jeśli istnieje -->'
    }
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-gray-300 font-sans selection:bg-[#c5a880] selection:text-black">
      {/* Header podstrony */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img src="/logo.svg" alt="Werk Mebel" className="h-7 md:h-8 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
          <button onClick={onBackToHome} className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0">
            <span className="text-xs transition-transform group-hover:-translate-x-1">←</span>
            <span>Strona główna</span>
          </button>
        </div>
      </header>

      <main className="pb-24">
        {/* 1. Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">Architektura wnętrz</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-6">Wyprzedaż Ekspozycji</h1>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
              Unikalne, pojedyncze egzemplarze mebli wykonanych na wymiar, które zachwycały w naszych showroomach. 
              Gotowe do odbioru od ręki, w bezkompromisowej jakości Werk Mebel i obniżonej cenie.
            </p>
            <button onClick={() => document.getElementById('sale-products')?.scrollIntoView({ behavior: 'smooth' })} className="btn-luxury btn-luxury-dark border-white/20 bg-[#121212] hover:border-[#c5a880] hover:text-[#c5a880]">
              Zobacz dostępne modele ↓
            </button>
          </div>
        </section>

        {/* 2. Pasek Zalet */}
        <section className="border-y border-white/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[#c5a880] text-xl mb-1">✦</span>
              <h3 className="text-white text-sm tracking-widest uppercase font-medium">Jakość Premium</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Materiały i okucia najwyższej klasy w znacznie niższej cenie.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#c5a880] text-xl mb-1">✦</span>
              <h3 className="text-white text-sm tracking-widest uppercase font-medium">Dostępność od ręki</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Gotowe realizacje czekające na natychmiastowy odbiór.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#c5a880] text-xl mb-1">✦</span>
              <h3 className="text-white text-sm tracking-widest uppercase font-medium">Pojedyncze sztuki</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Każdy model z ekspozycji to jedyny i niepowtarzalny egzemplarz.</p>
            </div>
          </div>
        </section>

        {/* 3. & 4. Filtry i Lista Produktów */}
        <section id="sale-products" className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            {/* Filtry kategorii */}
            <div className="flex flex-wrap items-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 border transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'border-[#c5a880] bg-[#c5a880] text-black font-semibold'
                      : 'border-white/20 text-gray-400 hover:border-white hover:text-white bg-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Sortowanie */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Cena:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                className="bg-transparent border border-white/20 text-white text-xs px-3 py-2 uppercase tracking-widest focus:outline-none focus:border-[#c5a880] cursor-pointer"
              >
                <option value="asc" className="bg-[#0a0a0a]">Rosnąco</option>
                <option value="desc" className="bg-[#0a0a0a]">Malejąco</option>
              </select>
            </div>
          </div>

          {/* Grid Produktów */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((item) => (
                <article key={item.id} className="group flex flex-col bg-[#0f0f0f] border border-white/10 hover:border-[#c5a880]/60 transition-all duration-400">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 p-6 flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {item.isExhibition && <span className="px-2 py-1 bg-white text-black text-[9px] font-bold tracking-[0.2em] uppercase shadow-md">Ekspozycja</span>}
                      {item.isLastPiece && <span className="px-2 py-1 bg-[#c5a880] text-black text-[9px] font-bold tracking-[0.2em] uppercase shadow-md">Ostatnia sztuka</span>}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500 mb-2">{item.category}</span>
                    <h3 className="font-serif text-2xl text-white mb-3 leading-snug">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-light mb-6 line-clamp-2">{item.description}</p>
                    
                    <div className="space-y-2 mb-8 mt-auto border-t border-white/10 pt-4">
                      <div className="flex justify-between text-xs text-gray-300">
                        <span className="text-gray-500 uppercase tracking-widest text-[9px]">Wymiary</span>
                        <span className="font-light">{item.dimensions}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-300">
                        <span className="text-gray-500 uppercase tracking-widest text-[9px]">Wyk.</span>
                        <span className="font-light text-right max-w-[60%] truncate" title={item.material}>{item.material}</span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-auto mb-6">
                      <div className="flex flex-col">
                        <span className="text-gray-500 line-through text-xs mb-1">{formatPrice(item.oldPrice)}</span>
                        <span className="text-xl text-white font-medium">{formatPrice(item.newPrice)}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => onQuoteRequest(`Wyprzedaż: ${item.title}`)} 
                      className="w-full py-3.5 bg-transparent border border-white/20 text-white hover:bg-[#c5a880] hover:border-[#c5a880] hover:text-black font-medium text-[10px] tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                    >
                      Zapytaj o produkt
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border border-white/10 bg-[#0f0f0f]">
              <p className="text-white font-serif text-2xl mb-3">Brak produktów w tej kategorii</p>
              <p className="text-gray-400 font-light text-sm">Sprawdź inne działy lub skontaktuj się z nami w sprawie mebli na wymiar.</p>
            </div>
          )}
        </section>

        {/* 5. Jak to działa */}
        <section className="bg-[#0a0a0a] py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-serif text-white text-center mb-12">Proces zakupu z ekspozycji</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative">
              <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[1px] bg-white/10 z-0" />
              {[
                { s: '01', t: 'Wybór i kontakt', d: 'Znajdź interesujący Cię model i użyj przycisku, by wysłać zapytanie.' },
                { s: '02', t: 'Potwierdzenie', d: 'Nasz doradca skontaktuje się z Tobą, by potwierdzić aktualną dostępność i stan mebla.' },
                { s: '03', t: 'Odbiór / Oględziny', d: 'Obejrzyj mebel na żywo w showroomie przed zakupem. Odbierz osobiście lub zamów nasz transport.' }
              ].map((step, i) => (
                <div key={i} className="relative z-10 bg-[#0a0a0a] px-4">
                  <div className="w-12 h-12 mx-auto border border-[#c5a880] text-[#c5a880] rounded-full flex items-center justify-center text-sm font-medium mb-6 bg-[#0a0a0a]">
                    {step.s}
                  </div>
                  <h3 className="text-white font-medium uppercase tracking-widest text-xs mb-3">{step.t}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-10 text-center">Najczęściej zadawane pytania</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 bg-[#0f0f0f]">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-sm font-medium text-white tracking-wide">{faq.q}</span>
                  <span className="text-[#c5a880] text-xl font-light">{expandedFaq === i ? '−' : '+'}</span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${expandedFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed border-t border-transparent">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. CTA */}
        <section className="max-w-4xl mx-auto px-6 py-10 text-center">
          <div className="p-10 md:p-16 border border-white/10 bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Znalazłaś coś dla siebie?</h2>
            <p className="text-gray-400 font-light mb-8 max-w-lg mx-auto">
              Napisz do nas, zanim ktoś Cię uprzedzi. Oferta ekspozycyjna jest ściśle limitowana do wyczerpania zapasów.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => onQuoteRequest("Ogólne pytanie o wyprzedaż")} className="btn-luxury btn-luxury-dark border-white/20 hover:border-[#c5a880] w-full sm:w-auto">
                Skontaktuj się
              </button>
              <button onClick={onCustomDesignRequest} className="btn-luxury btn-luxury-ghost w-full sm:w-auto">
                Chcę mebel na wymiar
              </button>
            </div>
            <p className="mt-6 text-[10px] text-gray-600 tracking-wider uppercase font-light">
              Uwaga: wycena i realizacja indywidualnych projektów na wymiar jest usługą płatną.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};