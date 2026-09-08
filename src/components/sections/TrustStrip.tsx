import { Counter } from '@/components/ui/Reveal';
import { Reveal } from '@/components/ui/Reveal';
import { stats } from '@/data/site';

export function TrustStrip() {
  return (
    <section className="bg-gradient-to-r from-[#EEF5FF] via-[#FFFDF5] to-[#F0FDF4] border-y border-amber-200/60">
      <div className="container-wide py-14 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center lg:text-left">
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs md:text-sm text-slate-600 font-bold uppercase tracking-wider">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
