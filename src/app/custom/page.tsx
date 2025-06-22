'use client';

import React, { useEffect, useRef, useState } from 'react';



import CustomizerSection from './components/CustomizerSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import QuoteSection from './components/QuoteSection';


const CustomPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Helps in determining active section more reliably in the middle of the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
      sectionRefs.current[section.id] = section as HTMLElement;
    });

    // Cleanup observer on unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <CustomizerSection />
        <GallerySection />
        <ProcessSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default CustomPage;