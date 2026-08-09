import React from 'react';
import { Link } from 'react-router-dom';
import nexusLogo from '../assets/images/brand/dynamic-nexus-on-black.png';
import clientsShot from '../assets/images/nexus/clients.png';
import schedulingShot from '../assets/images/nexus/scheduling.png';
import postsShot from '../assets/images/nexus/posts.png';
import mlInsightsShot from '../assets/images/nexus/ml-insights.png';

const capabilities = [
  'Multi-client dashboard',
  'Automated competitive intelligence',
  'Content scheduling & distribution',
  'Analytics that turn activity into insight',
];

const screenshots = [
  {
    src: clientsShot,
    title: 'Clients',
    caption: 'One hub for every client account and connected platform.',
  },
  {
    src: schedulingShot,
    title: 'Scheduling',
    caption: 'Calendar, bulk, recurring, and queue — all in one place.',
  },
  {
    src: postsShot,
    title: 'Posts',
    caption: 'Create, schedule, and publish across Facebook, LinkedIn, and more.',
  },
  {
    src: mlInsightsShot,
    title: 'ML Insights',
    caption: 'Competitive intelligence and recommendations driven by your data.',
  },
];

function Nexus() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-ink py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative max-w-3xl text-center">
          <img
            src={nexusLogo}
            alt="Dynamic Nexus"
            className="mx-auto max-h-24 mb-8 object-contain"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Nexus — Our Marketing Intelligence Platform
          </h1>
          <p className="text-lg md:text-xl text-primary-400 mb-8 font-medium leading-relaxed">
            Nexus is the proprietary platform we built to power our own social
            &amp; marketing services — a multi-client command center most
            agencies only wish they had.
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-8 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>

      {/* What it does */}
      <div className="bg-gradient-to-b from-white to-mint py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-xl p-8 md:p-10 border border-primary-100 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
              What It Does
            </h2>
            <ul className="space-y-4">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary-500 font-bold mt-0.5">✓</span>
                  <span className="text-ink font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
            Inside the platform
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {screenshots.map((shot) => (
              <figure key={shot.title} className="group">
                <div className="overflow-hidden rounded-xl border border-primary-100 bg-ink shadow-sm">
                  <img
                    src={shot.src}
                    alt={`Nexus ${shot.title} view`}
                    className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 px-1">
                  <p className="text-ink font-semibold text-lg">{shot.title}</p>
                  <p className="text-muted text-sm mt-0.5">{shot.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Why it matters */}
      <div className="bg-mint py-12 border-y border-primary-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">Why It Matters</h2>
          <p className="text-primary-600 text-lg md:text-xl font-medium leading-relaxed">
            The same engineering that powers Nexus is what we bring to your
            custom app or automation.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative max-w-3xl">
          <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
            Want the competitive edge? Ask about our Pro plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+18139970321"
              className="btn-teal text-lg !px-10 !py-4"
            >
              Call or text 813.997.0321
            </a>
            <Link to="/app-development" className="btn-teal-outline text-lg !px-10 !py-4">
              Custom App Development
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nexus;
