export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  email: string;
  phone: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Jan Kowalski',
    role: 'Mistrz Stolarstwa',
    description: 'Nadzoruje proces produkcji. Od 20 lat pracuje z drewnem i zna każdy rodzaj forniru. Odpowiada za idealne spasowanie elementów.',
    email: 'jan.k@werkmebel.pl',
    phone: '+48 600 111 222',
    image: '/img/team/carpenter.svg' // Placeholder - zamień na pobrany szkic
  },
  {
    id: 'team-2',
    name: 'Anna Nowak',
    role: 'Główny Projektant',
    description: 'Tworzy fotorealistyczne wizualizacje 3D. Przekłada marzenia klientów na techniczne rysunki i dobiera najwyższej jakości materiały.',
    email: 'anna.n@werkmebel.pl',
    phone: '+48 600 111 333',
    image: '/img/team/designer.svg'
  },
  {
    id: 'team-3',
    name: 'Piotr Wiśniewski',
    role: 'Kierownik Produkcji',
    description: 'Zarządza parkiem maszynowym CNC. Dba o to, by każda płyta była przycięta co do dziesiątych części milimetra.',
    email: 'piotr.w@werkmebel.pl',
    phone: '+48 600 111 444',
    image: '/img/team/manager.svg'
  },
  {
    id: 'team-4',
    name: 'Marek Dąbrowski',
    role: 'Starszy Monter',
    description: 'To on sprawia, że projekt staje się rzeczywistością w Twoim domu. Czystość i precyzja montażu to jego wizytówka.',
    email: 'marek.d@werkmebel.pl',
    phone: '+48 600 111 555',
    image: '/img/team/installer.svg'
  },
  {
    id: 'team-5',
    name: 'Katarzyna Lis',
    role: 'Doradca Klienta',
    description: 'Pierwszy kontakt w naszym showroomie. Przeprowadzi Cię przez proces doboru materiałów, okuć i systemów smart home.',
    email: 'katarzyna.l@werkmebel.pl',
    phone: '+48 600 111 666',
    image: '/img/team/advisor.svg'
  },
  {
    id: 'team-6',
    name: 'Tomasz Wójcik',
    role: 'Operator CNC',
    description: 'Programista maszyn stolarskich. Rozumie język maszyn lepiej niż ktokolwiek inny, optymalizując rozkrój i frezowania.',
    email: 'tomasz.w@werkmebel.pl',
    phone: '+48 600 111 777',
    image: '/img/team/cnc.svg'
  },
  {
    id: 'team-7',
    name: 'Michał Kamiński',
    role: 'Technolog ds. okuć',
    description: 'Ekspert od zawiasów, podnośników i systemów przesuwnych. Testuje wytrzymałość i płynność każdego mechanizmu.',
    email: 'michal.k@werkmebel.pl',
    phone: '+48 600 111 888',
    image: '/img/team/technician.svg'
  },
  {
    id: 'team-8',
    name: 'Dawid Lewandowski',
    role: 'Logistyka i Dostawy',
    description: 'Odpowiada za bezpieczny załadunek i transport gotowych mebli. Dzięki niemu elementy docierają na miejsce bez najmniejszej rysy.',
    email: 'dawid.l@werkmebel.pl',
    phone: '+48 600 111 999',
    image: '/img/team/logistics.svg'
  },
];