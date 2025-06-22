import { Package2, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link href="/" className="flex items-center space-x-2 text-foreground">
              <Package2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">Steffen's Sign & Design</span>
            </Link>
            <p className="text-sm">
              Handcrafted wooden signs and decor from Plattsmouth, NE.
            </p>
          </div>

          {/* Quick Links */}
           <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-headline font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
                <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-headline font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:Steffens028@gmail.com" className="hover:text-primary transition-colors break-all">Steffens028@gmail.com</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:4026762352" className="hover:text-primary transition-colors">(402) 676-2352</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Plattsmouth, NE</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center sm:items-start">
             <h3 className="font-headline font-semibold text-foreground mb-4">Follow Us</h3>
             <div className="flex items-center justify-center sm:justify-start gap-4">
                <Link href="https://www.facebook.com/SteffensSignAndDesign" target="_blank" rel="noopener noreferrer" aria-label="Facebook page" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://www.instagram.com/steffenssignanddesign" target="_blank" rel="noopener noreferrer" aria-label="Instagram page" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                </Link>
                <a href="https://www.etsy.com/shop/steffenssigndesign" target="_blank" rel="noopener noreferrer" aria-label="Etsy shop" className="text-sm font-medium hover:text-primary transition-colors">
                    Etsy
                </a>
                <a href="https://www.tiktok.com/@steffenssignanddesign" target="_blank" rel="noopener noreferrer" aria-label="TikTok page" className="text-sm font-medium hover:text-primary transition-colors">
                    TikTok
                </a>
             </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Steffen's Sign & Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
