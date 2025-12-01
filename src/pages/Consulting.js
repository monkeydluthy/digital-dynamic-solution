import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import consultingIllustration from '../assets/images/illustrations/consulting.svg';
import contentCreation from '../assets/images/illustrations/content-creation.svg';

// Animation variants
const zigzagPath = {
  animate: {
    x: [0, 20, -20, 20, 0],
    y: [0, -20, 20, -20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const glowEffect = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(66, 153, 225, 0)',
      '0 0 20px 10px rgba(66, 153, 225, 0.3)',
      '0 0 0 0 rgba(66, 153, 225, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const slideInFromTop = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, type: 'spring' } },
};

const cascadeStagger = {
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const flipIn = {
  initial: { rotateX: 90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1, transition: { duration: 0.8 } },
};

function Consulting() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-500 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MEwyOCA2NmwyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              className="lg:w-1/2 text-center mb-8 lg:mb-0"
              initial="initial"
              animate="animate"
              variants={cascadeStagger}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                variants={flipIn}
              >
                Business Consulting Services
              </motion.h1>
              <motion.p
                className="text-xl text-white max-w-3xl mx-auto"
                variants={slideInFromTop}
              >
                Transform your digital strategy and accelerate business growth
                with our expert consulting services.
              </motion.p>
            </motion.div>
            <motion.div
              className="lg:w-1/2 hidden lg:flex justify-center mb-10 lg:mb-0"
              variants={zigzagPath}
              animate="animate"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                <motion.img
                  src={consultingIllustration}
                  alt="Business Consulting"
                  className="w-full max-w-xl relative z-10 filter contrast-125 brightness-110 saturate-150"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="prose max-w-none text-center"
              variants={flipIn}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Strategic Business Consulting
              </h2>
              <p className="text-lg text-primary-700 leading-relaxed mb-6">
                Our expert consultants help you navigate the digital landscape,
                optimize operations, and achieve sustainable growth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-primary-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={glowEffect}
              animate="animate"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">
                    Our Services
                  </h3>
                  <motion.ul
                    className="space-y-4 text-primary-700"
                    variants={cascadeStagger}
                  >
                    {[
                      'Digital Strategy Development',
                      'Business Process Optimization',
                      'Market Analysis & Research',
                      'Growth Planning',
                      'Technology Integration',
                      'Performance Metrics',
                    ].map((service, index) => (
                      <motion.li
                        key={service}
                        className="flex items-center space-x-3 group"
                        variants={slideInFromTop}
                        whileHover={{ x: 10 }}
                      >
                        <span className="text-accent-500 transform group-hover:scale-125 transition-transform duration-300">
                          ✓
                        </span>
                        <span className="group-hover:text-primary-900 transition-colors duration-300">
                          {service}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
                    <motion.div
                      className="flex items-center justify-center relative z-10"
                      variants={zigzagPath}
                      animate="animate"
                    >
                      <motion.img
                        src={contentCreation}
                        alt="Consulting Services"
                        className="w-full max-w-md"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={cascadeStagger}
          >
            {[
              {
                title: 'Expert Guidance',
                description: 'Strategic advice from industry professionals',
                gradient: 'from-primary-400 to-accent-400',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored strategies for your unique needs',
                gradient: 'from-accent-400 to-secondary-400',
              },
              {
                title: 'Data-Driven Insights',
                description: 'Analytics-based decision making',
                gradient: 'from-secondary-400 to-primary-400',
              },
              {
                title: 'Implementation Support',
                description: 'Hands-on assistance with execution',
                gradient: 'from-primary-400 to-secondary-400',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl shadow-lg p-8 border border-primary-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative group"
                variants={flipIn}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                ></div>
                <h3 className="text-xl font-bold text-primary-900 mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-primary-700 relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-white mb-8 max-w-2xl mx-auto">
              Let's develop a strategy that takes your business to the next
              level.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;
