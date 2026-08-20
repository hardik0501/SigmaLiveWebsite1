import { BlogPost } from '@/types/blog';

const SEED_BLOGS: BlogPost[] = [
  {
    id: 'blog-101',
    slug: 'jaipur-real-estate-growth-2026',
    title: "Why Jaipur is Emerging as North India's Top Real Estate Investment Corridor in 2026",
    excerpt: 'With major expressways, tech parks, and luxury residential developments expanding in Mansarovar & Vaishali Nagar, Jaipur offers unprecedented capital appreciation for homebuyers and investors.',
    content: `Jaipur's real estate ecosystem has experienced a transformative shift over recent years. Driven by robust infrastructure projects—including the Delhi-Mumbai Expressway connection, Jaipur Metro Phase 1B expansion, and burgeoning IT hubs—the Pink City is no longer just a heritage center, but a premier residential and commercial investment hub.

### Key Growth Drivers

1. **Corridor Connectivity**: Seamless road transport links with Delhi-NCR and Mumbai have cut logistical transit times dramatically.
2. **High Rental Yields**: Gated apartment developments in Mansarovar Extension and Jagatpura provide steady rental income averaging 6.5% - 8% annually.
3. **Luxury Gated Communities**: Modern homebuyers seek 3 BHK & 4 BHK residences with private clubhouses, EV charging stations, and multi-tier security.

Sigma Homes continues to lead this market expansion with premium luxury projects engineered for long-term value creation.`,
    category: 'Market Trends',
    author: 'Sigma Advisory Desk',
    date: 'August 15, 2026',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    published: true,
    createdAt: '2026-08-15T10:00:00.000Z',
  },
  {
    id: 'blog-102',
    slug: 'nri-property-buying-guide-india',
    title: 'Step-by-Step Guide for NRIs Buying Residential Property in India',
    excerpt: 'Everything Non-Resident Indians (NRIs) and OCIs need to know about FEMA compliance, RBI permits, NRE/NRO transaction accounts, and Power of Attorney (POA).',
    content: `Investing in Indian real estate as a Non-Resident Indian (NRI) or Person of Indian Origin (PIO) is seamless under standard RBI and FEMA guidelines.

### RBI & FEMA Rules for NRIs
- **No RBI Approval Required**: NRIs can acquire any residential or commercial property in India without prior RBI permission.
- **Payment Modes**: Funds can be remitted through normal banking channels via NRE or NRO accounts.
- **Power of Attorney (POA)**: If you are unable to travel to India for property registration, a valid Power of Attorney executed at your local Indian Embassy allows trusted representatives to act on your behalf.

Sigma Homes provides end-to-end digital consultation, 4K virtual tours, legal auditing, and POA execution support for global buyers.`,
    category: 'NRI Advisory',
    author: 'Legal & FEMA Desk',
    date: 'August 10, 2026',
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    published: true,
    createdAt: '2026-08-10T10:00:00.000Z',
  },
  {
    id: 'blog-103',
    slug: 'mansarovar-extension-infrastructure-surge',
    title: 'Mansarovar Extension Infrastructure Expansion: Ring Road & Price Trends',
    excerpt: 'Explore why Mansarovar Extension has become Jaipur\'s most sought-after family residential neighborhood with modern schools, hospitals, and high appreciation rates.',
    content: `Mansarovar Extension has developed into Jaipur's prime residential hub. Supported by modern road grids, proximity to major CBSE schools, multi-specialty hospitals, and upcoming retail malls, property values here have consistently outperformed surrounding areas.

### Why Buyers Choose Mansarovar Extension
- **Proximity to City Core**: Just 10-15 minutes drive from Mansarovar Metro Station and Gopalpura Bypass.
- **Spacious Layouts**: 2, 3 & 4 BHK apartments with optimal cross-ventilation and Vastu-compliant layouts.
- **High Returns**: Property rates have grown by 18-22% over the last 36 months.

Schedule a site visit with Sigma Homes to explore inventory in Mansarovar Extension.`,
    category: 'Buyer Guides',
    author: 'Research & Intelligence Desk',
    date: 'August 05, 2026',
    coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    published: true,
    createdAt: '2026-08-05T10:00:00.000Z',
  },
];

