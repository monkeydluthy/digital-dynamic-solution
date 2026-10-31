import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd';
import PricingFaq from '../components/PricingFaq';
import { PHONE } from '../data/pricing';
import {
  GBP_CHECKLIST,
  GBP_CONTACT_PATH,
  GBP_FAQS,
  GBP_FEATURES,
  GBP_STEPS,
  buildGbpJsonLd,
} from '../data/gbpPage';
import mnaStumpLogo from '../assets/images/mna-stump.jpg';

function GoogleBusinessProfile() {
  return (
    <div className="min-h-screen">
      <JsonLd data={buildGbpJsonLd()} id="gbp-jsonld" />

      <section className="bg-ink py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-8">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link to="/services" className="hover:text-primary-400">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white font-medium">Google Business Profile</li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-primary-400 font-semibold uppercase tracking-wide text-sm mb-3">
              Google Business Profile
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight leading-tight">
              Google Business Profile Optimization for Tampa Bay Businesses
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl mx-auto">
              When someone nearby searches for what you do, your Google profile
              is often the first thing they see.
            </p>
            <div className="flex justify-center">
              <Link
                to={GBP_CONTACT_PATH}
                data-cta="gbp_hero"
                className="btn-teal text-lg !px-8 !py-4 text-center"
              >
                Get a free look at your Google profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            What we set up and optimize
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GBP_FEATURES.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 md:p-8 border border-primary-100"
              >
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto text-center mt-8">
            Google Business Profile work is one part of our{' '}
            <Link
              to="/services/seo"
              className="text-primary-600 font-semibold hover:text-primary-500"
            >
              Local SEO service
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-mint py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
            What the free look covers
          </h2>
          <ul className="bg-card rounded-xl p-6 md:p-8 border border-primary-100 space-y-3 mb-6">
            {GBP_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body text-lg">
                <span
                  className="text-primary-500 font-bold shrink-0"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-body text-lg leading-relaxed text-center mb-3">
            Written findings, no cost.
          </p>
          <p className="text-body text-lg leading-relaxed text-center font-medium">
            We only need your business name and a link. We never ask for logins
            or account access.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-10 text-center">
            How it works
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GBP_STEPS.map((step, index) => (
              <li key={step.title} className="text-center md:text-left">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white font-bold mb-4">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-body leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mint py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            Work we have done
          </h2>
          <Link
            to="/case-studies/ma-stump-grinding"
            className="bg-card rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-6 items-center"
          >
            <div className="h-28 w-28 shrink-0 rounded-lg overflow-hidden flex items-center justify-center p-3 bg-white">
              <img
                src={mnaStumpLogo}
                alt="M&A Stump Grinding logo — Google Business Profile work in Tampa Bay"
                width={407}
                height={416}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-ink mb-2">
                M&amp;A Stump Grinding
              </h3>
              <p className="text-body leading-relaxed">
                39 Google reviews in 6 months on a brand-new profile
              </p>
              <span className="inline-block text-primary-600 font-semibold text-sm mt-4">
                Read the case study →
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4">
          <PricingFaq items={GBP_FAQS} heading="Google Business Profile FAQ" />
        </div>
      </section>

      <section className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to know how your profile looks?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Send your business name and a link. We&apos;ll send short written
            findings, at no cost.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to={GBP_CONTACT_PATH}
              data-cta="gbp_bottom"
              className="btn-teal text-lg !px-8 !py-4 text-center"
            >
              Get a free look at your Google profile
            </Link>
            <a
              href={`tel:${PHONE.tel}`}
              data-location="gbp_page_bottom_cta"
              className="btn-teal-outline text-lg !px-8 !py-4"
            >
              Call or text {PHONE.display}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoogleBusinessProfile;
