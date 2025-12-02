import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import contactHero from '../assets/images/hero/contact-hero.jpg';

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

function ContactInfo({ icon, title, content, link }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4 transform transition-all duration-300 border border-primary-100 hover:shadow-2xl hover:-translate-y-2"
      variants={cardAnimation}
      whileHover="hover"
    >
      <div className="text-primary-600 text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-primary-900 mb-2">{title}</h3>
        {link ? (
          <motion.a
            href={link}
            className="text-primary-700 hover:text-primary-900 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            {content}
          </motion.a>
        ) : (
          <p className="text-primary-700">{content}</p>
        )}
      </div>
    </motion.div>
  );
}

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_2jqp68p',
        'template_gy0d5xj',
        form.current,
        'hguBxp_4_8yE-3O7q'
      );
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Contact Us
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-white max-w-2xl mx-auto lg:mx-0"
                variants={fadeInUp}
              >
                Get in touch with us to discuss your project and how we can help
                your business grow.
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
                  src={contactHero}
                  alt="Modern Communication Setup"
                  className="w-full h-auto relative z-10 transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-primary-100 transform transition-all duration-300 hover:shadow-2xl order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
                Send Us a Message
              </h3>
              <form
                ref={form}
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
              >
                <motion.div whileHover={{ y: -2 }}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className={`w-full bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold transform hover:scale-105 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">
                    Error sending message. Please try again.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <ContactInfo
                icon="📧"
                title="Email"
                content="luthdigitalconsult@gmail.com"
                link="mailto:luthdigitalconsult@gmail.com"
              />
              <ContactInfo
                icon="📱"
                title="Phone"
                content="813-997-0321"
                link="tel:+18139970321"
              />
              <ContactInfo
                icon="📍"
                title="Location"
                content="Tampa, Florida"
              />
              <ContactInfo
                icon="🕒"
                title="Business Hours"
                content="Available 24/7"
              />
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-2xl text-white mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
