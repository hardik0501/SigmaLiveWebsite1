export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Market Trends' | 'NRI Advisory' | 'Buyer Guides' | 'Legal & FEMA' | 'Investment' | string;
  author: string;
  date: string;
  coverImage?: string;
  readTime?: string;
  published: boolean;
  createdAt?: string;
}
