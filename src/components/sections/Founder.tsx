import { ArrowRight, Quote, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';

const founderImage = '/images/Founder/HomePage.jpeg';

const pillars = [
  {
    label: 'LEADERSHIP',
    description: 'A clear vision, disciplined execution and a commitment to building for the long term.',
  },
  {
    label: 'ENTREPRENEURSHIP',
    description: 'Creating opportunities across real estate development, sales and investment.',
  },
  {
    label: 'SOCIAL SERVICE',
    description: 'Growing as a business while staying connected to the communities around us.',
  },
  {
    label: 'YOUTH DEVELOPMENT',
    description: 'Giving young professionals opportunities to learn, grow and take responsibility.',
  },
];

export function Founder() {
  return (
    <section id="founder" className="py-20 md:py-30 bg-gradient-to-br from-[#FFFDF8] via-[#FAF7F2] to-[#EEF5FF] border-b border-amber-200/50 relative overflow-hidden">
      {/* Background Pastel Ambience */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Founder Badge */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-amber-300/80 shadow-2xl p-2">
                  <div className="relative overflow-hidden rounded-2xl h-[480px] sm:h-[540px]">
                    <img
                      src={founderImage}
                      alt="Jitendra Kumar Sharma — Founder & Chairman, Sigma Homes"
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-sigma group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Founder Identification Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-700 block mb-1">
                        FOUNDER & CHAIRMAN
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                        Jitendra Kumar Sharma
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                        The vision behind Sigma's journey from its early beginnings to a growing real estate ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Vision & 4 Pillars */}
          <div className="lg:col-span-7 space-y-7">
            <Reveal>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
                THE VISION BEHIND SIGMA HOMES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-tight">
                Building More Than Properties.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                Behind every property is a person, a family, a business or a dream. That belief has shaped Sigma Homes from the beginning.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our journey is built on the idea that real estate should create lasting value for customers, partners, employees and the communities we serve.
              </p>
            </Reveal>

            {/* Guiding Quote */}
            <Reveal delay={0.15}>
              <blockquote className="pl-6 border-l-4 border-amber-500 py-3 my-2 bg-amber-50/80 rounded-r-2xl pr-6 border border-amber-200/60 shadow-xs">
                <Quote className="h-6 w-6 text-amber-600 mb-2" />
                <p className="font-serif text-2xl sm:text-3xl italic font-bold text-amber-900 leading-snug">
                  "Jan Seva Hi Rashtra Seva Hai."
                </p>
                <p className="mt-1.5 text-[11px] text-amber-700 uppercase tracking-widest font-extrabold">
                  Guiding Philosophy of Sigma Group
                </p>
              </blockquote>
            </Reveal>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <Reveal key={pillar.label} delay={0.2 + idx * 0.08}>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-amber-300 hover:shadow-md transition-all">
                    <span className="text-xs font-extrabold text-amber-700 uppercase tracking-widest block mb-1">
                      {pillar.label}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA */}
            <Reveal delay={0.35}>
              <div className="pt-2">
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-700/20 transition-all duration-300 group"
                >
                  <span>Meet Our Leadership</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
