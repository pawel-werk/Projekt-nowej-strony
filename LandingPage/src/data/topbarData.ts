import { TopBarItem } from '../types/topbar';

export const mockTopBarItems: TopBarItem[] = [
  {
    id: 'top-1',
    badge: 'Oferta',
    badgeEn: 'Offer',
    text: 'Indywidualne projekty kuchni i zabudów meblowych na wymiar we Wrocławiu',
    textEn: 'Bespoke kitchen designs and custom furniture in Wrocław',
    url: '#services',
  },
  {
    id: 'top-2',
    badge: 'Konsultacje',
    badgeEn: 'Consultations',
    text: 'Umów konsultację i wstępną wycenę Twojego projektu',
    textEn: 'Schedule a consultation and get a preliminary quote for your project',
    url: '#contact',
    highlight: true,
  },
  {
    id: 'top-3',
    badge: 'Portfolio',
    badgeEn: 'Portfolio',
    text: 'Zobacz najnowsze realizacje apartamentów i domów jednorodzinnych',
    textEn: 'View our latest apartment and house projects',
    url: '#portfolio',
  },
  {
    id: 'top-4',
    badge: 'Standard',
    badgeEn: 'Standard',
    text: 'Precyzja wykonania i certyfikowane systemy okuć z dożywotnią gwarancją',
    textEn: 'Precision craftsmanship and certified hardware systems with a lifetime warranty',
    url: '#about',
  },
  {
    id: 'top-5',
    badge: 'Ekspozycja',
    badgeEn: 'Showroom',
    text: 'Odwiedź nasz salon: Galeria Bielany II, ul. Czekoladowa 20, Bielany Wrocławskie',
    textEn: 'Visit our showroom: Galeria Bielany II, Czekoladowa 20, Bielany Wrocławskie',
    url: '#contact',
  },
];