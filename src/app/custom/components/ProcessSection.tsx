'use client';
// ====== components/ProcessSection.tsx ======
import React, { useEffect, useRef } from 'react';
import { ScrollText, TreePine, Cog, Paintbrush } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    if (!revealElements) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Optional: hide when scrolled out
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="process" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto text-center">
        <h2 className="section-title">Our Craftsmanship Journey</h2>
        <p className="section-subtitle">From a simple idea to a finished masterpiece, we pour passion and precision into every step. Discover the journey your project takes, a blend of modern technology and timeless artisanal skill that ensures unparalleled quality.</p>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-muted-terracotta/50 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            <div className="reveal grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left md:text-right md:pr-12">
                <h3 className="font-serif text-3xl font-bold text-rich-brown">1. Consultation & Design</h3>
                <p className="mt-2 text-muted-brown">It all starts with your vision. We collaborate with you to refine your ideas, create digital proofs, and ensure every detail is perfect before a single piece of wood is touched.</p>
              </div>
              <div className="flex items-center justify-center text-primary bg-white w-24 h-24 rounded-full shadow-lg mx-auto md:mx-0">
                <ScrollText size={48} />
              </div>
            </div>
            
            <div className="reveal grid md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center justify-center text-primary bg-white w-24 h-24 rounded-full shadow-lg mx-auto md:mx-0 md:order-last">
                <TreePine size={48} />
              </div>
              <div className="text-left md:pl-12">
                <h3 className="font-serif text-3xl font-bold text-rich-brown">2. Material Selection</h3>
                <p className="mt-2 text-muted-brown">We source only the finest, sustainably-harvested hardwoods. You choose the perfect species—like rich walnut or classic oak—that best suits your designs aesthetic and durability needs.</p>
              </div>
            </div>

            <div className="reveal grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left md:text-right md:pr-12">
                <h3 className="font-serif text-3xl font-bold text-rich-brown">3. Precision Cutting</h3>
                <p className="mt-2 text-muted-brown">Using state-of-the-art CNC technology, we execute the design with flawless precision. Every curve, line, and letter is carved exactly as planned, ensuring a clean and professional result.</p>
              </div>
              <div className="flex items-center justify-center text-primary bg-white w-24 h-24 rounded-full shadow-lg mx-auto md:mx-0">
                <Cog size={48} />
              </div>
            </div>

            <div className="reveal grid md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center justify-center text-primary bg-white w-24 h-24 rounded-full shadow-lg mx-auto md:mx-0 md:order-last">
                <Paintbrush size={48} />
              </div>
              <div className="text-left md:pl-12">
                <h3 className="font-serif text-3xl font-bold text-rich-brown">4. Hand Finishing</h3>
                <p className="mt-2 text-muted-brown">This is where the magic happens. Each piece is meticulously sanded, stained, and sealed by hand. This artisanal touch enhances the natural beauty of the wood and ensures a durable, lasting finish.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
