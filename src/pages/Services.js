import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import webDesignImg from '../assets/images/web-design.png';
import marketingImg from '../assets/images/internet-marketing-1.png';
import consultingImg from '../assets/images/consulting.png';
import socialMediaImg from '../assets/images/social-media.png';
import seoImg from '../assets/images/seo-1.png';
import logoDesignImg from '../assets/images/logo-design.png';
import websiteMaintenanceImg from '../assets/images/website-maintenace.png';
import smMaintenanceImg from '../assets/images/sm-maintenance.png';
import contentCreationImg from '../assets/images/content-creation.png';
import digitalMarketing from '../assets/images/illustrations/digital-marketing.svg';
import floaterImg from '../assets/images/floater-img.webp';

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
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -5, transition: { duration: 0.2 } },
};

function ServiceCard({ image, title, description, link, index }) {
  const gradients = [
    'from-primary-400 to-accent-400',
    'from-accent-400 to-secondary-400',
    'from-secondary-400 to-primary-400',
  ];
  const gradient = gradients[index % 3];

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-primary-100 h-[420px] flex flex-col transform hover:-translate-y-2"
      variants={cardAnimation}
      whileHover="hover"
    >
      <motion.div
        className="relative flex justify-center items-center h-32 mb-6 group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full opacity-20 group-hover:opacity-30 blur-lg`}
        ></div>
        <img
          src={image}
          alt={title}
          className="h-full w-auto object-contain filter drop-shadow-md relative z-10"
        />
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-primary-900">{title}</h3>
      <p className="text-primary-700 mb-6 flex-grow">{description}</p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto"
      >
        <Link
          to={link}
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg w-full transform hover:scale-105"
        >
          Learn More
        </Link>
      </motion.div>
    </motion.div>
  );
}

function Services() {
  const services = [
    {
      image: webDesignImg,
      title: 'Website Design',
      description:
        'Custom website design focused on building your brand and growing your audience.',
      link: '/web-design',
    },
    {
      image: marketingImg,
      title: 'Internet Marketing',
      description:
        'Strategic digital marketing plans that drive high-converting traffic to your website.',
      link: '/internet-marketing',
    },
    {
      image: consultingImg,
      title: 'Consulting Services',
      description:
        'Expert guidance to optimize your digital strategy and create multiple revenue streams.',
      link: '/consulting',
    },
    {
      image: socialMediaImg,
      title: 'Social Media Integration',
      description:
        'Elevate your social media presence with our expert integration services.',
      link: '/social-media',
    },
    {
      image: seoImg,
      title: 'Search Engine Optimization',
      description:
        'Boost your search rankings, increase website traffic, and drive more revenue.',
      link: '/seo',
    },
    {
      image: logoDesignImg,
      title: 'Customized Logo Design',
      description:
        'Create a unique and memorable brand identity with our professional logo design services.',
      link: '/logo-design',
    },
    {
      image: websiteMaintenanceImg,
      title: 'Website Maintenance',
      description:
        'Keep your website secure, up-to-date, and performing at its peak.',
      link: '/website-maintenance',
    },
    {
      image: smMaintenanceImg,
      title: 'Social Media Maintenance',
      description:
        'Engage your audience and achieve business goals with our social media management.',
      link: '/sm-maintenance',
    },
    {
      image: contentCreationImg,
      title: 'Content Creation',
      description:
        'Connect with your audience through engaging content that establishes authority.',
      link: '/content-creation',
    },
  ];

  return (
    <div className="min-h-screen">
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
                Our Services
              </motion.h1>
              <motion.p
                className="text-xl text-white max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Freelance Web Design and Development based in Tampa, Florida |
                Internet Marketing, and other Business Solutions
              </motion.p>
            </motion.div>
            <motion.div
              className="lg:w-1/2 hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                <img
                  src={floaterImg}
                  alt="Digital Services"
                  className="w-full max-w-lg rounded-lg object-cover relative z-10 filter contrast-125 brightness-110 saturate-150"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 bg-gradient-to-b from-white to-primary-50">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServiceCard {...service} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
