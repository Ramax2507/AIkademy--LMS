// Footer.jsx placeholder
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold mb-2">GenAI Learn</h2>
          <p className="text-sm text-gray-400">
            Empowering learners with the fundamentals of Generative AI.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/courses" className="hover:underline">Courses</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8">
        &copy; {new Date().getFullYear()} GenAI Learn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
