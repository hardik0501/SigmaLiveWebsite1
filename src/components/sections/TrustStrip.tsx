import { Counter } from '@/components/ui/Reveal';
import { Reveal } from '@/components/ui/Reveal';
import { stats } from '@/data/site';

export function TrustStrip() {
  return (
    <section className="bg-sigma-navy-950 border-t border-white/5">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center lg:text-left">
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-sigma-ivory-200/50 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
