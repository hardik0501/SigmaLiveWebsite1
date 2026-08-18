import { ArrowRight, Quote } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowButton } from '@/components/ui/Button';

const founderImage = 'https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';

const pillars = [
  { label: 'Leadership', description: 'Guiding Sigma with a vision rooted in discipline and long-term thinking.' },
  { label: 'Entrepreneurship', description: 'Building an ecosystem that spans development, sales and investment.' },
  { label: 'Social Service', description: 'A belief that public service is the highest form of contribution.' },
  { label: 'Youth Development', description: 'Creating pathways for young professionals to grow into leadership.' },
];

export function Founder() {
  return (
    <section id="founder" className="py-section md:py-30 bg-sigma-stone-100">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-sigma-graphite-900">
                  <img
                    src={founderImage}
                    alt="Jitendra Kumar Sharma — Founder & Chairman"
                    loading="lazy"
                    className="w-full h-[480px] md:h-[560px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-lg font-bold text-white">Jitendra Kumar Sharma</p>
                    <p className="text-sm text-sigma-amber-400 font-semibold">Founder / Chairman</p>
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-sigma-blue-700 -z-10" />
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">The Visionary</span>
              <h2 className="mt-4 text-h2 text-sigma-graphite-900 text-balance">
                The Vision Behind Sigma
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote className="mt-8 pl-6 border-l-2 border-sigma-amber-500">
                <Quote className="h-6 w-6 text-sigma-amber-400 mb-2" />
                <p className="font-serif text-2xl md:text-3xl italic text-sigma-graphite-900 leading-snug">
                  "Jan Seva Hi Rashtra Seva Hai."
                </p>
                <p className="mt-3 text-sm text-sigma-stone-500">
                  Public Service is National Service.
                </p>
              </blockquote>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <Reveal key={p.label} delay={0.2 + i * 0.08}>
                  <div className="pt-4 border-t border-sigma-stone-300">
                    <h3 className="text-sm font-bold text-sigma-blue-700 uppercase tracking-wide">
                      {p.label}
                    </h3>
                    <p className="mt-2 text-sm text-sigma-graphite-700 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-10">
                <ArrowButton href="#founder" variant="dark">
                  Meet the Founder
                </ArrowButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
