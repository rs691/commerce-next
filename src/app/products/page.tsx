import ProductShowcase from '@/components/ProductShowcase';
import { getProducts } from '@/lib/shopify';

export default async function ProductsPage() {
  const initialProducts = await getProducts();

  return <ProductShowcase initialProducts={initialProducts} />;
}
