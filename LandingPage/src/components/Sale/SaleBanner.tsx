import React from 'react';

interface SaleBannerProps {
  onOpenSale: () => void;
}

export const SaleBanner: React.FC<SaleBannerProps> = ({ onOpenSale }) => {
  return (
    <section className="bg-[#0f0f0f] border-t border-b border-white/10 py-16 md:py-24 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
          alt="Luksusowe meble ekspozycyjne"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Oferta limitowana
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
            Wyprzedaż Ekspozycji.<br />Jakość premium od ręki.
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base mb-8 leading-relaxed">
            Odkryj unikalne, gotowe egzemplarze mebli z naszych showroomów. 
            Perfekcyjne wykonanie, luksusowe materiały i natychmiastowa dostępność w obniżonych cenach.
          </p>
          <button
            onClick={onOpenSale}
            className="btn-luxury btn-luxury-white"
          >
            Zobacz wyprzedaż ekspozycji
          </button>
        </div>
        
        {/* Dekoracyjny element kompozycyjny - widoczny od rozmiaru md */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="w-32 h-40 bg-white/5 border border-white/10 p-2 shadow-2xl transform -rotate-6">
             <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80" alt="Detale mebli na wyprzedaży" className="w-full h-full object-cover" />
          </div>
          <div className="w-40 h-52 bg-white/5 border border-white/10 p-2 shadow-2xl z-10 relative">
             <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=400&q=80" alt="Gotowa zabudowa kuchenna z ekspozycji" className="w-full h-full object-cover" />
             <div className="absolute -bottom-4 -left-4 bg-[#c5a880] text-black px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase">Ostatnie Sztuki</div>
          </div>
        </div>
      </div>
    </section>
  );
};