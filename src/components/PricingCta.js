import { Link } from 'react-router-dom';
import { PHONE } from '../data/pricing';

function PricingCta({
  heading = 'Ready to get booked?',
  subhead = "Call or text today — we'll map out the next step for your business.",
}) {
  return (
    <div className="bg-ink py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{subhead}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={`tel:${PHONE.tel}`} className="btn-teal text-lg !px-10 !py-4">
            Call or text {PHONE.display}
          </a>
          <Link
            to="/contact"
            className="btn-teal-outline text-lg !px-10 !py-4"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCta;
