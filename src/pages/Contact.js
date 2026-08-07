import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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

function ContactInfo({ icon, title, content, link }) {
  return (
    <motion.div
      className="bg-card rounded-xl shadow-lg p-6 flex items-start space-x-4 border border-primary-100 hover:shadow-2xl transition-shadow"
      variants={cardAnimation}
      whileHover="hover"
    >
      <div className="text-primary-500 text-2xl" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-body hover:text-primary-500 transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-body">{content}</p>
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
      {/* Hero */}
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
              Contact
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8"
              variants={fadeInUp}
            >
              Tell us what you need — or call/text and we&apos;ll map the next
              step for your business.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="tel:+18139970321"
                className="btn-teal text-lg !px-8 !py-4"
              >
                Call or text 813.997.0321
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main */}
      <div className="bg-gradient-to-b from-white to-mint py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Form */}
              <motion.div
                className="bg-card rounded-xl shadow-lg p-6 md:p-8 border border-primary-100 order-2 lg:order-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-ink mb-6 text-center">
                  Send a Message
                </h3>
                <form
                  ref={form}
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-body mb-1"
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
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-body mb-1"
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
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-body mb-1"
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
                  </div>
                  <button
                    type="submit"
                    className={`btn-teal w-full ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="text-primary-600 text-center">
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

              {/* Info */}
              <motion.div
                className="space-y-6 order-1 lg:order-2"
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
                  content="813.997.0321"
                  link="tel:+18139970321"
                />
                <ContactInfo
                  icon="📍"
                  title="Location"
                  content="Tampa, Florida"
                />
                <ContactInfo
                  icon="🕒"
                  title="Availability"
                  content="Flexible hours — call or text anytime and we'll get back to you quickly."
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prefer to talk it through?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call or text — we&apos;re easy to reach.
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
