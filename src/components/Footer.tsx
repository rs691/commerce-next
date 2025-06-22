import { Package2, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-2 text-foreground">
              <Package2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">Steffen's Sign & Design</span>
            </Link>
            <p className="text-sm text-left">
              Handcrafted wooden signs and decor from Plattsmouth, NE.
            </p>
          </div>

          {/* Quick Links */}
           <div className="flex flex-col items-start">
            <h3 className="font-headline font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-left">
                <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
                <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h3 className="font-headline font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-start gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:Steffens028@gmail.com" className="hover:text-primary transition-colors break-all">Steffens028@gmail.com</a>
              </li>
              <li className="flex items-center justify-start gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:4026762352" className="hover:text-primary transition-colors">(402) 676-2352</a>
              </li>
              <li className="flex items-center justify-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Plattsmouth, NE</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start">
             <h3 className="font-headline font-semibold text-foreground mb-4">Follow Us</h3>
             <div className="flex items-center justify-start gap-4">
                <a href="https://www.facebook.com/SteffensSignAndDesign" target="_blank" rel="noopener noreferrer" aria-label="Facebook page" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/steffenssignanddesign" target="_blank" rel="noopener noreferrer" aria-label="Instagram page" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.etsy.com/shop/steffenssigndesign" target="_blank" rel="noopener noreferrer" aria-label="Etsy shop" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" role="img">
                    <path d="M10.33,13.29V8.22h3.29c0.91,0,1.52,0.22,1.83,0.65s0.46,1.07,0.46,1.91c0,0.84-0.15,1.48-0.46,1.91s-0.92,0.65-1.83,0.65H10.33z M7,20v-6.71h6.61c1.55,0,2.72-0.29,3.5-0.88s1.17-1.48,1.17-2.67c0-1.19-0.39-2.11-1.17-2.77s-1.95-1-3.5-1H7V4H20v2.44H7v3.5h5.81c0.55,0,1,0.04,1.34,0.12s0.63,0.22,0.88,0.4s0.44,0.44,0.59,0.76s0.22,0.71,0.22,1.16c0,0.45-0.07,0.83-0.22,1.16s-0.34,0.59-0.59,0.76s-0.54,0.32-0.88,0.4s-0.79,0.12-1.34,0.12H7v4.29H20V20H7z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@steffenssignanddesign" target="_blank" rel="noopener noreferrer" aria-label="TikTok page" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" role="img">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-2.29-2.65-2.85-6.02-1.5-8.96.96-2.16 2.84-3.57 5.09-4.08 2.03-.47 4.12.21 5.74 1.58.01 2.44-.01 4.88.02 7.32.01 1.25-.5 2.33-1.38 3.12-1.53 1.4-3.6 1.76-5.46.94-1.25-.56-2.19-1.68-2.62-3-.01-.05-.01-.1-.02-.15-.22-1.22.42-2.58 1.6-3.17.9-.45 1.9-.3 2.7.41.43.36.71.84.95 1.34.02.05.02.1.03.15.23 1.13-1.06 2.12-2.22 1.52-.6-.31-1.02-.8-1.25-1.38-.17-.4-.2-.83-.16-1.26.04-.44.16-.86.36-1.25.19-.38.46-.72.78-1.01.81-.74 1.84-1.07 2.89-.95 1.85.21 3.43 1.3 4.32 2.72.13.21.24.43.33.66.01 2.92.01 5.83-.02 8.75-.05 1.1-.42 2.18-1.08 3.08-1.02 1.4-2.56 2.24-4.25 2.21-1.9-.03-3.6-1.03-4.6-2.62-.76-1.2-.95-2.58-.93-3.96.01-1.21.01-2.42.01-3.63h-4.03c.14-4.61 3.53-8.3 8.06-8.31z"/>
                  </svg>
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
