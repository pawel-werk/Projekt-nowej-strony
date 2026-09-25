export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading2'; text: string }
  | { type: 'heading3'; text: string }
  | { type: 'quote'; quote: string; author?: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; url: string; caption?: string };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string; // ISO lub '14 września 2026'
  category: 'Kuchnie na wymiar' | 'Materiały i okucia' | 'Trendy i architektura' | 'Poradniki';
  readingTime: string;
  content: BlogContentBlock[];
}
