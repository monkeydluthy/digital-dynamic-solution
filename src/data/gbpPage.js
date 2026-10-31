import { SITE_ORIGIN, ORGANIZATION_ID } from './pricing';
import { buildSeoJsonLd } from './seoPage';

export const GBP_PATH = '/services/google-business-profile';

export const GBP_TITLE =
  'Google Business Profile Optimization in Tampa, FL | DDS';

export const GBP_DESCRIPTION =
  'We set up and optimize Google Business Profiles for Tampa Bay service businesses: categories, services, photos, reviews and accurate listings. Ask for a free look at yours.';

export const GBP_CANONICAL = `${SITE_ORIGIN}${GBP_PATH}`;

export const GBP_CONTACT_PATH = '/contact?ref=google-check';

export const GBP_FEATURES = [
  {
    title: 'Categories and services',
    body: 'The right primary and secondary categories, plus each service you offer listed and described, so Google knows what to show you for.',
  },
  {
    title: 'Photos and posts',
    body: 'Real photos of your work, team and trucks, and regular posts that keep the profile current.',
  },
  {
    title: 'Review requests and replies',
    body: 'A simple way to ask real customers for a review after each job, and a reply to every review, good or bad.',
  },
  {
    title: 'Accurate name, phone and website everywhere',
    body: 'The same business name, phone number and website on your profile, your site and the other listings customers find.',
  },
  {
    title: 'Tracking so you can see calls and clicks from Google',
    body: 'Profile calls and website clicks tracked, so you can see what Google is sending you.',
  },
];

export const GBP_CHECKLIST = [
  'What shows when customers search your business',
  'Your categories and services',
  'How many reviews you have and whether they are answered',
  'Whether your listing details match your site',
  '3 things to fix first',
];

export const GBP_STEPS = [
  {
    title: 'Send your business name and link',
    body: 'Use the contact form or call or text us. That is all we need.',
  },
  {
    title: 'We look at your profile and send short written findings',
    body: 'Plain English, no jargon, and no cost.',
  },
  {
    title: 'Decide if you want help, no pressure',
    body: 'Fix it yourself with the list, or ask us to handle it.',
  },
];

export const GBP_FAQS = [
  {
    question: 'How long does it take to see results?',
    answer:
      'Usually weeks to months. It depends on how many competitors are nearby, how many reviews they have, and how quickly you collect your own. We will not promise a date or a ranking.',
  },
  {
    question: 'Do you buy or write reviews?',
    answer:
      'No. We help you ask real customers and reply to each one.',
  },
  {
    question: 'Do you need access to my account?',
    answer:
      'Only for ongoing work, as a manager you invite. It is never needed for the free look.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Ongoing work is scoped per business. The free look costs nothing.',
  },
];

export function buildGbpJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Google Business Profile Optimization',
    serviceType: 'Local SEO',
    url: GBP_CANONICAL,
    // Same service area as /services/seo.
    areaServed: buildSeoJsonLd().areaServed,
    provider: { '@id': ORGANIZATION_ID },
    description:
      'Google Business Profile setup and optimization for Tampa Bay service businesses: categories, services, photos, posts, review requests and replies, accurate listings, and call and click tracking.',
  };
}
