import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/brand/dds-monogram-color-on-dark.png';

function Footer() {
  return (
    <footer className="bg-ink text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
              <img
                src={logo}
                alt="Digital Dynamic Solution"
                className="h-12 w-12 object-contain"
              />
              <span className="text-lg font-bold leading-tight">
                Digital Dynamic
                <br />
                Solution
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Creating innovative digital solutions for modern businesses.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/digitaldynamicsolution/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/Monkey_D_Luthy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="X"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-luth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/monkeyd_luthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UClGRGq5lO-3DQuhQsd4us8g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.pinterest.com/MonkeyD_Luthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href="https://www.tumblr.com/blog/monkeydluthy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Tumblr"
              >
                <i className="fab fa-tumblr"></i>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-primary-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/web-design" className="text-gray-400 hover:text-primary-400">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/seo" className="text-gray-400 hover:text-primary-400">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/social-media" className="text-gray-400 hover:text-primary-400">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/content-creation" className="text-gray-400 hover:text-primary-400">
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tampa, FL</li>
              <li>
                <a
                  href="mailto:luthdigitalconsult@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  luthdigitalconsult@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18139970321"
                  className="hover:text-primary-400 transition-colors font-medium text-white"
                >
                  813.997.0321
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} Digital Dynamic Solution |
            Anthony Luth | Freelance Website Developer & Digital Marketing
            Consultant
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
