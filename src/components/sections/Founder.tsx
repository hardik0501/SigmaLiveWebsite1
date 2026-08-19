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
    <section id="founder" className="py-section md:py-28 bg-sigma-graphite-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl bg-sigma-navy-900 border border-white/15 shadow-2xl">
                  <img
                    src={founderImage}
                    alt="Jitendra Kumar Sharma — Founder & Chairman"
                    loading="lazy"
                    className="w-full h-[500px] md:h-[580px] object-cover transition-transform duration-700 ease-sigma group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-sigma-amber-400 block mb-1">
                      Founder & Chairman
                    </span>
                    <p className="text-2xl font-bold font-serif text-white">Jitendra Kumar Sharma</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <span className="eyebrow text-sigma-amber-400">The Visionary</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                The Vision Behind Sigma Homes
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote className="pl-6 border-l-2 border-sigma-amber-400 py-1 space-y-2">
                <Quote className="h-7 w-7 text-sigma-amber-400 opacity-80 mb-2" />
                <p className="font-serif text-2xl md:text-3xl italic text-white leading-snug">
                  "Jan Seva Hi Rashtra Seva Hai."
                </p>
                <p className="text-xs text-sigma-stone-400 uppercase tracking-widest font-semibold">
                  Public Service is National Service
                </p>
              </blockquote>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((p, i) => (
                <Reveal key={p.label} delay={0.2 + i * 0.08}>
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-xs font-bold text-sigma-amber-400 uppercase tracking-widest">
                      {p.label}
                    </h3>
                    <p className="mt-2 text-xs text-sigma-stone-300 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="pt-4">
                <a
                  href="/founder"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl text-xs font-bold shadow-lg transition-all group"
                >
                  <span>Discover His Journey</span>
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
