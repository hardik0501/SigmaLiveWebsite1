import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { fetchBlogs } from '@/services/blogs';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Sparkles, User, Tag } from 'lucide-react';
import { UniversalLeadModal } from '@/components/conversion/UniversalLeadModal';

export function BlogListPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Real Estate Blogs & Market Insights | Sigma Homes India';
    fetchBlogs()
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ['all', 'Market Trends', 'NRI Advisory', 'Buyer Guides', 'Legal & FEMA'];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      if (selectedCategory !== 'all' && b.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = b.title.toLowerCase().includes(q);
        const matchExcerpt = b.excerpt.toLowerCase().includes(q);
        const matchCategory = b.category.toLowerCase().includes(q);
        if (!matchTitle && !matchExcerpt && !matchCategory) return false;
      }
      return true;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const featuredBlog = blogs[0];
  const gridBlogs = filteredBlogs.filter((b) => b.id !== featuredBlog?.id);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-24 md:pt-40">
      <div className="container-content">
        {/* Top Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="eyebrow text-sigma-blue-600">Market Insights & Advisory</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-[1.08]">
            Real Estate Intelligence & Investment Knowledge Hub
          </h1>
          <p className="text-base md:text-lg text-sigma-stone-600 font-sans leading-relaxed">
            Expert analysis, Jaipur corridor growth reports, FEMA legal guides, and homebuying strategy directly from Sigma Homes.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white p-4 rounded-3xl border border-sigma-stone-200/80 shadow-xs">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-sigma-blue-700 text-white shadow-xs'
                    : 'bg-sigma-stone-100 text-sigma-graphite-700 hover:bg-sigma-stone-200'
                }`}
              >
                {cat === 'all' ? 'All Insights' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-sigma-stone-400" />
            <input
              type="text"
              placeholder="Search articles & guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-sigma-stone-500 font-medium animate-pulse">
            Loading real estate insights from backend...
          </div>
        ) : (
          <>
            {/* Featured Article Card */}
            {featuredBlog && selectedCategory === 'all' && !searchQuery && (
              <div className="mb-14 p-6 md:p-8 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover-lift border-line-trace">
                <div className="lg:col-span-6 aspect-video rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={featuredBlog.coverImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold text-sigma-blue-700">
                    <span className="px-3 py-1 bg-sigma-blue-50 border border-sigma-blue-200 rounded-lg">
                      Featured • {featuredBlog.category}
                    </span>
                    <span className="flex items-center gap-1 text-sigma-stone-400 font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredBlog.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-sigma-graphite-900 leading-snug">
                    <Link to={`/blogs/${featuredBlog.slug}`} className="hover:text-sigma-blue-700 transition-colors">
                      {featuredBlog.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-sigma-stone-600 leading-relaxed font-sans line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-sigma-stone-500 font-semibold flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-sigma-stone-400" />
                      {featuredBlog.author} · {featuredBlog.date}
                    </span>
                    <Link
                      to={`/blogs/${featuredBlog.slug}`}
                      className="px-5 py-2.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5"
                    >
                      Read Full Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Grid */}
            {filteredBlogs.length === 0 ? (
              <div className="py-16 text-center space-y-3 bg-white rounded-3xl border border-sigma-stone-200/80 p-8">
                <BookOpen className="h-10 w-10 mx-auto text-sigma-stone-400" />
                <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">No articles found</h3>
                <p className="text-xs text-sigma-stone-500">Try searching for different keywords or select another category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(selectedCategory === 'all' && !searchQuery ? gridBlogs : filteredBlogs).map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs overflow-hidden flex flex-col hover-lift border-line-trace group"
                  >
                    <div className="aspect-video w-full overflow-hidden relative">
                      <img
                        src={blog.coverImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-lg text-[0.65rem] font-bold text-sigma-blue-800 shadow-xs border border-white/40">
                        {blog.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[0.65rem] font-semibold text-sigma-stone-400">
                          <Calendar className="h-3 w-3" />
                          {blog.date}
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          {blog.readTime || '4 min read'}
                        </div>

                        <h3 className="text-lg font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-700 transition-colors leading-snug line-clamp-2">
                          <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                        </h3>

                        <p className="text-xs text-sigma-stone-600 line-clamp-3 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-sigma-stone-100 flex items-center justify-between text-xs">
                        <span className="font-semibold text-sigma-stone-500 text-[0.7rem]">
                          By {blog.author}
                        </span>
                        <Link
                          to={`/blogs/${blog.slug}`}
                          className="font-bold text-sigma-blue-700 hover:text-sigma-blue-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        >
                          Read <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Bottom Lead Advisory Banner */}
        <div className="mt-20 p-8 md:p-12 bg-sigma-navy-950 text-white rounded-3xl text-center space-y-4 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-3">
            <span className="eyebrow text-sigma-amber-400">Confidential Real Estate Desk</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
              Have Questions About Buying or Investing in Jaipur Property?
            </h2>
            <p className="text-xs md:text-sm text-sigma-stone-300">
              Speak directly with Sigma Homes investment advisors for personalized market reports and property recommendations.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="px-7 py-3 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                Request Free Property Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <UniversalLeadModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        leadType="consultation"
        title="Request Free Market Advisory"
        subtitle="Connect with Sigma real estate intelligence advisors."
      />
    </div>
  );
}
