export interface ProductImage {
  src: string;
  altText: string | null;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
}
