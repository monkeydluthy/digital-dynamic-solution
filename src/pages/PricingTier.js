import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PricingFaq from '../components/PricingFaq';
import PricingCta from '../components/PricingCta';
import JsonLd from '../components/JsonLd';
import {
  getTierBySlug,
  formatPrice,
  PHONE,
  SITE_ORIGIN,
} from '../data/pricing';
import { PRICING_CONTENT } from '../data/pricingContent';

function PricingTier() {
  const { slug } = useParams();
  const tier = getTierBySlug(slug);
  const content = PRICING_CONTENT[slug];
  const [imageFailed, setImageFailed] = useState(false);

  if (!tier || !content) {
    return <Navigate to="/pricing" replace />;
  }

  const checkColor =
    tier.slug === 'pro' ? 'text-[#7B6CA8]' : 'text-primary-500';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_ORIGIN,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pricing',
            item: `${SITE_ORIGIN}/pricing`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: tier.name,
            item: `${SITE_ORIGIN}/pricing/${tier.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: `${tier.name} Social Media Management`,
        serviceType: 'Social Media Management',
        description: content.meta,
        provider: {
          '@type': 'Organization',
          name: 'Digital Dynamic Solution LLC',
          url: SITE_ORIGIN,
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        offers: {
          '@type': 'Offer',
          price: String(tier.price),
          priceCurrency: 'USD',
          url: `${SITE_ORIGIN}/pricing/${tier.slug}`,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: String(tier.price),
            priceCurrency: 'USD',
            unitText: 'MONTH',
          },
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={schema} id={`pricing-tier-jsonld-${tier.slug}`} />

      <div className="bg-mint/60 border-b border-primary-100">
        <div className="container mx-auto px-4 py-3 text-sm text-body">
          <Link to="/" className="hover:text-primary-600">
            Home
          </Link>
          <span className="mx-2 text-muted">›</span>
          <Link to="/pricing" className="hover:text-primary-600">
            Pricing
          </Link>
          <span className="mx-2 text-muted">›</span>
          <span className="text-ink font-medium">{tier.name}</span>
        </div>
      </div>

      <div className="bg-ink py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative max-w-3xl text-center">
          <p className="text-primary-400 font-semibold uppercase tracking-wide text-sm mb-3">
            Social Media Management
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight leading-tight">
            {content.h1}
          </h1>
          <p className="text-lg text-white/85 mb-6 leading-relaxed">
            {content.subhead}
          </p>
          <p className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-4 py-2 rounded-full text-sm mb-8">
            {formatPrice(tier.price)}/mo · month-to-month
            {tier.popular && (
              <span className="bg-primary-500 text-white text-xs uppercase tracking-wide px-2 py-0.5 rounded-full">
                Most Popular
              </span>
            )}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${PHONE.tel}`}
              className="btn-teal text-lg !px-8 !py-4"
            >
              Call or text {PHONE.display}
            </a>
            <Link
              to="/pricing"
              className="btn-teal-outline text-lg !px-8 !py-4"
            >
              Compare all plans →
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-white to-mint py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-7 border border-primary-100">
              <h2 className="text-xl font-bold text-ink mb-4">Who it&apos;s for</h2>
              <ul className="space-y-3">
                {content.forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className={`${checkColor} font-bold mt-0.5`}>✓</span>
                    <span className="text-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-7 border border-primary-100">
              <h2 className="text-xl font-bold text-ink mb-4">
                Who it&apos;s not for
              </h2>
              <p className="text-body leading-relaxed">{content.notFor}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16 border-y border-primary-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 text-center">
            What&apos;s included
          </h2>
          {tier.includesPrevious && (
            <p className="text-center text-ink font-semibold mb-8">
              Everything in {tier.includesPrevious}, plus:
            </p>
          )}
          <div className="space-y-5">
            {content.featureDetails.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 border border-primary-100"
              >
                <h3 className="text-lg font-bold text-ink mb-2 flex items-start gap-3">
                  <span className={`${checkColor} mt-0.5`} aria-hidden="true">
                    ✓
                  </span>
                  {feature.title}
                </h3>
                <p className="text-body leading-relaxed pl-7">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mint py-14">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            What a month looks like
          </h2>
          <p className="text-body text-lg leading-relaxed">
            {content.monthLooksLike}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {content.proof.type === 'nexus' ? (
            <div className="bg-card rounded-xl border border-primary-100 p-8">
              <h2 className="text-2xl font-bold text-ink mb-6 text-center">
                {content.proof.heading}
              </h2>
              <ul className="space-y-3 mb-8 max-w-md mx-auto">
                {content.proof.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className={`${checkColor} font-bold mt-0.5`}>✓</span>
                    <span className="text-ink font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              {!imageFailed && (
                <div className="mb-6 rounded-xl overflow-hidden border border-primary-100 bg-ink">
                  <img
                    src={content.proof.imageSrc}
                    alt={content.proof.imageAlt}
                    className="w-full h-auto"
                    onError={() => setImageFailed(true)}
                  />
                </div>
              )}
              {imageFailed && (
                <p className="text-muted text-sm text-center mb-6">
                  {content.proof.imageAlt}
                </p>
              )}
              <p className="text-center">
                <Link
                  to={content.proof.link.to}
                  className="text-primary-600 font-semibold hover:text-primary-500"
                >
                  {content.proof.link.label} →
                </Link>
              </p>
            </div>
          ) : (
            <div className="bg-card rounded-xl border border-primary-100 p-8 text-center">
              <h2 className="text-2xl font-bold text-ink mb-4">Proof</h2>
              <p className="text-body text-lg leading-relaxed mb-6">
                {content.proof.body}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {content.proof.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-primary-600 font-semibold hover:text-primary-500"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-b from-mint to-white py-14">
        <div className="container mx-auto px-4">
          <PricingFaq items={content.faqs} heading={`${tier.name} FAQ`} />
        </div>
      </section>

      <section className="bg-white py-12 border-t border-primary-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-mint rounded-xl border border-primary-100 p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-3">
              {content.nextTier.heading}
            </h2>
            <p className="text-body mb-6 leading-relaxed">
              {content.nextTier.body}
            </p>
            {content.nextTier.type === 'tier' ? (
              <Link to={content.nextTier.ctaTo} className="btn-teal">
                {content.nextTier.ctaLabel} →
              </Link>
            ) : (
              <div className="flex flex-wrap gap-4 justify-center">
                {content.nextTier.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="btn-teal !bg-ink hover:!bg-primary-800"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <PricingCta
        heading="Ready to talk through the right plan?"
        subhead="Call or text — we'll tell you honestly which tier fits."
      />
    </div>
  );
}

export default PricingTier;
