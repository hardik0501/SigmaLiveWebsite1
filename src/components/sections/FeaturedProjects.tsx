import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { projects } from '@/data/projects';

const statusLabels: Record<string, string> = {
  'ready-to-move': 'Ready to Move',
  'under-construction': 'Under Construction',
  'new-launch': 'New Launch',
};

const statusColors: Record<string, string> = {
  'ready-to-move': 'bg-emerald-600 text-white',
  'under-construction': 'bg-sigma-blue-600 text-white',
  'new-launch': 'bg-sigma-amber-500 text-sigma-navy-950',
};

function ProjectCard({
  project,
  variant = 'standard',
}: {
  project: typeof projects[0];
  variant?: 'large' | 'compact' | 'standard';
}) {
  const isCompact = variant === 'compact';
  const isLarge = variant === 'large';

  const heightClass = {
    large: 'h-[500px] lg:h-[550px]',
    compact: 'h-[263px]',
    standard: 'h-[380px] lg:h-[400px]',
  }[variant];

  return (
    <Link
      to={`/properties?search=${encodeURIComponent(project.name)}`}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-sigma-graphite-950 border border-white/10 shadow-lg transition-all duration-500 ease-sigma hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-sigma-amber-400/40 ${heightClass}`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-105"
        />
        {/* Soft overall image darkening */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
      </div>

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase shadow-md ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Bottom Content Glass Panel */}
      <div className="relative z-10 mt-auto p-3 lg:p-4">
        <div className={`flex flex-col justify-end w-full rounded-2xl backdrop-blur-lg bg-black/70 border border-white/10 ${isCompact ? 'p-4' : 'p-5 lg:p-6'} transition-all duration-300 group-hover:border-sigma-amber-400/30 group-hover:bg-black/75`}>
          <div className="flex items-center gap-1.5 text-[10px] lg:text-[11px] font-extrabold uppercase tracking-widest text-sigma-amber-400 mb-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{project.location}</span>
          </div>
          
          <h3 className={`font-bold font-serif text-white leading-tight group-hover:text-sigma-amber-300 transition-colors ${
            isLarge ? 'text-2xl md:text-3.5xl mb-2.5' : isCompact ? 'text-lg md:text-xl mb-1.5' : 'text-xl md:text-2xl mb-2'
          }`}>
            {project.name}
          </h3>

          <div className={`flex flex-wrap items-center gap-x-2 text-[10px] lg:text-[11px] font-semibold text-sigma-ivory-200/70 ${isCompact ? 'mb-2' : 'mb-3'}`}>
            <span className="flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5 text-sigma-amber-400/80" />
              {project.type}
            </span>
            <span>•</span>
            <span>{project.configuration}</span>
          </div>

          {!isCompact && (
            <p className="mt-1 text-xs text-sigma-ivory-200/60 leading-relaxed line-clamp-2 mb-4">
              {project.usp}
            </p>
          )}

          {/* Divider */}
          <div className="h-px bg-white/10 my-3" />

          <div className="flex items-center justify-between">
            <div>
              <span className="block text-[8px] lg:text-[9px] font-bold uppercase tracking-wider text-sigma-ivory-200/40">
                Starting Price
              </span>
              <span className="text-sm lg:text-base font-bold font-serif text-white">{project.price}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-amber-400 group-hover:text-white transition-colors duration-300">
              <span>Explore Project</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProjects() {
  const featured = projects.find((p) => p.featured)!;
  const supporting = projects.filter((p) => !p.featured).slice(0, 2);
  const moreProjects = projects.filter((p) => !p.featured).slice(2, 6);

  return (
    <section id="featured-projects" className="py-section md:py-28 bg-sigma-stone-100/70">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="PORTFOLIO HIGHLIGHTS"
            title="Landmark Projects in Jaipur"
            supporting="A curated collection of landmark residential spaces across prime Jaipur corridors."
          />
          <Reveal delay={0.2}>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-sigma-blue-700 hover:text-sigma-blue-900 transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>

        {/* Editorial Asymmetric Layout: 1 Hero Featured (60%) + 2 Stacked Supporting (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-7">
            <ProjectCard project={featured} variant="large" />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {supporting.map((p) => (
              <ProjectCard key={p.id} project={p} variant="compact" />
            ))}
          </div>
        </div>

        {/* Secondary Row Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreProjects.map((p) => (
            <StaggerItem key={p.id}>
              <ProjectCard project={p} variant="standard" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
