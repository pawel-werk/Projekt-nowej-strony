import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'jak-zaprojektowac-ergonomiczna-kuchnie-na-wymiar',
    title: 'Ergonomia w sercu domu: jak zaplanować ciąg roboczy w kuchni na wymiar',
    excerpt:
      'Trójkąt roboczy, wysokość blatów dostosowana do wzrostu i strefy przechowywania, które eliminują zbędne ruchy. Poznaj zasady projektowania nowoczesnych kuchni bespoke.',
    coverImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    publishedAt: '12 września 2026',
    category: 'Kuchnie na wymiar',
    readingTime: '5 min czytania',
    content: [
      {
        type: 'paragraph',
        text: 'Projektowanie luksusowej kuchni na zamówienie to znacznie więcej niż wybór frontów i odcieni forniru. Prawdziwy kunszt stolarski i architektoniczny objawia się w ergonomii — w tym, jak intuicyjnie dłoń trafia na uchwyt zintegrowany i jak płynnie przebiega przygotowywanie posiłków.',
      },
      {
        type: 'heading2',
        text: '1. Złoty trójkąt roboczy: lodówka, zlewozmywak, płyta',
      },
      {
        type: 'paragraph',
        text: 'Niezależnie od metrażu kuchni kluczowy pozostaje układ trzech głównych punktów. Dystans między lodówką, zlewozmywakiem a płytą grzewczą nie powinien przekraczać 120–210 cm. W zabudowach z wyspą kuchenną rekomendujemy umieszczenie płyty lub zlewu w blacie wyspy, zapewniając bezpośredni kontakt wzrokowy ze strefą dzienną.',
      },
      {
        type: 'list',
        items: [
          'Strefa zapasów (chłodziarka i spiżarnia w wysokiej zabudowie pionowej)',
          'Strefa zmywania (zmywarka podniesiona ergonomicznie o 25–40 cm nad podłogę)',
          'Strefa przygotowywania (szeroki blat roboczy min. 90 cm ze spieku lub granitu)',
          'Strefa obróbki cieplnej (płyta indukcyjna z wyciągiem zintegrowanym w blacie)',
        ],
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=80',
        caption: 'Zabudowa z wyspą w wykończeniu z dębu wędzonego i matowego kamienia naturalnego.',
      },
      {
        type: 'heading2',
        text: '2. Wysokość blatów a biometria inwestorów',
      },
      {
        type: 'paragraph',
        text: 'Standardowe 86 cm wysokości mebli z sieciówek to relikt minionej epoki. W realizacjach Werk Mebel wysokość cokołu i korpusu kalibrujemy precyzyjnie pod wzrost domowników — zazwyczaj w przedziale 90–94 cm, co całkowicie odciąża odcinek lędźwiowy kręgosłupa.',
      },
      {
        type: 'quote',
        quote: 'Kuchnia na wymiar powinna reagować na ludzkie ciało, a nie zmuszać człowieka do dopasowywania się do narzuconych modułów fabrycznych.',
        author: 'Pracownia Projektowa Werk Mebel',
      },
      {
        type: 'heading3',
        text: 'Systemy szuflad o pełnym wysuwie',
      },
      {
        type: 'paragraph',
        text: 'Zastąpienie dolnych półek głębokimi szufladami z cichym domykiem i prowadnicami o udźwigu do 70 kg pozwala na natychmiastowy wgląd w całą zawartość szafki bez konieczności schylania się.',
      },
    ],
  },
  {
    id: 'post-2',
    slug: 'spieki-kwarcowe-forniry-kamien-porownanie-blatow',
    title: 'Spieki kwarcowe, fornirowany dąb czy granit? Przewodnik po materiałach premium',
    excerpt:
      'Zestawienie odporności na temperaturę, zarysowania i plamy. Sprawdź, który materiał najlepiej odpowiada Twojemu stylowi życia i estetyce wnętrza.',
    coverImage:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    publishedAt: '28 sierpnia 2026',
    category: 'Materiały i okucia',
    readingTime: '6 min czytania',
    content: [
      {
        type: 'paragraph',
        text: 'Wybór materiałów wykończeniowych decyduje nie tylko o pierwszym wrażeniu wizualnym, ale przede wszystkim o tym, jak meble będą starzeć się po 5, 10 czy 15 latach intensywnego użytkowania.',
      },
      {
        type: 'heading2',
        text: 'Spieki kwarcowe: bezkompromisowa odporność',
      },
      {
        type: 'paragraph',
        text: 'Wypalane w temperaturach przekraczających 1200°C spieki są całkowicie obojętne na gorące garnki stawiane bezpośrednio z płyty indukcyjnej, promieniowanie UV oraz silne kwasy spożywcze (cytryna, ocet, wino).',
      },
      {
        type: 'list',
        items: [
          'Możliwość formowania zintegrowanych zlewów z tego samego arkusza materiału',
          'Grubość płyt od 6 mm (fronty szafek) do 12–20 mm (masywne blaty)',
          'Matowa struktura welurowa lub satynowa zapobiegająca palcowaniu',
        ],
      },
      {
        type: 'heading2',
        text: 'Naturalne forniry: ciepło szlachetnego drewna',
      },
      {
        type: 'paragraph',
        text: 'Dla inwestorów poszukujących haptycznej głębi naturalne forniry dębowe lub orzechowe zabezpieczone matowymi lakierami akrylowymi o głębokości odbicia poniżej 3 glossów stanowią synonim ponadczasowej elegancji.',
      },
    ],
  },
  {
    id: 'post-3',
    slug: 'garderoby-walk-in-oswietlenie-i-organizacja',
    title: 'Garderoba walk-in marzeń: oświetlenie LED, systemy wysuwne i lustra wielkoformatowe',
    excerpt:
      'Jak przekształcić dedykowane pomieszczenie w prywatny showroom mody? Odkryj sekrety inteligentnej organizacji garderoby w stylu boutique.',
    coverImage:
      'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1600&q=80',
    publishedAt: '15 sierpnia 2026',
    category: 'Trendy i architektura',
    readingTime: '4 min czytania',
    content: [
      {
        type: 'paragraph',
        text: 'Nowoczesna garderoba walk-in przestała być jedynie miejscem do wieszania ubrań. Stała się intymną strefą relaksu, przypominającą ekskluzywny butik zMediolanu czy Paryża.',
      },
      {
        type: 'heading2',
        text: 'Kluczowe elementy garderoby klasy Master',
      },
      {
        type: 'list',
        items: [
          'Zintegrowane profile LED o barwie neutralnej 3000K–3500K w frezach pionowych',
          'Wyspa centralna z szufladami z welurowym wkładem na zegarki i biżuterię',
          'Przeszklone fronty w czarnych ramach anodowanych ze szkłem grafitowym antisol',
          'Pantografy umożliwiające wygodny dostęp do najwyższych partii zabudowy',
        ],
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=80',
        caption: 'Pionowe profile świetlne i aksamitne wykończenie wnętrz szuflad Werk Mebel.',
      },
      {
        type: 'paragraph',
        text: 'Dzięki precyzyjnemu doborowi czujników zmierzchowych i zbliżeniowych światło wita użytkownika natychmiast po przekroczeniu progu garderoby, wydobywając naturalne kolory tkanin.',
      },
    ],
  },
  {
    id: 'post-4',
    slug: 'jak-przygotowac-mieszkanie-do-montazu-mebli',
    title: 'Jak przygotować wnętrze do montażu mebli na wymiar: checklista dla inwestora',
    excerpt:
      'Gładzie, punkty hydrauliczne, gniazda siłowe i podłogi. Sprawdź, na jakim etapie prac budowlanych ekipa stolarska powinna wejść na inwestycję.',
    coverImage:
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=80',
    publishedAt: '02 sierpnia 2026',
    category: 'Poradniki',
    readingTime: '5 min czytania',
    content: [
      {
        type: 'paragraph',
        text: 'Nawet najdoskonalej wyprodukowane meble mogą napotkać trudności podczas instalacji, jeśli ściany i instalacje nie zostaną odpowiednio przygotowane przez ekipy wykończeniowe. Oto praktyczna checklista przygotowana przez naszych montażystów.',
      },
      {
        type: 'heading2',
        text: 'Kąty 90 stopni i piony ścian',
      },
      {
        type: 'paragraph',
        text: 'W przypadku kuchni narożnych w kształcie litery L lub U bezwzględnym warunkiem uzyskania idealnie równych fug i szczelin jest zachowanie kąta prostego 90° w narożnikach. Każde odchylenie powyżej 1,5 cm wymusza stosowanie blend korygujących.',
      },
      {
        type: 'list',
        items: [
          'Zakończenie prac mokrych (wylewki i gładzie muszą osiągnąć wilgotność poniżej 3%)',
          'Wyprowadzenie podejść wodno-kanalizacyjnych dokładnie według rysunku branżowego',
          'Wyprowadzenie zasilania 400V (siła) dla płyty oraz dedykowanych obwodów AGD',
          'Ułożenie podłogi na całej powierzchni pomieszczenia przed montażem mebli',
        ],
      },
    ],
  },
  {
    id: 'post-5',
    slug: 'ukryte-drzwi-i-panele-scienne-kontynuacja-zabudowy',
    title: 'Niewidzialne przejścia: jak zintegrować drzwi z panelami ściennymi',
    excerpt:
      'Trend zlicowanych ścian i monolitycznych brył meblarskich. Zobacz, jak ukryć spiżarnię, pralnię czy gabinet za ścianą z forniru.',
    coverImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    publishedAt: '19 lipca 2026',
    category: 'Trendy i architektura',
    readingTime: '4 min czytania',
    content: [
      {
        type: 'paragraph',
        text: 'Monolityczne płaszczyzny to obecnie jeden z najbardziej pożądanych trendów w luksusowych apartamentach. Zamiast tradycyjnych ościeżnic i skrzydeł drzwiowych, architekci coraz chętniej projektują całe ściany w jednolitej okładzinie meblowej.',
      },
      {
        type: 'heading2',
        text: 'Spiżarnia ukryta w szafie kuchennej',
      },
      {
        type: 'paragraph',
        text: 'Rozwiązanie to pozwala zachować idealny minimalizm frontów meblowych, podczas gdy otwarcie jednych z nich prowadzi do obszernego, ukrytego pomieszczenia gospodarczego ze sprzętem AGD i zapasami.',
      },
    ],
  },
  {
    id: 'post-6',
    slug: 'okucia-meblowe-z-dozywotnia-gwarancja-blum-grass-peka',
    title: 'Serce mebla, którego nie widać: dlaczego stawiamy na certyfikowane systemy okuć',
    excerpt:
      'Prowadnice, zawiasy z cichym domykiem i elektryczne wspomaganie otwierania. Jak niemieckie i austriackie podzespoły definiują trwałość mebla na dekady.',
    coverImage:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
    publishedAt: '05 lipca 2026',
    category: 'Materiały i okucia',
    readingTime: '5 min czytania',
    content: [
      {
        type: 'paragraph',
        text: 'Front meblowy zachwyca wzrok, ale to okucia decydują o komforcie każdego dnia. Przeciętna szuflada kuchenna otwierana jest ponad 100 000 razy w całym cyklu życia mebla.',
      },
      {
        type: 'heading2',
        text: 'Standard testów wytrzymałościowych',
      },
      {
        type: 'paragraph',
        text: 'W Werk Mebel instalujemy wyłącznie markowe systemy spełniające rygorystyczne normy DIN EN 15338. Gwarantuje to brak opadania frontów nawet przy maksymalnym obciążeniu zastawą stołową.',
      },
    ],
  },
];
