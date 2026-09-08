import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';

const statusLabels: Record<string, string> = {
  'ready-to-move': 'Ready to Move',
  'under-construction': 'Under Construction',
  'new-launch': 'New Launch',
};

const statusColors: Record<string, string> = {
  'ready-to-move': 'bg-emerald-100 text-emerald-900 border-emerald-300',
  'under-construction': 'bg-blue-100 text-blue-900 border-blue-300',
  'new-launch': 'bg-amber-100 text-amber-900 border-amber-300',
};

export function FeaturedProjects() {
  const topProjects = [
    {
      id: 'arihant-dynasty',
      name: 'ARIHANT DYNASTY',
      tag: 'Premium Apartments · 2 & 3 BHK',
      location: 'Mansarovar, Jaipur',
      description: 'Contemporary homes designed for comfortable family living, with modern spaces and convenient access to key parts of Jaipur.',
      price: 'Starting from ₹27.00L',
      status: 'under-construction',
      image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      slug: '/projects/arihant-dynasty',
    },
    {
      id: 'govindam-paradise',
      name: 'GOVINDAM PARADISE',
      tag: 'Premium Apartments · 2 & 3 BHK',
      location: 'Mansarovar Extension, Jaipur',
      description: 'A thoughtfully planned residential address for families looking for comfort, connectivity and everyday convenience.',
      price: 'Starting from ₹44.43L',
      status: 'under-construction',
      image: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      slug: '/projects/govindam-paradise',
    },
    {
      id: 'premium-residences',
      name: 'PREMIUM RESIDENCES',
      tag: 'Premium Apartments · 2 BHK',
      location: 'Mansarovar Extension, Jaipur',
      description: 'A modern residential option for homebuyers seeking a well-connected location and a comfortable lifestyle in Jaipur.',
      price: 'Starting from ₹50.09L',
      status: 'ready-to-move',
      image: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      slug: '/projects/premium-residences',
    },
  ];

  const otherProjects = projects.filter(
    (p) => !['arihant-dynasty', 'govindam-paradise', 'premium-residences'].includes(p.id)
  ).slice(0, 3);

  return (
    <section id="featured-projects" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="container-content">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <Reveal className="max-w-3xl">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
              PORTFOLIO HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold font-serif text-slate-900 leading-tight">
              Properties That Give You More Reasons to Come Home.
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              Our portfolio is focused on one key idea, the right property should feel right now and make sense in the future, whether it be luxury apartments in Jaipur, plots or investment opportunities in emerging locations.
            </p>
            <p className="mt-2 text-xs md:text-sm text-blue-700 font-bold">
              Know everything about residential and commercial projects in Jaipur, their connectivity, lifestyle and long-term prospects.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="shrink-0">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-700/20 group"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Primary 3 Highlight Cards */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {topProjects.map((project) => (
            <StaggerItem key={project.id}>
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 h-[520px]">
                {/* Top Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                  {/* Status Badge & Location */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border shadow-xs ${statusColors[project.status]}`}>
                      {statusLabels[project.status] || 'Active'}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 text-[10px] font-bold shadow-xs">
                      <MapPin className="h-3 w-3 text-amber-600 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-gradient-to-b from-white to-[#F9FBFD]">
                  <div>
                    <span className="text-[11px] font-extrabold text-blue-700 uppercase tracking-wider block mb-1">
                      {project.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                      {project.name}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="h-px bg-slate-200/80 my-4" />

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                          Price
                        </span>
                        <span className="text-sm sm:text-base font-bold text-slate-900 font-serif">
                          {project.price}
                        </span>
                      </div>
                      <Link
                        to={project.slug}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors py-1 group/btn"
                      >
                        <span>View Project</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Secondary Row */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              More Landmark Properties in Jaipur
            </h4>
            <Link
              to="/properties"
              className="text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
            >
              Browse all 10+ properties →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                to={`/properties?search=${encodeURIComponent(p.name)}`}
                className="group flex items-center gap-4 p-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="h-20 w-24 rounded-xl overflow-hidden shrink-0 bg-slate-100 relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
                    <MapPin className="h-3 w-3 text-amber-600" />
                    <span className="truncate">{p.location}</span>
                  </div>
                  <h5 className="font-bold font-serif text-slate-900 text-sm group-hover:text-blue-700 transition-colors truncate">
                    {p.name}
                  </h5>
                  <p className="text-xs font-bold text-blue-700 mt-1">{p.price}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all shrink-0 mr-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
