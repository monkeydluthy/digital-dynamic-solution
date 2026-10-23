import {
  TIERS,
  SITE_ORIGIN,
  ORGANIZATION_ID,
  formatPrice,
  formatSetupFeeRange,
} from './pricing';

export const SOCIAL_MEDIA_PATH = '/social-media';

export const SOCIAL_MEDIA_TITLE =
  'Social Media Management Service | Tampa Bay & Nationwide | DDS';

export const SOCIAL_MEDIA_DESCRIPTION = `Done-for-you social media management service for local businesses and contractors. Content, scheduling, Google Business, and local reach. From ${formatPrice(TIERS[0].price)}/mo, month-to-month.`;

export const SOCIAL_MEDIA_CANONICAL = `${SITE_ORIGIN}${SOCIAL_MEDIA_PATH}`;

export const SOCIAL_MEDIA_FAQS = [
  {
    question: 'What does a social media management service do?',
    answer:
      "It handles your business's social presence for you: planning content, creating posts, scheduling and publishing them, managing your Google Business Profile, and reporting on results. You get consistent visibility without spending your own time on it.",
  },
  {
    question: 'How much does social media management cost?',
    answer: `Our plans are ${formatPrice(TIERS[0].price)}/mo (${TIERS[0].name}), ${formatPrice(TIERS[1].price)}/mo (${TIERS[1].name}), and ${formatPrice(TIERS[2].price)}/mo (${TIERS[2].name}), all month-to-month. There's an optional one-time setup fee of ${formatSetupFeeRange()}.`,
  },
  {
    question: 'Do I have to sign a contract?',
    answer: 'No. Every plan is month-to-month.',
  },
  {
    question: 'Which platforms do you manage?',
    answer:
      'Facebook, Instagram, and Google Business Profile on every plan. Growth and Pro extend to more platforms and add local Facebook group distribution.',
  },
  {
    question: 'Do I need to provide photos?',
    answer:
      "It helps, since real job photos outperform stock. We'll tell you exactly what to capture, and we can work with what you already have.",
  },
  {
    question: 'Do you only work with Tampa businesses?',
    answer:
      "No. We're based in Tampa Bay and work with local businesses nationwide.",
  },
  {
    question: 'How soon will I see results?',
    answer:
      'Consistent posting and an active Google profile show up right away. Growth in followers, reviews, and inquiries builds over the following months, and your monthly report tracks it.',
  },
];

export function buildSocialMediaJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Social Media Management Service',
        serviceType: 'Social Media Management',
        url: SOCIAL_MEDIA_CANONICAL,
        description: SOCIAL_MEDIA_DESCRIPTION,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: [
          { '@type': 'Place', name: 'Tampa Bay, FL' },
          { '@type': 'Country', name: 'United States' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Social Media Management Service',
          itemListElement: TIERS.map((tier) => ({
            '@type': 'Offer',
            name: tier.name,
            price: String(tier.price),
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: String(tier.price),
              priceCurrency: 'USD',
              unitText: 'MONTH',
            },
            url: `${SITE_ORIGIN}/pricing/${tier.slug}`,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: SOCIAL_MEDIA_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_ORIGIN}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${SITE_ORIGIN}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Social Media Management',
            item: SOCIAL_MEDIA_CANONICAL,
          },
        ],
      },
    ],
  };
}
