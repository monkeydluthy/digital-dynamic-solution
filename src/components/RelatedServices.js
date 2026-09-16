import { Link } from 'react-router-dom';

function RelatedServices({ items }) {
  return (
    <section className="bg-white py-14 md:py-16 border-t border-primary-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 text-center">
          Related services
        </h2>
        <p className="text-body text-center mb-8 max-w-2xl mx-auto">
          Most local businesses grow fastest when these work together.
        </p>
        <div
          className={`grid grid-cols-1 gap-6 ${
            items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
          }`}
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="bg-card rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-body text-sm mb-4 flex-grow leading-relaxed">
                {item.description}
              </p>
              <span className="text-primary-500 font-semibold text-sm">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link
            to="/services"
            className="text-primary-600 font-semibold hover:text-primary-500"
          >
            See all services
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RelatedServices;
