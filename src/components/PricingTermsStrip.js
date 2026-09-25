import { Link } from 'react-router-dom';
import { TERMS } from '../data/pricing';

function PricingTermsStrip() {
  return (
    <section className="bg-[#0D0D0D] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left max-w-5xl mx-auto">
          <div>
            <p className="text-primary-400 text-sm font-semibold uppercase tracking-wide mb-2">
              Setup
            </p>
            <p className="text-white font-semibold text-lg mb-1">
              $300–$500
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              One-time, optional
            </p>
            <p className="text-white/50 text-xs mt-2">{TERMS.setupFee}</p>
          </div>
          <div>
            <p className="text-primary-400 text-sm font-semibold uppercase tracking-wide mb-2">
              Web &amp; Apps
            </p>
            <p className="text-white font-semibold text-lg mb-1">
              Custom quote
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              {TERMS.custom}
            </p>
          </div>
          <div>
            <p className="text-primary-400 text-sm font-semibold uppercase tracking-wide mb-2">
              Terms
            </p>
            <p className="text-white font-semibold text-lg mb-1">
              Month-to-month
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              {TERMS.contract}
            </p>
            <p className="mt-3">
              <Link
                to="/web-design-seo"
                className="text-primary-400 hover:text-primary-300 text-sm font-medium"
              >
                Web Design &amp; SEO
              </Link>
              <span className="text-white/40 mx-2">·</span>
              <Link
                to="/app-development"
                className="text-primary-400 hover:text-primary-300 text-sm font-medium"
              >
                Custom Apps
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTermsStrip;
