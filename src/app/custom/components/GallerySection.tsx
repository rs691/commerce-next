'use client';
// ====== components/GallerySection.tsx ======
import Image from 'next/image';
import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  src: string;
  caption: string;
  category: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, src: 'https://placehold.co/600x400/8C5A4F/FDFBF8?text=Business+Logo', caption: 'Custom Oak Business Sign', category: 'business' },
  { id: 2, src: 'https://placehold.co/600x400/B48A6E/FDFBF8?text=Welcome+Home', caption: 'Farmhouse Style Welcome Sign', category: 'home' },
  { id: 3, src: 'https://placehold.co/600x400/6D5D5D/FDFBF8?text=The+Stewarts', caption: 'Personalized Wedding Keepsake', category: 'wedding' },
  { id: 4, src: 'https://placehold.co/600x400/402E32/FDFBF8?text=Est.+2025', caption: 'Modern Home Address Plaque', category: 'home' },
  { id: 5, src: 'https://placehold.co/600x400/8C5A4F/FDFBF8?text=Cafe+Menu', caption: 'Engraved Menu Board for Cafe', category: 'business' },
  { id: 6, src: 'https://placehold.co/600x400/B48A6E/FDFBF8?text=Mr+%26+Mrs', caption: 'Walnut Wedding Chair Signs', category: 'wedding' },
];

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', caption: '' });

  const filteredGalleryData = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const openModal = (src: string, caption: string) => {
    setModalImage({ src, caption });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage({ src: '', caption: '' });
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
              onClick={() => openModal(item.src, item.caption)}
            >
              <Image src={item.src} alt={item.caption} width={600} height={400} className="w-full h-64 object-cover" />
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
            />
            <p id="modal-caption" className="text-center mt-2 font-semibold">{modalImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;