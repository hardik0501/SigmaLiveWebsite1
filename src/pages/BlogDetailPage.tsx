import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { fetchBlogBySlug, fetchBlogs } from '@/services/blogs';
import { ArrowLeft, Clock, Calendar, Share2, MessageCircle, Building2, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { UniversalLeadModal } from '@/components/conversion/UniversalLeadModal';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    fetchBlogBySlug(slug)
      .then((data) => {
        setBlog(data);
        if (data) {
          document.title = `${data.title} | Sigma Homes India`;
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));

    fetchBlogs()
      .then((all) => {
        setRelatedBlogs(all.filter((b) => b.slug !== slug).slice(0, 3));
      })
      .catch(() => {});
  }, [slug]);

  const handleShareWhatsApp = () => {
    const text = `Check out this real estate article on Sigma Homes: ${blog?.title}\n${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-40 pb-20 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-sigma-blue-700 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-sigma-stone-500 font-semibold">Loading article from backend...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-40 pb-20">
        <div className="container-content max-w-xl text-center space-y-4 py-16">
          <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">Article Not Found</h2>
          <p className="text-xs text-sigma-stone-600">The requested blog post could not be loaded from backend storage.</p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sigma-blue-700 text-white font-bold text-xs rounded-xl shadow-md"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Market Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-24 md:pt-40">
      <div className="container-content max-w-4xl">
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-700 hover:text-sigma-blue-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to All Market Insights
        </Link>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs font-bold text-sigma-blue-700">
            <span className="px-3.5 py-1 bg-sigma-blue-50 border border-sigma-blue-200 rounded-lg">
              {blog.category}
            </span>
            <span className="flex items-center gap-1 text-sigma-stone-400 font-medium">
              <Clock className="h-3.5 w-3.5" />
              {blog.readTime || '5 min read'}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-[1.12]">
            {blog.title}
          </h1>

          <p className="text-base md:text-lg text-sigma-stone-600 font-sans leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-y border-sigma-stone-200/80 py-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sigma-blue-700 text-white font-bold flex items-center justify-center text-xs">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sigma-graphite-900">{blog.author}</p>
                <p className="text-[0.65rem] text-sigma-stone-400">{blog.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShareWhatsApp}
                className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 border border-emerald-200"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" /> Share on WhatsApp
              </button>
              <button
                onClick={handleCopyLink}
                className="px-3.5 py-2 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 border border-sigma-stone-200"
              >
                <Share2 className="h-4 w-4 text-sigma-stone-500" /> {copied ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>

        {/* Article Cover Image */}
        {blog.coverImage && (
          <div className="mb-10 rounded-3xl overflow-hidden shadow-lg border border-sigma-stone-200/80 aspect-video">
            <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Article Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-3xl border border-sigma-stone-200/80 shadow-xs space-y-6">
            <div className="prose prose-sigma max-w-none text-sigma-stone-700 text-sm md:text-base leading-relaxed space-y-4">
              {blog.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold font-serif text-sigma-graphite-900 pt-4 pb-1 border-b border-sigma-stone-100">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={idx} className="space-y-2 my-3 pl-2">
                      {items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 text-sigma-green-600 shrink-0 mt-0.5" />
                          <span>{it.replace(/^- /, '').replace(/^\d+\.\s+/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="font-sans leading-relaxed text-sigma-stone-600">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* In-Article Action Box */}
            <div className="mt-8 p-6 bg-sigma-blue-50/70 border border-sigma-blue-200/80 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-sigma-blue-800 uppercase tracking-wider">
                <Building2 className="h-4 w-4" />
                Sigma Homes Direct Advisory
              </div>
              <h4 className="text-lg font-bold font-serif text-sigma-graphite-900">
                Looking for verified property developments in Jaipur?
              </h4>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">
                Connect with our sales helplines or book a site visit to inspect completed & ongoing luxury projects.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                Enquire About Properties
              </button>
            </div>
          </div>

          {/* Article Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-sigma-navy-950 text-white rounded-3xl space-y-4 shadow-lg">
              <span className="eyebrow text-sigma-amber-400">Sigma Expert Desk</span>
              <h3 className="text-xl font-bold font-serif text-white">Need Customized Advice?</h3>
              <p className="text-xs text-sigma-stone-300 leading-relaxed">
                Our property consultants provide confidential reports, legal compliance audits, and unit price sheets.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                Request Free Call Back
              </button>
            </div>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 space-y-4 shadow-xs">
                <h4 className="text-sm font-bold uppercase tracking-wider text-sigma-stone-400">Related Insights</h4>
                <div className="space-y-3">
                  {relatedBlogs.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/blogs/${rel.slug}`}
                      className="block p-3 rounded-2xl bg-sigma-stone-50 hover:bg-sigma-blue-50 border border-sigma-stone-200/60 transition-colors space-y-1 group"
                    >
                      <span className="text-[0.65rem] font-bold text-sigma-blue-700">{rel.category}</span>
                      <h5 className="text-xs font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-700 leading-snug line-clamp-2">
                        {rel.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <UniversalLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadType="property_enquiry"
        title="Enquire Property Details"
        subtitle={`Inquiring via market article: "${blog.title}"`}
      />
    </div>
  );
}
