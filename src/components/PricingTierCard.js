import { Link } from 'react-router-dom';
import { formatPrice } from '../data/pricing';

function PricingTierCard({
  tier,
  compact = false,
  showDetailsLink = false,
  className = '',
}) {
  const isPro = tier.slug === 'pro';
  const checkColor = isPro ? 'text-[#7B6CA8]' : 'text-primary-500';

  return (
    <div
      className={`relative flex flex-col h-full rounded-xl bg-white p-6 md:p-8 border ${
        tier.popular
          ? 'border-2 border-primary-500 shadow-lg'
          : 'border-primary-100 shadow-sm'
      } ${className}`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </span>
      )}

      <div className="mb-4">
        <h3 className="text-2xl font-bold text-ink">{tier.name}</h3>
        <p className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-ink tracking-tight">
            {formatPrice(tier.price)}
          </span>
          <span className="text-muted font-medium">/mo</span>
        </p>
        <p className="text-body text-sm mt-3 leading-relaxed">{tier.tagline}</p>
      </div>

      {!compact && (
        <>
          <div className="border-t border-primary-100 my-4" />
          {tier.includesPrevious && (
            <p className="text-ink font-bold text-sm mb-3">
              Everything in {tier.includesPrevious}, plus:
            </p>
          )}
          <ul className="space-y-3 mb-6 flex-grow">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className={`${checkColor} font-bold mt-0.5`} aria-hidden="true">
                  ✓
                </span>
                <span className="text-ink text-sm font-medium leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}

      {compact ? (
        <Link
          to={`/pricing/${tier.slug}`}
          className="mt-auto text-primary-600 font-semibold text-sm hover:text-primary-500"
        >
          See what&apos;s included →
        </Link>
      ) : showDetailsLink ? (
        <Link
          to={`/pricing/${tier.slug}`}
          className={`mt-auto w-full text-center ${
            tier.popular ? 'btn-teal' : 'btn-teal !bg-ink hover:!bg-primary-800'
          }`}
        >
          View {tier.name} details →
        </Link>
      ) : null}
    </div>
  );
}

export default PricingTierCard;
