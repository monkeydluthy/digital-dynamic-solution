import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FaqExample() {
  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
      const button = item.querySelector('.faq-button');
      button.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    // Cleanup
    return () => {
      faqItems.forEach((item) => {
        const button = item.querySelector('.faq-button');
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <Link
          to="/interactive-components"
          className="inline-block mb-8 text-orange-600 hover:text-orange-500"
        >
          ← Back to Interactive Components
        </Link>

        <div className="faq-container max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h1>

          <div className="faq-item">
            <button className="faq-button">
              What services do you offer?
              <span className="arrow">▼</span>
            </button>
            <div className="faq-content">
              <p>
                We offer a wide range of digital services including web
                development, mobile app development, UI/UX design, digital
                marketing, and SEO optimization.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-button">
              How long does a typical project take?
              <span className="arrow">▼</span>
            </button>
            <div className="faq-content">
              <p>
                Project timelines vary depending on complexity and scope. A
                simple website might take 2-4 weeks, while a complex web
                application could take 3-6 months.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-button">
              What is your pricing structure?
              <span className="arrow">▼</span>
            </button>
            <div className="faq-content">
              <p>
                We offer customized pricing based on project requirements.
                Contact us for a detailed quote tailored to your specific needs.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-button">
              Do you provide ongoing support?
              <span className="arrow">▼</span>
            </button>
            <div className="faq-content">
              <p>
                Yes, we offer various maintenance and support packages to ensure
                your digital solutions continue to perform optimally after
                launch.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          .faq-container {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 1rem;
          }

          .faq-item {
            margin-bottom: 1rem;
          }

          .faq-button {
            width: 100%;
            padding: 1rem;
            text-align: left;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.3s;
          }

          .faq-button:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .faq-item.active .faq-button {
            background: #f97316;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }

          .faq-button .arrow {
            transition: transform 0.3s;
          }

          .faq-item.active .arrow {
            transform: rotate(180deg);
          }

          .faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            background: rgba(0, 0, 0, 0.2);
            border-bottom-left-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }

          .faq-item.active .faq-content {
            max-height: 500px;
          }

          .faq-content p {
            padding: 1rem;
            color: white;
            line-height: 1.6;
          }
        `}</style>
      </div>
    </div>
  );
}

export default FaqExample;
