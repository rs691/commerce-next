'use client';
// ====== components/GallerySection.tsx ======
import Image from 'next/image';
import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  src: string;
  caption: string;
  category: string;
  'data-ai-hint'?: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, src: 'https://placehold.co/600x400.png', caption: 'Custom Oak Business Sign', category: 'business', 'data-ai-hint': 'business sign' },
  { id: 2, src: 'https://placehold.co/600x400.png', caption: 'Farmhouse Style Welcome Sign', category: 'home', 'data-ai-hint': 'welcome sign' },
  { id: 3, src: 'https://placehold.co/600x400.png', caption: 'Personalized Wedding Keepsake', category: 'wedding', 'data-ai-hint': 'wedding gift' },
  { id: 4, src: 'https://placehold.co/600x400.png', caption: 'Modern Home Address Plaque', category: 'home', 'data-ai-hint': 'address plaque' },
  { id: 5, src: 'https://placehold.co/600x400.png', caption: 'Engraved Menu Board for Cafe', category: 'business', 'data-ai-hint': 'cafe menu' },
  { id: 6, src: 'https://placehold.co/600x400.png', caption: 'Walnut Wedding Chair Signs', category: 'wedding', 'data-ai-hint': 'wedding decor' },
];

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', caption: '', 'data-ai-hint': '' });

  const filteredGalleryData = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const openModal = (src: string, caption: string, hint?: string) => {
    setModalImage({ src, caption, 'data-ai-hint': hint || '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage({ src: '', caption: '', 'data-ai-hint': '' });
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Project Showcase</h2>
        <p className="section-subtitle">Explore a curated collection of our past creations. Filter by category to find inspiration for your own project and see the quality and versatility of our work. Each piece tells a unique story—let us help you tell yours.</p>
        <div id="filter-container" className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === 'business' ? 'active' : ''}`}
            onClick={() => setActiveFilter('business')}
          >
            Business
          </button>
          <button
            className={`filter-btn ${activeFilter === 'home' ? 'active' : ''}`}
            onClick={() => setActiveFilter('home')}
          >
            Home & Decor
          </button>
          <button
            className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
            onClick={() => setActiveFilter('wedding')}
          >
            Weddings
          </button>
        </div>
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleryData.map(item => (
            <div
              key={item.id}
              className="card gallery-item cursor-pointer"
              onClick={() => openModal(item.src, item.caption, item['data-ai-hint'])}
            >
              <Image src={item.src} alt={item.caption} width={600} height={400} className="w-full h-64 object-cover" {...(item['data-ai-hint'] && { 'data-ai-hint': item['data-ai-hint'] })} />
              <div className="p-4">
                <p className="font-semibold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal flex" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              id="close-modal"
              className="absolute top-2 right-4 text-3xl font-bold text-gray-700 hover:text-black"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <Image
              src={modalImage.src}
              alt={modalImage.caption}
              width={800}
              height={600}
              className="w-full h-auto max-h-[80vh] object-contain rounded-md"
              {...(modalImage['data-ai-hint'] && { 'data-ai-hint': modalImage['data-ai-hint'] })}
            />
            <p id="modal-caption" className="text-center mt-2 font-semibold">{modalImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
