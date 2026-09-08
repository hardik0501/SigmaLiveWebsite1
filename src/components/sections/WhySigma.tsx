import { MapPin, ShieldCheck, Users, UserCheck, MessageSquare, HeartHandshake } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { whySigmaItems } from '@/data/site';

const pillarIcons = [
  MapPin,
  ShieldCheck,
  Users,
  UserCheck,
  MessageSquare,
  HeartHandshake,
];

export function WhySigma() {
  return (
    <section id="why-sigma" className="py-20 md:py-30 bg-gradient-to-br from-[#F0F6FF] via-[#FFFDF5] to-[#FAF7F2] border-b border-amber-200/50 relative overflow-hidden">
      {/* Subtle Pastel Glow Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-content relative z-10">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
            WHY SIGMA HOMES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-tight">
            A Property Decision Should Come With Confidence.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
            Buying property is a big decision. You deserve more than a brochure and a sales pitch. You need someone who understands the market, listens to what you need and stays with you through the process.
          </p>
          <p className="mt-2 text-sm sm:text-base font-bold text-blue-700">
            That's where Sigma Homes comes in.
          </p>
        </Reveal>

        {/* 6 Value Pillars Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whySigmaItems.map((item, idx) => {
            const Icon = pillarIcons[idx] || ShieldCheck;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200/80 border border-amber-300 text-amber-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <span className="text-xl font-mono font-black text-slate-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 tracking-wide group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700">
                      Sigma Commitment
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
