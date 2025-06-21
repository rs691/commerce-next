import Image from 'next/image';
import { getProductById, getProducts } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  if (!product) {
    return {
      title: 'Product not found',
    }
  }
  return {
    title: `${product.title} | CommerceNext`,
    description: product.description,
  }
}


export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="grid gap-4">
          <div className="aspect-square overflow-hidden rounded-lg border shadow-sm">
             <Image
                src={product.images[0].src}
                alt={product.images[0].altText || product.title}
                width={800}
                height={800}
                className="object-cover w-full h-full"
                priority
                {...(product.images[0]['data-ai-hint'] && { 'data-ai-hint': product.images[0]['data-ai-hint'] })}
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(0, 4).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-md border hover:border-primary transition cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.altText || `${product.title} thumbnail ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    {...(image['data-ai-hint'] && { 'data-ai-hint': image['data-ai-hint'] })}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6 pt-4">
          <div>
            <Badge variant="outline">In Stock</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mt-2 font-headline">{product.title}</h1>
            <p className="text-2xl lg:text-3xl text-foreground mt-3">{formatPrice(product.price)}</p>
          </div>
          <Separator />
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
          <div className="flex items-center gap-2">
             <CheckCircle className="h-5 w-5 text-green-600" />
             <span className="text-sm text-muted-foreground">Free shipping & returns</span>
          </div>
          <div className="mt-4">
            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
