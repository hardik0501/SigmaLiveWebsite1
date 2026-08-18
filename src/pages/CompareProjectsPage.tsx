import React, { useState, useEffect, useMemo } from 'react';
import { projectsData } from '@/data/projectsData';
import { Project } from '@/types/project';
import { ProjectCompareGrid } from '@/components/conversion/ProjectCompareGrid';
import { UniversalLeadModal } from '@/components/conversion/UniversalLeadModal';
import { Plus, Building2 } from 'lucide-react';

export function CompareProjectsPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => [
    projectsData[0]?.id || '',
    projectsData[1]?.id || '',
  ]);

  const [enquiryProject, setEnquiryProject] = useState<Project | null>(null);

  useEffect(() => {
    document.title = 'Compare Real Estate Projects | Sigma Homes India';
  }, []);

  const selectedProjects = useMemo(() => {
    return projectsData.filter((p) => selectedIds.includes(p.id));
  }, [selectedIds]);

  const handleAddProject = (id: string) => {
    if (id && !selectedIds.includes(id) && selectedIds.length < 4) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleRemoveProject = (id: string) => {
    setSelectedIds(selectedIds.filter((pId) => pId !== id));
  };

  const unselectedProjects = projectsData.filter((p) => !selectedIds.includes(p.id));

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Side-by-Side Comparison</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            Compare Real Estate Projects
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            Evaluate location, pricing, BHK configurations, super built-up area, and key amenities across selected Sigma developments.
          </p>
        </div>

        {/* Project Add Dropdown */}
        {selectedIds.length < 4 && unselectedProjects.length > 0 && (
          <div className="mb-8 p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-sigma-graphite-900 flex items-center gap-1.5">
              <Plus className="h-4 w-4 text-sigma-blue-600" />
              Add Project to Compare:
            </span>
            <select
              onChange={(e) => handleAddProject(e.target.value)}
              value=""
              className="px-3.5 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
            >
              <option value="" disabled>Select a project...</option>
              {unselectedProjects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.locality})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Comparison Matrix Table */}
        <ProjectCompareGrid
          projects={selectedProjects}
          onRemoveProject={handleRemoveProject}
          onEnquire={(p) => setEnquiryProject(p)}
        />
      </div>

      <UniversalLeadModal
        isOpen={Boolean(enquiryProject)}
        onClose={() => setEnquiryProject(null)}
        projectName={enquiryProject?.name}
        projectId={enquiryProject?.id}
        location={enquiryProject?.location}
        leadType="price_request"
      />
    </div>
  );
}
