export interface PropertyTypeData {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const propertyTypes: PropertyTypeData[] = [
  {
    id: 'apartments',
    name: 'Apartments',
    description: 'Modern 2, 3 & 4 BHK residences built for everyday comfort.',
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'villas',
    name: 'Villas',
    description: 'Independent luxury homes featuring private lawns and premium amenities.',
    image: 'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'plots-land',
    name: 'Plots & Land',
    description: 'JDA-approved residential plots prime for investment or custom building.',
    image: 'https://images.pexels.com/photos/17079478/pexels-photo-17079478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'farmhouses',
    name: 'Farmhouses',
    description: 'Peaceful getaway properties and weekend retreats surrounded by nature.',
    image: 'https://images.pexels.com/photos/14021175/pexels-photo-14021175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    description: 'Office, retail and showroom spaces in prime locations',
    image: 'https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
