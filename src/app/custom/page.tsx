'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CustomizerSection from './components/CustomizerSection';
import GallerySection from './components/GallerySection';
import ProcessSection from './components/ProcessSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import './components/styles.css';

const CustomPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const sections = ['hero', 'customizer', 'gallery', 'process', 'quote'].map(id => document.getElementById(id));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Fire when section is in the middle of the viewport
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <CustomizerSection />
        <GallerySection />
        <ProcessSection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
};

export default CustomPage;
