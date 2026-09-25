import { Link } from 'react-router-dom';
import PricingTierCard from '../components/PricingTierCard';
import PricingTermsStrip from '../components/PricingTermsStrip';
import PricingFaq from '../components/PricingFaq';
import PricingCta from '../components/PricingCta';
import JsonLd from '../components/JsonLd';
import {
  TIERS,
  HUB_FAQS,
  PHONE,
  SITE_ORIGIN,
  formatPrice,
  getTierOrderClass,
} from '../data/pricing';

function Pricing() {
  const offerSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: HUB_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      ...TIERS.map((tier) => ({
        '@type': 'Offer',
        name: `${tier.name} Social Media Management`,
        price: String(tier.price),
        priceCurrency: 'USD',
        url: `${SITE_ORIGIN}/pricing/${tier.slug}`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(tier.price),
          priceCurrency: 'USD',
          unitText: 'MONTH',
        },
      })),
    ],
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={offerSchema} id="pricing-hub-jsonld" />

      <div className="bg-ink py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Social Media Packages
          </h1>
          <p className="text-lg md:text-xl text-primary-400 mb-6 font-medium leading-relaxed">
            Three straightforward, done-for-you tiers scaled to where your
            business is. Everything is month-to-month, so we earn the next month
            every month.
          </p>
          <p className="text-white/80 leading-relaxed">
            Not sure which fits? Call us and we&apos;ll tell you honestly, even
            if that means the smaller plan.{' '}
            <a
              href={`tel:${PHONE.tel}`}
              className="text-primary-400 font-semibold hover:text-primary-300"
            >
              {PHONE.display}
            </a>
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-mint py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {TIERS.map((tier) => (
              <PricingTierCard
                key={tier.slug}
                tier={tier}
                showDetailsLink
                className={getTierOrderClass(tier.slug)}
              />
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8">
            Plans from {formatPrice(TIERS[0].price)}–
            {formatPrice(TIERS[2].price)}/mo · month-to-month
          </p>
        </div>
      </div>

      <PricingTermsStrip />

      <section className="bg-white py-14 border-y border-primary-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            Why we publish our prices.
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Most agencies hide pricing behind a sales call. We&apos;d rather you
            know exactly what you&apos;re paying and what you get before you ever
            pick up the phone.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-mint to-white py-16">
        <div className="container mx-auto px-4">
          <PricingFaq items={HUB_FAQS} />
          <p className="text-center text-sm text-muted mt-6 max-w-2xl mx-auto">
            Looking for websites or custom software? See{' '}
            <Link
              to="/web-design-seo"
              className="text-primary-600 font-semibold hover:text-primary-500"
            >
              Web Design &amp; SEO
            </Link>{' '}
            or{' '}
            <Link
              to="/app-development"
              className="text-primary-600 font-semibold hover:text-primary-500"
            >
              Custom App Development
            </Link>
            .
          </p>
        </div>
      </section>

      <PricingCta />
    </div>
  );
}

export default Pricing;
