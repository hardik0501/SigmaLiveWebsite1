export interface BusinessDivision {
  id: string;
  name: string;
  tagline: string;
  services: string[];
}

export const businessDivisions: BusinessDivision[] = [
  {
    id: 'builders-developers',
    name: 'SIGMA BUILDERS & DEVELOPERS',
    tagline: 'Creating spaces with a long-term vision.',
    services: [
      'Residential Townships',
      'Luxury Villas',
      'Group Housing',
      'Commercial Development',
      'Mixed-Use Projects',
      'Integrated Townships',
    ],
  },
  {
    id: 'sigma-homes',
    name: 'SIGMA HOMES',
    tagline: 'Helping buyers discover the right property and make informed decisions.',
    services: [
      'Property Consulting',
      'Residential Sales',
      'Luxury Apartments',
      'Site Visits & Advisory',
      'Documentation Assistance',
      'Transparent Guidance',
    ],
  },
  {
    id: 'sigma-investments',
    name: 'SIGMA INVESTMENTS',
    tagline: 'Research-led real estate opportunities for investors looking beyond the obvious.',
    services: [
      'Real Estate Research',
      'High-ROI Opportunities',
      'Land Asset Planning',
      'Rental Yield Strategy',
      'Capital Appreciation Planning',
      'Portfolio Growth',
    ],
  },
  {
    id: 'sigma-commercial',
    name: 'SIGMA COMMERCIAL',
    tagline: 'Business spaces and commercial opportunities designed around location and potential.',
    services: [
      'Office Spaces',
      'Retail Shops',
      'Showrooms',
      'High-Street Retail',
      'Warehouses & Logistics',
      'Industrial Investments',
    ],
  },
  {
    id: 'sigma-nri-services',
    name: 'SIGMA NRI SERVICES',
    tagline: 'Property assistance for NRIs looking to buy, manage or invest in India.',
    services: [
      'Online Consultation',
      'Virtual Site Visits',
      'Legal & Title Verification',
      'Property Management',
      'Rental Management',
      'Dedicated Relationship Manager',
    ],
  },
];
