import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { motion } from 'motion/react';

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 mt-10">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-kenya-red transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5" /> Back to all articles
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
              <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full"><User className="w-4 h-4" /> {post.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden shadow-2xl mb-12 h-[400px] md:h-[500px]"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-kenya-red hover:prose-a:text-red-800 prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="bg-sand p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Ready to plan your trip?</h3>
                <p className="text-gray-600">Our visa experts are standby to assist you.</p>
              </div>
              <a
                href="https://wa.me/254713835278"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap bg-kenya-green hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold transition-colors"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
