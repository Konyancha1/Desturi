import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white p-3 border-t-2 font-sans">
      <div className="container mx-auto px-4 lg:px-24 flex justify-between items-center">
        <img src={logo} alt="Desturi Logo" className="h-auto md:w-36 w-24" />
        <p className="text-sm">&copy; 2024 Desturi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
