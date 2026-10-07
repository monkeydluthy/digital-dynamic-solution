import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd';
import PricingCta from '../components/PricingCta';
import PricingFaq from '../components/PricingFaq';
import RelatedServices from '../components/RelatedServices';
import { PHONE } from '../data/pricing';
import {
  WEB_DESIGN_FAQS,
  buildWebDesignJsonLd,
} from '../data/webDesignPage';
import nightSyncHome from '../assets/images/nightsync/home.png';
import mnaStumpLogo from '../assets/images/mna-stump.jpg';
import allStructureLogo from '../assets/images/all-structure.png';
import dagesServicesLogo from '../assets/images/dages-services-logo.png';

const steps = [
  {
    title: 'Discovery',
    body: 'Understand the business, the customer, and what the site needs to do — not just look like.',
  },
  {
    title: 'Design',
    body: 'A real mockup before any code gets written, so there are no surprises.',
  },
  {
    title: 'Build',
    body: 'Hand-coded in React, mobile-first, with a focus on fast load times.',
  },
  {
    title: 'Launch & support',
    body: 'The site goes live, and ongoing maintenance is available if you want us to keep it current.',
  },
];

const proof = [
  {
    title: 'NightSync',
    description:
      'Nightlife social web app — designed and built end to end in React / Next.js.',
    to: '/nightsync',
    image: nightSyncHome,
    imageWidth: 234,
    imageHeight: 584,
    alt: 'NightSync home screen from a custom Tampa web app build',
    logoOnLight: false,
  },
  {
    title: 'M&A Stump Grinding',
    description:
      'Website and local growth for a stump grinding company in Thonotosassa, FL.',
    to: '/case-studies/ma-stump-grinding',
    href: 'https://mnastumpgrinding.com/',
    image: mnaStumpLogo,
    imageWidth: 407,
    imageHeight: 416,
    alt: 'M&A Stump Grinding logo — custom website and local growth',
    logoOnLight: true,
  },
  {
    title: 'All Structure Maintenance',
    description:
      'Custom lead-gen site with conversion tracking, plus ongoing website maintenance.',
    to: '/case-studies/all-structure',
    href: 'https://allstructuremaintenance.com',
    image: allStructureLogo,
    imageWidth: 500,
    imageHeight: 500,
    alt: 'All Structure Maintenance logo — custom web design and maintenance',
    logoOnLight: true,
  },
  {
    title: 'Dages Services',
    description:
      'Lead-generating website for a Plant City tree service — forms, job portfolio, and an owner admin.',
    href: 'https://dagesservices.com',
    image: dagesServicesLogo,
    imageWidth: 192,
    imageHeight: 192,
    alt: 'Dages Services logo — custom website for a Plant City tree service',
    logoOnLight: true,
  },
];

function ProofCard({ item }) {
  const inner = (
    <>
      <div
        className={`h-28 mb-5 rounded-lg overflow-hidden flex items-center justify-center p-3 ${
          item.logoOnLight ? 'bg-white' : 'bg-ink'
        }`}
      >
        <img
          src={item.image}
          alt={item.alt}
          width={item.imageWidth}
          height={item.imageHeight}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
      <p className="text-body leading-relaxed flex-grow">{item.description}</p>
      <span className="text-primary-600 font-semibold text-sm mt-4">
        {item.to ? 'See the work →' : 'Visit the site →'}
      </span>
    </>
  );

  const className =
    'bg-card rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow flex flex-col h-full';

  if (item.to) {
    return (
      <Link to={item.to} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  );
}

function WebDesign() {
  return (
    <div className="min-h-screen">
      <JsonLd data={buildWebDesignJsonLd()} id="web-design-jsonld" />

      <section className="bg-ink py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-white/70 mb-8"
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
              <li className="text-white font-medium">Custom Web Design</li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-primary-400 font-semibold uppercase tracking-wide text-sm mb-3">
              Tampa Web Design
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight leading-tight">
              Custom Web Design for Tampa Bay Businesses
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl mx-auto">
              A website built for your business, not a template — designed,
              built, and launched by a team that also handles your SEO and
              social media.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-teal text-lg !px-8 !py-4">
                Get a free quote
              </Link>
              <a
                href={`tel:${PHONE.tel}`}
                className="btn-teal-outline text-lg !px-8 !py-4"
              >
                Call or text {PHONE.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
            What &quot;custom&quot; actually means here
          </h2>
          <p className="text-body text-lg leading-relaxed mb-4">
            Most small-business sites start as a theme: pick a layout, swap the
            colors, drop in photos. That works until you need the site to match
            how you actually get hired.
          </p>
          <p className="text-body text-lg leading-relaxed">
            Our custom web design is hand-coded in React around your services,
            service area, and the calls you want — not a template with your
            logo pasted on. Pages, forms, and tracking are built for your
            customer, then launched so you can see what turns into inquiries.
          </p>
        </div>
      </section>

      <section className="bg-mint py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-10 text-center">
            How a site gets built
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

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            Sites we&apos;ve actually built
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proof.map((item) => (
              <ProofCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-mint to-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
            What it costs
          </h2>
          <p className="text-body text-lg leading-relaxed mb-6">
            Every site is scoped individually — pages, features, and whether
            you need SEO or maintenance alongside the build. There isn&apos;t a
            one-size price on the site because the work isn&apos;t one-size.
          </p>
          <p className="text-body text-lg leading-relaxed mb-8">
            Get a free quote and we&apos;ll tell you what the project actually
            takes. After launch, website maintenance is available if you want
            us to keep it updated.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-teal">
              Get a free quote
            </Link>
            <Link
              to="/website-maintenance"
              className="text-primary-600 font-semibold hover:text-primary-500 self-center"
            >
              Website maintenance →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4">
          <PricingFaq items={WEB_DESIGN_FAQS} heading="Custom web design FAQ" />
        </div>
      </section>

      <RelatedServices
        items={[
          {
            title: 'Search Engine Optimization',
            to: '/services/seo',
            description:
              'Local rankings and Google Business work that sit on top of a site built to convert.',
          },
          {
            title: 'Website Maintenance',
            to: '/website-maintenance',
            description:
              'Updates, backups, and support after the site is live.',
          },
          {
            title: 'Social Media Management',
            to: '/social-media',
            description:
              'The same team can keep your social and Google profile active after launch.',
          },
        ]}
      />

      <PricingCta
        heading="Ready to talk through a site?"
        subhead="Tell us what you need — or call and we'll tell you what the build actually involves."
      />
    </div>
  );
}

export default WebDesign;
