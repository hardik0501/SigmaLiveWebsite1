export type ProjectStatus = 'ready-to-move' | 'under-construction' | 'new-launch' | 'limited-inventory';

export type PropertyCategory = 'Apartments' | 'Villas' | 'Plots & Land' | 'Farmhouses' | 'Commercial';

export type BuyerIntent =
  | 'End Use'
  | 'Investment'
  | 'Luxury'
  | 'First Home'
  | 'Family Home'
  | 'Commercial'
  | 'Ready to Move'
  | 'Budget Luxury'
  | 'Villa'
  | 'Launch Offer'
  | 'Smart Home'
  | 'RERA Approved'
  | 'Budget Home'
  | string;

export interface ProjectHighlightItem {
  number: string;
  label: string;
  description: string;
  image?: string;
}

export interface VisualUspItem {
  title: string;
  description: string;
  tag?: string;
}

export interface DetailedConfiguration {
  type: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  balconies?: number;
  price: string;
}

export interface AdditionalCharge {
  label: string;
  amount: string;
}

export interface DetailedPricing {
  bsp?: string;
  startingPrice: string;
  additionalCharges?: AdditionalCharge[];
  paymentPlan?: string;
  disclaimer: string;
}

export interface AmenityItem {
  name: string;
  description?: string;
}

export interface GroupedAmenity {
  category: string;
  items: AmenityItem[];
}

export interface LifestyleFeature {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats?: { value: string; label: string }[];
}

export interface GalleryAsset {
  url: string;
  caption?: string;
  category?: 'architecture' | 'interiors' | 'amenities' | 'lifestyle';
}

export interface FloorPlanAsset {
  type: string;
  title: string;
  area: string;
  image: string;
}

export interface SpecificationCategory {
  category: string;
  items: string[];
}

export interface NearbyPlace {
  category: 'EDUCATION' | 'HEALTHCARE' | 'SHOPPING' | 'CONNECTIVITY' | 'SCHOOLS' | 'HOSPITALS' | 'TOWNSHIPS' | string;
  name: string;
  distance: string;
}

export interface LocationIntel {
  address: string;
  locality: string;
  city: string;
  advantages: { title: string; description: string }[];
  nearbyPlaces: NearbyPlace[];
}

export interface InvestmentContext {
  title: string;
  description: string;
  points: string[];
  disclaimer: string;
}

export interface ProjectFaq {
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  city: string;
  location: string;
  locality: string;
  propertyType: PropertyCategory;
  configurations: string[];
  status: ProjectStatus;
  priceFrom: number;
  priceTo?: number;
  priceLabel: string;
  priceIndicative?: boolean;
  areaFrom: number;
  areaTo?: number;
  areaLabel: string;
  heroImage: string;
  thumbnail: string;
  shortDescription: string;
  usp: string;
  highlights: string[];
  featured?: boolean;
  priority: number;
  tags: BuyerIntent[];
  rera?: string;
  approvalStatus?: string;
  developer?: string;

  // Part 04 Extended Detail Fields
  tagline?: string;
  address?: string;
  landParcel?: string;
  heroVideo?: string;
  brochureUrl?: string;
  virtualTourUrl?: string;
  overview?: {
    title: string;
    description: string;
  };
  detailedHighlights?: ProjectHighlightItem[];
  visualUsps?: VisualUspItem[];
  detailedConfigurations?: DetailedConfiguration[];
  detailedPricing?: DetailedPricing;
  groupedAmenities?: GroupedAmenity[];
  lifestyleFeature?: LifestyleFeature;
  galleryImages?: GalleryAsset[];
  floorPlanAssets?: FloorPlanAsset[];
  specificationsData?: SpecificationCategory[];
  locationIntel?: LocationIntel;
  investmentContext?: InvestmentContext;
  faqsData?: ProjectFaq[];
}

export type SortOption =
  | 'recommended'
  | 'price-asc'
  | 'price-desc'
  | 'area-asc'
  | 'area-desc'
  | 'newest';

export interface FilterState {
  search: string;
  locality: string;
  propertyType: string;
  bhk: string;
  minPrice: number;
  maxPrice: number;
  minArea: number;
  maxArea: number;
  status: string;
  intent: string;
  sort: SortOption;
}

export interface EnquiryPayload {
  projectId: string;
  projectName: string;
  location: string;
  name: string;
  phone: string;
  whatsapp?: string;
  preferredBhk?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}
