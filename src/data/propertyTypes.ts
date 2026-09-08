export interface PropertyTypeData {
  id: string;
  name: string;
  heading: string;
  description: string;
  image: string;
  cta: string;
}

export const propertyTypes: PropertyTypeData[] = [
  {
    id: 'apartments',
    name: 'Apartments',
    heading: 'Find a Home That Fits Your Life.',
    description: "Discover thoughtfully designed residences, including modern 2, 3 and 4 BHK homes in some of Jaipur's sought-after locations.",
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cta: 'Explore Apartments',
  },
  {
    id: 'villas',
    name: 'Villas',
    heading: 'More Space. More Privacy. More Yours.',
    description: 'Discover villas for sale in Jaipur designed for families who want independent living, generous spaces and a little more freedom.',
    image: 'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cta: 'Explore Villas',
  },
  {
    id: 'plots-land',
    name: 'Plots & Land',
    heading: 'Own the Land. Build Your Vision.',
    description: 'Explore JDA approved plots in Jaipur and residential land opportunities in locations with strong connectivity and future growth potential.',
    image: 'https://images.pexels.com/photos/17079478/pexels-photo-17079478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cta: 'Explore Plots',
  },
  {
    id: 'farmhouses',
    name: 'Farmhouses',
    heading: 'Your Weekend Escape Could Be Your Own.',
    description: 'Looking for space away from the everyday rush? Explore farmhouse for sale in Jaipur options for weekend living, family gatherings or long-term ownership.',
    image: 'https://images.pexels.com/photos/14021175/pexels-photo-14021175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cta: 'Explore Farmhouses',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    heading: 'Give Your Business the Right Address.',
    description: 'Explore commercial property for sale in Jaipur, from business spaces to retail and investment opportunities in strategically located areas.',
    image: 'https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cta: 'Explore Commercial',
  },
];
