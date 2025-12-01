import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import webDevelopment from '../assets/images/illustrations/web-development.svg';
import contentCreation from '../assets/images/illustrations/content-creation.svg';
import socialEngagement from '../assets/images/social-engagement.svg';
import performanceGrowth from '../assets/images/performance-growth.svg';
import strategyPlanning from '../assets/images/strategy-planning.svg';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

function WebDesign() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-500 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MEwyOCA2NmwyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              className="lg:w-1/2 text-center order-last lg:order-first mb-8 lg:mb-0"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                variants={fadeInUp}
              >
                Web Design Services
              </motion.h1>
              <motion.p
                className="text-xl text-white max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Create a stunning online presence with our professional web
                design and development solutions.
              </motion.p>
            </motion.div>
            <motion.div
              className="lg:w-1/2 hidden lg:flex justify-center mb-10 lg:mb-0"
              variants={floatAnimation}
              animate="animate"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                <motion.img
                  src={webDevelopment}
                  alt="Web Design Process"
                  className="w-full max-w-xl mx-auto relative z-10 filter contrast-125 brightness-110 saturate-150"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="prose max-w-none text-center"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-primary-900 mb-6 text-center">
                Custom Web Design Solutions
              </h2>
              <p className="text-xl text-primary-700 leading-relaxed mb-6">
                We create beautiful, functional websites that engage your
                audience and drive business growth. Our designs are tailored to
                your brand and optimized for performance.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-10 border border-primary-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={slideInLeft}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                  className="lg:w-2/5 flex items-center justify-center bg-transparent"
                  variants={floatAnimation}
                  animate="animate"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
                    <motion.img
                      src={strategyPlanning}
                      alt="Design Process"
                      className="w-full max-w-xl mx-auto relative z-10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="lg:w-3/5 lg:pl-16"
                  variants={staggerContainer}
                >
                  <div className="lg:pl-12">
                    <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center lg:text-left pl-[1.25rem] whitespace-nowrap">
                      Our Design Process
                    </h3>
                    <motion.ul
                      className="space-y-6"
                      variants={staggerContainer}
                    >
                      {[
                        'Discovery & Planning',
                        'Design & Development',
                        'Testing & Refinement',
                        'Launch & Support',
                      ].map((item, index) => (
                        <motion.li
                          key={item}
                          className="flex items-center group"
                          variants={fadeInUp}
                          whileHover={{ x: 10 }}
                        >
                          <div className="w-20 flex-shrink-0 flex justify-center">
                            <span className="text-accent-500 text-2xl transform group-hover:scale-125 transition-transform duration-300">
                              ✓
                            </span>
                          </div>
                          <span className="font-semibold text-xl text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-10 border border-primary-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={slideInRight}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <motion.div
                  className="lg:w-2/5 flex items-center justify-center bg-transparent"
                  variants={floatAnimation}
                  animate="animate"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400 rounded-xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
                    <motion.img
                      src={contentCreation}
                      alt="Web Design Services"
                      className="w-64 h-64 relative z-10"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </motion.div>
                <motion.div className="lg:w-3/5" variants={staggerContainer}>
                  <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center lg:text-left">
                    Key Features
                  </h3>
                  <motion.ul className="space-y-6" variants={staggerContainer}>
                    {[
                      'Responsive Design',
                      'SEO Optimization',
                      'Fast Loading Speed',
                      'User-Friendly Interface',
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-center group"
                        variants={fadeInUp}
                        whileHover={{ x: 10 }}
                      >
                        <div className="w-20 flex-shrink-0 flex justify-center">
                          <span className="text-secondary-500 text-2xl transform group-hover:scale-125 transition-transform duration-300">
                            ✓
                          </span>
                        </div>
                        <span className="font-semibold text-xl text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-accent-500 via-primary-600 to-secondary-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MEwyOCA2NmwyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Dream Website?
            </h2>
            <p className="text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's build a website that perfectly represents your brand and
              drives results.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WebDesign;
