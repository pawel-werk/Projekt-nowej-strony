import { SaleItem } from '../types/sale';

export const saleProducts: SaleItem[] = [
  {
    id: 'sale-1',
    title: 'Kuchnia "FASHION" z Półwyspem',
    category: 'Kuchnie',
    description: 'Nowoczesna kuchnia niemieckiej produkcji łącząca matowe, jasne fronty z eleganckimi, drewnopodobnymi okładzinami ściennymi i otwartym regałem. Oferta specjalna obejmuje meble wraz z akcesoriami oraz luksusowym blatem z konglomeratu Calacatta Gold (dodawanym w promocji za 1 zł). Półwysep kuchenny zapewnia dodatkową przestrzeń roboczą oraz dyskretne miejsce do spożywania posiłków.\n\nWażne: Do podanej kwoty należy doliczyć koszt serwisu/montażu na terenie Dolnego Śląska w wysokości 3000 zł brutto (przy stawce 8% VAT za kompleksową usługę montażu).',
    dimensions: 'Wymiary dostępne na zapytanie',
    material: 'Matowe fronty bezuchwytowe, blat z konglomeratu Calacatta Gold (w promocji), drewnopodobny panel ścienny, zintegrowane oświetlenie LED',
    oldPrice: 85000, 
    newPrice: 55900,
    image: 'https://i.postimg.cc/vmsnQhNS/1a.jpg',
    gallery: [
      'https://i.postimg.cc/vmsnQhNS/1a.jpg',
      'https://i.postimg.cc/qvXs6Wnm/1bb.jpg',
      'https://i.postimg.cc/B6hPB0Q5/1bc.jpg',
      'https://i.postimg.cc/zv6L4Fhx/1c.jpg'
    ],
    isExhibition: true,
  },
  {
    id: 'sale-2',
    title: 'Kuchnia "CHALET" z Kwarcytem Cristallo',
    category: 'Kuchnie',
    description: 'Zjawiskowa kuchnia ekspozycyjna w głębokim, granatowym macie z klasycznie frezowanymi frontami. Jej sercem jest spektakularna ściana z podświetlanego, naturalnego kamienia, nadająca wnętrzu unikalnego blasku. W ramach oferty specjalnej do mebli dołączany jest ekskluzywny blat z kwarcytu Cristallo Imperiale (w cenie 1 zł brutto). Kompozycję dopełniają miedziane okapy tubowe, duży zlew w stylu farmerskim i miedziana bateria.\n\nWażne: Do podanej kwoty należy doliczyć koszt serwisu/montażu na terenie Dolnego Śląska w wysokości 3000 zł brutto (przy stawce 8% VAT za kompleksową usługę montażu).',
    dimensions: 'Wymiary dostępne na zapytanie',
    material: 'Frezowane fronty MDF (granatowy mat), blat Kwarcyt Cristallo Imperiale (w promocji), podświetlany panel kamienny, miedziane detale',
    oldPrice: 115000, 
    newPrice: 58929,
    image: 'https://i.postimg.cc/Ssdqckqq/IMG-0478-HDR.jpg',
    gallery: [
      'https://i.postimg.cc/Ssdqckqq/IMG-0478-HDR.jpg',
      'https://i.postimg.cc/x1cpzTC6/IMG-0469.jpg'
    ],
    isExhibition: true,
  },
  {
    id: 'sale-3',
    title: 'Ekskluzywna Ciemna Kuchnia z Wyspą',
    category: 'Kuchnie',
    description: 'Luksusowa, ciemna zabudowa kuchenna, idealnie wpisująca się w nowoczesne i minimalistyczne wnętrza. Głęboki, matowy odcień frontów nadaje bryle elegancji, a starannie wyselekcjonowane detale i ukryte systemy przechowywania gwarantują najwyższą ergonomię pracy. Zastosowano topowe okucia z cichym domykiem i zintegrowane oświetlenie robocze.\n\nWażne: Cena dotyczy zabudowy meblowej. Ewentualny demontaż i dopasowanie ustroju nośnego do docelowego pomieszczenia wymaga indywidualnej konsultacji.',
    dimensions: 'Szer. 320 cm x Wys. 260 cm x Gł. 60 cm',
    material: 'MDF lakier mat / fronty anti-fingerprint',
    oldPrice: 92000,
    newPrice: 69500,
    image: 'https://i.postimg.cc/Nj30LkVB/1.jpg',
    gallery: [
      'https://i.postimg.cc/Nj30LkVB/1.jpg',
      'https://i.postimg.cc/bv1wn2c1/2.jpg',
      'https://i.postimg.cc/43pxchkz/3.jpg'
    ],
    isExhibition: true,
  },
  {
    id: 'sale-4',
    title: 'Nowoczesna Kuchnia Pastelowa (Pudrowy Róż)',
    category: 'Kuchnie',
    description: 'Odważna, a zarazem subtelna zabudowa w odcieniach pudrowego różu. To propozycja dla inwestorów szukających unikalnego, ciepłego designu przełamanego eleganckimi akcentami. Kuchnia wyposażona jest w najwyższej klasy systemy wysuwne, minimalistyczne uchwyty oraz wytrzymały blat roboczy odporny na zarysowania.\n\nWażne: Przed zakupem zalecamy dokładny pomiar pomieszczenia, aby zweryfikować możliwość bezinwazyjnego przeniesienia układu szafek.',
    dimensions: 'Szer. 280 cm x Wys. 250 cm x Gł. 60 cm',
    material: 'Fronty lakierowane (półmat), blat kompozytowy',
    oldPrice: 97800,
    newPrice: 68750,
    image: 'https://i.postimg.cc/1tP5r5sX/ro-z-owa-1.jpg',
    gallery: [
      'https://i.postimg.cc/1tP5r5sX/ro-z-owa-1.jpg',
      'https://i.postimg.cc/cHm19yLk/ro-z-owa-2.jpg',
      'https://i.postimg.cc/tT5RSQ4S/ro-z-owa-3.jpg'
    ],
    isExhibition: true,
  },
  {
    id: 'sale-5',
    title: 'Luksusowa Garderoba Butikowa',
    category: 'Szafy i garderoby',
    description: 'Ekskluzywna zabudowa garderobiana zaprojektowana w oparciu o butikowy styl ekspozycji. Posiada zaawansowany system organizacji przestrzeni, w tym eleganckie organizery na dodatki, profilowane drążki oraz szuflady z cichym domykiem. Zintegrowane, nastrojowe oświetlenie LED doskonale eksponuje detale i ułatwia codzienny wybór garderoby.\n\nWażne: Wycena obejmuje meble z ekspozycji. Dostosowanie blend maskujących oraz profesjonalny montaż w docelowym pomieszczeniu podlegają indywidualnej wycenie.',
    dimensions: 'Wymiary dostępne na zapytanie',
    material: 'Płyta meblowa premium, profile aluminiowe, zintegrowane oświetlenie LED',
    oldPrice: 75500,
    newPrice: 34700,
    image: 'https://i.postimg.cc/T35CxTmH/1.jpg',
    gallery: [
      'https://i.postimg.cc/T35CxTmH/1.jpg',
      'https://i.postimg.cc/vZx3yGfG/2.jpg',
      'https://i.postimg.cc/BnPM3JHq/3.jpg',
      'https://i.postimg.cc/SxYD4mCQ/4.jpg'
    ],
    isExhibition: true,
  },
  {
    id: 'sale-6',
    title: 'Stół Jadalniany Z Litego Dębu',
    category: 'Stoły i komody',
    description: 'Masywny stół z blatem z naturalnego litego drewna dębowego, uszlachetnionego olejem. Spoczywa na unikalnej, stalowej podstawie geometrycznej.',
    dimensions: '220 cm x 100 cm x 76 cm',
    material: 'Lity dąb olejowany, stal lakierowana proszkowo',
    oldPrice: 95000,
    newPrice: 58000,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    isExhibition: true,
  }
];