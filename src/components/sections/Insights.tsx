import { useState } from 'react';
import { ArrowRight, Play, FileText, TrendingUp, MapPin, Users, BarChart3, Video } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { insightCategories } from '@/data/site';

const categoryIcons: Record<string, typeof FileText> = {
  property: FileText,
  investment: TrendingUp,
  locations: MapPin,
  leadership: Users,
  'market-insights': BarChart3,
  video: Video,
};

export function Insights() {
  const [activeCategory, setActiveCategory] = useState(insightCategories[0].id);

  return (
    <section id="insights" className="py-section md:py-30 bg-sigma-ivory-50">
      <div className="container-content">
        <SectionHeader
          eyebrow="Inside Sigma"
          title="Inside Sigma"
          supporting="Property insights, market knowledge, project stories and leadership perspectives."
          className="mb-10"
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {insightCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || FileText;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-sigma-blue-700 text-white'
                    : 'bg-white border border-sigma-stone-200 text-sigma-graphite-700 hover:border-sigma-blue-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Placeholder content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-sigma-stone-200/70 shadow-sm hover:shadow-lg hover:shadow-sigma-blue-950/5 transition-all duration-500 ease-sigma">
                {/* Placeholder media area */}
                <div className="relative h-48 bg-sigma-stone-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sigma-blue-50 to-sigma-stone-100" />
                  {activeCategory === 'video' ? (
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-sigma-blue-700">
                      <Play className="h-6 w-6 text-white ml-0.5" fill="white" />
                    </span>
                  ) : (
                    <FileText className="relative z-10 h-10 w-10 text-sigma-stone-400" strokeWidth={1.5} />
                  )}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-semibold text-sigma-graphite-700 capitalize">
                    {activeCategory.replace('-', ' ')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-sigma-stone-400 font-medium">
                    Article title to be added
                  </p>
                  <h3 className="mt-2 font-bold text-sigma-graphite-900 text-lg leading-snug">
                    Future {activeCategory.replace('-', ' ')} insight — placeholder content
                  </h3>
                  <p className="mt-3 text-sm text-sigma-stone-500 leading-relaxed flex-1">
                    This slot is reserved for future CMS content. Article copy, author and publish date will be connected when the content system is implemented.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sigma-blue-700 group-hover:text-sigma-blue-900 transition-colors">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
