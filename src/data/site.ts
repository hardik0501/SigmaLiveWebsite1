export interface MarketData {
  id: string;
  name: string;
  type: string;
  description: string;
}

export const markets: MarketData[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    type: 'PRIMARY MARKET',
    description: 'Our home ground and the market we know best, with residential, land and commercial opportunities across established and emerging areas.',
  },
  {
    id: 'noida',
    name: 'Noida',
    type: 'GROWING MARKET',
    description: "Explore opportunities with a real estate company in Noida across one of North India's most active real estate corridors.",
  },
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    type: 'GROWING MARKET',
    description: 'Discover property opportunities through a real estate company in Gurgaon with a focus on premium residential and commercial markets.',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    type: 'INTERNATIONAL MARKET',
    description: 'Our growing international vision connects Indian buyers and investors with opportunities through a real estate company in Dubai.',
  },
  {
    id: 'dholera',
    name: 'Dholera',
    type: 'EMERGING MARKET',
    description: 'Explore the future potential of Dholera with a real estate company in Dholera focused on emerging investment opportunities.',
  },
];

export interface CareerStep {
  year: string;
  title: string;
  description: string;
}

export const careerJourney: CareerStep[] = [
  {
    year: 'YEAR 1',
    title: 'JOINED SIGMA',
    description: 'Started the journey, learned the market and understood the business from the ground up.',
  },
  {
    year: 'YEAR 2',
    title: 'PROFESSIONAL',
    description: 'Built client relationships, developed market expertise and started taking ownership.',
  },
  {
    year: 'YEAR 3',
    title: 'LEADERSHIP',
    description: 'Moved from individual responsibilities to leading people, clients and projects.',
  },
  {
    year: 'YEAR 5',
    title: 'DIRECTOR / PARTNER',
    description: 'Reached a leadership position through consistent performance, trust and growth.',
  },
];

export interface InsightItem {
  id: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  image?: string;
}

export const insightCategories = [
  { id: 'all', label: 'All Insights' },
  { id: 'property', label: 'Property' },
  { id: 'investment', label: 'Investment' },
  { id: 'locations', label: 'Locations' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'market-insights', label: 'Market Insights' },
  { id: 'video', label: 'Video' },
];

export const insightArticles: InsightItem[] = [
  {
    id: 'property-guide',
    category: 'PROPERTY',
    title: 'Practical Homebuyer Guide for Jaipur',
    description: 'Practical guides for homebuyers, property seekers and anyone exploring real estate in Jaipur.',
    ctaText: 'Read More →',
    href: '/blogs',
  },
  {
    id: 'investment-strategies',
    category: 'INVESTMENT',
    title: 'Understanding Growth Corridors & ROI',
    description: 'Understand locations, market trends and the factors that can shape a real estate investment.',
    ctaText: 'Read More →',
    href: '/investment',
  },
  {
    id: 'neighborhood-spotlight',
    category: 'LOCATIONS',
    title: 'Jaipur Neighborhoods & Corridor Analysis',
    description: "Explore Jaipur's neighborhoods and emerging property corridors before choosing your next address.",
    ctaText: 'Read More →',
    href: '/locations',
  },
  {
    id: 'leadership-culture',
    category: 'LEADERSHIP',
    title: 'Building Values & Lasting Relationships',
    description: 'Stories, ideas and lessons from the people building the Sigma ecosystem.',
    ctaText: 'Read More →',
    href: '/leadership',
  },
  {
    id: 'market-trends-2026',
    category: 'MARKET INSIGHTS',
    title: 'Emerging Property Landscape & Trends',
    description: 'Stay informed about the changing real estate landscape and new opportunities.',
    ctaText: 'Read More →',
    href: '/blogs',
  },
  {
    id: 'video-tours',
    category: 'VIDEO',
    title: 'Project Walkthroughs & Leadership Talks',
    description: 'Take a closer look at our projects, properties, people and the Sigma journey.',
    ctaText: 'Watch Videos →',
    href: 'https://www.youtube.com/@SIGMAHOMESJAIPUR',
  },
];

export interface StatData {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatData[] = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 12000, suffix: '+', label: 'Happy Customers' },
  { value: 100, suffix: '+', label: 'Successful Projects' },
  { value: 2500, suffix: '+', label: 'Channel Associates' },
];

export interface WhySigmaItem {
  title: string;
  description: string;
}

export const whySigmaItems: WhySigmaItem[] = [
  {
    title: 'LOCAL MARKET KNOWLEDGE',
    description: "Deep understanding of Jaipur's neighborhoods, growth corridors and property market.",
  },
  {
    title: 'VERIFIED & TRUSTED PROJECTS',
    description: 'We focus on projects with clear information, thoughtful planning and development potential.',
  },
  {
    title: 'PROFESSIONAL SALES TEAM',
    description: 'Our property experts help you compare options instead of simply pushing a property.',
  },
  {
    title: 'DEDICATED RELATIONSHIP MANAGERS',
    description: 'From your first enquiry to site visits and documentation, you have a dedicated point of contact.',
  },
  {
    title: 'TRANSPARENT GUIDANCE',
    description: 'Clear conversations, practical advice and no unnecessary complications.',
  },
  {
    title: 'LONG-TERM RELATIONSHIPS',
    description: 'For us, a successful deal is one where the customer is confident about the decision long after the paperwork is done.',
  },
];
