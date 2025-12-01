import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold tracking-wider hover:text-primary-100"
          >
            Digital Dynamic Solution
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-50"
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
          <div className="hidden md:flex space-x-8">
            <Link to="/services" className="hover:text-primary-100">
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-primary-100">
              Portfolio
            </Link>
            <Link to="/about" className="hover:text-primary-100">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary-100">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`${
            isOpen ? 'fixed' : 'hidden'
          } md:hidden inset-0 bg-black bg-opacity-95 z-40 h-screen w-screen top-0 left-0 flex flex-col items-center justify-center`}
          style={{ marginTop: '0' }}
        >
          <div className="flex flex-col items-center space-y-6">
            <Link
              to="/services"
              className="text-2xl font-semibold text-white hover:text-primary-100 bg-gray-800 px-8 py-3 rounded-lg w-64 text-center transition-all duration-300 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-2xl font-semibold text-white hover:text-primary-100 bg-gray-800 px-8 py-3 rounded-lg w-64 text-center transition-all duration-300 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-2xl font-semibold text-white hover:text-primary-100 bg-gray-800 px-8 py-3 rounded-lg w-64 text-center transition-all duration-300 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-2xl font-semibold text-white hover:text-primary-100 bg-gray-800 px-8 py-3 rounded-lg w-64 text-center transition-all duration-300 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
