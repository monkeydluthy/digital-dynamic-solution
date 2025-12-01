import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CarouselExample() {
  useEffect(() => {
    // Add the original carousel JavaScript logic
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const auto = true;
    const intervalTime = 5000;
    let slideInterval;

    const nextSlide = () => {
      const current = document.querySelector('.current');
      current.classList.remove('current');
      if (
        current.nextElementSibling &&
        current.nextElementSibling.classList.contains('slide')
      ) {
        current.nextElementSibling.classList.add('current');
      } else {
        slides[0].classList.add('current');
      }
    };

    const prevSlide = () => {
      const current = document.querySelector('.current');
      current.classList.remove('current');
      if (
        current.previousElementSibling &&
        current.previousElementSibling.classList.contains('slide')
      ) {
        current.previousElementSibling.classList.add('current');
      } else {
        slides[slides.length - 1].classList.add('current');
      }
    };

    if (auto) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }

    nextButton?.addEventListener('click', () => {
      nextSlide();
      if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    });

    prevButton?.addEventListener('click', () => {
      prevSlide();
      if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    });

    // Cleanup
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
      nextButton?.removeEventListener('click', nextSlide);
      prevButton?.removeEventListener('click', prevSlide);
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

        <div className="slider">
          <div className="slide current">
            <img src="/carousel-example/asta.jpeg" alt="Asta" />
          </div>
          <div className="slide">
            <img src="/carousel-example/mihawk.jpeg" alt="Mihawk" />
          </div>
          <div className="slide">
            <img src="/carousel-example/yamato.jpeg" alt="Yamato" />
          </div>
        </div>

        <div className="buttons">
          <button id="prev">←</button>
          <button id="next">→</button>
        </div>

        <style>{`
          .slider {
            position: relative;
            overflow: hidden;
            height: 70vh;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
          }

          .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
          }

          .slide.current {
            opacity: 1;
          }

          .slide img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
          }

          .buttons button {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 1rem 1.5rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background 0.3s;
          }

          .buttons button:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `}</style>
      </div>
    </div>
  );
}

export default CarouselExample;
