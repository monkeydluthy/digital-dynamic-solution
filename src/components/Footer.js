import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Digital Dynamic Solution</h3>
            <p className="text-gray-400 mb-4">
              Creating innovative digital solutions for modern businesses.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/digitaldynamicsolution/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/Monkey_D_Luthy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-luth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/monkeyd_luthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UClGRGq5lO-3DQuhQsd4us8g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.pinterest.com/MonkeyD_Luthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href="https://www.tumblr.com/blog/monkeydluthy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-tumblr"></i>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/web-design"
                  className="text-gray-400 hover:text-white"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/seo" className="text-gray-400 hover:text-white">
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/social-media"
                  className="text-gray-400 hover:text-white"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link
                  to="/content-creation"
                  className="text-gray-400 hover:text-white"
                >
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tampa, FL</li>
              <li>luthdigitalconsult@gmail.com</li>
              <li>(813) 833-2988</li>
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
