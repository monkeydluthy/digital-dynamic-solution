import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import marketingAnalytics from '../assets/images/marketing-analytics.svg';
import socialEngagement from '../assets/images/social-engagement.svg';
import strategyPlanning from '../assets/images/strategy-planning.svg';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
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

function SocialMedia() {
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
              variants={staggerContainer}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                variants={fadeInUp}
              >
                Social Media Marketing Services
              </motion.h1>
              <motion.p
                className="text-xl text-white max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Build a strong social media presence and engage with your
                audience effectively through our comprehensive solutions.
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
                  src={strategyPlanning}
                  alt="Social Media Strategy"
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
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-8">
            <div className="prose max-w-none text-center">
              <h2 className="text-4xl font-bold text-primary-900 mb-6 text-center">
                Social Media Solutions
              </h2>
              <p className="text-xl text-primary-700 leading-relaxed mb-6">
                We help you build and maintain a strong social media presence
                that engages your audience and drives business growth.
              </p>
            </div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-10 border border-primary-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/5 flex items-center justify-center bg-transparent">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
                    <motion.img
                      src={socialEngagement}
                      alt="Our Services"
                      className="w-full max-w-xl mx-auto relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                <div className="lg:w-3/5 lg:pl-16">
                  <div className="lg:pl-12">
                    <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center lg:text-left pl-[1.25rem] whitespace-nowrap">
                      Our Social Media Services
                    </h3>
                    <motion.ul
                      className="space-y-6"
                      variants={staggerContainer}
                    >
                      {[
                        'Content Strategy',
                        'Community Management',
                        'Paid Advertising',
                        'Analytics & Reporting',
                      ].map((service) => (
                        <motion.li
                          key={service}
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
                            {service}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-10 border border-primary-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-secondary-400 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-2/5 flex items-center justify-center bg-transparent">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
                    <motion.img
                      src={marketingAnalytics}
                      alt="Platforms"
                      className="w-full max-w-xl mx-auto relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center lg:text-left">
                    Platforms We Cover
                  </h3>
                  <motion.ul className="space-y-6" variants={staggerContainer}>
                    {[
                      'Facebook & Instagram',
                      'LinkedIn',
                      'Twitter',
                      'TikTok',
                    ].map((platform) => (
                      <motion.li
                        key={platform}
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
                          {platform}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Boost Your Social Media Presence?
            </h2>
            <p className="text-2xl text-white mb-8 max-w-2xl mx-auto">
              Let's create a social media strategy that connects with your
              audience and drives engagement.
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

export default SocialMedia;
