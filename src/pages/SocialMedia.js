import React from 'react';

const included = [
  'Content Strategy',
  'Community Management',
  'Paid Advertising',
  'Analytics & Reporting',
  'Google Business Profile & Reviews',
  'Local Distribution',
];

const platforms = [
  'Facebook & Instagram',
  'LinkedIn',
  'X',
  'TikTok',
  'Google',
];

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
            <p className="text-lg md:text-xl text-primary-400 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              Done-for-you social that keeps you found, followed &amp; booked —
              content, distribution, reviews, and reporting, all handled.
            </p>
            <a href="tel:+18139970321" className="btn-teal text-lg !px-8 !py-4">
              Call or text 813.997.0321
            </a>
          </div>
        </div>
      </div>

      {/* Proof */}
      <div className="bg-mint py-8 border-b border-primary-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-primary-600 text-base md:text-lg font-semibold leading-relaxed">
            0 → 2,100 followers for a tattoo studio · 100+ new customers for a
            tree-care company · 39 Google reviews in 5 months
          </p>
        </div>
      </div>

      {/* Content */}
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
              <h2 className="text-2xl font-bold text-ink mb-6">
                Platforms We Cover
              </h2>
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
          <p className="text-xl md:text-2xl text-white font-medium mb-8">
            Ready to get booked?
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
