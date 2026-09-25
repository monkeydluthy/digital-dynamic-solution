import { useState } from 'react';

function PricingFaq({ items, heading = 'FAQ' }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
        {heading}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="bg-card border border-primary-100 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-ink hover:bg-mint/50 transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span
                  className={`text-primary-500 text-xl leading-none shrink-0 transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-body leading-relaxed border-t border-primary-100 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingFaq;