const LIVE_VERCEL_BLOGS_URL = 'https://sigmabackend-psi.vercel.app/api/blogs.js';

function getBlogsApiUrl(): string {
  if (typeof window === 'undefined') return LIVE_VERCEL_BLOGS_URL;
  const hostname = window.location.hostname || 'localhost';
  if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
    return LIVE_VERCEL_BLOGS_URL;
  }
  const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
  return `${protocol}//${hostname}:5000/api/blogs`;
}

/**
 * Fetch blogs from backend API with fallback seed data
 */
export async function fetchBlogs(includeUnpublished = false): Promise<BlogPost[]> {
  const apiUrls = [getBlogsApiUrl(), '/api/blogs'];

  for (const url of apiUrls) {
    try {
      const fullUrl = includeUnpublished ? `${url}?admin=true` : url;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);
      const res = await fetch(fullUrl, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (json && json.success && Array.isArray(json.blogs) && json.blogs.length > 0) {
          localStorage.setItem('sigma_blogs_cache', JSON.stringify(json.blogs));
          return json.blogs;
        }
      }
    } catch (err) {
      // Fallback
    }
  }

  // Read local cache or return SEED_BLOGS
  try {
    const cached = localStorage.getItem('sigma_blogs_cache');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}

  return SEED_BLOGS;
}

/**
 * Fetch a single blog article by ID or slug
 */
export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = await fetchBlogs(true);
  const found = blogs.find((b) => b.slug === slug || b.id === slug);
  return found || null;
}

/**
 * Create a new blog post on backend API
 */
export async function createBlog(post: Partial<BlogPost>): Promise<BlogPost> {
  const blogId = `blog-${Date.now()}`;
  const slug = (post.slug || post.title || 'article')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const newPost: BlogPost = {
    id: blogId,
    slug,
    title: post.title || 'Untitled Article',
    excerpt: post.excerpt || '',
    content: post.content || '',
    category: post.category || 'Market Trends',
    author: post.author || 'Sigma Homes Team',
    date: post.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    coverImage: post.coverImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    readTime: post.readTime || '4 min read',
    published: post.published !== undefined ? post.published : true,
    createdAt: new Date().toISOString(),
  };

  try {
    const apiUrl = getBlogsApiUrl();
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    });
  } catch (err) {
    console.warn('[Blogs Service] Backend create error:', err);
  }

  // Update local cache
  const existing = await fetchBlogs(true);
  const updated = [newPost, ...existing];
  localStorage.setItem('sigma_blogs_cache', JSON.stringify(updated));

  return newPost;
}

/**
 * Update an existing blog post on backend API
 */
export async function updateBlog(id: string, updateData: Partial<BlogPost>): Promise<void> {
  try {
    const apiUrl = `${getBlogsApiUrl()}/${id}`;
    await fetch(apiUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });
  } catch (err) {
    console.warn('[Blogs Service] Backend update error:', err);
  }

  const existing = await fetchBlogs(true);
  const updated = existing.map((b) => (b.id === id || b.slug === id ? { ...b, ...updateData } : b));
  localStorage.setItem('sigma_blogs_cache', JSON.stringify(updated));
}

/**
 * Delete a blog post on backend API
 */
export async function deleteBlog(id: string): Promise<void> {
  try {
    const apiUrl = `${getBlogsApiUrl()}/${id}`;
    await fetch(apiUrl, { method: 'DELETE' });
  } catch (err) {
    console.warn('[Blogs Service] Backend delete error:', err);
  }

  const existing = await fetchBlogs(true);
  const updated = existing.filter((b) => b.id !== id && b.slug !== id);
  localStorage.setItem('sigma_blogs_cache', JSON.stringify(updated));
}
