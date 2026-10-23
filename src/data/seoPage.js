import { SITE_ORIGIN, ORGANIZATION_ID } from './pricing';

export const SEO_PATH = '/services/seo';

export const SEO_TITLE =
  'SEO in Tampa, FL for Local Service Businesses | DDS';

export const SEO_DESCRIPTION =
  'Local SEO for Tampa Bay service businesses: technical fixes, Google Business work, and a plain-English monthly report. Get a free quote.';

export const SEO_CANONICAL = `${SITE_ORIGIN}${SEO_PATH}`;

export const SEO_INDUSTRIES = [
  {
    title: 'Contractors and home services',
    body: 'Homeowners search “near me” the moment something breaks or needs cutting. We set up your Google Business Profile, service pages and reviews so you show up when they do.',
    note: 'Tree care, roofing, stump grinding, maintenance',
    to: '/case-studies/ma-stump-grinding',
  },
  {
    title: 'Restaurants and cafes',
    body: 'Menus, hours and directions are the most searched things about a restaurant. We keep them accurate across Google, Maps and your site.',
  },
  {
    title: 'Salons, barbershops and tattoo studios',
    body: 'Booking intent is local and visual. We build the pages, profile and photo content that turn searches into appointments.',
  },
  {
    title: 'Pool and outdoor services',
    body: 'Seasonal demand means the pages and profile need to be right before the rush, not during it.',
  },
  {
    title: 'Law firms and professional services',
    body: 'Clients compare a few firms before calling. Clear practice pages and a trusted local profile make yours one of them.',
  },
];

export const SEO_FAQS = [
  {
    question: 'How long until I see results?',
    answer:
      'Google Business and map results can start moving in roughly 4–8 weeks. Rankings for competitive search terms usually take 3–6 months. We report what moved and what did not. A number we cannot measure is shown as “not measured”, never as zero.',
  },
  {
    question: 'Do you guarantee page one?',
    answer:
      'No. Nobody can honestly guarantee that. We track your rankings and calls monthly and show you what is moving.',
  },
  {
    question: 'Do I need a new website?',
    answer:
      'Not always. We fix what is blocking Google on your current site. If the site cannot be fixed, we will say so and point you to custom web design.',
  },
  {
    question: 'What do I get each month?',
    answer:
      'A one-page monthly report in plain English: calls and leads, Google Business numbers, search impressions and clicks, what was done, and what is next.',
  },
  {
    question: 'Do you work outside Tampa?',
    answer:
      'Yes. Most clients are in the Tampa Bay area, and we also run SEO and site maintenance for a contractor in Connecticut.',
  },
];

export function buildSeoJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Local SEO',
    serviceType: 'Search Engine Optimization',
    url: SEO_CANONICAL,
    areaServed: [
      'Tampa, FL',
      'Lutz, FL',
      'Brandon, FL',
      'Clearwater, FL',
      "Land O' Lakes, FL",
      'Wesley Chapel, FL',
      'St. Petersburg, FL',
    ],
    provider: { '@id': ORGANIZATION_ID },
    description:
      'Local SEO for Tampa Bay service businesses: technical fixes, Google Business Profile work, on-page optimization, and plain-English monthly reporting.',
  };
}
