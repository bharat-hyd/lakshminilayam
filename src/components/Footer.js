import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0 w-1/3">
          <a href='/'>
            <img src={logo} className='w-1/2' />
          </a>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400">© {currentYear} Lakshmi Nilayam. All rights reserved.</p>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-center">
            <p className="text-gray-400 mb-4">Connect with us on social media</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.facebook.com/gunturlakshminilayam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaFacebookF size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/lakshmi_nilayam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href="https://x.com/Lakshmi11963341" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/lakshmi-nilayam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://www.youtube.com/@Lakshmi-Nilayam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition-colors"
            >
              <FaYoutube size={24} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
