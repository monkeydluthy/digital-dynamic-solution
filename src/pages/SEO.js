import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd';
import PricingCta from '../components/PricingCta';
import PricingFaq from '../components/PricingFaq';
import RelatedServices from '../components/RelatedServices';
import { PHONE } from '../data/pricing';
import { SEO_FAQS, buildSeoJsonLd } from '../data/seoPage';
import mnaStumpLogo from '../assets/images/mna-stump.jpg';
import allStructureLogo from '../assets/images/all-structure.png';

const workGroups = [
  {
    title: 'Technical',
    body: 'Make sure Google can read the site: crawlable pages, sitemap and robots.txt, image and page-speed fixes, structured data (schema) for the business and each service.',
  },
  {
    title: 'Local',
    body: 'Google Business Profile set up properly: categories, services, service area, regular photos, review requests, and the same name, address and phone on every listing.',
  },
  {
    title: 'On-page',
    body: 'Titles, headings and service pages written around what customers in your area actually search for.',
  },
  {
    title: 'Measurement',
    body: 'Search Console and GA4 set up to count calls and form leads, not just visits.',
  },
];

const steps = [
  {
    title: 'Audit',
    body: 'What Google sees today, what is blocking it, where you rank now. We record a baseline so progress is measurable.',
  },
  {
    title: 'Fix',
    body: 'The technical and Google Business problems first, because content cannot rank on a site Google cannot read.',
  },
  {
    title: 'Build',
    body: 'Service and location pages only where there is real work to show. No pages that are the same text with a different city name.',
  },
  {
    title: 'Report',
    body: 'A one-page monthly report in plain English: calls and leads, Google Business numbers, search impressions and clicks, what was done, what is next.',
  },
];

const proof = [
  {
    title: 'M&A Stump Grinding',
    description:
      '39 Google reviews in 6 months on a brand-new profile. Mobile load time (LCP) about 55s to 3.4s after image compression plus robots.txt and sitemap fixes. PageSpeed SEO score 83 to 92.',
    to: '/case-studies/ma-stump-grinding',
    image: mnaStumpLogo,
    imageWidth: 407,
    imageHeight: 416,
    alt: 'M&A Stump Grinding logo — local SEO and Google Business work in Tampa Bay',
    logoOnLight: true,
  },
  {
    title: 'All Structure Maintenance',
    description:
      'GA4 on the live site: 13 CTA clicks and 8 form submissions year to date. Local SEO on a custom site for a contractor in Connecticut.',
    to: '/case-studies/all-structure',
    image: allStructureLogo,
    imageWidth: 500,
    imageHeight: 500,
    alt: 'All Structure Maintenance logo — local SEO and conversion tracking',
    logoOnLight: true,
  },
];

function SEO() {
  return (
    <div className="min-h-screen">
      <JsonLd data={buildSeoJsonLd()} id="seo-jsonld" />

      <section className="bg-ink py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-8">
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
              <li className="text-white font-medium">SEO</li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-primary-400 font-semibold uppercase tracking-wide text-sm mb-3">
              Tampa SEO
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight leading-tight">
              SEO for Tampa Bay Local Service Businesses
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get found in Google search and Maps when nearby customers are
              ready to call. Technical fixes, Google Business work, and clear
              reporting, built for local service businesses.
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
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            What we actually do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {workGroups.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 md:p-8 border border-primary-100"
              >
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Earned local links only: chamber of commerce, suppliers, client and
            partner mentions. No bought links, no directory blasts.
          </p>
        </div>
      </section>

      <section className="bg-mint py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-10 text-center">
            How we work
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
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            Work we have done
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proof.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="bg-card rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow flex flex-col h-full"
              >
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
                <p className="text-body leading-relaxed flex-grow">
                  {item.description}
                </p>
                <span className="text-primary-600 font-semibold text-sm mt-4">
                  Read the case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mint py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
            What results look like
          </h2>
          <ul className="space-y-4 text-body text-lg leading-relaxed">
            <li>
              Google Business and map results can start moving in roughly 4–8
              weeks.
            </li>
            <li>
              Rankings for competitive search terms usually take 3–6 months.
            </li>
            <li>
              We report what moved and what did not. A number we cannot measure
              is shown as &quot;not measured&quot;, never as zero.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
            What it costs
          </h2>
          <p className="text-body text-lg leading-relaxed mb-8">
            SEO is scoped to your business: your site, your service area, and
            how competitive your market is. Plans are month-to-month. Get a
            free quote and we&apos;ll tell you what it takes.
          </p>
          <Link to="/contact" className="btn-teal">
            Get a free quote
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-mint to-white py-14 md:py-16">
        <div className="container mx-auto px-4">
          <PricingFaq
            items={SEO_FAQS.map((faq) =>
              faq.question === 'Do I need a new website?'
                ? {
                    ...faq,
                    answer: (
                      <>
                        Not always. We fix what is blocking Google on your
                        current site. If the site cannot be fixed, we will say
                        so and point to{' '}
                        <Link
                          to="/services/web-design"
                          className="text-primary-600 font-semibold hover:text-primary-500"
                        >
                          custom web design
                        </Link>
                        .
                      </>
                    ),
                  }
                : faq
            )}
            heading="Local SEO FAQ"
          />
        </div>
      </section>

      <RelatedServices
        items={[
          {
            title: 'Custom Web Design',
            to: '/services/web-design',
            description:
              'A site built to rank locally and turn searches into calls.',
          },
          {
            title: 'Content Creation',
            to: '/content-creation',
            description:
              'Pages and posts that support rankings and stay useful.',
          },
          {
            title: 'Social Media Management',
            to: '/social-media',
            description:
              'Reviews, Google Business, and social that reinforce local SEO.',
          },
          {
            title: 'Website Maintenance',
            to: '/website-maintenance',
            description:
              'Updates, backups, and support after the site is live.',
          },
        ]}
      />

      <PricingCta
        heading="Ready to show up when people search?"
        subhead="Tell us what you need — or call and we'll tell you what the work actually involves."
      />
    </div>
  );
}

export default SEO;
