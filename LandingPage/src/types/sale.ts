export interface SaleItem {
  id: string;
  title: string;
  category: 'Kuchnie' | 'Szafy i garderoby' | 'Stoły i komody' | 'Łazienkowe';
  description: string;
  dimensions: string;
  material: string;
  oldPrice: number;
  newPrice: number;
  image: string;
  isExhibition: boolean;
  isLastPiece: boolean;
}