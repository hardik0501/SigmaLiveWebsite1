import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, Award } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectTrustFaqProps {
  project: Project;
}

export function ProjectTrustFaq({ project }: ProjectTrustFaqProps) {
  const faqs = project.faqsData || [
    { question: `Where is ${project.name} located?`, answer: `The project is located at ${project.location}.` },
    { question: `What configurations are offered?`, answer: `${project.name} offers ${project.configurations.join(', ')} configurations.` },
    { question: `What is the starting price?`, answer: `The indicative starting price is ${project.priceLabel}.` },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content space-y-16">
        {/* Trust & Regulatory Approvals Banner */}
        <div className="p-6 md:p-8 bg-sigma-stone-50 rounded-3xl border border-sigma-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sigma-blue-50 text-sigma-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <span className="eyebrow text-sigma-blue-600">Regulatory Verification</span>
              <h3 className="text-xl font-bold font-serif text-sigma-graphite-900 mt-0.5">
                {project.approvalStatus || 'Verified & Approved'} Project
              </h3>
              <p className="text-xs text-sigma-stone-500 mt-1 max-w-md">
                Every Sigma project undergoes rigorous legal verification, title clearance, and compliance auditing.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-sigma-stone-200 shadow-2xs text-xs font-semibold text-sigma-graphite-800">
              <Award className="h-4 w-4 text-sigma-amber-500" />
              25+ Years Legacy
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="eyebrow text-sigma-blue-600">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-sigma-graphite-900 hover:text-sigma-blue-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-sigma-stone-400 transition-transform ${
                      openIdx === idx ? 'rotate-180 text-sigma-blue-600' : ''
                    }`}
                  />
                </button>
                {openIdx === idx && (
                  <div className="px-4 pb-4 text-xs text-sigma-stone-600 leading-relaxed border-t border-sigma-stone-200/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
