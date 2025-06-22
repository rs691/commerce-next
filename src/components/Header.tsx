import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Package2, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { href: '/events', label: 'Events' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-7xl mx-auto px-4">
        {/* Brand */}
        <div className="mr-4 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block font-headline">Steffen's Sign & Design</span>
            </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className="font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                {link.label}
                </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium p-4">
                  <Link href="/" className="flex items-center gap-2 font-semibold mb-4">
                      <Package2 className="h-6 w-6 text-primary" />
                      <span>Steffen's Sign & Design</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
