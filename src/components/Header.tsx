import { Button } from '@/components/ui/button';
import { Package2, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-7xl mx-auto px-4">
        <div className="mr-4 md:mr-6">
            <Link href="/" className="flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block font-headline">Steffen's Sign & Design</span>
            </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex gap-4">
              {/* Future navigation links can go here */}
              <Link href="/events" className="text-md font-medium text-muted-foreground hover:text-foreground">Events</Link>
              <Link href="/products" className="text-md font-medium text-muted-foreground hover:text-foreground">Products</Link>
              <Link href="/about" className="text-md font-medium text-muted-foreground hover:text-foreground">About</Link>
          </nav>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
