import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 p-4 text-center text-gray-600 mt-auto">
      <p>© {currentYear} WebBuilder.</p>
    </footer>
  );
};

export default Footer;
