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
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-sigma-stone-200/70 shadow-sm transition-all duration-500 ease-sigma hover:shadow-xl hover:shadow-sigma-blue-950/5 ${
        large ? 'md:row-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${large ? 'h-64 md:h-80 lg:h-96' : 'h-52'}`}>
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-105"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs text-sigma-stone-500">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </div>
        <h3 className={`mt-2 font-bold text-sigma-graphite-900 ${large ? 'text-2xl' : 'text-lg'}`}>
          {project.name}
        </h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-sigma-stone-600">
          <span className="flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-sigma-blue-500" />
            {project.type}
          </span>
          <span className="text-sigma-stone-400">·</span>
          <span>{project.configuration}</span>
        </div>
        <p className="mt-3 text-sm text-sigma-graphite-700 leading-relaxed flex-1">
          {project.usp}
        </p>
        <div className="mt-5 flex items-center justify-between pt-4 border-t border-sigma-stone-200/60">
          <span className="text-sm font-semibold text-sigma-graphite-900">{project.price}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sigma-blue-700 group-hover:text-sigma-blue-900 transition-colors">
            View Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
    <section id="featured-projects" className="py-section md:py-30 bg-sigma-stone-100">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Featured Properties"
            title="Featured Properties"
            supporting="Explore selected Sigma opportunities across Jaipur and our key markets."
          />
          <Reveal delay={0.2}>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 font-bold text-sigma-blue-700 hover:text-sigma-blue-900 transition-colors"
            >
              View All Properties
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric layout: 1 large + 2 supporting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="md:row-span-2">
            <ProjectCard project={featured} large />
          </div>
          {supporting.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Additional projects */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
