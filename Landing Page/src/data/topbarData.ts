import { TopBarItem } from '../types/topbar';

export const mockTopBarItems: TopBarItem[] = [
  {
    id: 'top-1',
    badge: 'Oferta',
    text: 'Indywidualne projekty kuchni i zabudów meblowych na wymiar we Wrocławiu',
    url: '#services',
  },
  {
    id: 'top-2',
    badge: 'Konsultacje',
    text: 'Umów konsultację i wstępną wycenę Twojego projektu',
    url: '#contact',
    highlight: true,
  },
  {
    id: 'top-3',
    badge: 'Portfolio',
    text: 'Zobacz najnowsze realizacje apartamentów i domów jednorodzinnych',
    url: '#portfolio',
  },
  {
    id: 'top-4',
    badge: 'Standard',
    text: 'Precyzja wykonania i certyfikowane systemy okuć z dożywotnią gwarancją',
    url: '#about',
  },
  {
    id: 'top-5',
    badge: 'Ekspozycja',
    text: 'Odwiedź nasz salon: Galeria Bielany II, ul. Czekoladowa 20, Bielany Wrocławskie',
    url: '#contact',
  },
];
