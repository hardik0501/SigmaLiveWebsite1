import { ArrowRight, Trophy, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { careerJourney } from '@/data/site';

const spotlightImage = '/images/Founder/Homepagefounder1.jpeg';

export function SuccessStory() {
  return (
    <section id="leadership-spotlight" className="py-20 md:py-28 bg-gradient-to-br from-[#F0F6FF] via-[#FAF7F2] to-[#FFFDF8] border-b border-blue-200/40 relative overflow-hidden">
      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl p-2 group">
                <div className="relative overflow-hidden rounded-2xl h-[440px] sm:h-[480px]">
                  <img
                    src={spotlightImage}
                    alt="Sigma Leadership Career Growth Journey"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                    <div className="flex items-center gap-3.5">
                      <div className="h-12 w-12 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center font-extrabold text-sm shrink-0">
                        5Y
                      </div>
                      <div>
                        <p className="text-sm font-bold font-serif text-slate-900">Merit-Based Growth Path</p>
                        <p className="text-xs text-blue-700 font-bold">From Day 1 Associate to Partner Equity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Timeline & Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <Reveal>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
                LEADERSHIP SPOTLIGHT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-tight">
                From First Day to Director Level.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                A company grows when its people grow with it. At Sigma, we believe talent should have room to learn, take ownership and build a career.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our growth stories reflect an environment where commitment and performance can open the door to bigger opportunities.
              </p>
            </Reveal>

            {/* Career Milestones */}
            <div className="pt-2 space-y-3">
              {careerJourney.map((milestone, idx) => (
                <Reveal key={milestone.year} delay={0.15 + idx * 0.08}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all group">
                    <span className="text-xs font-mono font-extrabold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-xl shrink-0">
                      {milestone.year}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA */}
            <Reveal delay={0.4}>
              <div className="pt-3">
                <Link
                  to="/success-stories"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-700/20 group"
                >
                  <span>Explore All Success Stories</span>
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
