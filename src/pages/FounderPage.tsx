import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FounderHero } from '@/components/company/FounderHero';
import { FounderBio } from '@/components/company/FounderBio';
import { FounderRoles } from '@/components/company/FounderRoles';
import { founderData } from '@/data/companyData';
import { ArrowRight, Globe, Mail, Facebook, Twitter, Users } from 'lucide-react';

export function FounderPage() {
  useEffect(() => {
    document.title = `${founderData.name} | Founder & Chairman | Sigma Homes India`;
  }, []);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900">
      {/* Cinematic Hero */}
      <FounderHero />

      {/* Biographical Profile & Education */}
      <FounderBio />

      {/* Factual Organizational & Public Responsibilities */}
      <FounderRoles />

      {/* Life Philosophy & Digital Presence */}
      <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
        <div className="container-content">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow text-sigma-blue-600">Digital Presence & Connect</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
              Public Touchpoints
            </h2>
            <p className="mt-2 text-sm text-sigma-stone-600">
              Official public channels and contact handles for Shri Jitendra Kumar Sharma.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {founderData.digitalPresence.website && (
              <a
                href={founderData.digitalPresence.website}
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-2xl hover:bg-sigma-blue-50/60 transition-colors flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-white text-sigma-blue-700 shadow-2xs">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-sigma-stone-400 block">Personal Website</span>
                  <span className="text-xs font-bold text-sigma-graphite-900">jitendrabansur.com</span>
                </div>
              </a>
            )}

            {founderData.digitalPresence.email && (
              <a
                href={`mailto:${founderData.digitalPresence.email}`}
                className="p-5 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-2xl hover:bg-sigma-blue-50/60 transition-colors flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-white text-sigma-blue-700 shadow-2xs">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-sigma-stone-400 block">Direct Email</span>
                  <span className="text-xs font-bold text-sigma-graphite-900">{founderData.digitalPresence.email}</span>
                </div>
              </a>
            )}

            {founderData.digitalPresence.facebook && (
              <a
                href={founderData.digitalPresence.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-2xl hover:bg-sigma-blue-50/60 transition-colors flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-white text-sigma-blue-700 shadow-2xs">
                  <Facebook className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-sigma-stone-400 block">Facebook Handle</span>
                  <span className="text-xs font-bold text-sigma-graphite-900">Jitendra Sharma Bansur</span>
                </div>
              </a>
            )}

            {founderData.digitalPresence.twitter && (
              <a
                href={founderData.digitalPresence.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-2xl hover:bg-sigma-blue-50/60 transition-colors flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-white text-sigma-blue-700 shadow-2xs">
                  <Twitter className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-sigma-stone-400 block">Twitter / X Handle</span>
                  <span className="text-xs font-bold text-sigma-graphite-900">@JitendraBansur</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Closing Call To Action */}
      <section className="py-16 bg-sigma-stone-100/60 border-t border-sigma-stone-200/80 text-center">
        <div className="container-content max-w-xl space-y-4">
          <span className="eyebrow text-sigma-blue-600">Company Leadership</span>
          <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900">
            Leadership Begins With Purpose
          </h2>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/leadership"
              className="px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
            >
              <Users className="h-4 w-4" />
              Explore Sigma Leadership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
