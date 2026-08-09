import React from 'react';

const services = [
  'Content Strategy',
  'Community Management',
  'Paid Advertising',
  'Analytics & Reporting',
];

const platforms = ['Facebook & Instagram', 'LinkedIn', 'X (Twitter)', 'TikTok'];

function SocialMedia() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-ink py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Social Media Management
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Stay consistent, grow your following, and turn attention into
              booked jobs for your local business.
            </p>
            <a href="tel:+18139970321" className="btn-teal text-lg !px-8 !py-4">
              Call or text 813.997.0321
            </a>
          </div>
        </div>
      </div>

      {/* Proof */}
      <div className="bg-mint py-8 border-b border-primary-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-ink text-lg md:text-xl font-medium leading-relaxed">
            Grew a tattoo studio from 0 to 2,100 followers and a tree-care
            company past 100 new customers.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-white to-mint py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              What we handle
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              A clear social system that keeps you visible and converting —
              without you living in the apps all day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card rounded-xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-ink mb-6">Our services</h3>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-0.5">✓</span>
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-ink mb-6">
                Platforms we cover
              </h3>
              <ul className="space-y-4">
                {platforms.map((item) => (
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

      {/* CTA */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
