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
    configuration: '2 & 3 BHK',
    price: 'Starting from ₹27.00L',
    usp: 'Contemporary homes designed for comfortable family living, with modern spaces and convenient access to key parts of Jaipur.',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'govindam-paradise',
    name: 'Govindam Paradise',
    location: 'Mansarovar Extension, Jaipur',
    type: 'Premium Apartments',
    configuration: '2 & 3 BHK',
    price: 'Starting from ₹44.43L',
    usp: 'A thoughtfully planned residential address for families looking for comfort, connectivity and everyday convenience.',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'premium-residences',
    name: 'Premium Residences',
    location: 'Mansarovar Extension, Jaipur',
    type: 'Premium Apartments',
    configuration: '2 BHK',
    price: 'Starting from ₹50.09L',
    usp: 'A modern residential option for homebuyers seeking a well-connected location and a comfortable lifestyle in Jaipur.',
    status: 'ready-to-move',
    image: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'kanhaiya-kunj',
    name: 'Kanhaiya Kunj',
    location: 'Jhotwara, Jaipur',
    type: 'Residential Apartments',
    configuration: '2 & 3 BHK',
    price: 'Price on request',
    usp: 'Vastu-compliant design with cross ventilation and tranquil neighborhood ambiance.',
    status: 'ready-to-move',
    image: 'https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'lucky-heights-4',
    name: 'Lucky Heights 4',
    location: 'Vaishali Nagar, Jaipur',
    type: 'Premium Apartments',
    configuration: '3 & 4 BHK',
    price: 'Starting from ₹1.06 Cr',
    usp: 'Premium boutique living with luxury flats at ₹7,500/sq.ft in Vaishali Nagar.',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'shivam-grand',
    name: 'Shivam Grand',
    location: 'Jagatpura, Jaipur',
    type: 'Premium Apartments',
    configuration: '2 & 3 BHK',
    price: 'Starting from ₹45.00L',
    usp: 'RERA/JDA approved flats near VIT College and D-Mart with modular kitchen.',
    status: 'new-launch',
    image: 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'narayan-vihar-villa-2',
    name: 'Narayan Vihar Villa 2',
    location: 'Narayan Vihar (K Block), Jaipur',
    type: 'Luxury Villa',
    configuration: '4 BHK',
    price: 'Starting from ₹1.50 Cr',
    usp: 'Modern design luxury villas in K Block near Bharat Mata Circle.',
    status: 'ready-to-move',
    image: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'utsav-greens',
    name: 'Utsav Greens',
    location: 'Mansarovar, Jaipur',
    type: 'Premium Apartments',
    configuration: '2 & 3 BHK',
    price: 'Starting from ₹43.78L',
    usp: 'Modern design 2 & 3 BHK apartments near Mahima Elanza.',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'udayraj',
    name: 'Udayraj',
    location: 'Rampura Road, Jaipur',
    type: 'Luxury Apartments',
    configuration: '2 & 2.5 BHK',
    price: 'Starting from ₹33.20L',
    usp: 'G+12 premium high-rise residences near Mansarovar with 30+ amenities.',
    status: 'new-launch',
    image: 'https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
