import React, { useState, useEffect } from 'react';
import { TranslationSchema } from '../data/translations';

interface ContactProps {
  tr: TranslationSchema;
  lang: 'pl' | 'en';
  prefilledProject?: string | null;
}

export const Contact: React.FC<ContactProps> = ({ tr, lang, prefilledProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Automatyczne wykrywanie, czy strona jest w języku polskim na podstawie tekstu nagłówka lub kategorii
  const isPolish = tr.contact.title === "Napisz do nas" || lang === 'pl';

  // Obsługa automatycznego uzupełniania z kliknięcia w realizację w Portfolio
  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        category: tr.contact.categories[0],
        message:
          isPolish
            ? `Dzień dobry, interesuje mnie wycena i szczegóły realizacji podobnej do: "${prefilledProject}". Proszę o kontakt w sprawie wstępnych ustaleń i terminu.`
            : `Hello, I would like to inquire about a project similar to: "${prefilledProject}". Please contact me regarding preliminary arrangements and availability.`,
      }));
    }
  }, [prefilledProject, isPolish, tr]);

  // Obsługa zmiany wyboru kategorii / tematu z automatycznymi wiadomościami
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const lowerSelected = selected.toLowerCase();
    let autoMessage = '';

    if (lowerSelected.includes('duplikat') || lowerSelected.includes('invoice') || lowerSelected.includes('faktur')) {
      autoMessage = isPolish
        ? 'Dzień dobry,\nZwracam się z prośbą o wystawienie i przesłanie duplikatu faktury VAT powiązanej z moim zamówieniem. Proszę o przesłanie dokumentu w formie elektronicznej na podany adres e-mail.'
        : 'Dear Werk Mebel Team,\nI kindly request a duplicate copy of the VAT invoice issued for my order, number: . Please send the document electronically to the email address provided.';
    } else if (lowerSelected.includes('reklamac') || lowerSelected.includes('warranty') || lowerSelected.includes('claim') || lowerSelected.includes('serwis')) {
      autoMessage = isPolish
        ? 'Dzień dobry,\nChciałbym zgłosić kwestię serwisową dotyczącą zrealizowanej zabudowy meblowej. Proszę o kontakt, abym mógł przekazać opis problemu oraz dokumentację fotograficzną w celu weryfikacji.'
        : 'Dear Werk Mebel Team,\nI would like to submit a service claim regarding my furniture installation. Please contact me so I can provide the issue description and photos for review.';
    } else if (lowerSelected.includes('kuchni') || lowerSelected.includes('kitchen')) {
      autoMessage = isPolish
        ? 'Dzień dobry,\nInteresuje mnie zaprojektowanie i wykonanie luksusowej kuchni na wymiar. Zależy mi na funkcjonalnych rozwiązaniach i najwyższej jakości materiałach. Proszę o informację, jak wygląda u Państwa proces wyceny i współpracy.'
        : 'Hello,\nI am interested in the design and custom manufacturing of a premium kitchen. I value functional solutions and the highest quality materials. Please let me know about your pricing and collaboration process.';
    } else if (lowerSelected.includes('garderob') || lowerSelected.includes('wardrobe') || lowerSelected.includes('szaf') || lowerSelected.includes('closet')) {
      autoMessage = isPolish
        ? 'Dzień dobry,\nPoszukuję wykonawcy do stworzenia zabudowy garderoby na wymiar. Zależy mi na optymalnym wykorzystaniu przestrzeni i eleganckim wykończeniu. Proszę o kontakt w celu omówienia szczegółów.'
        : 'Hello,\nI am looking for a contractor to build a custom wardrobe. I care about optimal space utilization and an elegant finish. Please contact me to discuss the details.';
    } else if (lowerSelected.includes('dom') || lowerSelected.includes('kompleks') || lowerSelected.includes('house') || lowerSelected.includes('apartament') || lowerSelected.includes('apartment')) {
      autoMessage = isPolish
        ? 'Dzień dobry,\nPlanuję wykończenie wnętrz i interesuje mnie kompleksowa zabudowa meblowa dla całego domu lub apartamentu. Szukam wykonawcy, który zadba o spójny design i najwyższą jakość we wszystkich pomieszczeniach. Proszę o kontakt w sprawie umówienia spotkania.'
        : 'Hello,\nI am planning an interior fit-out and am interested in comprehensive custom furniture for my entire home/apartment. I am looking for a contractor who will ensure a cohesive design and the highest quality across all rooms. Please contact me to arrange a meeting.';
    } else if (selected !== '') {
      // Domyślna wiadomość dla pozostałych (niesklasyfikowanych) kategorii
      autoMessage = isPolish
        ? 'Dzień dobry,\nChciałbym zapytać o Państwa usługi i wycenę mojego projektu. Proszę o kontakt w wolnej chwili, abyśmy mogli omówić szczegóły i ramy czasowe.'
        : 'Hello,\nI would like to inquire about your services and get a quote for my project. Please contact me at your earliest convenience so we can discuss the details and timeline.';
    }

    setFormData((prev) => ({
      ...prev,
      category: selected,
      message: autoMessage,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: '',
      });
    }, 4000);
  };

  const isInvoiceActive = formData.category.toLowerCase().includes('duplikat') || formData.category.toLowerCase().includes('invoice');
  const isClaimActive = formData.category.toLowerCase().includes('reklamac') || formData.category.toLowerCase().includes('warranty') || formData.category.toLowerCase().includes('claim');

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Lewa kolumna: Dane kontaktowe */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-mono">
                  {isPolish ? 'KONTAKT' : 'CONTACT'}
                </span>
              </div>
              <h2
                className="font-serif text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(2.3rem, 3.8vw, 3.4rem)' }}
              >
                {tr.contact.title}
              </h2>
              <p className="text-neutral-400 text-sm md:text-base font-light mb-12">
                {tr.contact.sub}
              </p>

              <div className="space-y-8 border-t border-white/10 pt-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 shrink-0">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-mono block mb-1">
                      {tr.contact.direct}
                    </span>
                    <a
                      href="mailto:biuro@werkmebel.pl"
                      className="text-white hover:text-[#c5a880] transition-colors text-sm md:text-base font-medium"
                    >
                      biuro@werkmebel.pl
                    </a>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 shrink-0">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-mono block mb-1">
                      {isPolish ? 'Telefon' : 'Phone'}
                    </span>
                    <a
                      href="tel:+48717789080"
                      className="text-white hover:text-[#c5a880] transition-colors text-sm md:text-base font-medium"
                    >
                      {tr.footer.phone}
                    </a>
                  </div>
                </div>

                {/* Salon */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 shrink-0 mt-2">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-mono block mb-1">
                      {isPolish ? 'Salon ekspozycyjny' : 'Showroom'}
                    </span>
                    <p className="text-white text-sm md:text-base font-medium mb-1">
                      Salon Aleja Bielany
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Werk+Mebel/@51.0458333,16.959026,20z/data=!4m6!3m5!1s0x470fc36c4b6f72e5:0x5ff9cef353f07695!8m2!3d51.0458333!4d16.959335!16s%2Fg%2F11jcqlxy3b?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-400 hover:text-[#c5a880] transition-colors inline-flex items-center gap-1"
                    >
                      ul. Czekoladowa 20, 55-040 Bielany Wrocławskie ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="pt-10 border-t border-white/10 mt-10">
              <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-mono block mb-3">
                {tr.footer.social}
              </span>
              <div className="flex gap-6 text-xs tracking-widest text-neutral-400 uppercase font-mono">
                <a
                  href="https://www.instagram.com/werkmebel/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/werkmebel/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/@WerkMebel"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>

          {/* Prawa kolumna: Formularz */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-8 md:p-12">
            {submitted ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-14 h-14 mx-auto border border-[#c5a880] text-[#c5a880] flex items-center justify-center text-2xl font-serif">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-white">
                  {isPolish ? 'Dziękujemy za kontakt' : 'Thank you for contacting us'}
                </h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto font-light">
                  {tr.contact.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Imię i nazwisko */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono block mb-2">
                      {tr.contact.labels.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#171717] border border-white/15 px-4 py-3.5 text-white text-sm focus:border-[#c5a880] focus:outline-none transition-colors"
                      placeholder={isPolish ? 'Jan Kowalski' : 'John Doe'}
                    />
                  </div>

                  {/* Adres e-mail */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono block mb-2">
                      {tr.contact.labels.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#171717] border border-white/15 px-4 py-3.5 text-white text-sm focus:border-[#c5a880] focus:outline-none transition-colors"
                      placeholder="jan@kowalski.pl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Telefon */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono block mb-2">
                      {tr.contact.labels.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#171717] border border-white/15 px-4 py-3.5 text-white text-sm focus:border-[#c5a880] focus:outline-none transition-colors"
                      placeholder="+48 000 000 000"
                    />
                  </div>

                  {/* Kategoria mebla / Temat zgłoszenia */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono block mb-2">
                      {tr.contact.labels.category}
                    </label>
                    <select
                      value={formData.category}
                      onChange={handleCategoryChange}
                      className="w-full bg-[#171717] border border-white/15 px-4 py-3.5 text-white text-sm focus:border-[#c5a880] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="">{tr.contact.labels.catPlaceholder}</option>
                      {tr.contact.categories.map((cat, idx) => (
                        <option
                          key={idx}
                          value={cat}
                          className={idx === 1 || idx === 2 ? 'bg-neutral-900 text-[#c5a880]' : ''}
                        >
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Wiadomość */}
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono block mb-2">
                    {isInvoiceActive
                      ? (isPolish ? 'TREŚĆ WNIOSKU O DUPLIKAT *' : 'INVOICE REQUEST DETAILS *')
                      : isClaimActive
                      ? (isPolish ? 'TREŚĆ ZGŁOSZENIA REKLAMACYJNEGO *' : 'WARRANTY CLAIM DETAILS *')
                      : `${tr.contact.labels.message} *`}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#171717] border border-white/15 p-4 text-white text-sm focus:border-[#c5a880] focus:outline-none transition-colors font-light leading-relaxed resize-y"
                    placeholder={
                      isPolish
                        ? 'Wymiary pomieszczenia, preferowane materiały, termin realizacji...'
                        : 'Room dimensions, desired materials, estimated schedule...'
                    }
                  />
                </div>

                {/* Przycisk wysyłki */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#c5a880] hover:bg-[#d6bc96] text-black font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-lg mt-4"
                >
                  <span>
                    {isInvoiceActive
                      ? (isPolish ? 'WYŚLIJ PROŚbĘ O DUPLIKAT' : 'REQUEST DUPLICATE')
                      : isClaimActive
                      ? (isPolish ? 'PRZEKAŻ ZGŁOSZENIE DO SERWISU' : 'SUBMIT WARRANTY CLAIM')
                      : tr.contact.labels.submit}
                  </span>
                  <span>→</span>
                </button>

                <p className="text-[10px] text-neutral-500 text-center font-mono tracking-wider pt-2">
                  {tr.contact.recaptcha}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;