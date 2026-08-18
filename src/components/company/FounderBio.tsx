import React from 'react';
import { User, GraduationCap, Heart, Sparkles } from 'lucide-react';
import { founderData } from '@/data/companyData';

export function FounderBio() {
  const p = founderData.personalProfile;

  return (
    <section id="biography" className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Personal Profile Details Card */}
          <div className="lg:col-span-5 p-6 md:p-8 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-sigma-blue-700 uppercase tracking-wider">
              <User className="h-4 w-4" />
              Personal Profile
            </div>

            <div className="space-y-3 divide-y divide-sigma-stone-200/60">
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Name</span>
                <span className="text-sm font-bold text-sigma-graphite-900">{p.name}</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Place of Birth</span>
                <span className="text-sm font-bold text-sigma-graphite-900">{p.placeOfBirth}</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Date of Birth</span>
                <span className="text-sm font-bold text-sigma-graphite-900">{p.dateOfBirth}</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Father’s Name</span>
                <span className="text-sm font-bold text-sigma-graphite-900">{p.fatherName}</span>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Mother’s Name</span>
                <span className="text-sm font-bold text-sigma-graphite-900">{p.motherName}</span>
              </div>
            </div>

            {/* Academic Qualifications */}
            <div className="pt-4 border-t border-sigma-stone-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-sigma-blue-700 uppercase tracking-wider">
                <GraduationCap className="h-4 w-4" />
                Education Qualifications
              </div>
              <div className="flex flex-wrap gap-2">
                {founderData.education.map((edu) => (
                  <span key={edu.degree} className="px-3 py-1 bg-white border border-sigma-stone-200 rounded-xl text-xs font-bold text-sigma-graphite-900 shadow-2xs">
                    {edu.degree} ({edu.title})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Service & Sources of Inspiration */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="eyebrow text-sigma-blue-600">Public Commitment</span>
              <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
                Service Beyond Business
              </h2>
              <p className="text-sm md:text-base text-sigma-stone-600 leading-relaxed font-sans">
                Rooted in social responsibility, Shri Jitendra Kumar Sharma has directed extensive initiatives focused on rural community upliftment, empowering families of martyrs, and supporting underprivileged communities across Rajasthan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {founderData.socialServiceThemes.map((theme, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60">
                    <Heart className="h-4 w-4 text-sigma-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-sigma-graphite-900">{theme}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sources of Inspiration */}
            <div className="p-6 bg-sigma-stone-100/70 border border-sigma-stone-200/80 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-sigma-blue-700 uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                Sources of Inspiration
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {founderData.inspirations.map((item) => (
                  <span key={item} className="px-3 py-1 bg-white rounded-xl border border-sigma-stone-300 text-xs font-bold text-sigma-graphite-900 shadow-2xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
