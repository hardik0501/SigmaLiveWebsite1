import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowButton } from '@/components/ui/Button';
import { careerJourney } from '@/data/site';

export function CareerJourney() {
  return (
    <section id="career-journey" className="py-section md:py-30 bg-sigma-ivory-50">
      <div className="container-content">
        <SectionHeader
          eyebrow="Growth Journey"
          title="Your Beginning Doesn't Define Your Destination."
          supporting="Sigma's growth model is built around learning, leadership and opportunity."
          className="mb-16"
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute top-7 left-0 right-0 h-px bg-sigma-stone-300" />

          <Stagger className="grid grid-cols-5 gap-4" stagger={0.12}>
            {careerJourney.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-sigma-blue-700 text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-sigma-graphite-900">{step.title}</h3>
                  <p className="mt-2 text-xs text-sigma-stone-500 leading-relaxed pr-2">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[1.6rem] top-2 bottom-2 w-px bg-sigma-stone-300" />
          <div className="space-y-8">
            {careerJourney.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-7 flex h-9 w-9 items-center justify-center rounded-full bg-sigma-blue-700 text-white font-bold text-xs">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-sigma-graphite-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-sigma-stone-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14">
            <ArrowButton href="#career-journey" variant="blue">
              Explore the Sigma Journey
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
