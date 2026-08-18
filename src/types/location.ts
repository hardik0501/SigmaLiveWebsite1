export type InfrastructureCategory = 'EDUCATION' | 'HEALTHCARE' | 'SHOPPING' | 'CONNECTIVITY' | 'LIFESTYLE';

export interface LocationAdvantage {
  title: string;
  description: string;
}

export interface LocationConnectivityItem {
  road: string;
  details: string;
}

export interface InfrastructureItem {
  category: InfrastructureCategory;
  name: string;
  distance: string;
}

export interface LocationInvestmentContext {
  title: string;
  description: string;
  points: string[];
  disclaimer: string;
}

export interface LocationFaqItem {
  question: string;
  answer: string;
}

export interface LocationSeo {
  title: string;
  description: string;
  h1: string;
}

export interface Location {
  id: string;
  slug: string;
  aliasSlugs?: string[];
  name: string;
  city: string;
  state: string;
  country: string;
  heroImage: string;
  shortDescription: string;
  overview: {
    title: string;
    description: string;
  };
  highlights: string[];
  advantages: LocationAdvantage[];
  connectivity: LocationConnectivityItem[];
  nearbyInfrastructure: InfrastructureItem[];
  propertyTypes: string[];
  investmentContext?: LocationInvestmentContext;
  faqs: LocationFaqItem[];
  relatedLocationSlugs: string[];
  seo: LocationSeo;
  featured?: boolean;
  priority: number;
}
