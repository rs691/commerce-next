// ====== components/HeroSection.tsx ======
import Link from 'next/link';
import React from 'react';


const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="text-center py-20 md:py-32 px-6 bg-white">
      <div className="container mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-rich-brown">Your Vision, Carved in Wood.</h1>
        <p className="text-xl md:text-2xl text-muted-brown max-w-3xl mx-auto mb-8">Bespoke signs and creations, meticulously designed and crafted to bring your ideas to life. Experience the beauty of custom woodwork.</p>
        <Link href="#customizer" className="btn-primary text-lg">
          Create Your Own Sign
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;