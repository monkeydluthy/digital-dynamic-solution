import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CASE_STUDIES = {
  'ma-stump-grinding': {
    title: 'M&A Stump Grinding',
    result: '39 Google reviews in 5 months',
    summary:
      'Local growth and review velocity for a Tampa-area stump grinding company.',
    site: 'https://mnastumpgrinding.com/',
  },
  'all-structure': {
    title: 'All Structure Maintenance',
    result: 'Lead-gen site, full conversion tracking',
    summary:
      'A lead-generating website with full conversion tracking — every inquiry measured.',
    site: 'https://allstructuremaintenance.com',
  },
  lyfestyle: {
    title: 'Lyfestyle Tattoos',
    result: '0→2,100 followers, built from scratch',
    summary:
      'Website and social media growth for a professional tattoo studio.',
    site: 'https://lyfestyletattoos.com',
  },
  'signature-tree': {
    title: 'Signature Tree & Home',
    result: '100+ new customers from social',
    summary:
      'Social media management that drove new customers for a tree-care company.',
  },
};

function CaseStudy() {
  const { slug } = useParams();
  const study = CASE_STUDIES[slug];

  if (!study) {
    return (
      <div className="min-h-screen bg-mint flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-ink mb-4">Case study not found</h1>
          <Link to="/portfolio" className="btn-teal">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-ink py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="container mx-auto px-4 relative max-w-3xl text-center">
          <p className="text-primary-400 font-semibold uppercase tracking-wide text-sm mb-3">
            Case Study
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {study.title}
          </h1>
          <p className="text-primary-400 text-lg md:text-xl font-semibold mb-8">
            {study.result}
          </p>
          <p className="text-white/90 text-lg mb-8">{study.summary}</p>
          <p className="text-white/70 text-sm mb-8">
            Full case study write-up coming soon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {study.site && (
              <a
                href={study.site}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal"
              >
                Visit Site
              </a>
            )}
            <Link to="/portfolio" className="btn-teal-outline">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-ink py-12 text-center">
        <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
          Call or text 813.997.0321
        </a>
      </div>
    </div>
  );
}

export default CaseStudy;
