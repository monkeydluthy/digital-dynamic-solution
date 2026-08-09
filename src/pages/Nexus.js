import React from 'react';
import { Link } from 'react-router-dom';
import nexusLogo from '../assets/images/brand/dynamic-nexus-on-black.png';

function Nexus() {
  return (
    <div className="min-h-screen">
      <div className="bg-ink py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="container mx-auto px-4 relative max-w-3xl text-center">
          <img
            src={nexusLogo}
            alt="Dynamic Nexus"
            className="mx-auto max-h-28 mb-8 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dynamic Nexus
          </h1>
          <p className="text-primary-400 text-lg md:text-xl font-medium mb-8 leading-relaxed">
            Our proprietary multi-client marketing-intelligence platform.
          </p>
          <p className="text-white/80 mb-8">
            Full product page coming in the next build block. In the meantime,
            ask about Nexus when we talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+18139970321" className="btn-teal">
              Call or text 813.997.0321
            </a>
            <Link to="/portfolio" className="btn-teal-outline">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nexus;
