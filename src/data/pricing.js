export const TIERS = [
  {
    slug: 'starter',
    name: 'Starter',
    price: 400,
    tagline: 'Small local shops getting started online',
    features: [
      '1–2 platforms (Facebook, Instagram)',
      'Content creation & scheduling',
      'Google Business Profile management',
      'Monthly performance report',
    ],
    includesPrevious: null,
  },
  {
    slug: 'growth',
    name: 'Growth',
    price: 750,
    popular: true,
    tagline: 'Growing local businesses ready to scale',
    features: [
      'Multi-platform (adds Google Business + more)',
      'Local Facebook group distribution',
      'Review-generation funnel (QR + links)',
      'Light local SEO',
      'Monthly analytics review',
    ],
    includesPrevious: 'Starter',
  },
  {
    slug: 'pro',
    name: 'Pro',
    price: 1500,
    tagline: 'Established businesses that want the edge',
    features: [
      'Competitive intelligence (via Nexus)',
      'Higher content volume & faster cadence',
      'Priority support & strategy',
      'Advanced monthly reporting',
    ],
    includesPrevious: 'Growth',
  },
];

export const TERMS = {
  setupFee: '$300–$500 one-time setup — optional',
  contract: 'Month-to-month. No long-term lock-in on any plan.',
  custom:
    'Websites, SEO & custom software are custom-quoted and scoped per project.',
};

export const PHONE = { display: '813.997.0321', tel: '+18139970321' };

export const SITE_ORIGIN = 'https://digitaldynamicsolution.com';

export const HUB_FAQS = [
  {
    question: 'Is there a contract?',
    answer:
      "No. Every plan is month-to-month. Stay because it's working, not because you signed something.",
  },
  {
    question: "What's the setup fee for?",
    answer:
      'An optional one-time $300–$500 onboarding covers account audits, profile cleanup, brand setup, and building your first content calendar. The amount depends on how much needs fixing.',
  },
  {
    question: 'Can I switch plans?',
    answer: 'Yes. Move up or down at the start of any month.',
  },
  {
    question: 'What is Nexus?',
    answer:
      "Our in-house platform for scheduling, local Facebook group distribution, and competitor tracking. It's how we deliver more consistency than a freelancer can.",
  },
  {
    question: 'Do you only work in Tampa Bay?',
    answer:
      "We're based in Tampa and work with businesses nationally. One of our clients is a contractor in Connecticut.",
  },
  {
    question: 'What about websites or custom software?',
    answer:
      'Those are quoted per project. See Web Design & SEO or Custom App Development.',
  },
];

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
}

export function getTierBySlug(slug) {
  return TIERS.find((tier) => tier.slug === slug) || null;
}

/** Desktop order: Starter / Growth / Pro. Mobile visual order handled in CSS. */
export function getTierOrderClass(slug) {
  if (slug === 'starter') return 'order-2 md:order-1';
  if (slug === 'growth') return 'order-1 md:order-2';
  return 'order-3 md:order-3';
}
