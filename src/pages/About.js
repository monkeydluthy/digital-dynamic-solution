import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutHero from '../assets/images/hero/about-hero.jpg';
import companyLogo from '../assets/images/logo-black.png';

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

const logoAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -5, transition: { duration: 0.2 } },
};

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-500 py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MEwyOCA2NmwyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white"
                variants={fadeInUp}
              >
                About Us
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-white max-w-2xl mx-auto lg:mx-0"
                variants={fadeInUp}
              >
                Digital Dynamic Solution is a full-service digital agency
                helping businesses thrive in the digital world.
              </motion.p>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 flex justify-center"
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={logoAnimation}
            >
              <div className="relative group w-full max-w-md overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 opacity-20"></div>
                <img
                  src={aboutHero}
                  alt="Our Team at Work"
                  className="w-full h-auto relative z-10 transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 bg-gradient-to-b from-white to-primary-50">
        {/* Combined Story & Mission Section */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-primary-100 mb-8 md:mb-16 hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-6 text-center">
            Our Story & Mission
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-primary-700 leading-relaxed">
              Founded in Tampa, Florida, Digital Dynamic Solution has been
              helping businesses transform their digital presence since 2020. We
              combine creativity, technical expertise, and strategic thinking to
              deliver exceptional results for our clients.
            </p>
            <p className="text-lg text-primary-700 leading-relaxed">
              Our journey began with a simple vision: to help businesses thrive
              in the digital age by providing innovative, tailored solutions
              that drive real results. Today, we're proud to have helped
              numerous businesses across various industries establish strong
              online presences and achieve their digital goals.
            </p>
            <div className="border-t border-primary-100 pt-6 mt-8">
              <p className="text-lg text-primary-700 leading-relaxed font-semibold mb-4">
                Our mission is to empower businesses with innovative digital
                solutions that drive growth and success in the modern digital
                landscape.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                We strive to be more than just a service provider – we aim to be
                a trusted partner in your digital journey, helping you navigate
                the ever-evolving digital landscape with confidence and achieve
                sustainable, long-term success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Values Box */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 border border-primary-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            variants={cardAnimation}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">
              Our Values
            </h3>
            <motion.ul
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  title: 'Innovation',
                  description:
                    'Constantly exploring new technologies and approaches to deliver cutting-edge solutions that keep you ahead of the competition.',
                },
                {
                  title: 'Excellence',
                  description:
                    'Committed to delivering the highest quality in everything we do, from design and development to customer service.',
                },
                {
                  title: 'Integrity',
                  description:
                    "Building trust through transparent communication, honest practices, and always putting our clients' interests first.",
                },
                {
                  title: 'Client Success',
                  description:
                    'Measuring our success by the achievements and growth of our clients, ensuring your goals become our goals.',
                },
              ].map((value) => (
                <motion.li
                  key={value.title}
                  className="flex items-start space-x-3 p-2 group"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-secondary-500 mt-1 transform group-hover:scale-125 transition-transform duration-300">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold block mb-1 text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                      {value.title}
                    </span>
                    <span className="text-sm text-primary-700">
                      {value.description}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Why Choose Us Box */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 border border-primary-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            variants={cardAnimation}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">
              Why Choose Us
            </h3>
            <motion.ul
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  title: 'Expert Team',
                  description:
                    'Our skilled professionals bring years of experience in web development, design, and digital marketing to every project.',
                },
                {
                  title: 'Proven Results',
                  description:
                    'Track record of delivering successful projects that exceed client expectations and drive measurable business growth.',
                },
                {
                  title: 'Custom Solutions',
                  description:
                    'Tailored approaches that address your unique business challenges and goals, never using one-size-fits-all solutions.',
                },
                {
                  title: 'Dedicated Support',
                  description:
                    'Ongoing assistance and maintenance to ensure your digital presence continues to evolve and perform optimally.',
                },
              ].map((reason) => (
                <motion.li
                  key={reason.title}
                  className="flex items-start space-x-3 p-2 group"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-accent-500 mt-1 transform group-hover:scale-125 transition-transform duration-300">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold block mb-1 text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                      {reason.title}
                    </span>
                    <span className="text-sm text-primary-700">
                      {reason.description}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white mb-8">
              Let's work together to create innovative solutions that drive your
              business forward.
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

export default About;
