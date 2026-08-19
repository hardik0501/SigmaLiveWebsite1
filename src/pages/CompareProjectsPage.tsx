import React, { useState, useEffect, useMemo } from 'react';
import { projectsData } from '@/data/projectsData';
import { Project } from '@/types/project';
import { ProjectCompareGrid } from '@/components/conversion/ProjectCompareGrid';
import { UniversalLeadModal } from '@/components/conversion/UniversalLeadModal';
import { WorkingMarkets } from '@/components/sections/WorkingMarkets';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Plus, Building2, HelpCircle, ArrowRight, ShieldCheck, Scale } from 'lucide-react';

const compareFaqs = [
  {
    q: 'How are starting prices calculated in the comparison table?',
    a: 'Starting prices represent baseline launch & current developer quotes for basic sale price (BSP). Additional parking, PLC, and registration charges are detailed in official cost sheets.',
  },
  {
    q: 'Are super built-up areas and carpet areas specified under RERA rules?',
    a: 'Yes, all carpet area measurements listed across Sigma projects comply strictly with RERA measurement standards.',
  },
  {
    q: 'Can I request custom combined cost sheet breakdowns for two compared projects?',
    a: 'Absolutely. Click "Request Cost Sheet" on any compared project to receive an official comparative breakdown on WhatsApp.',
  },
  {
    q: 'Can I schedule back-to-back chauffeured site visits for compared properties?',
    a: 'Yes, our relationship managers arrange single-day chauffeured tours covering all your shortlisted properties in Jaipur.',
  },
];

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
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 md:pt-40">
      {/* 1. Compare Hero */}
      <div className="container-content">
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Side-by-Side Evaluation</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            Compare Jaipur Real Estate Developments
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            Evaluate location, pricing, BHK configurations, super built-up area, amenities, and RERA registration status across selected Sigma projects.
          </p>
        </div>

        {/* 2. Key Matrix Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xs mb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Compared Items</span>
            <span className="text-xl font-bold font-serif text-sigma-graphite-900">{selectedProjects.length} Developments</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Legal Standard</span>
            <span className="text-xl font-bold font-serif text-sigma-green-700">100% Verified</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Max Items</span>
            <span className="text-xl font-bold font-serif text-sigma-blue-700">Up to 4 Projects</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Cost Transparency</span>
            <span className="text-xl font-bold font-serif text-sigma-amber-600">Zero Brokerage</span>
          </div>
        </div>

        {/* 3. Project Selector Bar */}
        {selectedIds.length < 4 && unselectedProjects.length > 0 && (
          <div className="mb-8 p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-sigma-graphite-900 flex items-center gap-1.5">
              <Plus className="h-4 w-4 text-sigma-blue-600" />
              Add Project to Comparison:
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

        {/* 4. Specification Comparison Matrix */}
        <div className="mb-16">
          <ProjectCompareGrid
            projects={selectedProjects}
            onRemoveProject={handleRemoveProject}
            onEnquire={(p) => setEnquiryProject(p)}
          />
        </div>

        {/* 5. Location & Corridor Comparison Feature */}
        <section className="py-12 bg-white rounded-3xl border border-sigma-stone-200/80 p-8 mb-16 shadow-xs">
          <div className="max-w-2xl mb-6 space-y-2">
            <span className="eyebrow text-sigma-blue-600">Decision Assistance</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Need Help Deciding Between Developments?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60 space-y-2">
              <Scale className="h-5 w-5 text-sigma-blue-700" />
              <h4 className="font-bold text-sm font-serif text-sigma-graphite-900">Official Cost Sheet Comparison</h4>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">Receive itemized breakdowns including payment schedules, GST, and maintenance deposits.</p>
            </div>

            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60 space-y-2">
              <Building2 className="h-5 w-5 text-sigma-blue-700" />
              <h4 className="font-bold text-sm font-serif text-sigma-graphite-900">Chauffeured Site Visit</h4>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">Visit both locations in a single private chauffeured tour with a dedicated relationship manager.</p>
            </div>

            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60 space-y-2">
              <ShieldCheck className="h-5 w-5 text-sigma-blue-700" />
              <h4 className="font-bold text-sm font-serif text-sigma-graphite-900">Independent Legal Audit</h4>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">Verify RERA certificates, land title deeds, and bank loan approvals.</p>
            </div>
          </div>
        </section>
      </div>

      {/* 6. Active Working Markets */}
      <WorkingMarkets />

      {/* 7. Comparison FAQs */}
      <section className="py-16 md:py-24 bg-white border-t border-sigma-stone-200/60">
        <div className="container-content max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="eyebrow text-sigma-blue-600">Comparison Guidance</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Frequently Asked Comparison Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compareFaqs.map((faq, i) => (
              <div key={i} className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-sigma-blue-700 font-bold text-sm">
                  <HelpCircle className="h-4 w-4 shrink-0" />
                  <h3>{faq.q}</h3>
                </div>
                <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <FinalCTA />

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
