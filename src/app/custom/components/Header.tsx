'use client';
// ====== components/Header.tsx ======
import Link from 'next/link';
import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Customizer', id: 'customizer' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Our Process', id: 'process' },
    { name: 'Get a Quote', id: 'quote' },
  ];

  return (
    <header id="header" className="bg-warm-off-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="font-serif text-3xl font-bold text-rich-brown">
            Steffens
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <a href="#quote" className="hidden md:block btn-primary">Start Your Project</a>
          <button
            id="mobile-menu-button"
            className="md:hidden text-2xl text-rich-brown"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block py-2 text-center nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;