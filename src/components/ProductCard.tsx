import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Link href={`/products/${product.id}`} className="group block" aria-label={`View ${product.title}`}>
      <Card className={cn("overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1", className)}>
        <CardContent className="p-0 flex flex-col flex-grow">
          <div className="aspect-square w-full overflow-hidden">
            <Image
              src={product.images[0].src}
              alt={product.images[0].altText || product.title}
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="p-4 border-t flex-grow flex flex-col justify-between">
            <h3 className="font-semibold text-base leading-snug">{product.title}</h3>
            <p className="text-muted-foreground mt-2 font-medium">{formatPrice(product.price)}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
