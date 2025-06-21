export interface ProductImage {
  src: string;
  altText: string | null;
  'data-ai-hint'?: string;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
}
