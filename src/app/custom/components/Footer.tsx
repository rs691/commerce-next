// ====== components/Footer.tsx ======
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-brown text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Steffens Sign & Design. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
