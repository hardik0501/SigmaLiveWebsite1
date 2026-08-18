import React from 'react';

export function CompanyStats() {
  const stats = [
    { value: '25+', label: 'Years of Excellence', sub: 'Industry Experience' },
    { value: '12,000+', label: 'Happy Customers', sub: 'Families Served' },
    { value: '100+', label: 'Successful Projects', sub: 'Completed Developments' },
    { value: '2,500+', label: 'Channel Associates', sub: 'Partner Network' },
  ];

  return (
    <section className="py-12 bg-sigma-navy-950 text-white border-y border-white/10">
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((s, idx) => (
            <div key={idx} className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-3xl md:text-5xl font-extrabold font-serif text-sigma-amber-400 block tracking-tight">
                {s.value}
              </span>
              <span className="text-xs md:text-sm font-bold text-white block mt-1">
                {s.label}
              </span>
              <span className="text-[11px] text-sigma-stone-400 font-semibold block mt-0.5">
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
