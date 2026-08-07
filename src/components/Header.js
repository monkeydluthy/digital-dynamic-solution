import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/brand/dds-monogram-color-on-black.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-ink text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img
              src={logo}
              alt="Digital Dynamic Solution"
              className="h-12 w-12 object-contain"
            />
            <span className="sr-only">Digital Dynamic Solution</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="hover:text-primary-400 transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-primary-400 transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary-400 transition-colors">
              Contact
            </Link>
            <a href="tel:+18139970321" className="btn-teal !px-5 !py-2 text-sm">
              813.997.0321
            </a>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`${
            isOpen ? 'fixed' : 'hidden'
          } md:hidden inset-0 bg-ink bg-opacity-95 z-40 h-screen w-screen top-0 left-0 flex flex-col items-center justify-center`}
          style={{ marginTop: '0' }}
        >
          <div className="flex flex-col items-center space-y-6">
            <Link
              to="/services"
              className="text-2xl font-semibold text-white hover:text-primary-400 bg-primary-900/40 px-8 py-3 rounded-lg w-64 text-center transition-all duration-300 hover:bg-primary-800/50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-2xl font-semibold text-white hover:text-primary-400 bg-primary-900/40 px-8 py-3 rounded-lg w-64 text-center transition-all duration-300 hover:bg-primary-800/50"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-2xl font-semibold text-white hover:text-primary-400 bg-primary-900/40 px-8 py-3 rounded-lg w-64 text-center transition-all duration-300 hover:bg-primary-800/50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-2xl font-semibold text-white hover:text-primary-400 bg-primary-900/40 px-8 py-3 rounded-lg w-64 text-center transition-all duration-300 hover:bg-primary-800/50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+18139970321"
              className="btn-teal w-64 text-center"
              onClick={() => setIsOpen(false)}
            >
              Call 813.997.0321
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
