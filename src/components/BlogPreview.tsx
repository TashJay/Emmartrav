import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Essential Tips for a Successful US Visa Interview",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    date: "Oct 12, 2026",
    author: "Grace M.",
    excerpt: "Nervous about your upcoming US Visa interview? Here are the top 5 things consular officers look for..."
  },
  {
    title: "Why Dubai is the Ultimate Business Hub",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
    date: "Sep 28, 2026",
    author: "Agency Staff",
    excerpt: "With its 96-hour transit visas and world-class infrastructure, Dubai remains the premier destination for corporate events..."
  },
  {
    title: "The Schengen Area Explained: Which Country to Apply Through",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
    date: "Sep 15, 2026",
    author: "Travel Team",
    excerpt: "Planning a multi-country European trip? Understanding the 'main destination' rule is crucial for your Schengen visa..."
  }
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-kenya-red font-semibold tracking-wider uppercase text-sm mb-3">Travel Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Latest News & Tips</h3>
          </div>
          <button className="flex items-center gap-2 text-kenya-green font-medium hover:text-green-800 transition-colors">
            View All Posts <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-kenya-red transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
