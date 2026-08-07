import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const coreServices = [
  {
    title: 'Social Media Management',
    description:
      'Stay consistent, grow your following, and turn attention into booked jobs for your local business.',
    icon: 'fa-share-nodes',
    link: '/social-media',
    subItems: [
      { title: 'Social Media Integration', link: '/social-media' },
      { title: 'Social Media Maintenance', link: '/sm-maintenance' },
      { title: 'Content Creation', link: '/content-creation' },
    ],
  },
  {
    title: 'Web Design & SEO',
    description:
      'A site that looks sharp, ranks locally, and turns searchers into calls — built for contractors and service businesses.',
    icon: 'fa-laptop-code',
    link: '/web-design-seo',
    subItems: [
      { title: 'Search Engine Optimization', link: '/seo' },
      { title: 'Customized Logo Design', link: '/logo-design' },
      { title: 'Website Maintenance', link: '/website-maintenance' },
    ],
  },
  {
    title: 'Custom App Development',
    description:
      'Purpose-built tools and apps that streamline how you run and grow — from lead capture to day-to-day operations.',
    icon: 'fa-mobile-screen-button',
    link: '/app-development',
    subItems: [],
  },
];

function CoreServiceCard({ title, description, icon, link }) {
  return (
    <motion.div
      className="bg-card rounded-xl shadow-lg p-8 text-center border border-primary-100 h-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
      variants={fadeInUp}
    >
      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-mint text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
          <i className={`fa-solid ${icon} text-3xl`} aria-hidden="true"></i>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-ink">{title}</h3>
      <p className="text-body mb-6 flex-grow">{description}</p>
      <Link to={link} className="btn-teal w-full text-center mt-auto">
        Learn More
      </Link>
    </motion.div>
  );
}

function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-ink py-20 md:py-24 relative overflow-hidden">
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
              variants={fadeInUp}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90"
              variants={fadeInUp}
            >
              Three core lines for local businesses and home-service contractors
              — plus supporting services that keep you found, followed, and
              booked.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Core lines */}
      <div className="bg-gradient-to-b from-white to-mint py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
              Core Lines
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Start here — the three services that drive the most growth for our
              clients.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {coreServices.map((service) => (
              <CoreServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Supporting services under each core */}
      <div className="bg-white py-16 md:py-20 border-t border-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
              Also available
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Supporting services that plug into each core line.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreServices.map((service) => (
              <div
                key={`sub-${service.title}`}
                className="bg-card rounded-xl p-6 border border-primary-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-primary-500 shrink-0">
                    <i
                      className={`fa-solid ${service.icon} text-sm`}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="text-lg font-semibold text-ink leading-snug">
                    {service.title}
                  </h3>
                </div>
                {service.subItems.length > 0 ? (
                  <ul className="space-y-3">
                    {service.subItems.map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.link}
                          className="text-body hover:text-primary-500 transition-colors inline-flex items-center gap-2"
                        >
                          <span className="text-primary-500" aria-hidden="true">
                            →
                          </span>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted text-sm">
                    Custom builds scoped to your workflow —{' '}
                    <Link
                      to={service.link}
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      learn more
                    </Link>
                    .
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call or text — we&apos;ll match you to the right core line.
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
