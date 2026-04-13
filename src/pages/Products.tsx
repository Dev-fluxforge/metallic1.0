import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Search, Filter, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../constants';
import { cn } from '../lib/utils';

interface ProductsProps {
  addToCart: (product: Product) => void;
}

export default function Products({ addToCart }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-gold" />
              <span className="text-sm font-bold tracking-widest uppercase text-brand-gold">Our Gear</span>
            </div>
            <h1 className="text-5xl md:text-7xl uppercase mb-6">Explore <span className="text-brand-gold">Products</span></h1>
            <p className="text-xl text-gray-600">Precision engineered kits for those who push boundaries. Browse our full collection.</p>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm mb-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search gear..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-light border-none rounded-full px-14 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setActiveCategory('All')}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all",
                activeCategory === 'All' ? "bg-brand-dark text-white" : "bg-brand-light text-gray-500 hover:bg-brand-gold/10 hover:text-brand-gold"
              )}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-bold transition-all",
                  activeCategory === cat.name ? "bg-brand-dark text-white" : "bg-brand-light text-gray-500 hover:bg-brand-gold/10 hover:text-brand-gold"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-gray-400 shrink-0">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Sort:</span>
            </div>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 lg:w-48 bg-brand-light border-none rounded-full px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-brand-gold transition-all appearance-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-500 font-medium">Showing <span className="text-brand-dark font-bold">{sortedProducts.length}</span> products</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {sortedProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-square p-8 bg-brand-light/50 group-hover:bg-brand-light transition-colors">
                  {product.discount && (
                    <span className="absolute top-6 left-6 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      {product.discount}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-white text-brand-dark p-4 rounded-full hover:bg-brand-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                    >
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                    <button className="bg-white text-brand-dark p-4 rounded-full hover:bg-brand-dark hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75">
                      <Search className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">{product.category}</span>
                  <h3 className="text-xl mb-4 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-display font-bold text-brand-dark">₦{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">₦{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="py-32 text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Search className="w-10 h-10 text-gray-200" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-gray-500 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
