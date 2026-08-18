import { ArrowRight, UserCircle } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowButton } from '@/components/ui/Button';

const placeholderImage = 'https://images.pexels.com/photos/30228707/pexels-photo-30228707.jpeg?auto=compress&cs=tinysrgb&h=700&w=560';

const journeySteps = [
  { year: 'Year 1', title: 'Joined Sigma', description: 'Started without prior knowledge of the company.' },
  { year: 'Year 2', title: 'Professional', description: 'Built client relationships and market expertise.' },
  { year: 'Year 3', title: 'Leadership', description: 'Began managing teams and key projects.' },
  { year: 'Year 5', title: 'Director / Partner', description: 'Reached partnership level through consistent growth.' },
];

export function SuccessStory() {
  return (
    <section id="success-story" className="py-section md:py-30 bg-sigma-navy-950 text-white relative overflow-hidden">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait / video area */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-sigma-graphite-800">
                <img
                  src={placeholderImage}
                  alt="Sigma success story — placeholder"
                  loading="lazy"
                  className="w-full h-[420px] md:h-[500px] object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sigma-navy-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <UserCircle className="h-10 w-10 text-sigma-amber-400" />
                    <div>
                      <p className="text-sm font-bold text-white">Sigma Leader</p>
                      <p className="text-xs text-sigma-ivory-200/50">Name to be added</p>
                    </div>
                  </div>
                </div>
                {/* Placeholder badge */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-sigma-amber-500/20 text-sigma-amber-400 text-xs font-semibold">
                  Editable Story
                </span>
              </div>
            </Reveal>
          </div>

          {/* Story + timeline */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-eyebrow text-sigma-amber-400">Success Story</span>
              <h2 className="mt-4 text-h2 text-white text-balance">
                From First Day to Director Level.
              </h2>
              <p className="mt-5 text-base text-sigma-ivory-200/60 leading-relaxed max-w-xl">
                An individual who joined Sigma without initially knowing the company — and progressed over approximately five years toward Director / Partner level. This is a placeholder story structure. Details will be added with verified information.
              </p>
            </Reveal>

            {/* Journey timeline */}
            <div className="mt-10 space-y-1">
              {journeySteps.map((step, i) => (
                <Reveal key={step.title} delay={0.15 + i * 0.1}>
                  <div className="flex gap-5 py-4 border-b border-white/10">
                    <span className="text-xs font-bold text-sigma-amber-400 uppercase tracking-wide w-20 flex-shrink-0 pt-1">
                      {step.year}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                      <p className="mt-1 text-xs text-sigma-ivory-200/40 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-10">
                <ArrowButton href="#founder" variant="light">
                  Meet Sigma Leaders
                </ArrowButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
