import React from 'react';
import { Link } from 'react-router-dom';
import webDesignImg from '../assets/images/web-design.png';
import socialMediaImg from '../assets/images/social-media.png';
import consultingImg from '../assets/images/consulting.png';
import companyLogo from '../assets/images/brand/dds-monogram-color-on-white.jpg';

const proofStats = [
  { value: '100+', label: 'customers' },
  { value: '39', label: 'Google reviews in 5 months' },
  { value: '2,100', label: 'followers from zero' },
];

const coreServices = [
  {
    title: 'Social Media Management',
    description:
      'Stay consistent, grow your following, and turn attention into booked jobs for your local business.',
    image: socialMediaImg,
    link: '/social-media',
  },
  {
    title: 'Web Design & SEO',
    description:
      'A site that looks sharp, ranks locally, and turns searchers into calls — built for contractors and service businesses.',
    image: webDesignImg,
    link: '/web-design',
  },
  {
    title: 'Custom App Development',
    description:
      'Purpose-built tools and apps that streamline how you run and grow — from lead capture to day-to-day operations.',
    image: consultingImg,
    link: '/consulting',
  },
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-ink py-28 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <p
                className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in-up"
              >
                For local businesses &amp; contractors
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up leading-tight">
                Get found, followed &amp; booked
              </h1>
              <p
                className="text-xl text-white/90 mb-8 mx-auto lg:mx-0 max-w-xl animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                Digital Dynamic Solution helps Tampa Bay businesses show up
                online, stay visible, and turn attention into real customers.
              </p>
              <div
                className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                <a href="tel:+18139970321" className="btn-teal text-lg !px-8 !py-4">
                  Call or text 813.997.0321
                </a>
                <Link to="/portfolio" className="btn-teal-outline text-lg !px-8 !py-4">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src={companyLogo}
                  alt="Digital Dynamic Solution"
                  className="w-4/5 md:w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof / Social stats strip */}
      <div className="bg-primary-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 text-center">
            {proofStats.map((stat) => (
              <div key={stat.label} className="px-2">
                <p className="text-3xl md:text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white/90 text-sm md:text-base mt-1 capitalize">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core service lines */}
      <div className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-900 animate-fade-in-up">
            Our Core Lines
          </h2>
          <p
            className="text-xl text-center text-primary-700 mb-12 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Three ways we help you get found, followed, and booked
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 text-center group animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-primary-400 rounded-full opacity-20 group-hover:opacity-30 blur-lg"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mx-auto h-32 w-auto object-contain relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-900">
                  {service.title}
                </h3>
                <p className="text-primary-700 mb-6">{service.description}</p>
                <Link to={service.link} className="btn-teal w-full text-center">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Ready to get booked?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Call or text today — we&apos;ll map out the next step for your business.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
              Call or text 813.997.0321
            </a>
            <Link to="/contact" className="btn-teal-outline text-lg !px-10 !py-4">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
