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
  instagramReelUrl?: string; // Opcjonalny link do wideo
}

export const portfolioItems: PortfolioItem[] = [
  /* 1. KUCHNIE */
  {
    id: 'kuchnia-fornir-czarny-kamien',
    title: 'Kuchnia z Fornirem i Czarnym Kamieniem',
    titleEn: 'Wood Veneer & Black Stone Kitchen',
    category: 'Kuchnie',
    categoryEn: 'Kitchens',
    tag: 'NOWOŚĆ',
    location: 'Wrocław',
    img: 'https://i.postimg.cc/1tjB69T7/1.jpg', 
    description: 'Nowoczesna kuchnia łącząca matowe fronty w odcieniach ciepłej szarości z wyraźnym rysunkiem drewnianego forniru. Centrum przestrzeni stanowi wyspa z masywnym blatem z ciemnego kamienia. Całość dopełnia elegancka witryna z czarnym szkłem, zintegrowane sprzęty AGD oraz designerska, drewniana lampa liniowa.',
    descEn: 'A modern kitchen combining matte fronts in warm grey tones with the distinct grain of wood veneer. The space is centered around an island featuring a massive dark stone countertop, complemented by an elegant black glass cabinet and integrated appliances.',
    gallery: [
      'https://i.postimg.cc/1tjB69T7/1.jpg',
      'https://i.postimg.cc/7ZkFbVSL/2.jpg',
      'https://i.postimg.cc/q7BWxvbg/3.jpg',
      'https://i.postimg.cc/J0XFzDnD/4.jpg'
    ],
    materials: [
      'Fornir naturalny z pionowym ryflowaniem',
      'Masywne blaty z ciemnego kamienia',
      'Matowe fronty Anty Finger bezuchwytowe',
      'Przeszklenia z czarnego szkła'
    ],
    instagramReelUrl: 'https://www.instagram.com/p/DdtaQQ6CZ8O/', // Link do rolki na IG
  },
  {
    id: 'kuchnia-wyspa-jasny-blat',
    title: 'Kuchnia z Fornirem i Jasną Wyspą',
    titleEn: 'Wood Veneer Kitchen with Light Island',
    category: 'Kuchnie',
    categoryEn: 'Kitchens',
    tag: 'REALIZACJA',
    location: 'Wrocław',
    img: 'https://i.postimg.cc/4x83hxmM/1.jpg',
    description: 'Przestronna kuchnia, w której główną rolę odgrywa obszerna wyspa z jasnym, subtelnym blatem. Wyspę uzupełnia solidna, drewniana dostawka pełniąca funkcję stołu barowego. Całość kompozycji dopełnia wysoka zabudowa z ciemnego forniru z pionowymi lamelami oraz elegancki, otwarty regał na wino. Wyspa została funkcjonalnie wyposażona w zlewozmywak oraz płytę grzewczą zlicowaną z powierzchnią blatu.',
    descEn: 'A spacious kitchen where the main role is played by a large island with a light, subtle countertop. The island is complemented by a solid wooden extension serving as a bar table. The entire composition is completed by tall cabinetry made of dark veneer with vertical slats and a minimalist wine rack. The island is functionally equipped with a sink and a flush-mounted hob.',
    gallery: [
      'https://i.postimg.cc/4x83hxmM/1.jpg',
      'https://i.postimg.cc/Jzd1zYF4/2.jpg',
      'https://i.postimg.cc/sxczdTW0/3.jpg',
      'https://i.postimg.cc/7YHDMy8Z/4.jpg'
    ],
    materials: [
      'Jasny blat z konglomeratu kwarcowego',
      'Fornir naturalny (wysoka zabudowa i stół barowy)',
      'Czarne profile uchwytowe',
      'Stal nierdzewna szczotkowana (bateria zlewozmywakowa)'
    ]
  },
{
    id: 'kuchnia-biel-szarosc-drewno',
    title: 'Kuchnia w Bieli, Szarości i Drewnie',
    titleEn: 'White, Grey and Wood Kitchen',
    category: 'Kuchnie',
    categoryEn: 'Kitchens',
    tag: 'REALIZACJA',
    location: 'Wrocław',
    img: 'https://i.postimg.cc/qqLfq7P9/IMG-0493.jpg',
    description: 'Nowoczesna kuchnia łącząca matowe, białe fronty dolne z elegancką szarością wysokiej zabudowy i szafek wiszących. Ciepła kompozycji dodają blaty oraz panel ścienny w wyrazistym dekorze drewna. Przestrzeń wyposażono w funkcjonalny półwysep z hokerami, zintegrowane czarne sprzęty AGD oraz elegancką strefę kawową z dekoracyjnym oświetleniem.',
    descEn: 'A modern kitchen combining matte white lower fronts with elegant grey tall cabinetry and upper cabinets. Wood-decor countertops and a matching wall panel add warmth to the composition. The space is equipped with a functional peninsula with bar stools, integrated black appliances, and an elegant coffee zone with decorative lighting.',
    gallery: [
      'https://i.postimg.cc/qqLfq7P9/IMG-0493.jpg',
      'https://i.postimg.cc/WbHWnrw4/IMG-0486.jpg',
      'https://i.postimg.cc/J0gNb3CJ/IMG-0488.jpg',
      'https://i.postimg.cc/tRLDnyqM/IMG-0481.jpg'
    ],
    materials: [
      'Matowe białe fronty bezuchwytowe',
      'Szare fronty z matowym wykończeniem',
      'Blat roboczy i panel ścienny w dekorze drewna',
      'Czarne sprzęty AGD oraz zlew kompozytowy'
    ]
  },
{
    id: 'kuchnia-klasyczna-niebieska-wyspa',
    title: 'Klasyczna Kuchnia z Rustykalną Wyspą',
    titleEn: 'Classic Kitchen with Rustic Island',
    category: 'Kuchnie',
    categoryEn: 'Kitchens',
    tag: 'REALIZACJA',
    location: 'Wrocław',
    img: 'https://i.postimg.cc/dt6b2LhK/DSC-6471.jpg',
    description: 'Elegancka kuchnia w klasycznym stylu z białymi, frezowanymi frontami i dekoracyjnymi witrynami. Przestrzeń zyskuje unikalny charakter dzięki głębokiemu, niebieskiemu kolorowi ścian oraz wzorzystym kafelkom nad blatem. W centrum znajduje się duża, rustykalna wyspa z blatem o wyraźnym rysunku starego drewna. Stylizowany, czarny sprzęt AGD w klimacie retro oraz ceramiczny zlewozmywak typu farmhouse dopełniają tradycyjny, a zarazem luksusowy charakter wnętrza.',
    descEn: 'An elegant classic-style kitchen with white, milled fronts and decorative glass display cabinets. The space gains a unique character through deep blue walls and patterned backsplash tiles. At the center is a large, rustic island with a distinctively grained aged-wood countertop. Stylish, retro-inspired black appliances and a ceramic farmhouse sink complete the traditional yet luxurious feel of the interior.',
    gallery: [
      'https://i.postimg.cc/dt6b2LhK/DSC-6471.jpg',
      'https://i.postimg.cc/Hn2h9hsQ/DSC-6492.jpg',
      'https://i.postimg.cc/7ZbWSXvg/DSC-6500.jpg',
      'https://i.postimg.cc/VvDKC0DT/DSC-6529.jpg'
    ],
    materials: [
      'Białe fronty ramiakowe z klasycznym frezowaniem',
      'Rustykalny blat wyspy o wyrazistym rysunku drewna',
      'Zabudowa AGD w stylu retro (m.in. stylizowana kuchnia wolnostojąca)',
      'Ceramiczny zlewozmywak typu farmhouse'
    ]
  },
{
    id: 'kuchnia-czarna-miedz',
    title: 'Czarna Kuchnia z Miedzianymi Akcentami',
    titleEn: 'Black Kitchen with Copper Accents',
    category: 'Kuchnie',
    categoryEn: 'Kitchens',
    tag: 'PREMIUM',
    location: 'Warszawa',
    img: 'https://i.postimg.cc/sgRcwRN8/DSC-6191.jpg',
    description: 'Odważna i nowoczesna kuchnia w industrialnym klimacie, w której dominują gładkie, matowe fronty w głębokiej czerni. Zostały one zjawiskowo zestawione z wyrazistymi, miedzianymi i rdzawymi teksturami. Blat oraz panel ścienny o strukturze patynowanej miedzi idealnie komponują się z unikalnym, dekoracyjnym okapem ściennym. Przestrzeń wyposażono w zintegrowaną podblatową chłodziarkę na wino, czarną armaturę oraz klimatyczne oświetlenie w stylu loft, tworząc niezwykle eleganckie i oryginalne wnętrze.',
    descEn: 'A bold and modern industrial-style kitchen, dominated by smooth, matte black fronts. These are spectacularly paired with striking copper and rust textures. The countertop and backsplash, featuring a patinated copper finish, perfectly complement the unique decorative wall-mounted range hood. The space is equipped with an integrated under-counter wine cooler, black fixtures, and atmospheric loft-style lighting, creating an incredibly elegant and highly original interior.',
    gallery: [
      'https://i.postimg.cc/sgRcwRN8/DSC-6191.jpg',
      'https://i.postimg.cc/WbcgPw6H/DSC-6207.jpg',
      'https://i.postimg.cc/BvzP7Tnz/DSC-6248.jpg'
    ],
    materials: [
      'Matowe, czarne fronty bezuchwytowe',
      'Blat i panel ścienny w dekorze patynowanej miedzi/rdzy',
      'Dekoracyjny okap ścienny z miedzianymi detalami',
      'Podblatowa chłodziarka na wino z drewnianymi półkami'
    ]
  },
{
    id: 'kuchnia-biel-polysk-drewno',
    title: 'Biała Kuchnia w Połysku z Drewnianą Wyspą',
    titleEn: 'High-Gloss White Kitchen with Wooden Island',
    category: 'Kuchnie',
    categoryEn: 'Kitchens',
    tag: 'REALIZACJA',
    location: 'Wrocław',
    img: 'https://i.postimg.cc/8zJSBMxf/DSC-5694.jpg',
    description: 'Przestronna, nowoczesna kuchnia łącząca nieskazitelną biel frontów w wysokim połysku z wyrazistym rysunkiem drewna. Centrum aranżacji stanowi rozbudowana wyspa, w którą sprytnie wkomponowano obniżony stół jadalniany. Nad strefą gotowania zawieszono designerski, kulisty okap w białym kolorze, który stanowi mocny akcent wizualny. Zabudowa charakteryzuje się asymetrycznym układem górnych szafek z otwartymi, drewnianymi modułami oraz zaawansowanymi systemami wewnętrznymi, takimi jak szuflady z drewnianymi pegboardami do bezpiecznego przechowywania zastawy.',
    descEn: 'A spacious, modern kitchen combining pristine high-gloss white fronts with a distinct wood grain pattern. The centerpiece of the design is an extensive island that cleverly integrates a lowered dining table. Above the cooking zone hangs a designer, spherical white range hood, serving as a strong visual accent. The cabinetry features an asymmetrical layout of upper cabinets with open wooden modules and advanced internal systems, such as deep drawers equipped with wooden pegboards for safe tableware storage.',
    gallery: [
      'https://i.postimg.cc/8zJSBMxf/DSC-5694.jpg',
      'https://i.postimg.cc/PrqhJB4c/DSC-5687.jpg',
      'https://i.postimg.cc/wjypcLny/DSC-5705.jpg',
      'https://i.postimg.cc/K8y6Lw7w/DSC-5711.jpg'
    ],
    materials: [
      'Białe fronty lakierowane w wysokim połysku',
      'Blat oraz elementy korpusów w wyrazistym dekorze drewna',
      'Designerski okap wyspowy w kształcie kuli',
      'Szuflady wewnętrzne ze szklanymi boczkami i drewnianymi wkładami'
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