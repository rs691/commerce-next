// ====== components/QuoteSection.tsx ======
import React from 'react';

const QuoteSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted! (This is a demo. In a real app, this would send data to a backend.)');
    // In a real application, you would handle form submission here,
    // e.g., send data to an API endpoint.
  };

  return (
    <section id="quote" className="py-20 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Start a Custom Project</h2>
        <p className="section-subtitle">Have a unique idea that goes beyond our standard options? We love a creative challenge. Fill out the form below with your project details, and our team will get back to you with a personalized quote.</p>
        <form className="max-w-2xl mx-auto text-left space-y-6" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-bold mb-1">Full Name</label>
              <input type="text" id="name" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-muted-terracotta" required />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-1">Email Address</label>
              <input type="email" id="email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-muted-terracotta" required />
            </div>
          </div>
          <div>
            <label htmlFor="project-description" className="block font-bold mb-1">Project Description</label>
            <textarea id="project-description" rows={6} className="w-full p-3 border rounded-md focus:ring-2 focus:ring-muted-terracotta" placeholder="Describe your vision, including size, materials, text, and any other important details..."></textarea>
          </div>
          <div>
            <label htmlFor="file-upload" className="block font-bold mb-1">Attach Files (Sketches, Logos, etc.)</label>
            <input type="file" id="file-upload" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rich-brown/10 file:text-rich-brown hover:file:bg-rich-brown/20" />
          </div>
          <div className="text-center pt-4">
            <button type="submit" className="btn-primary text-lg">Submit Quote Request</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteSection;