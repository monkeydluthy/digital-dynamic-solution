import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import tampaNaLogo from '../assets/images/tampa-na-logo-card.png';
import lyfestyleLogo from '../assets/images/lyfestyle-logo.png';
import anjLogo from '../assets/images/anj-logo.png';
import prophitLineLogo from '../assets/images/prophit-line.JPG';
import allStructureLogo from '../assets/images/all-structure.png';
import mnaStumpLogo from '../assets/images/mna-stump.jpg';
import nexusLogo from '../assets/images/brand/dynamic-nexus-on-black.png';
import signatureTreeLogo from '../assets/images/signature-tree-logo.png';

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

function PortfolioCard({
  title,
  image,
  emoji,
  link,
  caseStudyLink,
  primaryCta,
  description,
  tags,
  result,
}) {
  return (
    <motion.div
      variants={cardAnimation}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full bg-card rounded-xl shadow-lg overflow-hidden border border-primary-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 bg-ink">
        {emoji ? (
          <div className="w-full h-full flex items-center justify-center text-7xl">
            <span role="img" aria-label={title}>
              {emoji}
            </span>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-4"
          />
        )}
        {description && (
          <div className="absolute top-0 left-0 w-full h-full bg-ink/90 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
            <p className="text-white text-center text-sm">{description}</p>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-ink mb-3">{title}</h3>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-mint text-primary-600 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {result && (
          <p className="text-primary-600 font-semibold text-sm mb-4 leading-snug">
            {result}
          </p>
        )}
        <div className="mt-auto flex flex-col gap-2">
          {caseStudyLink && (
            <Link
              to={caseStudyLink}
              className="btn-teal w-full text-center !py-2.5"
            >
              View Case Study
            </Link>
          )}
          {primaryCta ? (
            <Link
              to={primaryCta.to}
              className={`${
                caseStudyLink
                  ? 'inline-block w-full text-center px-6 py-2.5 rounded-lg border-2 border-primary-500 text-primary-600 font-semibold hover:bg-mint transition-colors'
                  : 'btn-teal w-full text-center'
              }`}
            >
              {primaryCta.label}
            </Link>
          ) : link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                caseStudyLink
                  ? 'inline-flex w-full items-center justify-center gap-2 px-6 py-2.5 rounded-lg border-2 border-primary-500 text-primary-600 font-semibold hover:bg-mint transition-colors'
                  : 'btn-teal w-full text-center flex items-center justify-center gap-2'
              }`}
            >
              Visit Site <FaExternalLinkAlt className="text-sm" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function Portfolio() {
  const portfolioItems = [
    {
      title: 'M&A Stump Grinding',
      image: mnaStumpLogo,
      link: 'https://mnastumpgrinding.com/',
      caseStudyLink: '/case-studies/ma-stump-grinding',
      description:
        'Professional website and local growth for a stump grinding service company.',
      tags: ['Web Design', 'Local Business'],
      result: '39 Google reviews in 6 months',
    },
    {
      title: 'All Structure Maintenance',
      image: allStructureLogo,
      link: 'https://allstructuremaintenance.com',
      caseStudyLink: '/case-studies/all-structure',
      description:
        'Lead-generating website with full conversion tracking for a structure maintenance company.',
      tags: ['Web Design', 'SEO'],
      result: 'Lead-gen site, full conversion tracking',
    },
    {
      title: 'Lyfestyle Tattoos',
      image: lyfestyleLogo,
      link: 'https://lyfestyletattoos.com',
      caseStudyLink: '/case-studies/lyfestyle',
      description:
        'Custom website and social growth for a professional tattoo studio.',
      tags: ['Web Design', 'Social Media'],
      result: '0→2,100 followers, built from scratch',
    },
    {
      title: 'Signature Tree & Home',
      image: signatureTreeLogo,
      caseStudyLink: '/case-studies/signature-tree',
      description:
        'Social media growth that drove new customers for a tree-care company.',
      tags: ['Social Media', 'Local Business'],
      result: '100+ new customers from social',
    },
    {
      title: 'Dynamic Nexus',
      image: nexusLogo,
      description: 'Our proprietary multi-client marketing-intelligence platform.',
      tags: ['Custom App', 'Product'],
      primaryCta: { label: 'Learn More', to: '/nexus' },
    },
    {
      title: 'NightSync',
      emoji: '🌙',
      description:
        'A social web app that gamifies going out — React/Next.js + Supabase.',
      tags: ['Custom App', 'Product'],
      primaryCta: { label: 'Learn More', to: '/nightsync' },
    },
    {
      title: 'Tampa NA',
      image: tampaNaLogo,
      link: 'https://tampa-na.org',
      description:
        'Community website with event management and resource directory.',
      tags: ['Web Design', 'Community'],
    },
    {
      title: 'ProphitLine',
      image: prophitLineLogo,
      link: 'https://prophit-line.netlify.app/',
      description:
        'Prediction market aggregator across Polymarket, Kalshi, and more.',
      tags: ['Data Aggregation', 'React'],
    },
    {
      title: 'ANJ Sports Cards',
      image: anjLogo,
      link: 'https://anjsportscards.com',
      description:
        'Modern e-commerce for sports card collectors.',
      tags: ['E-commerce', 'React'],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-ink py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white"
              variants={fadeInUp}
            >
              Portfolio
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Real work for local businesses, contractors, and custom products
              — websites, social, and apps that get results.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-mint py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {portfolioItems.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <PortfolioCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want results like these?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call or text — let&apos;s talk about your next project.
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
