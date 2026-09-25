export interface TopBarItem {
  id: string | number;
  text: string;
  url: string;
  badge?: string;
  icon?: string;
  highlight?: boolean;
}

export interface TopBarProps {
  items: TopBarItem[];
  speedSeconds?: number; // Czas trwania jednego pełnego cyklu animacji marquee
  storageKey?: string;   // Klucz sesji w sessionStorage
}
