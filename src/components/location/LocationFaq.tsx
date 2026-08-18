import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Location } from '@/types/location';

interface LocationFaqProps {
  location: Location;
}

export function LocationFaq({ location }: LocationFaqProps) {
  const faqs = location.faqs;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow text-sigma-blue-600">Location Queries</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Frequently Asked Questions about {location.name}
          </h2>
        </div>

        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-2xl overflow-hidden">
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
    </section>
  );
}
