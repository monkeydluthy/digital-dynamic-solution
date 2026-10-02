import { SITE_ORIGIN, ORGANIZATION_ID, PHONE } from './pricing';

export const WEB_DESIGN_PATH = '/services/web-design';

export const WEB_DESIGN_TITLE = 'Custom Web Design in Tampa, FL | DDS';

export const WEB_DESIGN_DESCRIPTION =
  'Custom web design for Tampa Bay businesses — built to convert, not just look good. See our work and get a quote.';

export const WEB_DESIGN_CANONICAL = `${SITE_ORIGIN}${WEB_DESIGN_PATH}`;

export const WEB_DESIGN_FAQS = [
  {
    question: 'How long does a custom site take to build?',
    answer:
      'It depends on the scope — number of pages, features, and how much content is ready. We give you a timeline with the quote, before any work starts.',
  },
  {
    question: 'Do you handle hosting and maintenance after launch?',
    answer:
      'Yes. We can keep the site updated, backed up, and supported after launch. Website maintenance is available as an ongoing service.',
  },
  {
    question: 'Can you redesign an existing site, or only build new ones?',
    answer:
      'Either. We build new sites and redesign existing ones when the current site is slow, hard to update, or not bringing in inquiries.',
  },
  {
    question: 'Does this include SEO, or is that separate?',
    answer:
      'A new site is built to be searchable — clear pages, mobile-first, and tracking in place. Ongoing local SEO (rankings, Google Business, content) can be scoped with the build or handled as its own service.',
  },
];

export function buildWebDesignJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Web Design',
    serviceType: 'Web Design',
    url: WEB_DESIGN_CANONICAL,
    areaServed: [
      'Tampa, FL',
      'Lutz, FL',
      'Brandon, FL',
      'Clearwater, FL',
      "Land O' Lakes, FL",
      'Wesley Chapel, FL',
      'St. Petersburg, FL',
    ],
    provider: {
      '@id': ORGANIZATION_ID,
      '@type': 'LocalBusiness',
      name: 'Digital Dynamic Solution',
      url: SITE_ORIGIN,
      telephone: PHONE.tel,
    },
    description:
      "Custom web design for Tampa Bay businesses — hand-built sites designed around the client's actual business and customers, not a template.",
  };
}
