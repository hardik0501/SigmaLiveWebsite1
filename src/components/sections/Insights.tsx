import { ArrowRight, FileText, TrendingUp, MapPin, Users, BarChart3, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { insightArticles } from '@/data/site';

const categoryIcons: Record<string, typeof FileText> = {
  PROPERTY: FileText,
  INVESTMENT: TrendingUp,
  LOCATIONS: MapPin,
  LEADERSHIP: Users,
  'MARKET INSIGHTS': BarChart3,
  VIDEO: Video,
};

const categoryBadgeColors: Record<string, string> = {
  PROPERTY: 'bg-blue-100 text-blue-900 border-blue-200',
  INVESTMENT: 'bg-emerald-100 text-emerald-900 border-emerald-200',
  LOCATIONS: 'bg-amber-100 text-amber-900 border-amber-200',
  LEADERSHIP: 'bg-purple-100 text-purple-900 border-purple-200',
  'MARKET INSIGHTS': 'bg-rose-100 text-rose-900 border-rose-200',
  VIDEO: 'bg-red-100 text-red-900 border-red-200',
};

export function Insights() {
  return (
    <section id="insights" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="container-content">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-14">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
            PROPERTY INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold font-serif text-slate-900 leading-tight">
            Know the Market Before You Make Your Move.
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
            Property decisions become easier when you have the right information. From buying a home in Jaipur to understanding emerging investment locations, our insights are created to help buyers and investors make more informed decisions.
          </p>
        </Reveal>

        {/* 6 Insight Cards Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {insightArticles.map((article) => {
            const Icon = categoryIcons[article.category] || FileText;
            const isExternal = article.href.startsWith('http');
            const badgeClass = categoryBadgeColors[article.category] || 'bg-slate-100 text-slate-800 border-slate-200';

            return (
              <StaggerItem key={article.id}>
                {isExternal ? (
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-full flex flex-col justify-between p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="h-11 w-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300 shadow-xs">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${badgeClass}`}>
                          {article.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-blue-700 transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {article.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-700 group-hover:text-blue-900 transition-colors">
                        {article.ctaText}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link
                    to={article.href}
                    className="group h-full flex flex-col justify-between p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="h-11 w-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300 shadow-xs">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${badgeClass}`}>
                          {article.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-blue-700 transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {article.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-700 group-hover:text-blue-900 transition-colors">
                        {article.ctaText}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
