import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-gray-600">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/about" className="text-gray-600 hover:text-red-600">About Us</Link>
          <Link to="/contact" className="text-gray-600 hover:text-red-600">Contact</Link>
          <Link to="/privacy" className="text-gray-600 hover:text-red-600">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-600 hover:text-red-600">Terms of Service</Link>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;