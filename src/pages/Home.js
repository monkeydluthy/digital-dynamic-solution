import React from 'react';
import { Link } from 'react-router-dom';
import webDesignImg from '../assets/images/web-design.png';
import marketingImg from '../assets/images/internet-marketing-1.png';
import consultingImg from '../assets/images/consulting.png';
import companyLogo from '../assets/images/brand/dds-monogram-color-on-white.jpg';

const proofStats = [
  { value: '100+', label: 'customers' },
  { value: '39', label: 'Google reviews in 5 months' },
  { value: '2,100', label: 'followers from zero' },
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-ink py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
                Transform Your Digital Presence
              </h1>
              <p
                className="text-xl text-white/90 mb-8 mx-auto max-w-2xl animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                Professional Web Design, Development, and Digital Marketing
                Solutions based in Tampa, Florida. We help businesses grow their
                online presence and achieve their digital goals.
              </p>
              <div
                className="flex flex-wrap gap-4 justify-center animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                <Link to="/portfolio" className="btn-teal-light">
                  View Portfolio
                </Link>
                <Link to="/contact" className="btn-teal">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10 flex justify-center mb-10 lg:mb-0">
              <div className="relative group w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src={companyLogo}
                  alt="Digital Dynamic Solution"
                  className="w-4/5 md:w-full max-w-md mx-auto relative z-10"
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

      {/* Services Preview Section */}
      <div className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-900 animate-fade-in-up">
            Our Core Services
          </h2>
          <p
            className="text-xl text-center text-primary-700 mb-12 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Elevate your business with our comprehensive digital solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 text-center group animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary-400 rounded-full opacity-20 group-hover:opacity-30 blur-lg"></div>
                <img
                  src={webDesignImg}
                  alt="Website Design"
                  className="mx-auto h-32 w-auto object-contain relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">
                Website Design
              </h3>
              <p className="text-primary-700 mb-6">
                Our website design process focuses on developing a website that
                builds your brand and audience.
              </p>
              <Link to="/web-design" className="btn-teal w-full text-center">
                Learn More
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 text-center group animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary-400 rounded-full opacity-20 group-hover:opacity-30 blur-lg"></div>
                <img
                  src={marketingImg}
                  alt="Internet Marketing"
                  className="mx-auto h-32 w-auto object-contain relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">
                Internet Marketing
              </h3>
              <p className="text-primary-700 mb-6">
                Customized digital marketing plans with the goal of driving high
                converting traffic to your website.
              </p>
              <Link
                to="/internet-marketing"
                className="btn-teal w-full text-center"
              >
                Learn More
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 text-center group animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary-400 rounded-full opacity-20 group-hover:opacity-30 blur-lg"></div>
                <img
                  src={consultingImg}
                  alt="Consulting Services"
                  className="mx-auto h-32 w-auto object-contain relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">
                Consulting Services
              </h3>
              <p className="text-primary-700 mb-6">
                Maximize your digital business strategy for revenue generation
                and improved marketing tactics.
              </p>
              <Link to="/consulting" className="btn-teal w-full text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Start Your Digital Journey?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Call or text{' '}
            <a
              href="tel:+18139970321"
              className="text-primary-400 font-semibold hover:text-primary-300 underline underline-offset-4"
            >
              813.997.0321
            </a>{' '}
            — let&apos;s build a presence that gets you found, followed, and booked.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="tel:+18139970321" className="btn-teal">
              Call or text 813.997.0321
            </a>
            <Link to="/contact" className="btn-teal-outline">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
