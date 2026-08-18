export interface BusinessDivision {
  id: string;
  name: string;
  tagline: string;
  services: string[];
}

export const businessDivisions: BusinessDivision[] = [
  {
    id: 'builders-developers',
    name: 'Sigma Builders & Developers',
    tagline: 'Creating landmark developments',
    services: [
      'Residential Townships',
      'Luxury Villas',
      'Group Housing',
      'Commercial Development',
      'Mixed Use Projects',
      'Integrated Townships',
    ],
  },
  {
    id: 'sigma-homes',
    name: 'Sigma Homes',
    tagline: 'Property consulting & sales',
    services: [
      'Property Consulting',
      'Residential Sales',
      'Commercial Sales',
      'Luxury Homes',
      'Affordable Housing',
      'Investment Advisory',
    ],
  },
  {
    id: 'sigma-investments',
    name: 'Sigma Investments',
    tagline: 'Research-led wealth creation',
    services: [
      'Real Estate Research',
      'Investment Planning',
      'Portfolio Management',
      'Capital Appreciation Planning',
      'Rental Yield Consulting',
    ],
  },
  {
    id: 'sigma-commercial',
    name: 'Sigma Commercial',
    tagline: 'Business spaces & industrial',
    services: [
      'Office Spaces',
      'Retail Shops',
      'Showrooms',
      'Business Parks',
      'Warehouses',
      'Industrial Investments',
    ],
  },
  {
    id: 'sigma-nri-services',
    name: 'Sigma NRI Services',
    tagline: 'End-to-end overseas property care',
    services: [
      'Online Consultation',
      'Virtual Site Visit',
      'Investment Planning',
      'Legal Verification',
      'Property Management',
      'Rental Management',
    ],
  },
];
