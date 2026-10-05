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
          <a 
            href="/" 
            onClick={(e) => { 
              e.preventDefault(); 
              onBackToHome(); 
            }} 
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
        {/* HERO SECTION */}
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
              onClick={() => {
                const el = document.getElementById('sale-products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="btn-luxury btn-luxury-dark border-white/20 bg-[#121212] hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              Rozpocznij poszukiwania ↓
            </button>
          </div>
        </section>

        {/* BENEFIT BAR */}
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
                <span className="text-[10px] font-mono text-[#c5a880] tracking-widest">02</span>
                <span className="w-8 h-[1px] bg-[#c5a880]/30 group-hover:bg-[#c5a880] transition-colors duration-300"></span>
              </div>
              <h3 className="text-white text-sm tracking-widest uppercase font-medium">Możliwość oględzin</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Wszystkie meble stoją fizycznie w salonie – zapraszamy by ich dotknąć.</p>
            </div>
            
            <div className="flex flex-col gap-3 border-l border-white/5 pl-5 md:border-none md:pl-0 group">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-mono text-[#c5a880] tracking-widest">03</span>
                <span className="w-8 h-[1px] bg-[#c5a880]/30 group-hover:bg-[#c5a880] transition-colors duration-300"></span>
              </div>
              <h3 className="text-white text-sm tracking-widest uppercase font-medium">Dostępność od ręki</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Nie czekasz tygodniami na produkcję – meble są gotowe do zabrania.</p>
            </div>
            
            <div className="flex flex-col gap-3 border-l border-white/5 pl-5 md:border-none md:pl-0 group">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-mono text-[#c5a880] tracking-widest">04</span>
                <span className="w-8 h-[1px] bg-[#c5a880]/30 group-hover:bg-[#c5a880] transition-colors duration-300"></span>
              </div>
              <h3 className="text-white text-sm tracking-widest uppercase font-medium">Limitowana pula</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">W ofercie posiadamy wyłącznie ściśle pojedyncze, demonstracyjne egzemplarze.</p>
            </div>
          </div>
        </section>

        {/* PRODUCTS LIST */}
        <section id="sale-products" className="max-w-7xl mx-auto px-6 py-20">
          {saleProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saleProducts.map((item) => (
                <article key={item.id} className="group flex flex-col bg-[#0f0f0f] border border-white/10 hover:border-[#c5a880]/60 transition-all duration-400">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 flex items-center justify-center p-6 border-b border-white/5">
                    <img 
                      src={item.image} 
                      alt={`Zdjęcie mebla: ${item.title}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      loading="lazy" 
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {item.isExhibition && (
                        <span className="px-2 py-1 bg-white/95 text-black text-[9px] font-bold tracking-[0.2em] uppercase shadow-lg backdrop-blur-md">
                          Z ekspozycji
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500 mb-2">{item.category}</span>
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-light mb-6 line-clamp-3">{item.description}</p>
                    
                    <div className="space-y-3 mb-8 mt-auto border-t border-white/5 pt-5">
                      <div className="flex justify-between text-xs text-gray-300">
                        <span className="text-gray-500 uppercase tracking-widest text-[9px]">Wymiary (SZxWxG)</span>
                        <span className="font-light pl-4 text-right">{item.dimensions}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-300">
                        <span className="text-gray-500 uppercase tracking-widest text-[9px]">Wykończenie</span>
                        <span className="font-light pl-4 text-right truncate" title={item.material}>{item.material}</span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-auto mb-8 border-t border-white/5 pt-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500 line-through text-xs mb-1 font-mono tracking-widest">
                          {formatPrice(item.oldPrice)}
                        </span>
                        <span className="text-2xl text-white font-serif">{formatPrice(item.newPrice)}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => onQuoteRequest(item.title)} 
                      className="w-full py-3.5 bg-transparent border border-white/20 text-white hover:bg-[#c5a880] hover:border-[#c5a880] hover:text-black font-medium text-[10px] tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                    >
                      Zapytaj o ten produkt
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border border-white/10 bg-[#0f0f0f] shadow-inner">
              <p className="text-white font-serif text-2xl mb-3">
                Obecnie nie posiadamy mebli z wyprzedaży
              </p>
              <p className="text-gray-400 font-light text-sm max-w-lg mx-auto">
                Zapraszamy do skorzystania z naszej oferty na indywidualne zabudowy według Twojego projektu.
              </p>
            </div>
          )}
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#0a0a0a] py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-serif text-white text-center mb-16">
              Proces zakupu mebli ekspozycyjnych
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-center relative">
              <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent z-0" />
              {[
                { 
                  s: '01', 
                  t: 'Podejmij decyzję', 
                  d: 'Znajdź interesujący Cię model w naszym zestawieniu i skorzystaj z przycisku, by w łatwy sposób wysłać e-mailowe zapytanie.' 
                },
                { 
                  s: '02', 
                  t: 'Weryfikacja stoku', 
                  d: 'Ze względu na unikalność oferty, doradca niezwłocznie potwierdzi dla Ciebie rezerwację i poinformuje o ostatecznej dostępności mebla.' 
                },
                { 
                  s: '03', 
                  t: 'Finalizacja', 
                  d: 'Umów się z nami w salonie na żywe oględziny i sfinalizuj płatność. Zorganizuj swój transport lub poproś nas o indywidualną wycenę naszej dostawy.' 
                }
              ].map((step, i) => (
                <div key={i} className="relative z-10 bg-[#0a0a0a] px-4 md:px-8">
                  <div className="w-12 h-12 mx-auto border border-[#c5a880] text-[#c5a880] rounded-full flex items-center justify-center text-sm font-serif mb-6 bg-[#0a0a0a] shadow-[0_0_15px_rgba(197,168,128,0.15)]">
                    {step.s}
                  </div>
                  <h3 className="text-white font-medium uppercase tracking-widest text-xs mb-4">
                    {step.t}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {step.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="max-w-3xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-10 text-center">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 bg-[#0f0f0f]">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm font-medium text-white tracking-wide group-hover:text-[#c5a880] transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-[#c5a880] text-xl font-light transform transition-transform duration-300">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
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

        {/* FINAL CTA */}
        <section className="max-w-5xl mx-auto px-6 pt-10 text-center">
          <div className="p-10 md:p-20 border border-[#c5a880]/30 bg-gradient-to-br from-[#161616] to-[#0a0a0a]">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Wypatrzyłaś idealny mebel?
            </h2>
            <p className="text-gray-400 font-light mb-10 max-w-lg mx-auto leading-relaxed">
              Odezwij się do nas, zanim ubiegnie Cię inny inwestor. Przypominamy, że oferta ekspozycyjna obejmuje pojedyncze sztuki – kiedy znikną ze sklepu, to już bezpowrotnie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button 
                onClick={() => onQuoteRequest("Ogólne pytanie o proces wyprzedaży")} 
                className="btn-luxury btn-luxury-dark border-white/20 bg-[#0a0a0a] hover:border-[#c5a880] hover:text-white w-full sm:w-auto"
              >
                Zapytaj o szczegóły
              </button>
              <button 
                onClick={onCustomDesignRequest} 
                className="btn-luxury btn-luxury-ghost w-full sm:w-auto text-[#c5a880] border-[#c5a880]/50 hover:bg-[#c5a880]/10"
              >
                Otwórz wycenę od zera
              </button>
            </div>
            <p className="mt-8 text-[9px] text-gray-600 tracking-[0.2em] uppercase font-light">
              <span className="text-[#c5a880]">Ważne: </span>Wycena nowoprojektowanych mebli, niebędących częścią ekspozycji jest usługą odpłatną z ramienia naszej pracowni.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};