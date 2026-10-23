import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd';
import PricingCta from '../components/PricingCta';
import PricingFaq from '../components/PricingFaq';
import PricingTierCard from '../components/PricingTierCard';
import {
  TIERS,
  PHONE,
  formatPrice,
  formatSetupFeeRange,
  getTierOrderClass,
} from '../data/pricing';
import {
  SOCIAL_MEDIA_FAQS,
  buildSocialMediaJsonLd,
} from '../data/socialMediaPage';
import signatureTreeLogo from '../assets/images/signature-tree-logo.png';
import lyfestyleLogo from '../assets/images/lyfestyle-logo.png';
import mnaStumpLogo from '../assets/images/mna-stump.jpg';

const problems = [
  {
    title: 'Posting stops when work gets busy.',
    body: "Accounts go quiet for weeks, and customers checking you out assume you're closed or slow.",
  },
  {
    title: "Posts don't reach local buyers.",
    body: 'Random content with no local distribution gets likes from friends, not calls from customers.',
  },
  {
    title: 'No one connects it to results.',
    body: "Without tracking, there's no way to tell whether social is actually bringing in jobs.",
  },
];

const included = [
  {
    title: 'Strategy & content calendar',
    body: 'A monthly plan built around your services, seasons, and the jobs you actually want more of.',
  },
  {
    title: 'Content creation',
    body: 'Posts written and designed for you, using your real job photos wherever possible because real work outperforms stock.',
  },
  {
    title: 'Scheduling & publishing',
    body: 'Consistent posting on Facebook, Instagram, and your Google Business Profile, handled through Nexus, our in-house platform.',
  },
  {
    title: 'Google Business Profile management',
    body: 'Fresh posts, photos, and updates on the profile that shows up when people search for you on Google and Maps.',
  },
  {
    title: 'Local Facebook group distribution',
    body: 'Your work shared in the community groups where neighbors ask for recommendations. (Growth and Pro plans.)',
  },
  {
    title: 'Reporting you can read',
    body: "A plain-English monthly report on what went out, what worked, and what's next.",
  },
];

const steps = [
  {
    title: 'Discovery call.',
    body: 'We learn your business, your market, and your goals, and tell you honestly which plan fits.',
  },
  {
    title: 'Setup.',
    body: `Profiles are audited and cleaned up, branding is set, and your first content calendar is built. Optional one-time setup fee of ${formatSetupFeeRange()}.`,
  },
  {
    title: 'Content goes live.',
    body: 'You approve the plan, then we create, schedule, and publish throughout the month.',
  },
  {
    title: 'Review & adjust.',
    body: "Monthly reporting shows what's working, and we double down on it.",
  },
];

const caseStudies = [
  {
    title: 'Signature Tree & Home',
    industry: 'Tree care, Tampa Bay',
    result:
      '100+ new customers from social. Facebook grown from 50 to 538 followers, Instagram from 0 to 1,200, and 48 Google reviews added.',
    to: '/case-studies/signature-tree',
    logo: signatureTreeLogo,
    logoWidth: 421,
    logoHeight: 140,
    logoOnLight: true,
    alt: 'Signature Tree & Home logo — social media management results in Tampa Bay',
  },
  {
    title: 'Lyfestyle Tattoos',
    industry: 'Tattoo studio',
    result:
      '75+ new clients, and a brand-new channel grown from 0 to 2,100 followers.',
    to: '/case-studies/lyfestyle',
    logo: lyfestyleLogo,
    logoWidth: 2000,
    logoHeight: 1500,
    logoOnLight: false,
    alt: 'Lyfestyle Tattoos logo — social media growth for a Tampa Bay studio',
  },
  {
    title: 'M&A Stump Grinding',
    industry: 'Stump grinding',
    result:
      '39 Google reviews earned on a brand-new Google Business Profile.',
    to: '/case-studies/ma-stump-grinding',
    logo: mnaStumpLogo,
    logoWidth: 407,
    logoHeight: 416,
    logoOnLight: true,
    alt: 'M&A Stump Grinding logo — Google Business Profile results',
  },
];

const industries = [
  'Roofing',
  'Tree Care',
  'HVAC',
  'Plumbing',
  'Landscaping',
  'Restoration',
  'Med Spa',
  'Dental',
  'Chiropractic',
];

