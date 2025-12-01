import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function DropdownExample() {
  useEffect(() => {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const dropdown = btn.nextElementSibling;
        dropdown.classList.toggle('show');
        btn.classList.toggle('active');
      });
    });

    // Cleanup
    return () => {
      dropdownBtns.forEach((btn) => {
        btn.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <Link
          to="/interactive-components"
          className="inline-block mb-8 text-orange-600 hover:text-orange-500"
        >
          ← Back to Interactive Components
        </Link>

        <div className="dropdown-container max-w-2xl mx-auto">
          <button className="dropdown-btn">
            Services
            <span className="arrow">▼</span>
          </button>
          <div className="dropdown-content">
            <a href="#web">Web Development</a>
            <a href="#app">App Development</a>
            <a href="#design">UI/UX Design</a>
            <a href="#marketing">Digital Marketing</a>
          </div>

          <button className="dropdown-btn">
            Products
            <span className="arrow">▼</span>
          </button>
          <div className="dropdown-content">
            <a href="#software">Software Solutions</a>
            <a href="#templates">Website Templates</a>
            <a href="#plugins">Plugins</a>
          </div>

          <button className="dropdown-btn">
            Resources
            <span className="arrow">▼</span>
          </button>
          <div className="dropdown-content">
            <a href="#blog">Blog</a>
            <a href="#tutorials">Tutorials</a>
            <a href="#docs">Documentation</a>
          </div>
        </div>

        <style>{`
          .dropdown-container {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 1rem;
          }

          .dropdown-btn {
            width: 100%;
            padding: 1rem;
            text-align: left;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: none;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.3s;
          }

          .dropdown-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .dropdown-btn.active {
            background: #f97316;
          }

          .dropdown-btn .arrow {
            transition: transform 0.3s;
          }

          .dropdown-btn.active .arrow {
            transform: rotate(180deg);
          }

          .dropdown-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 0.5rem;
            margin-bottom: 1rem;
          }

          .dropdown-content.show {
            max-height: 500px;
          }

          .dropdown-content a {
            display: block;
            padding: 1rem;
            color: white;
            text-decoration: none;
            transition: background 0.3s;
          }

          .dropdown-content a:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </div>
    </div>
  );
}

export default DropdownExample;
