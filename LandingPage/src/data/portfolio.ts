export interface PortfolioItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  tag: string;
  location: string;
  img: string;
  description: string;
  descEn?: string;
  gallery: string[];
  materials: string[];
}

export const portfolioItems: PortfolioItem[] = [
  /* 1. KUCHNIE */
  {
    id: 'kuchnia-monochromatyczna',
    title: 'Monochromatyczna Kuchnia ze Spiekiem',
    titleEn: 'Monochrome Kitchen with Quartzite',
    category: 'Kuchnie',
    categoryEn: 'Kitchens',
    tag: 'NOWOŚĆ',
    location: 'Wrocław, Krzyki',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    description: 'Minimalistyczna kuchnia na wymiar z frontami w głębokim macie zapobiegającym powstawaniu odcisków palców. Monolityczna wyspa oraz blaty robocze wykonane ze spieku kwarcowego 12mm zintegrowane ze szczelinowym okapem płytowym BORA Pure.',
    descEn: 'Bespoke minimalist kitchen featuring anti-fingerprint deep matt fronts. The monolithic island and countertops are crafted from 12mm quartzite slabs with an integrated cooktop ventilation system.',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: [
      'Spiek kwarcowy Laminam 12mm',
      'Fronty lakierowane PerfectSense Matt',
      'Systemy szuflad Blum Legrabox z dożywotnią gwarancją',
      'Oświetlenie liniowe LED Hafele Loox5 3000K'
    ]
  },
  {
    id: 'kuchnia-orzech-antracyt',
    title: 'Kuchnia Fornirowana Orzech & Antracyt',
    titleEn: 'Walnut & Anthracite Kitchen Island',
    category: 'Kuchnie',
    categoryEn: 'Kitchens',
    tag: 'REALIZACJA',
    location: 'Wrocław, Oporów',
    img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    description: 'Harmonijna kompozycja naturalnego forniru orzecha amerykańskiego z satynowym antracytem. Wyspa kuchenna ze zintegrowaną strefą winiarki podblatowej oraz systemem kieszeniowych drzwi chowanych w korpusie (Pocket Doors) maskujących strefę małego AGD.',
    descEn: 'Harmonious composition of natural American walnut veneer and satin anthracite. Kitchen island featuring integrated under-counter wine climate cabinet and pocket door system.',
    gallery: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: [
      'Fornir naturalny Orzech Amerykański w lakierze matowym',
      'Blaty granitowe Nero Assoluto szczotkowany',
      'System chowanych drzwi Hawa Concepta',
      'Okucia z cichym domykiem Hettich Sensys'
    ]
  },

  /* 2. GARDEROBY */
  {
    id: 'garderoba-walk-in',
    title: 'Garderoba Master z Przeszkleniami',
    titleEn: 'Master Walk-In Wardrobe with Glass',
    category: 'Garderoby',
    categoryEn: 'Wardrobes',
    tag: 'INDYWIDUALNY PROJEKT',
    location: 'Bielany Wrocławskie',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    description: 'Luksusowa garderoba typu walk-in z grafitowymi przeszkleniami w czarnych ramach ze szczotkowanego aluminium. Wnętrza wykończone naturalnym fornirem dębowym z frezowanym, bezcieniowym oświetleniem LED aktywowanym sensorowo przy otwarciu frontu.',
    descEn: 'Luxury walk-in closet with graphite glass in brushed black aluminum frames. Interiors lined with natural oak veneer and sensor-activated seamless LED strips.',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef3?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: [
      'Szkło grafitowe hartowane Antisol',
      'Profile aluminiowe anodowane na czarny mat',
      'Frezowane profile LED 2700K (CRI > 95)',
      'Fornirowany dąb czarny szczotkowany'
    ]
  },
  {
    id: 'garderoba-minimalistyczna',
    title: 'Garderoba z Wyspą Akcesoryjną',
    titleEn: 'Bespoke Dressing Room with Island',
    category: 'Garderoby',
    categoryEn: 'Wardrobes',
    tag: 'PREMIUM',
    location: 'Wrocław, Park Ołtaszyn',
    img: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1600&q=80',
    description: 'Centralna wyspa akcesoryjna ze szklanym blatem ekspozycyjnym i welurowymi organizerami na zegarki i biżuterię. Pełna zabudowa sięgająca sufitu z pantografami i zintegrowanym podświetleniem drążków ubraniowych.',
    descEn: 'Central accessory island with tempered glass showcase top and velvet organizers. Full-height bespoke cabinetry with hidden lift systems and illuminated hanging rails.',
    gallery: [
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: [
      'Szkło Optiwhite z fazowaną krawędzią',
      'Welurowe wkłady jubilerskie na wymiar',
      'Okucia Blum Tandembox z Tip-On Blumotion',
      'Pionowe profile świetlne Hafele'
    ]
  },

  /* 3. WNĘTRZA / SALONY */
  {
    id: 'salon-strefa-dzienna',
    title: 'Ściana Medialna & Salon Rezydencji',
    titleEn: 'Media Wall & Residence Living Room',
    category: 'Wnętrza',
    categoryEn: 'Interiors',
    tag: 'KOMPLEKSOWO',
    location: 'Domaszczyn',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    description: 'Kompleksowa zabudowa strefy dziennej obejmująca ścianę telewizyjną z akustycznymi lamelami dębowymi, podświetlaną witrynę z metaloplastyką oraz ukryte przejście bezramowe zintegrowane w płaszczyźnie fornirowanej ściany.',
    descEn: 'Comprehensive living room joinery including an acoustic slatted oak media wall, illuminated metal-framed display cabinet, and a concealed flush door.',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: [
      'Naturalny fornir dębowy szczotkowany',
      'Formatki spiekowe wielkoformatowe',
      'Systemy przesuwne EKU Porta',
      'Akustyczne panele filcowe pod lamelami'
    ]
  },
  {
    id: 'apartament-biblioteka-gabinet',
    title: 'Zabudowa Gabinetu & Biblioteka Loftowa',
    titleEn: 'Home Office & Modern Library Joinery',
    category: 'Wnętrza',
    categoryEn: 'Interiors',
    tag: 'NOWOŚĆ',
    location: 'Wrocław, Śródmieście',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    description: 'Zabudowa domowego biura połączona z geometryczną biblioteką ścienną. Biurko z litego drewna wsparte na konstrukcji meblowej z ukrytym kanałem na przewody i bezprzewodową ładowarką wpuszczaną w blat.',
    descEn: 'Bespoke home office furniture integrated with a geometric wall bookcase. Solid wood executive desk with concealed cable management and flush wireless charging.',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: [
      'Lity dąb olejowany woskiem twardym',
      'Stal proszkowa w odcieniu strukturalnej czerni',
      'Matowe płyty Egger PerfectSense',
      'Systemy przepustów szczotkowych'
    ]
  },

  /* 4. ŁAZIENKI */
  {
    id: 'lazienka-minimalistyczna',
    title: 'Zabudowa Łazienkowa z Kamieniem',
    titleEn: 'Minimalist Stone Bathroom Vanity',
    category: 'Łazienki',
    categoryEn: 'Bathrooms',
    tag: 'PRECYZJA',
    location: 'Wrocław, Śródmieście',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    description: 'Wisząca szafka podumywalkowa o podwyższonej odporności na wilgoć (płyty z klejem poliuretanowym PUR). Zintegrowany zlew z monolitycznego kamienia oraz ukryty organizer kosmetyczny z gniazdami elektrycznymi 230V.',
    descEn: 'Moisture-resistant wall-hung vanity unit sealed with PUR polyurethane technology. Monolithic stone integrated sink and hidden organizer with internal power sockets.',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: [
      'Granit Nero Assoluto mat',
      'Lakier wilgocioodporny z podkładem PUR',
      'Prowadnice Blum Movento z Tip-On Blumotion',
      'Lustro ze zintegrowaną matą grzewczą anti-fog'
    ]
  },
  {
    id: 'lazienka-spa-fornir',
    title: 'Strefa Kąpielowa SPA w Fornirze Teak',
    titleEn: 'Bespoke SPA Bathroom & Teak Vanity',
    category: 'Łazienki',
    categoryEn: 'Bathrooms',
    tag: 'NOWOŚĆ',
    location: 'Wrocław, Karłowice',
    img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80',
    description: 'Ekskluzywna zabudowa łazienki prywatnej z egzotycznym fornirem teakowym zabezpieczonym przed parą wodną. Szafka z szufladami w kształcie syfonu U-shape maksymalizująca przestrzeń przechowywania pod dwiema misami nablatowymi.',
    descEn: 'Exclusive master bathroom cabinetry featuring water-sealed exotic teak veneer. U-shape drawer siphon cutouts maximizing internal vanity storage.',
    gallery: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: [
      'Fornir Teak impregnowany ciśnieniowo',
      'Blat z konglomeratu kwarcowego Silestone',
      'Cienkościenne szuflady Blum Legrabox pure',
      'Ukryte oświetlenie akcentujące cokół'
    ]
  }
];

export const instagramPosts = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    likes: 142,
    comments: 18,
    url: 'https://instagram.com/werkmebel',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    likes: 98,
    comments: 12,
    url: 'https://instagram.com/werkmebel',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    likes: 215,
    comments: 24,
    url: 'https://instagram.com/werkmebel',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    likes: 176,
    comments: 15,
    url: 'https://instagram.com/werkmebel',
  },
];