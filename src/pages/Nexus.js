import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
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

const SWIPE_THRESHOLD = 50;

function Nexus() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const touchStartX = useRef(null);
  const isOpen = lightboxIndex !== null;
  const active = isOpen ? screenshots[lightboxIndex] : null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + screenshots.length) % screenshots.length
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? i : (i + 1) % screenshots.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeLightbox, showPrev, showNext]);

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta > 0) showPrev();
    else showNext();
  };

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
            {screenshots.map((shot, index) => (
              <figure key={shot.title} className="group">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="w-full text-left overflow-hidden rounded-xl border border-primary-100 bg-ink shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  aria-label={`View ${shot.title} screenshot larger`}
                >
                  <img
                    src={shot.src}
                    alt={`Nexus ${shot.title} view`}
                    className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </button>
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

      {/* Lightbox */}
      {isOpen && active && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-ink/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} screenshot`}
          onClick={closeLightbox}
        >
          <div className="flex items-center justify-between px-4 py-3 md:px-6 shrink-0">
            <p className="text-white font-semibold text-sm md:text-base">
              {active.title}
              <span className="text-white/50 font-normal ml-2">
                {lightboxIndex + 1} / {screenshots.length}
              </span>
            </p>
            <button
              type="button"
              onClick={closeLightbox}
              className="text-white/80 hover:text-white p-2 rounded-lg transition-colors"
              aria-label="Close gallery"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center min-h-0 px-12 md:px-16"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 md:left-4 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous screenshot"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <img
              src={active.src}
              alt={`Nexus ${active.title} view`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl select-none"
              draggable={false}
            />

            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 md:right-4 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next screenshot"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="shrink-0 px-4 pb-6 pt-3 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/70 text-sm mb-4 max-w-lg mx-auto">
              {active.caption}
            </p>
            <div className="flex items-center justify-center gap-2.5" role="tablist" aria-label="Screenshot navigation">
              {screenshots.map((shot, index) => (
                <button
                  key={shot.title}
                  type="button"
                  role="tab"
                  aria-selected={index === lightboxIndex}
                  aria-label={`Go to ${shot.title}`}
                  onClick={() => setLightboxIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === lightboxIndex
                      ? 'w-6 bg-primary-400'
                      : 'w-2.5 bg-white/35 hover:bg-white/55'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nexus;
