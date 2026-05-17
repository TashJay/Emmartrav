import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-kenya-red font-semibold tracking-wider uppercase text-sm mb-3">Travel Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Latest News & Tips</h3>
          </div>
          <Link to="/blog" className="flex items-center gap-2 text-kenya-green font-medium hover:text-green-800 transition-colors">
            View All Posts <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer block h-full">
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
              <h4 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-kenya-red transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
