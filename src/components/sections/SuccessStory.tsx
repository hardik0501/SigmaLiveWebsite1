import { ArrowRight, UserCircle } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowButton } from '@/components/ui/Button';

const placeholderImage = '/images/Founder/Homepagefounder1.jpeg';

const journeySteps = [
  { year: 'Year 1', title: 'Joined Sigma', description: 'Started without prior knowledge of the company.' },
  { year: 'Year 2', title: 'Professional', description: 'Built client relationships and market expertise.' },
  { year: 'Year 3', title: 'Leadership', description: 'Began managing teams and key projects.' },
  { year: 'Year 5', title: 'Director / Partner', description: 'Reached partnership level through consistent growth.' },
];

export function SuccessStory() {
  return (
    <section id="success-story" className="py-section md:py-28 bg-sigma-graphite-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait / Feature Image */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-sigma-navy-900 border border-white/15 shadow-2xl group">
                <img
                  src={placeholderImage}
                  alt="Sigma Leadership Growth Journey"
                  loading="lazy"
                  className="w-full h-[450px] md:h-[520px] object-cover opacity-75 transition-transform duration-700 ease-sigma group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sigma-amber-500/20 border border-sigma-amber-400/40 text-sigma-amber-400 flex items-center justify-center font-bold text-xs">
                      5Y
                    </div>
                    <div>
                      <p className="text-base font-bold font-serif text-white">Sigma Leadership Career Path</p>
                      <p className="text-xs text-sigma-amber-400 font-medium">Fresher to Director Progression</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Story + Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <span className="eyebrow text-sigma-amber-400">Leadership Spotlight</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                From First Day to Director Level.
              </h2>
              <p className="mt-4 text-xs md:text-sm text-sigma-stone-300 leading-relaxed max-w-xl font-sans">
                A testament to Sigma Group's meritocratic growth ecosystem where talent evolves from entry-level advisory into strategic partner ownership.
              </p>
            </Reveal>

            {/* Journey Timeline Steps */}
            <div className="pt-2 space-y-1">
              {journeySteps.map((step, i) => (
                <Reveal key={step.title} delay={0.15 + i * 0.08}>
                  <div className="flex items-start gap-5 py-3.5 border-b border-white/10 group">
                    <span className="text-xs font-mono font-bold text-sigma-amber-400 uppercase tracking-widest w-20 shrink-0 pt-0.5 group-hover:translate-x-1 transition-transform">
                      {step.year}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold font-serif text-white text-sm group-hover:text-sigma-amber-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs text-sigma-stone-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="pt-4">
                <a
                  href="/success-stories"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold backdrop-blur-xs transition-all border border-white/15 group"
                >
                  <span>Explore All Success Stories</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
