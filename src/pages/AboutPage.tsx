import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AboutHero } from '@/components/company/AboutHero';
import { CompanyStats } from '@/components/company/CompanyStats';
import { CompanyTimeline } from '@/components/company/CompanyTimeline';
import { VisionMission } from '@/components/company/VisionMission';
import { CoreValues } from '@/components/company/CoreValues';
import { BusinessEcosystem } from '@/components/sections/BusinessEcosystem';
import { ArrowRight, UserCheck, Briefcase } from 'lucide-react';

export function AboutPage() {
  useEffect(() => {
    document.title = 'About Sigma Homes India | 25+ Years of Real Estate Experience';
  }, []);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900">
      {/* Corporate Hero */}
      <AboutHero />

      {/* Verified Stats Strip */}
      <CompanyStats />

      {/* Corporate Story & Ethos */}
      <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
        <div className="container-content max-w-4xl space-y-6">
          <span className="eyebrow text-sigma-blue-600">Our Ethos</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-tight">
            "Trust First. Business Later."
          </h2>
          <div className="space-y-4 text-base md:text-lg text-sigma-graphite-800 leading-relaxed font-sans">
            <p className="font-medium text-sigma-graphite-900">
              Real estate is not merely about buying and selling properties. It is about building dreams, creating wealth, securing families, and developing vibrant communities.
            </p>
            <p className="text-sigma-stone-600">
              Since 2001, Sigma Homes has grown from a visionary residential colony developer into a multifaceted real estate ecosystem encompassing township planning, luxury sky residences, commercial retail hubs, construction, and investment advisory.
            </p>
          </div>
        </div>
      </section>

      {/* 25+ Year Journey Timeline */}
      <CompanyTimeline />

      {/* Vision & Mission */}
      <VisionMission />

      {/* Core Values */}
      <CoreValues />

      {/* Integrated Business Ecosystem */}
      <BusinessEcosystem />

      {/* Leadership & Founder Connect Callout */}
      <section className="py-20 bg-sigma-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container-content relative z-10 max-w-2xl space-y-4">
          <span className="eyebrow text-sigma-amber-400">Leadership & Vision</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
            Meet the Vision Behind Sigma Group
          </h2>
          <p className="text-sm text-sigma-stone-300 leading-relaxed">
            Discover the human leadership, public service philosophy, and team driving Sigma's two-decade growth story.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/founder"
              className="px-6 py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2"
            >
              <UserCheck className="h-4 w-4" />
              Explore Founder Biography
            </Link>
            <Link
              to="/leadership"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold text-sm backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Briefcase className="h-4 w-4" />
              Meet Leadership Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
