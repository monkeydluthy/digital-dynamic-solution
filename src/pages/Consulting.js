import React from 'react';
import nexusLogo from '../assets/images/brand/dynamic-nexus-on-black.png';

const whatWeBuild = [
  'Custom Web Apps',
  'SaaS Platforms & MVPs',
  'AI Automation & Tools',
  'Integrations',
  'UX/UI Design',
  'Ongoing Support & DevOps',
];

const highlights = [
  {
    title: 'End-to-End Delivery',
    description: 'Design through deployment — we own the whole build.',
  },
  {
    title: 'Modern, Scalable Stack',
    description: 'React/Next.js, Supabase.',
  },
  {
    title: 'Milestone-Based',
    description: 'Clear stages, no surprises.',
  },
  {
    title: 'We Build Our Own Software',
    description: 'Nexus is proof we ship real products.',
  },
];

function Consulting() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-ink py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-primary-900 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Custom App Development
            </h1>
            <p className="text-lg md:text-xl text-primary-400 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              From first wireframe to launched product — custom web apps, SaaS
              platforms, and automation, built end to end.
            </p>
            <a href="tel:+18139970321" className="btn-teal text-lg !px-8 !py-4">
              Call or text 813.997.0321
            </a>
          </div>
        </div>
      </div>

      {/* What we build + highlights */}
      <div className="bg-gradient-to-b from-white to-mint py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl p-8 border border-primary-100">
              <h2 className="text-2xl font-bold text-ink mb-6">What We Build</h2>
              <ul className="space-y-4">
                {whatWeBuild.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-0.5">✓</span>
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-xl p-6 border border-primary-100"
                >
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Proof blocks */}
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
            Products we&apos;ve shipped
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-primary-100 overflow-hidden">
              <div className="bg-ink h-40 flex items-center justify-center text-6xl">
                <span role="img" aria-label="NightSync">
                  🌙
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink mb-2">NightSync</h3>
                <p className="text-body leading-relaxed">
                  A social web app that gamifies going out — full product design
                  (18 screens) + build on React/Next.js + Supabase.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-primary-100 overflow-hidden">
              <div className="bg-ink h-40 flex items-center justify-center p-6">
                <img
                  src={nexusLogo}
                  alt="Dynamic Nexus"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink mb-2">Nexus</h3>
                <p className="text-body leading-relaxed">
                  Our proprietary multi-client marketing-intelligence platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-500/20"></div>
        <div className="container mx-auto px-4 text-center relative max-w-3xl">
          <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
            Have an idea, or a process that should be software? Let&apos;s build
            it.
          </p>
          <a href="tel:+18139970321" className="btn-teal text-lg !px-10 !py-4">
            Call or text 813.997.0321
          </a>
        </div>
      </div>
    </div>
  );
}

export default Consulting;
