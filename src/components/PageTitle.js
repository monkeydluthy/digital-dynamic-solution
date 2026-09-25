import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { getTierBySlug, SITE_ORIGIN } from '../data/pricing';
import { PRICING_CONTENT } from '../data/pricingContent';

export const DEFAULT_TITLE =
  'DDS – Tampa Bay Digital Marketing for Local Service Businesses';

export const DEFAULT_DESCRIPTION =
  'Tampa Bay digital marketing for local service businesses — social media, web design, SEO, and custom software. Month-to-month, with tracked results.';

const CASE_STUDY_TITLES = {
  'signature-tree':
    'DDS – Signature Tree & Home | Tampa Bay Digital Marketing Case Study',
  'ma-stump-grinding':
    'DDS – M&A Stump Grinding | Tampa Bay Digital Marketing Case Study',
  'all-structure':
    'DDS – All Structure Maintenance | Tampa Bay Digital Marketing Case Study',
  lyfestyle:
    'DDS – Lyfestyle Tattoos | Tampa Bay Digital Marketing Case Study',
};

const PAGE_META = [
  {
    path: '/',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/services',
    title: 'DDS – Tampa Bay Digital Marketing Services for Local Businesses',
    description:
      'Social media, web design & SEO, and custom apps for Tampa Bay local service businesses — month-to-month, with tracked results.',
  },
  {
    path: '/pricing',
    title: 'Social Media Management Pricing | Tampa Bay | DDS',
    description:
      'Transparent social media management pricing for local businesses: Starter $400, Growth $750, Pro $1,500 per month. Month-to-month, no contracts.',
  },
  {
    path: '/about',
    title: 'DDS – Tampa Bay Digital Marketing Agency for Local Service Businesses',
    description:
      'Digital Dynamic Solution is a Tampa Bay digital marketing agency helping local service businesses get found, followed, and booked.',
  },
  {
    path: '/contact',
    title: 'DDS – Contact Tampa Bay Digital Marketing for Local Service Businesses',
    description:
      'Talk with DDS about Tampa Bay digital marketing for your local service business — call or text 813.997.0321.',
  },
  {
    path: '/portfolio',
    title: 'DDS – Tampa Bay Digital Marketing Portfolio for Local Service Businesses',
    description:
      'Real Tampa Bay digital marketing work for local service businesses, contractors, and custom products.',
  },
  {
    path: '/web-design',
    title: 'DDS – Tampa Bay Web Design & SEO for Local Service Businesses',
    description:
      'Custom, search-optimized websites for Tampa Bay contractors and local service businesses — built to turn searches into booked work.',
  },
  {
    path: '/web-design-seo',
    title: 'DDS – Tampa Bay Web Design & SEO for Local Service Businesses',
    description:
      'Custom, search-optimized websites for Tampa Bay contractors and local service businesses — built to turn searches into booked work.',
  },
  {
    path: '/internet-marketing',
    title: 'DDS – Tampa Bay Internet Marketing for Local Service Businesses',
    description:
      'Internet marketing for Tampa Bay local service businesses — campaigns, tracking, and ROI focused on booked work.',
  },
  {
    path: '/consulting',
    title: 'DDS – Tampa Bay Custom App Development for Local Service Businesses',
    description:
      'Custom web apps, SaaS, and automation for Tampa Bay local service businesses — from first wireframe to launched product.',
  },
  {
    path: '/app-development',
    title: 'DDS – Tampa Bay Custom App Development for Local Service Businesses',
    description:
      'Custom web apps, SaaS, and automation for Tampa Bay local service businesses — from first wireframe to launched product.',
  },
  {
    path: '/social-media',
    title: 'DDS – Tampa Bay Social Media Management for Local Service Businesses',
    description:
      'Done-for-you social media for Tampa Bay local service businesses — content, distribution, reviews, and reporting.',
  },
  {
    path: '/seo',
    title: 'DDS – Tampa Bay SEO for Local Service Businesses',
    description:
      'Local SEO for Tampa Bay service businesses — get found in search and Maps when nearby customers are ready to book.',
  },
  {
    path: '/logo-design',
    title: 'DDS – Tampa Bay Logo Design for Local Service Businesses',
    description:
      'Logo and brand identity design for Tampa Bay local service businesses.',
  },
  {
    path: '/website-maintenance',
    title: 'DDS – Tampa Bay Website Maintenance for Local Service Businesses',
    description:
      'Website monitoring, updates, backups, and support for Tampa Bay local service businesses.',
  },
  {
    path: '/sm-maintenance',
    title: 'DDS – Tampa Bay Social Media Maintenance for Local Service Businesses',
    description:
      'Ongoing social media management for Tampa Bay local service businesses — consistent posting, reviews, and reporting.',
  },
  {
    path: '/content-creation',
    title: 'DDS – Tampa Bay Content Creation for Local Service Businesses',
    description:
      'Content creation for Tampa Bay local service businesses — writing and creative that supports bookings and local SEO.',
  },
  {
    path: '/nexus',
    title: 'DDS – Nexus | Tampa Bay Marketing Intelligence Platform',
    description:
      'Nexus is the Tampa Bay marketing intelligence platform DDS built to run multi-client social and marketing operations.',
  },
  {
    path: '/nightsync',
    title: 'DDS – NightSync | Tampa Bay Nightlife App',
    description:
      'NightSync is a Tampa Bay nightlife social web app designed and built by Digital Dynamic Solution.',
  },
];

function setMetaContent(selector, content) {
  const el = document.querySelector(selector);
  if (el && content) {
    el.setAttribute('content', content);
  }
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function getPageMeta(pathname) {
  const caseMatch = matchPath(
    { path: '/case-studies/:slug', end: true },
    pathname
  );
  if (caseMatch) {
    const slug = caseMatch.params.slug;
    return {
      title:
        CASE_STUDY_TITLES[slug] ||
        'DDS – Tampa Bay Digital Marketing Case Study',
      description:
        'A Tampa Bay digital marketing case study from Digital Dynamic Solution — results for a local service business.',
      canonical: `${SITE_ORIGIN}/case-studies/${slug}`,
    };
  }

  const pricingMatch = matchPath(
    { path: '/pricing/:slug', end: true },
    pathname
  );
  if (pricingMatch) {
    const slug = pricingMatch.params.slug;
    const tier = getTierBySlug(slug);
    const content = PRICING_CONTENT[slug];
    if (tier && content) {
      return {
        title: content.title,
        description: content.meta,
        canonical: `${SITE_ORIGIN}/pricing/${slug}`,
      };
    }
  }

  const page = PAGE_META.find((entry) =>
    matchPath({ path: entry.path, end: true }, pathname)
  );

  if (page) {
    return {
      title: page.title,
      description: page.description,
      canonical: `${SITE_ORIGIN}${page.path === '/' ? '/' : page.path}`,
    };
  }

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_ORIGIN}${pathname}`,
  };
}

function PageTitle() {
  const { pathname } = useLocation();
  const { title, description, canonical } = getPageMeta(pathname);

  useEffect(() => {
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonical);
    setMetaContent('meta[property="twitter:title"]', title);
    setMetaContent('meta[property="twitter:description"]', description);
    setMetaContent('meta[property="twitter:url"]', canonical);
    setCanonical(canonical);
  }, [title, description, canonical]);

  return null;
}

export default PageTitle;
