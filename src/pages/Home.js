import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import webDesignImg from '../assets/images/web-design.png';
import marketingImg from '../assets/images/internet-marketing-1.png';
import consultingImg from '../assets/images/consulting.png';
import companyLogo from '../assets/images/logo-black.png';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-500 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MEwyOCA2NmwyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
                Transform Your Digital Presence
              </h1>
              <p
                className="text-xl text-white mb-8 mx-auto max-w-2xl animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                Professional Web Design, Development, and Digital Marketing
                Solutions based in Tampa, Florida. We help businesses grow their
                online presence and achieve their digital goals.
              </p>
              <div
                className="flex flex-wrap gap-4 justify-center animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                <Link
                  to="/portfolio"
                  className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold transform hover:scale-105"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="inline-block bg-secondary-600 text-white px-8 py-3 rounded-lg hover:bg-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold transform hover:scale-105 border-2 border-white/20"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10 flex justify-center mb-10 lg:mb-0">
              <div className="relative group w-full max-w-md bg-white bg-opacity-95 rounded-2xl p-8">
                <div className="absolute inset-0 bg-white rounded-2xl opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src={companyLogo}
                  alt="Digital Dynamic Solution"
                  className="w-4/5 md:w-full max-w-md mx-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-900 animate-fade-in-up">
            Our Core Services
          </h2>
          <p
            className="text-xl text-center text-primary-700 mb-12 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Elevate your business with our comprehensive digital solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 text-center group animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 group-hover:opacity-30 blur-lg"></div>
                <img
                  src={webDesignImg}
                  alt="Website Design"
                  className="mx-auto h-32 w-auto object-contain relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">
                Website Design
              </h3>
              <p className="text-primary-700 mb-6">
                Our website design process focuses on developing a website that
                builds your brand and audience.
              </p>
              <Link
                to="/web-design"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg w-full text-center transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 text-center group animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-secondary-400 rounded-full opacity-20 group-hover:opacity-30 blur-lg"></div>
                <img
                  src={marketingImg}
                  alt="Internet Marketing"
                  className="mx-auto h-32 w-auto object-contain relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">
                Internet Marketing
              </h3>
              <p className="text-primary-700 mb-6">
                Customized digital marketing plans with the goal of driving high
                converting traffic to your website.
              </p>
              <Link
                to="/internet-marketing"
                className="inline-block bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-md hover:shadow-lg w-full text-center transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 text-center group animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full opacity-20 group-hover:opacity-30 blur-lg"></div>
                <img
                  src={consultingImg}
                  alt="Consulting Services"
                  className="mx-auto h-32 w-auto object-contain relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">
                Consulting Services
              </h3>
              <p className="text-primary-700 mb-6">
                Maximize your digital business strategy for revenue generation
                and improved marketing tactics.
              </p>
              <Link
                to="/consulting"
                className="inline-block bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-all duration-300 shadow-md hover:shadow-lg w-full text-center transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-accent-500 via-primary-600 to-secondary-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MEwyOCA2NmwyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Start Your Digital Journey?
          </h2>
          <p
            className="text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Let's work together to create a powerful online presence that drives
            results.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
