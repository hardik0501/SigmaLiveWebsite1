import React from 'react';
import { ShieldCheck, Eye, Sparkles, HeartHandshake, Users, Award, Clock, Heart } from 'lucide-react';

export function CoreValues() {
  const values = [
    { title: 'Integrity', desc: 'Uncompromised honesty and ethical standards in every transaction.', icon: ShieldCheck },
    { title: 'Transparency', desc: 'Complete clarity on pricing, documentation, and RERA compliance.', icon: Eye },
    { title: 'Innovation', desc: 'Smart home automation, digital sales, and modern design.', icon: Sparkles },
    { title: 'Commitment', desc: 'Delivering projects on schedule with promised quality standards.', icon: HeartHandshake },
    { title: 'Customer First', desc: 'Putting customer satisfaction and wealth creation at the center.', icon: Users },
    { title: 'Professional Excellence', desc: 'Dedicated relationship managers and technical engineering excellence.', icon: Award },
    { title: 'Long-Term Relationships', desc: 'Building lifelong trust that extends far beyond property closing.', icon: Clock },
    { title: 'Social Responsibility', desc: 'Active contribution to community welfare and environmental sustainability.', icon: Heart },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Our Pillars</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Core Values & Beliefs
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            The foundational principles that guide every development, consultation, and partnership at Sigma Group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="p-6 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white text-sigma-blue-700 shadow-2xs flex items-center justify-center">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-sigma-graphite-900">{v.title}</h3>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
