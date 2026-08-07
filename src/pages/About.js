import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import anthonyPhoto from '../assets/images/brand/anthony-headshot.jpg';

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

function About() {
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
              About
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Digital Dynamic Solution helps local businesses and home-service
              contractors get found, followed, and booked.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Founder */}
      <div className="bg-gradient-to-b from-white to-mint py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="shrink-0">
              <img
                src={anthonyPhoto}
                alt="Anthony Luth, founder of Digital Dynamic Solution"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top shadow-xl ring-4 ring-primary-500/20"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-2">
                Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Anthony Luth
              </h2>
              <p className="text-lg text-body leading-relaxed">
                Anthony founded Digital Dynamic Solution in Tampa, Florida in
                2023 to help local businesses grow online with clear strategy,
                consistent execution, and results you can measure — social,
                websites, SEO, and custom tools that turn attention into booked
                work.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Story & mission */}
      <div className="bg-white py-16 border-t border-primary-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 text-center">
              Our Story &amp; Mission
            </h2>
            <div className="space-y-5 text-lg text-body leading-relaxed">
              <p>
                Since 2023, Digital Dynamic Solution has helped businesses
                transform their digital presence. We combine creativity,
                technical expertise, and practical strategy to deliver results
                that matter — more visibility, more followers, more booked jobs.
              </p>
              <p>
                Our mission is simple: empower local businesses with digital
                solutions that drive growth month-to-month, with everything
                tracked so you know what&apos;s working.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values + why */}
      <div className="bg-mint/40 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-ink mb-6 text-center">
                Our Values
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Clarity',
                    description:
                      'Straight talk and clear plans — no jargon for jargon\'s sake.',
                  },
                  {
                    title: 'Results',
                    description:
                      'We measure what matters: leads, reviews, followers, and booked work.',
                  },
                  {
                    title: 'Consistency',
                    description:
                      'Month-to-month execution that compounds, not one-off campaigns.',
                  },
                  {
                    title: 'Partnership',
                    description:
                      'Your goals become our goals — we’re in it with you.',
                  },
                ].map((value) => (
                  <li key={value.title} className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-ink block mb-1">
                        {value.title}
                      </span>
                      <span className="text-sm text-body">
                        {value.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-ink mb-6 text-center">
                Why Work With Us
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Built for local businesses',
                    description:
                      'Especially contractors and home-service companies that need calls and bookings.',
                  },
                  {
                    title: 'Proven client wins',
                    description:
                      'From 0→2,100 followers to 39 Google reviews in 5 months — real outcomes.',
                  },
                  {
                    title: 'Three clear core lines',
                    description:
                      'Social, Web Design & SEO, and Custom Apps — with support services as needed.',
                  },
                  {
                    title: 'Direct access',
                    description:
                      'Work with Anthony — call or text 813.997.0321 anytime you’re ready.',
                  },
                ].map((reason) => (
                  <li key={reason.title} className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-ink block mb-1">
                        {reason.title}
                      </span>
                      <span className="text-sm text-body">
                        {reason.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get booked?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s map out the next step for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+18139970321"
              className="btn-teal text-lg !px-10 !py-4"
            >
              Call or text 813.997.0321
            </a>
            <Link
              to="/contact"
              className="btn-teal-outline text-lg !px-10 !py-4"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
