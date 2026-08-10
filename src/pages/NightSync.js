import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import homeShot from '../assets/images/nightsync/home.png';
import venueShot from '../assets/images/nightsync/venue.png';
import eventShot from '../assets/images/nightsync/event.png';
import venueDashboardShot from '../assets/images/nightsync/venue-dashboard.png';

const whatWeDid = [
  'Full product design: 18 screens mapped across desktop and tablet, organized by real user flows.',
  'Engineered on a modern, scalable stack: React / Next.js, Supabase, and Tailwind CSS, deployed on Netlify.',
  'End-to-end ownership — UX design, front end, backend, and data — under a milestone-based build.',
];

const results = [
  'Concept → shippable product — the full journey',
  'A complete, buildable experience, not just mockups',
];

const screenshots = [
  {
    src: homeShot,
    title: 'Home',
    caption: 'Hotspots, weekly challenges, and leaderboard — the night starts here.',
  },
  {
    src: venueShot,
    title: "Who's Here",
    caption: 'See live groups at a venue and check in with friends.',
  },
  {
    src: eventShot,
    title: 'Events',
    caption: 'Event details, who’s going, and ticket purchase in one flow.',
  },
  {
    src: venueDashboardShot,
    title: 'Venue Dashboard',
    caption: 'Live traffic, DJ lineup, hotspots, and ticket sales for venues.',
  },
];

const SWIPE_THRESHOLD = 50;

function NightSync() {
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
              Inside the product
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {screenshots.map((shot, index) => (
                <figure key={shot.title} className="group">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="w-full text-left overflow-hidden rounded-2xl border border-primary-100 bg-ink shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    aria-label={`View ${shot.title} screenshot larger`}
                  >
                    <img
                      src={shot.src}
                      alt={`NightSync ${shot.title} screen`}
                      className="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </button>
                  <figcaption className="mt-3 px-1 text-center sm:text-left">
                    <p className="text-ink font-semibold text-sm md:text-base">
                      {shot.title}
                    </p>
                    <p className="text-muted text-xs md:text-sm mt-0.5 hidden sm:block">
                      {shot.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
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
              Want something like this for your idea? We design and build the
              full product — UX, front end, and backend.
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
              alt={`NightSync ${active.title} screen`}
              className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl select-none"
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
            <div
              className="flex items-center justify-center gap-2.5"
              role="tablist"
              aria-label="Screenshot navigation"
            >
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

export default NightSync;
