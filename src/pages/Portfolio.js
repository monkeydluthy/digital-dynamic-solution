import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';

// Import portfolio images
import nrlLogo from '../assets/images/nrl-logo.PNG';
import tampaNaLogo from '../assets/images/tampa-na-logo.png';
import logoBlack from '../assets/images/logo-black.png';
import lyfestyleLogo from '../assets/images/lyfestyle-logo.png';
import anjLogo from '../assets/images/anj-logo.png';
import prophitLineLogo from '../assets/images/prophit-line.JPG';
import allStructureLogo from '../assets/images/all-structure.png';
import clipstrLogo from '../assets/images/clipstr-logo.png';
import angelsWalkingLogo from '../assets/images/angels-walking.jpg';
import portfolioHero from '../assets/images/hero/portfolio-hero.jpg';

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

const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
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

function PortfolioCard({
  title,
  image,
  link,
  description,
  tags,
  isExternal = true,
  index,
}) {
  return (
    <motion.div
      variants={cardAnimation}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-primary-100 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-400 opacity-10"></div>
          <div className="bg-black h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain p-4"
            />
          </div>
          {/* Hover overlay with description */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
            <p className="text-white text-center">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-primary-900 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 text-center font-semibold transform hover:scale-105 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Visit Site <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

function Portfolio() {
  const portfolioItems = [
    {
      title: 'Digital Resume',
      image: logoBlack,
      link: 'https://anthonyluth.com',
      description:
        'A modern, interactive digital resume showcasing professional experience and skills.',
      tags: ['React', 'Tailwind CSS', 'Responsive Design'],
      isExternal: true,
    },
    {
      title: 'ProphitLine',
      image: prophitLineLogo,
      link: 'https://prophit-line.netlify.app/',
      description:
        'A comprehensive prediction market aggregator platform that combines data from Polymarket, Kalshi, Manifold, and PredictIt. Features real-time market tracking, portfolio management, and total volume analytics across multiple prediction platforms.',
      tags: ['Prediction Markets', 'Data Aggregation', 'React'],
      isExternal: true,
    },
    {
      title: 'Lyfestyle Tattoos',
      image: lyfestyleLogo,
      link: 'https://lyfestyletattoos.com',
      description:
        'Custom website for a professional tattoo studio featuring artist portfolios and booking system.',
      tags: ['Web Design', 'E-commerce', 'Portfolio'],
      isExternal: true,
    },
    {
      title: 'NRL Hair',
      image: nrlLogo,
      link: 'https://nrlhair.com',
      description:
        'Elegant website for a high-end hair salon with online booking capabilities.',
      tags: ['Branding', 'Web Design', 'Booking System'],
      isExternal: true,
    },
    {
      title: 'ANJ Sports Cards',
      image: anjLogo,
      link: 'https://anjsportscards.com',
      description:
        'Modern e-commerce platform for sports card collectors featuring a sleek design and seamless shopping experience.',
      tags: ['E-commerce', 'React', 'Netlify'],
      isExternal: true,
    },
    {
      title: 'Tampa NA',
      image: tampaNaLogo,
      link: 'https://tampa-na.org',
      description:
        'Community website with event management and resource directory.',
      tags: ['Web Design', 'Community', 'Events'],
      isExternal: true,
    },
    {
      title: 'All Structure Maintenance',
      image: allStructureLogo,
      link: 'https://allstructuremaintenance.com',
      description:
        'Professional website for a comprehensive structure maintenance company showcasing services, expertise, and client testimonials.',
      tags: ['Web Design', 'Business', 'Maintenance Services'],
      isExternal: true,
    },
    {
      title: 'Clipstr',
      image: clipstrLogo,
      link: 'https://clipstr.fun/',
      description:
        'An engaging and fun platform designed for entertainment and user interaction with a modern, vibrant interface.',
      tags: ['Web Design', 'Entertainment', 'Interactive'],
      isExternal: true,
    },
    {
      title: 'Angels Walking',
      image: angelsWalkingLogo,
      link: 'https://angels-walking.netlify.app/',
      description:
        'A life coach and spiritual recovery website designed to support individuals on their journey to healing and personal growth with a serene and supportive online presence.',
      tags: ['Web Design', 'Life Coaching', 'Spiritual Recovery'],
      isExternal: true,
    },
  ];

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
                Our Portfolio
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-white max-w-2xl mx-auto lg:mx-0"
                variants={fadeInUp}
              >
                Explore our latest projects and see how we've helped businesses
                achieve their digital goals.
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
                  src={portfolioHero}
                  alt="Creative Workspace"
                  className="w-full h-auto relative z-10 transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 py-12 md:py-16 bg-gradient-to-b from-white to-primary-50">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {portfolioItems.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <PortfolioCard {...item} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
