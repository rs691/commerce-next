import { Package2, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">Steffen's Sign & Design</span>
          </Link>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Steffen's Sign & Design. All rights reserved.
            </p>
            <Link href="https://www.facebook.com/SteffensSignAndDesign" target="_blank" rel="noopener noreferrer" aria-label="Facebook page">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
