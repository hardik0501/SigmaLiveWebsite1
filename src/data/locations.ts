export interface LocationData {
  id: string;
  slug: string;
  name: string;
  description: string;
  area: string;
  image: string;
}

export const locations: LocationData[] = [
  {
    id: 'mansarovar',
    slug: 'mansarovar-jaipur',
    name: 'Mansarovar',
    description: "One of Jaipur's largest planned residential hubs with established civic infrastructure.",
    area: 'South-West Jaipur',
    image: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'mansarovar-extension',
    slug: 'mansarovar-extension-jaipur',
    name: 'Mansarovar Extension',
    description: 'Expanding corridor with new residential and commercial development.',
    area: 'South-West Jaipur',
    image: 'https://images.pexels.com/photos/9432498/pexels-photo-9432498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'vaishali-nagar',
    slug: 'vaishali-nagar-jaipur',
    name: 'Vaishali Nagar',
    description: 'Premium lifestyle destination with retail, dining and modern residences.',
    area: 'West Jaipur',
    image: 'https://images.pexels.com/photos/17833253/pexels-photo-17833253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'kalwar-road',
    slug: 'kalwar-road-jaipur',
    name: 'Kalwar Road',
    description: 'Emerging growth corridor with affordable and mid-segment housing.',
    area: 'North-West Jaipur',
    image: 'https://images.pexels.com/photos/15480429/pexels-photo-15480429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'gokulpura',
    slug: 'gokulpura-jaipur',
    name: 'Gokulpura',
    description: 'Residential cluster with connectivity to central Jaipur markets.',
    area: 'North Jaipur',
    image: 'https://images.pexels.com/photos/8171870/pexels-photo-8171870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'jhotwara',
    slug: 'jhotwara-jaipur',
    name: 'Jhotwara',
    description: 'Established industrial-residential belt with growing residential demand.',
    area: 'North-West Jaipur',
    image: 'https://images.pexels.com/photos/16010068/pexels-photo-16010068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'rampura-road',
    slug: 'rampura-road-jaipur',
    name: 'Rampura Road',
    description: 'High-appreciation potential corridor attracting new project launches.',
    area: 'South Jaipur',
    image: 'https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'jagatpura',
    slug: 'jagatpura-jaipur',
    name: 'Jagatpura',
    description: 'Fast-developing residential zone near the airport and IT corridors.',
    area: 'South-East Jaipur',
    image: 'https://images.pexels.com/photos/11861957/pexels-photo-11861957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'narayan-vihar',
    slug: 'narayan-vihar-jaipur',
    name: 'Narayan Vihar',
    description: 'Premium plotted and villa community with quiet residential appeal.',
    area: 'West Jaipur',
    image: 'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'acharya-vinoba-bhave-nagar',
    slug: 'acharya-vinoba-bhave-nagar-jaipur',
    name: 'Acharya Vinoba Bhave Nagar',
    description: 'Planned residential sector with wide roads and civic amenities.',
    area: 'South-West Jaipur',
    image: 'https://images.pexels.com/photos/38113341/pexels-photo-38113341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'noida',
    slug: 'noida-ncr',
    name: 'Noida (NCR)',
    description: 'Prime commercial and residential powerhouse in NCR with world-class expressways.',
    area: 'Delhi NCR',
    image: '/images/locations/noida.jpg',
  },
  {
    id: 'gurgaon',
    slug: 'gurgaon-ncr',
    name: 'Gurgaon (NCR)',
    description: 'Futuristic corporate and financial hub of NCR with luxury high-rises and premium lifestyle corridors.',
    area: 'Delhi NCR',
    image: '/images/locations/gurgaon.jpg',
  },
  {
    id: 'dubai',
    slug: 'dubai-international',
    name: 'Dubai',
    description: 'Global luxury real estate hub offering tax-free yields, Golden Visa options, and iconic waterfront residences.',
    area: 'UAE (International)',
    image: '/images/locations/dubai.jpg',
  },
  {
    id: 'dholera',
    slug: 'dholera-smart-city',
    name: 'Dholera',
    description: "India's first greenfield industrial smart city and investment hotspot on Delhi-Mumbai Corridor.",
    area: 'Gujarat (Smart City)',
    image: '/images/locations/dholera.jpg',
  },
];
