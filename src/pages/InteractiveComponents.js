import React from 'react';

function ProjectCard({ title, description, link, tags }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <iframe
            src={link}
            title={title}
            className="w-full h-[400px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function InteractiveComponents() {
  const projects = [
    {
      title: 'Anime Character Carousel',
      description:
        'A smooth, responsive image carousel featuring anime characters. Built with vanilla JavaScript and CSS animations.',
      link: '/examples/carousel-example/index.html',
      tags: ['JavaScript', 'CSS Animations', 'Responsive Design'],
    },
    {
      title: 'Interactive Dropdown Menu',
      description:
        'A customizable dropdown menu component with smooth transitions and hover effects.',
      link: '/examples/dropdown-example/index.html',
      tags: ['JavaScript', 'CSS Transitions', 'UI Component'],
    },
    {
      title: 'FAQ Accordion',
      description:
        'An accessible FAQ section with expandable/collapsible answers and smooth animations.',
      link: '/examples/dropdown-faq-example/index.html',
      tags: ['JavaScript', 'Accessibility', 'User Experience'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="bg-gray-900 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Interactive Components
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of custom-built JavaScript components
            showcasing modern web development techniques and interactive user
            interfaces.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Source Code Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            View the Source Code
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Each component is built with vanilla JavaScript and CSS,
            demonstrating clean, maintainable code practices. Feel free to
            inspect and learn from the source code.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Custom Components?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We can build custom interactive components tailored to your specific
            needs. Get in touch to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default InteractiveComponents;
