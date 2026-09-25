export interface TranslationSchema {
  nav: {
    portfolio: string;
    about: string;
    services: string;
    contact: string;
    lang: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta1: string;
    cta2: string;
  };
  portfolio: {
    title: string;
    sub: string;
    filters: string[];
  };
  pain: {
    eyebrow: string;
    title: string;
    items: {
      problem: string;
      solution: string;
      icon: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { val: string; label: string }[];
    process: { step: string; title: string; desc: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  instagram: {
    eyebrow: string;
    title: string;
    handle: string;
    sub: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    labels: {
      name: string;
      email: string;
      phone: string;
      category: string;
      message: string;
      submit: string;
      catPlaceholder: string;
    };
    categories: string[];
    success: string;
    direct: string;
    recaptcha: string;
  };
  footer: {
    tagline: string;
    address: string;
    phone: string;
    email: string;
    social: string;
    copy: string;
  };
  floating: string;
}

export const translations: Record<'pl' | 'en', TranslationSchema> = {
  pl: {
    nav: {
      portfolio: "Realizacje",
      about: "O nas",
      services: "Usługi",
      contact: "Kontakt",
      lang: "EN",
    },
    hero: {
      eyebrow: "Meble na wymiar · 15 lat doświadczenia",
      headline: "Jedna firma.\nWszystkie meble.",
      sub: "Kompleksowe wykonanie mebli na wymiar dla całego domu — od kuchni, przez garderoby, po salony. Precyzja, trwałość i design premium.",
      cta1: "Zobacz realizacje",
      cta2: "Zapytaj o wycenę",
    },
    portfolio: {
      title: "Nasze realizacje",
      sub: "Wybierz kategorię, by zobaczyć ukończone projekty",
      filters: ["Wszystkie", "Kuchnie", "Garderoby", "Wnętrza", "Łazienki"],
    },
    pain: {
      eyebrow: "Dlaczego Werk Mebel",
      title: "Koniec z meblarskimi kompromisami",
      items: [
        {
          problem: "Meble z sieciówek nie pasują do Twojej przestrzeni",
          solution: "Każdy mebel projektujemy od zera, idealnie dopasowany do wymiarów i stylu Twojego wnętrza.",
          icon: "📐",
        },
        {
          problem: "Nie masz czasu koordynować wielu wykonawców",
          solution: "Obsługujemy cały projekt — od pomiaru i projektu 3D, po montaż i instalację sprzętów.",
          icon: "🔧",
        },
        {
          problem: "Obawiasz się o jakość materiałów",
          solution: "Pracujemy wyłącznie z certyfikowanymi dostawcami. Płyty, fronty i okucia w najwyższej klasie.",
          icon: "✦",
        },
        {
          problem: "Poprzedni wykonawcy nie dotrzymali terminów",
          solution: "Ustalamy harmonogram i się go trzymamy. Kontrakt, jasne warunki, pełna transparentność.",
          icon: "📅",
        },
      ],
    },
    about: {
      eyebrow: "O nas",
      title: "15 lat. Tysiące zadowolonych klientów.",
      body: "Werk Mebel to rodzinna pracownia meblarska z Wrocławia. Od 2011 roku tworzymy meble na wymiar, które łączą precyzję wykonania z ponadczasowym designem. Używamy materiałów klasy premium i pracujemy z najlepszymi dostawcami okuć i frontów z Niemiec, Włoch i Polski.",
      stats: [
        { val: "15+", label: "Lat doświadczenia" },
        { val: "2400+", label: "Zrealizowanych projektów" },
        { val: "98%", label: "Zadowolonych klientów" },
        { val: "6", label: "Etapów realizacji" },
      ],
      process: [
        { step: "01", title: "Pomiar i wizja", desc: "Przyjeżdżamy na pomiar i rozmawiamy o Twoich potrzebach oraz wizji wnętrza." },
        { step: "02", title: "Projekt 3D", desc: "Tworzysz mebel razem z naszym projektantem — widzisz efekt zanim powstanie." },
        { step: "03", title: "Dobór materiałów", desc: "Blaty, fronty, uchwyty, oświetlenie — każdy detal do wyboru." },
        { step: "04", title: "Produkcja", desc: "Precyzyjna produkcja w naszym zakładzie pod stałą kontrolą jakości." },
        { step: "05", title: "Dostawa", desc: "Własny transport — bez uszkodzeń, na czas, z pełną ochroną mebla." },
        { step: "06", title: "Montaż i odbiór", desc: "Montujemy, instalujemy sprzęty i zostawiamy gotową przestrzeń." },
      ],
    },
    services: {
      eyebrow: "Usługi",
      title: "Co możemy dla Ciebie zrobić",
      items: [
        { title: "Kuchnie na wymiar", desc: "Projekt i wykonanie kuchni skrojonych idealnie pod Twoje potrzeby i wymiary. Fronty, blaty, AGD w zabudowie." },
        { title: "Garderoby i szafy", desc: "Garderoby walk-in, szafy przesuwne i wnękowe z pełną organizacją przestrzeni." },
        { title: "Meble do salonu", desc: "Biblioteczki, komody, meble TV, zabudowy ścienne — w każdym stylu." },
        { title: "Łazienki", desc: "Szafki łazienkowe, lustra z oświetleniem, blaty i fronty odporne na wilgoć." },
        { title: "Kompleksowe wnętrza", desc: "Projektujemy i wykonujemy meble do całego mieszkania lub domu — jeden projekt, jeden wykonawca." },
        { title: "Biura i lokale", desc: "Zabudowy biurowe, recepcje, meble do sklepów i lokali usługowych." },
      ],
    },
    instagram: {
      eyebrow: "Instagram",
      title: "Śledź nasze prace na bieżąco",
      handle: "@werkmebel",
      sub: "Codzienne inspiracje, realizacje w trakcie i gotowe projekty.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Napisz do nas",
      sub: "Odpowiadamy w ciągu 24 godzin roboczych.",
      labels: {
        name: "Imię i nazwisko",
        email: "Adres e-mail",
        phone: "Telefon (opcjonalnie)",
        category: "Temat zapytania",
        message: "Treść wiadomości",
        submit: "Wyślij wiadomość",
        catPlaceholder: "Wybierz temat",
      },
      categories: [
        "Nowy projekt / wycena",
        "Reklamacja",
        "Duplikat faktury",
        "Kuchnia",
        "Garderoba / szafa",
        "Salon / biblioteka",
        "Łazienka",
        "Kompleksowe wnętrze",
        "Biuro / lokal",
        "Inne"
      ],
      success: "Dziękujemy! Odezwiemy się wkrótce.",
      direct: "Wolisz pisać bezpośrednio?",
      recaptcha: "Ten formularz jest chroniony przez reCAPTCHA.",
    },
    footer: {
      tagline: "Meble na wymiar dla wymagających.",
      address: "ul. Czekoladowa 20, 55-040 Bielany Wrocławskie",
      phone: "+48 71 778 90 80",
      email: "biuro@werkmebel.pl",
      social: "Obserwuj nas",
      copy: "© 2026 Werk Mebel. Wszelkie prawa zastrzeżone.",
    },
    floating: "Zapytaj o wycenę",
  },
  en: {
    nav: {
      portfolio: "Projects",
      about: "About",
      services: "Services",
      contact: "Contact",
      lang: "PL",
    },
    hero: {
      eyebrow: "Custom furniture · 15 years of experience",
      headline: "One company.\nAll your furniture.",
      sub: "End-to-end custom furniture for the entire home — from kitchens to wardrobes and living rooms. Premium design, precision craftsmanship, lasting quality.",
      cta1: "View projects",
      cta2: "Request a quote",
    },
    portfolio: {
      title: "Our projects",
      sub: "Select a category to browse completed work",
      filters: ["All", "Kitchens", "Wardrobes", "Interiors", "Bathrooms"],
    },
    pain: {
      eyebrow: "Why Werk Mebel",
      title: "No more furniture compromises",
      items: [
        {
          problem: "Off-the-shelf furniture never quite fits your space",
          solution: "Every piece is designed from scratch, perfectly sized and styled to your interior.",
          icon: "📐",
        },
        {
          problem: "Coordinating multiple contractors is exhausting",
          solution: "We handle the entire project — measurement, 3D design, production, delivery, and installation.",
          icon: "🔧",
        },
        {
          problem: "You're unsure about material quality",
          solution: "We work exclusively with certified suppliers. Premium boards, fronts, and hardware — every time.",
          icon: "✦",
        },
        {
          problem: "Past contractors missed deadlines",
          solution: "We set a schedule and stick to it. Contract, clear terms, full transparency.",
          icon: "📅",
        },
      ],
    },
    about: {
      eyebrow: "About us",
      title: "15 years. Thousands of happy clients.",
      body: "Werk Mebel is a family-owned furniture workshop from Wrocław. Since 2009 we have been creating custom furniture that combines precision craftsmanship with timeless design. We use premium materials and work with the best hardware and front suppliers from Germany, Italy, and Poland.",
      stats: [
        { val: "15+", label: "Years of experience" },
        { val: "2400+", label: "Completed projects" },
        { val: "98%", label: "Satisfied clients" },
        { val: "6", label: "Process stages" },
      ],
      process: [
        { step: "01", title: "Measurement & vision", desc: "We visit for a measurement and discuss your needs and ideas." },
        { step: "02", title: "3D design", desc: "Design your furniture with our specialist — see the result before it's made." },
        { step: "03", title: "Material selection", desc: "Countertops, fronts, handles, lighting — every detail is yours to choose." },
        { step: "04", title: "Production", desc: "Precision manufacturing in our workshop under continuous quality control." },
        { step: "05", title: "Delivery", desc: "Our own transport — no damage, on time, with full protection." },
        { step: "06", title: "Installation & handover", desc: "We install, wire appliances, and hand over a finished space." },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "What we can do for you",
      items: [
        { title: "Custom kitchens", desc: "Design and manufacture of kitchens tailored to your needs. Fronts, countertops, built-in appliances." },
        { title: "Wardrobes & walk-ins", desc: "Walk-in wardrobes, sliding and alcove wardrobes with full interior organisation." },
        { title: "Living room furniture", desc: "Bookcases, sideboards, TV units, wall systems — in any style." },
        { title: "Bathrooms", desc: "Bathroom cabinets, lit mirrors, moisture-resistant countertops and fronts." },
        { title: "Full interiors", desc: "We design and manufacture furniture for an entire apartment or house — one project, one contractor." },
        { title: "Offices & commercial", desc: "Office builds, reception desks, shop and hospitality furniture." },
      ],
    },
    instagram: {
      eyebrow: "Instagram",
      title: "Follow our latest work",
      handle: "@werkmebel",
      sub: "Daily inspiration, work in progress, and finished projects.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in touch",
      sub: "We respond within 24 business hours.",
      labels: {
        name: "Full name",
        email: "Email address",
        phone: "Phone (optional)",
        category: "Subject",
        message: "Message",
        submit: "Send message",
        catPlaceholder: "Select a subject",
      },
      categories: [
        "New project / quote",
        "Complaint",
        "Invoice duplicate request",
        "Kitchen",
        "Wardrobe / walk-in",
        "Living room / library",
        "Bathroom",
        "Full interior",
        "Office / commercial",
        "Other"
      ],
      success: "Thank you! We'll be in touch shortly.",
      direct: "Prefer to write directly?",
      recaptcha: "This form is protected by reCAPTCHA.",
    },
    footer: {
      tagline: "Custom furniture for discerning clients.",
      address: "ul. Braniborska 14 (Domar Interior Gallery), 53-680 Wrocław, Poland",
      phone: "+48 71 778 90 80",
      email: "domar@werkmebel.pl",
      social: "Follow us",
      copy: "© 2026 Werk Mebel. All rights reserved.",
    },
    floating: "Zapytaj o wycenę",
  },
};