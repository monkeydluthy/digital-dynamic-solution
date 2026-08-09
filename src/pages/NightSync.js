import React from 'react';
import { Link } from 'react-router-dom';

const whatWeDid = [
  'Full product design: 18 screens mapped across desktop and tablet, organized by real user flows.',
  'Engineered on a modern, scalable stack: React / Next.js, Supabase, and Tailwind CSS, deployed on Netlify.',
  'End-to-end ownership — UX design, front end, backend, and data — under a milestone-based build.',
];

const results = [
  'Concept → shippable product — the full journey',
  'A complete, buildable experience, not just mockups',
];

function NightSync() {
  return (
    <div className="min-h-screen">
      <div className="bg-ink py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative max-w-3xl text-center">
          <div className="text-7xl mb-6" role="img" aria-label="NightSync">
            🌙
          </div>
          <p className="text-primary-400 font-semibold uppercase tracking-wide text-sm mb-3">
            Custom App Development · Case Study
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            NightSync
          </h1>
          <p className="text-white/70 mb-4">
            Social Web App · Tampa Nightlife Startup
          </p>
          <p className="text-lg md:text-xl text-primary-400 font-medium leading-relaxed">
            A gamified social experience for going out with friends — designed
            and engineered end to end.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-mint py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          <div className="bg-card rounded-xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-ink mb-6">What We Did</h2>
            <ul className="space-y-4">
              {whatWeDid.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary-500 font-bold mt-0.5">✓</span>
                  <span className="text-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink mb-6 text-center">
              Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((item) => (
                <div
                  key={item}
                  className="bg-mint rounded-xl p-5 border border-primary-100 flex items-start gap-3"
                >
                  <span className="text-primary-500 font-bold mt-0.5">✓</span>
                  <span className="text-ink font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-mint rounded-xl p-6 border border-primary-100 text-center">
            <p className="text-body mb-4">
              Interactive demo with sample data coming soon. This page is the
              home for that walkthrough.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/app-development" className="btn-teal">
                Custom App Development
              </Link>
              <Link
                to="/portfolio"
                className="inline-block px-8 py-3 rounded-lg border-2 border-primary-500 text-primary-600 font-semibold hover:bg-white transition-colors"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative max-w-3xl">
          <p className="text-xl md:text-2xl text-white font-medium mb-8">
            Have an idea, or a process that should be software? Let&apos;s build
            it.
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default NightSync;