function SocialMedia() {
  const starterPrice = formatPrice(TIERS[0].price);

  return (
    <div className="min-h-screen">
      <JsonLd data={buildSocialMediaJsonLd()} id="social-media-jsonld" />

      {/* 1. Hero */}
      <section className="bg-ink py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-white/70 mb-8 max-w-6xl mx-auto"
          >
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
              <li className="text-white font-medium">Social Media Management</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <p className="text-primary-400 font-semibold uppercase tracking-wide text-sm mb-3">
                Social Media Management
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight leading-tight">
                Social Media Management Service for Local Businesses &amp;
                Contractors
              </h1>
              <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
                We plan, create, and post your content, keep your Google Business
                Profile active, and get your work in front of local customers.
                Everything is done for you and month-to-month.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href={`tel:${PHONE.tel}`}
                  data-location="social_media"
                  className="btn-teal text-lg !px-8 !py-4"
                >
                  Call or text {PHONE.display}
                </a>
                <Link
                  to="/pricing"
                  className="btn-teal-outline text-lg !px-8 !py-4"
                >
                  See plans &amp; pricing
                </Link>
              </div>
              <p className="mt-5 text-white/70 text-sm md:text-base">
                From {starterPrice}/mo · No contracts · Serving Tampa Bay &amp;
                nationwide
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/original-logo.png`}
                  alt="Social media management service from Digital Dynamic Solution in Tampa Bay"
                  width={1024}
                  height={1024}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
            A social media management service built for businesses that are busy
            doing the work
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Most local business owners know they should be posting. Few of them
            have the time. Our social media management service takes the whole
            job off your plate: strategy, content, scheduling, Google Business
            Profile updates, and reporting. You stay focused on your customers
            while your business stays visible, consistent, and easy to trust
            online. We work with home-service contractors and local businesses
            in Tampa Bay and across the country, and every plan is
            month-to-month, so we earn your business every month.
          </p>
        </div>
      </section>

      {/* 3. The problem */}
      <section className="bg-gradient-to-b from-mint to-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            Why most small business social media stalls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 md:p-8 border border-primary-100"
              >
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What's included */}
      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            What our social media management services include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 border border-primary-100"
              >
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="bg-mint py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-10 text-center">
            How it works
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
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

      {/* 6. Nexus */}
      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
            Powered by Nexus, our own social media platform
          </h2>
          <p className="text-body text-lg leading-relaxed mb-8">
            Most small agencies run on off-the-shelf scheduling tools. We built
            our own. Nexus handles scheduling across clients, distributes content
            to local Facebook groups, and tracks what competitors in your market
            are posting and what&apos;s getting engagement. That means more
            consistency than a freelancer can offer and more local focus than a
            big agency will give you.
          </p>
          <div className="rounded-xl overflow-hidden border border-primary-100 bg-ink mb-6">
            <img
              src={`${process.env.PUBLIC_URL}/images/nexus-competitive-intel.png`}
              alt="Nexus competitive intelligence dashboard used in our social media management service"
              width={1024}
              height={530}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center">
            <Link
              to="/nexus"
              className="text-primary-600 font-semibold hover:text-primary-500"
            >
              Learn about Nexus →
            </Link>
          </p>
        </div>
      </section>

      {/* 7. Results */}
      <section className="bg-gradient-to-b from-mint to-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            Results from real local businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.to}
                to={study.to}
                className="bg-card rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <div
                  className={`h-24 mb-5 rounded-lg overflow-hidden flex items-center justify-center p-3 ${
                    study.logoOnLight ? 'bg-white' : 'bg-ink'
                  }`}
                >
                  <img
                    src={study.logo}
                    alt={study.alt}
                    width={study.logoWidth}
                    height={study.logoHeight}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-ink mb-1">{study.title}</h3>
                <p className="text-primary-600 text-sm font-semibold mb-3">
                  {study.industry}
                </p>
                <p className="text-body leading-relaxed flex-grow">
                  {study.result}
                </p>
                <span className="text-primary-600 font-semibold text-sm mt-4">
                  Read the case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Who we work with */}
      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
            Social media management for contractors and local service businesses
          </h2>
          <p className="text-body text-lg leading-relaxed mb-8">
            We specialize in businesses where trust, reviews, and local
            reputation drive the sale. That includes home-service contractors
            and high-ticket local services.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 mb-6">
            {industries.map((label) => (
              <li
                key={label}
                className="bg-mint text-ink font-semibold text-sm px-4 py-2 rounded-full border border-primary-100"
              >
                {label}
              </li>
            ))}
          </ul>
          <p className="text-body leading-relaxed">
            We&apos;re based in Tampa and work with businesses nationwide,
            including a general contractor in Connecticut.
          </p>
        </div>
      </section>

      {/* 9. Plans preview */}
      <section className="bg-gradient-to-b from-white to-mint py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            Simple, public pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TIERS.map((tier) => (
              <PricingTierCard
                key={tier.slug}
                tier={tier}
                compact
                className={getTierOrderClass(tier.slug)}
              />
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8">
            All plans month-to-month · optional {formatSetupFeeRange()} setup
          </p>
          <p className="text-center mt-4">
            <Link
              to="/pricing"
              className="text-primary-600 font-semibold hover:text-primary-500"
            >
              Compare all plans →
            </Link>
          </p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4">
          <PricingFaq
            items={SOCIAL_MEDIA_FAQS}
            heading="Social media management service FAQ"
          />
        </div>
      </section>

      {/* 11. Final CTA */}
      <PricingCta />
    </div>
  );
}

export default SocialMedia;
