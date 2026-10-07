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
    name: 'Anna Nowak',
    role: 'Główny Projektant',
    description: 'Tworzy fotorealistyczne wizualizacje 3D. Przekłada marzenia klientów na techniczne rysunki i dobiera najwyższej jakości materiały.',
    email: 'anna.n@werkmebel.pl',
    phone: '+48 600 111 333',
    image: '/img/team/designer.svg'
  },
  {
    id: 'team-2',
    name: 'Michał Kamiński',
    role: 'Technolog ds. okuć',
    description: 'Ekspert od zawiasów, podnośników i systemów przesuwnych. Testuje wytrzymałość i płynność każdego mechanizmu, gwarantując niezawodność na lata.',
    email: 'michal.k@werkmebel.pl',
    phone: '+48 600 111 888',
    image: '/img/team/technician.svg'
  },
  {
    id: 'team-3',
    name: 'Tomasz Wójcik',
    role: 'Operator CNC',
    description: 'Programista maszyn stolarskich. Rozumie język maszyn lepiej niż ktokolwiek inny, optymalizując rozkrój i precyzyjne frezowania.',
    email: 'tomasz.w@werkmebel.pl',
    phone: '+48 600 111 777',
    image: '/img/team/cnc.svg'
  },
  {
    id: 'team-4',
    name: 'Dawid Lewandowski',
    role: 'Kierowca / Logistyk',
    description: 'Odpowiada za bezpieczny załadunek i transport gotowych mebli. Dzięki niemu elementy docierają na miejsce na czas i bez najmniejszej rysy.',
    email: 'dawid.l@werkmebel.pl',
    phone: '+48 600 111 999',
    image: '/img/team/logistics.svg'
  },
  {
    id: 'team-5',
    name: 'Marek Dąbrowski',
    role: 'Starszy Monter',
    description: 'To on sprawia, że projekt staje się rzeczywistością w Twoim domu. Czystość pracy i milimetrowa precyzja montażu to jego wizytówka.',
    email: 'marek.d@werkmebel.pl',
    phone: '+48 600 111 555',
    image: '/img/team/installer.svg'
  }
];