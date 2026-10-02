export interface TopBarItem {
  id: string | number;
  text: string;
  textEn?: string; // Angielska wersja tekstu
  url: string;
  badge?: string;
  badgeEn?: string; // Angielska wersja etykiety
  icon?: string;
  highlight?: boolean;
}

export interface TopBarProps {
  items: TopBarItem[];
  lang: 'pl' | 'en'; // Wymagany parametr językowy
  speedSeconds?: number; 
  storageKey?: string;   
  onScrollTo?: (id: string) => void;
  onDismissChange?: (dismissed: boolean) => void;
}