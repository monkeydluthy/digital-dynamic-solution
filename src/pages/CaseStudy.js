import React from 'react';
import { Link, useParams } from 'react-router-dom';
import signatureTreeLogo from '../assets/images/signature-tree-logo.png';
import mnaStumpLogo from '../assets/images/mna-stump.jpg';
import allStructureLogo from '../assets/images/all-structure.png';
import lyfestyleLogo from '../assets/images/lyfestyle-logo.png';

const CASE_STUDIES = {
  'signature-tree': {
    title: 'Signature Tree & Home',
    industry: 'Tree Care & Property Services · Tampa Bay',
    service: 'Social Media Management',
    servicePath: '/social-media',
    logo: signatureTreeLogo,
    logoOnLight: true,
    headlineResult: '100+ new customers from social',
    context:
      'An established tree and property-improvement company with strong offline work but almost no digital footprint — no organized social presence, no review funnel, and no way to be found online.',
    whatWeDid: [
      'Built the full presence from scratch: Google Business Profile, Instagram & Facebook business profiles, unified branding.',
      'Content plan by audience — job photos & video, “tree-fact” educational posts, seasonal storm-safety campaigns.',
      'Distributed every post across 5–9 local Facebook groups plus Instagram to expand reach.',
      'Stood up a review funnel (Google link + QR code) and pursued directory & Chamber listings; monthly analytics reviews.',
    ],
    results: [
      '100+ new customers attributed to social over ~2 years',
      '48 new Google reviews earned (part of a 178-review profile)',
      'Facebook 50 → 538 and Instagram 0 → 1,200 followers',
      '~1,000 website visits per month, steady monthly reach',
    ],
  },
  'ma-stump-grinding': {
    title: 'M&A Stump Grinding',
    industry: 'Stump Grinding & Tree Services · Thonotosassa, FL',
    service: 'Social Media Management',
    servicePath: '/social-media',
    logo: mnaStumpLogo,
    site: 'https://mnastumpgrinding.com/',
    headlineResult: '39 Google reviews in 6 months',
    context:
      'A local stump-grinding operator with no Google presence — invisible in local search and Maps, with no reviews to earn trust from nearby homeowners.',
    whatWeDid: [
      'Set up and fully optimized the Google Business Profile from scratch — categories, service area, services, photos.',
      'Built a review-generation system that converts completed jobs into steady Google reviews.',
      'Positioned the profile to capture local “near me” and Maps searches in its service area.',
    ],
    results: [
      '39 Google reviews in 6 months on a brand-new profile',
      'More than one new review per week on average',
      '80 profile views in a recent single week across Search & Maps',
      'Actively surfacing when homeowners search locally',
    ],
  },
  'all-structure': {
    title: 'All Structure Maintenance',
    industry: 'General Contractor · Meriden, CT',
    service: 'Web Design & SEO',
    servicePath: '/web-design-seo',
    logo: allStructureLogo,
    site: 'https://allstructuremaintenance.com',
    headlineResult: 'Lead-gen site with full conversion tracking',
    context:
      'A licensed general contractor specializing in property restoration needed a web presence that converts search visitors into project inquiries — with every lead measured.',
    whatWeDid: [
      'Designed and built a custom, mobile-friendly site focused on services and clear calls to action.',
      'Optimized for local SEO so the business can show up for relevant searches.',
      'Implemented full Google Analytics 4 conversion tracking on forms and key CTAs.',
      'Built a clear path from landing on the page to submitting an inquiry.',
    ],
    results: [
      'Qualified inbound project inquiries every month via CTAs & forms',
      'Complete funnel visibility — click to form submission',
      'Tracking most contractor sites don’t have — decisions driven by data',
      'Ongoing optimization — tightening the form to convert more inquiries',
    ],
  },
  lyfestyle: {
    title: 'Lyfestyle Tattoos',
    industry: 'Tattoo Studio · Tampa Bay',
    service: 'Social Media Management',
    servicePath: '/social-media',
    logo: lyfestyleLogo,
    site: 'https://lyfestyletattoos.com',
    headlineResult: '0 → 2,100 followers, built from scratch',
    context:
      'A professional tattoo studio needed a digital presence that matched the quality of the work — website plus social that attracts clients and builds a real following.',
    whatWeDid: [
      'Custom website featuring artist portfolios and a clear path to book.',
      'Social media presence built from scratch with consistent branding and content.',
      'Ongoing growth strategy focused on reach, engagement, and booked work.',
    ],
    results: [
      '0 → 2,100 followers, built from scratch',
      'A brand presence that matches the quality of the studio',
      'Website and social working together to attract clients',
    ],
  },
};

function CaseStudy() {
  const { slug } = useParams();
  const study = CASE_STUDIES[slug];

  if (!study) {
    return (
      <div className="min-h-screen bg-mint flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-ink mb-4">
            Case study not found
          </h1>
          <Link to="/portfolio" className="btn-teal">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-ink py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {study.logo && (
              <div
                className={`shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex items-center justify-center p-4 ${
                  study.logoOnLight ? 'bg-white' : 'bg-ink border border-white/10'
                }`}
              >
                <img
                  src={study.logo}
                  alt={study.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            <div className="text-center md:text-left">
              <p className="text-primary-400 font-semibold uppercase tracking-wide text-sm mb-2">
                Case Study · {study.service}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                {study.title}
              </h1>
              <p className="text-white/70 mb-4">{study.industry}</p>
              <p className="text-primary-400 text-lg md:text-xl font-semibold">
                {study.headlineResult}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Situation */}
      <div className="bg-mint py-10 border-b border-primary-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-4 text-center md:text-left">
            The Situation
          </h2>
          <p className="text-body text-lg leading-relaxed text-center md:text-left">
            {study.context}
          </p>
        </div>
      </div>

      {/* What we did + Results */}
      <div className="bg-gradient-to-b from-white to-mint py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          <div className="bg-card rounded-xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-ink mb-6">What We Did</h2>
            <ul className="space-y-4">
              {study.whatWeDid.map((item) => (
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
              {study.results.map((item) => (
                <div
                  key={item}
                  className="bg-mint rounded-xl p-5 border border-primary-100 flex items-start gap-3"
                >
                  <span className="text-primary-500 font-bold mt-0.5">✓</span>
                  <span className="text-ink font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            {study.site && (
              <a
                href={study.site}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal"
              >
                See the Work Live
              </a>
            )}
            <Link to={study.servicePath} className="btn-teal !bg-ink hover:!bg-primary-800">
              {study.service}
            </Link>
            <Link
              to="/portfolio"
              className="inline-block px-8 py-3 rounded-lg border-2 border-primary-500 text-primary-600 font-semibold hover:bg-mint transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative max-w-3xl">
          <p className="text-xl md:text-2xl text-white font-medium mb-8">
            Want results like these for your business?
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
