export type ProjectStatus = 'ready-to-move' | 'under-construction' | 'new-launch';

export interface ProjectData {
  id: string;
  name: string;
  location: string;
  type: string;
  configuration: string;
  price: string;
  usp: string;
  status: ProjectStatus;
  image: string;
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: 'arihant-dynasty',
    name: 'Arihant Dynasty',
    location: 'Mansarovar, Jaipur',
    type: 'Premium Apartments',
    configuration: '3 & 4 BHK',
    price: 'Price on request',
    usp: 'Rooftop sky deck with panoramic city views',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'govindam-paradise',
    name: 'Govindam Paradise',
    location: 'Vaishali Nagar, Jaipur',
    type: 'Residential Apartments',
    configuration: '2 & 3 BHK',
    price: 'Price on request',
    usp: 'Landscaped central courtyard with water features',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'anukampa-sky-lounge',
    name: 'Anukampa Sky Lounge',
    location: 'Jagatpura, Jaipur',
    type: 'Sky Residences',
    configuration: '3 & 4 BHK',
    price: 'Price on request',
    usp: 'Private lounge access on every 5th floor',
    status: 'new-launch',
    image: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'kanhaiya-kunj',
    name: 'Kanhaiya Kunj',
    location: 'Jhotwara, Jaipur',
    type: 'Residential Apartments',
    configuration: '2 & 3 BHK',
    price: 'Price on request',
    usp: 'Vastu-compliant design with cross ventilation',
    status: 'ready-to-move',
    image: 'https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'jb-prime-ii',
    name: 'JB Prime II',
    location: 'Mansarovar Extension, Jaipur',
    type: 'Premium Apartments',
    configuration: '3 BHK',
    price: 'Price on request',
    usp: 'Gated community with smart home automation',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/31656168/pexels-photo-31656168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'lucky-heights-4',
    name: 'Lucky Heights 4',
    location: 'Kalwar Road, Jaipur',
    type: 'Residential Apartments',
    configuration: '2 & 3 BHK',
    price: 'Price on request',
    usp: 'Affordable luxury with premium amenities',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'shivam-grand',
    name: 'Shivam Grand',
    location: 'Gokulpura, Jaipur',
    type: 'Premium Apartments',
    configuration: '3 & 4 BHK',
    price: 'Price on request',
    usp: 'Grand entrance lobby with double-height ceiling',
    status: 'new-launch',
    image: 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'narayan-vihar-villa-2',
    name: 'Narayan Vihar Villa 2',
    location: 'Narayan Vihar, Jaipur',
    type: 'Luxury Villa',
    configuration: '4 & 5 BHK',
    price: 'Price on request',
    usp: 'Private pool and landscaped garden in every unit',
    status: 'ready-to-move',
    image: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'vaishali-nagar-3bhk',
    name: 'Vaishali Nagar 3 BHK',
    location: 'Vaishali Nagar, Jaipur',
    type: 'Premium Apartments',
    configuration: '3 BHK',
    price: 'Price on request',
    usp: 'Ready-to-move homes in prime Jaipur locality',
    status: 'ready-to-move',
    image: 'https://images.pexels.com/photos/38505310/pexels-photo-38505310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'rampura-road-residences',
    name: 'Rampura Road Premium Residences',
    location: 'Rampura Road, Jaipur',
    type: 'Premium Apartments',
    configuration: '2 & 3 BHK',
    price: 'Price on request',
    usp: 'Emerging growth corridor with high appreciation potential',
    status: 'new-launch',
    image: 'https://images.pexels.com/photos/18615216/pexels-photo-18615216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
