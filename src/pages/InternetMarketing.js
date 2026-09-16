import React from 'react';
import RelatedServices from '../components/RelatedServices';

const included = [
  'Search Engine Marketing',
  'Social Media Advertising',
  'Content Marketing',
  'Email Campaigns',
  'Analytics & Reporting',
  'Conversion Optimization',
];

const howWeWork = [
  'Strategic Planning',
  'Campaign Management',
  'Performance Tracking',
  'ROI Optimization',
];

function InternetMarketing() {
  return (
    <div className="min-h-screen">
      <div className="bg-ink py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Internet Marketing
            </h1>
            <p className="text-lg md:text-xl text-primary-400 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              Campaigns that reach the right people and turn attention into
              booked work — planned, run, and measured.
            </p>
            <a href="tel:+18139970321" className="btn-teal text-lg !px-8 !py-4">
              Call or text 813.997.0321
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-mint py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card rounded-xl p-8 border border-primary-100">
              <h2 className="text-2xl font-bold text-ink mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-0.5">✓</span>
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 border border-primary-100">
              <h2 className="text-2xl font-bold text-ink mb-6">How We Work</h2>
              <ul className="space-y-4">
                {howWeWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-0.5">✓</span>
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <RelatedServices
        items={[
          {
            title: 'Social Media Management',
            to: '/social-media',
            description:
              'The social half of a local growth plan, handled month to month.',
          },
          {
            title: 'Web Design & SEO',
            to: '/web-design-seo',
            description:
              'The site and local search work that marketing needs to convert.',
          },
          {
            title: 'Search Engine Optimization',
            to: '/seo',
            description:
              'Rankings, Google Business, and pages built for local searches.',
          },
        ]}
      />

      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <p className="text-xl md:text-2xl text-white font-medium mb-8">
            Ready to grow your online presence?
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default InternetMarketing;
