import { ShieldCheck, Users, FileText, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { whySigmaItems } from '@/data/site';

const highlightIcons = [ShieldCheck, Users, FileText, TrendingUp];

export function WhySigma() {
  const highlights = whySigmaItems.slice(0, 4);
  const rest = whySigmaItems.slice(4);

  return (
    <section id="why-sigma" className="py-section md:py-30 bg-sigma-navy-950 text-white">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: heading + highlights */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why Sigma"
              title="Built on Trust. Driven by Experience."
              supporting="Two and a half decades of real estate expertise, distilled into a process that puts the customer first."
              variant="light"
              className="mb-12"
            />

            <div className="space-y-6">
              {highlights.map((item, i) => {
                const Icon = highlightIcons[i];
                return (
                  <Reveal key={item.title} delay={i * 0.1}>
                    <div className="flex gap-4 items-start">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                        <Icon className="h-5 w-5 text-sigma-amber-400" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-sigma-ivory-200/50 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right: numbered list of remaining items */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {rest.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="flex gap-4 py-5 border-b border-white/10">
                    <span className="text-2xl font-extrabold text-sigma-amber-400/40 tabular-nums w-8 flex-shrink-0">
                      {String(i + 5).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                      <p className="mt-1 text-xs text-sigma-ivory-200/40 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
