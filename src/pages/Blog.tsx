import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ChevronRight, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const POSTS = [
  {
    title: 'Icon Contra 2 Jacket Review',
    excerpt: 'The Icon Contra 2 Jacket is ready to battle the urban landscape. Constructed with the Icon Sport Fit, the Contra...',
    image: '/image/8.png',
    date: 'Oct 12, 2024',
    author: 'Alex Rider',
    readTime: '5 min read',
    category: 'Reviews'
  },
  {
    title: 'Essential Maintenance Tips',
    excerpt: 'Keeping your bike in top shape is essential for safety and performance. Here are the top 10 maintenance tips every rider should know...',
    image: '/image/keg.png',
    date: 'Oct 10, 2024',
    author: 'Sarah Gear',
    readTime: '8 min read',
    category: 'Maintenance'
  },
  {
    title: 'Choosing Your First Helmet',
    excerpt: 'Safety is paramount. When choosing your first helmet, there are several factors to consider beyond just the look...',
    image: '/image/helement2.png',
    date: 'Oct 08, 2024',
    author: 'Mike Moto',
    readTime: '6 min read',
    category: 'Guides'
  },
  {
    title: 'Synthetic vs Mineral Oil',
    excerpt: 'The debate between synthetic and mineral oil has been ongoing for decades. We break down the pros and cons for your engine...',
    image: '/image/Oil.png',
    date: 'Oct 05, 2024',
    author: 'Engine Ed',
    readTime: '4 min read',
    category: 'Technical'
  },
  {
    title: 'Top 5 Scenic Routes in Lagos',
    excerpt: 'Discover the best roads for a weekend cruise around Lagos. From coastal views to urban landscapes...',
    image: 'https://picsum.photos/seed/road/800/600',
    date: 'Oct 01, 2024',
    author: 'Lagos Rider',
    readTime: '7 min read',
    category: 'Lifestyle'
  },
  {
    title: 'Winter Riding Gear Guide',
    excerpt: 'Don\'t let the cold stop you. Our guide to the best winter riding gear will keep you warm and dry in any weather...',
    image: '/image/Jaket.png',
    date: 'Sep 28, 2024',
    author: 'Sarah Gear',
    readTime: '10 min read',
    category: 'Guides'
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-gold" />
              <span className="text-sm font-bold tracking-widest uppercase text-brand-gold">The Blog</span>
            </div>
            <h1 className="text-5xl md:text-7xl uppercase mb-6 text-brand-dark">MH Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Insights, reviews, and stories from the heart of the riding community.</p>
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-card border border-border-subtle rounded-full px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden mb-20 cursor-pointer"
        >
          <img 
            src={POSTS[0].image} 
            alt={POSTS[0].title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent flex flex-col justify-end p-8 md:p-16">
            <div className="max-w-3xl">
              <span className="bg-brand-gold text-white text-xs font-bold px-4 py-1 rounded-full mb-6 inline-block uppercase tracking-widest">Featured Review</span>
              <h2 className="text-3xl md:text-5xl text-white uppercase mb-6 group-hover:text-brand-gold transition-colors">{POSTS[0].title}</h2>
              <p className="text-white/70 text-lg mb-8 line-clamp-2 md:line-clamp-none">{POSTS[0].excerpt}</p>
              <div className="flex items-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {POSTS[0].date}</span>
                <span className="flex items-center gap-2"><User className="w-4 h-4" /> {POSTS[0].author}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {POSTS[0].readTime}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {POSTS.slice(1).map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-xs mb-4 uppercase tracking-widest font-bold">
                <span>{post.date}</span>
                <div className="w-1 h-1 bg-brand-gold rounded-full" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-brand-gold transition-colors">{post.title}</h3>
              <p className="text-gray-500 mb-6 line-clamp-2 leading-relaxed">{post.excerpt}</p>
              <button className="text-brand-dark font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Article <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center gap-4">
          {[1, 2, 3].map(num => (
            <button 
              key={num}
              className={cn(
                "w-12 h-12 rounded-full font-bold transition-all",
                num === 1 ? "bg-brand-dark text-brand-light" : "bg-card text-brand-dark hover:bg-brand-gold hover:text-white border border-border-subtle"
              )}
            >
              {num}
            </button>
          ))}
          <button className="w-12 h-12 rounded-full bg-card text-brand-dark hover:bg-brand-gold hover:text-white transition-all flex items-center justify-center border border-border-subtle">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
