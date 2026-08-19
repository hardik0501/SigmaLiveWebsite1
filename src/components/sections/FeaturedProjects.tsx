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
  'ready-to-move': 'bg-sigma-green-500/10 text-sigma-green-700',
  'under-construction': 'bg-sigma-blue-500/10 text-sigma-blue-700',
  'new-launch': 'bg-sigma-amber-500/10 text-sigma-amber-700',
};

function ProjectCard({ project, large = false }: { project: typeof projects[0]; large?: boolean }) {
  return (
    <Link
      to={`/properties?search=${encodeURIComponent(project.name)}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-sigma-stone-200/80 shadow-xs transition-all duration-500 ease-sigma hover:shadow-2xl hover:shadow-sigma-blue-950/10 ${
        large ? 'h-full' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${large ? 'h-72 md:h-96 lg:h-[420px]' : 'h-56'}`}>
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950/60 via-sigma-graphite-950/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
        
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border backdrop-blur-xs shadow-xs ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>

        {large && (
          <div className="absolute bottom-4 left-4 right-4 text-white hidden md:block">
            <span className="text-[11px] font-bold uppercase tracking-widest text-sigma-amber-400 block mb-1">
              Featured Flagship Project
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-7 justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-sigma-stone-500 uppercase">
            <MapPin className="h-3.5 w-3.5 text-sigma-blue-600 shrink-0" />
            <span>{project.location}</span>
          </div>
          <h3 className={`mt-2 font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-800 transition-colors ${large ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
            {project.name}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-sigma-stone-600">
            <span className="flex items-center gap-1.5 font-semibold text-sigma-graphite-800">
              <Building2 className="h-3.5 w-3.5 text-sigma-blue-600" />
              {project.type}
            </span>
            <span className="text-sigma-stone-300">•</span>
            <span>{project.configuration}</span>
          </div>
          <p className="mt-3 text-xs text-sigma-stone-600 leading-relaxed line-clamp-2">
            {project.usp}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-sigma-stone-200/60 flex items-center justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
              Starting Price
            </span>
            <span className="text-base font-bold font-serif text-sigma-graphite-900">{project.price}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-700 group-hover:text-sigma-blue-900 transition-colors">
            <span>Explore Project</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
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
            eyebrow="Architectural Excellence"
            title="Featured Developments"
            supporting="A curated collection of landmark residential & commercial spaces across prime Jaipur corridors."
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
            <ProjectCard project={featured} large />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {supporting.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        {/* Secondary Row Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreProjects.map((p) => (
            <StaggerItem key={p.id}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
