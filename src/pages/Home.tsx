import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight, Search } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES, BRANDS } from '../constants';

interface HomeProps {
  addToCart: (product: Product) => void;
}

export default function Home({ addToCart }: HomeProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 uppercase">
                Unleash the <span className="text-brand-gold">Road Warrior</span> in you
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
                Gear up with Metallic Horses - Precision engineered kits for those who push boundaries. Ride safer. Ride bolder.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-brand-gray transition-all hover:scale-105">
                  <ShoppingCart className="w-5 h-5" />
                  Shop Now
                </button>
                <button className="border-2 border-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-dark hover:text-white transition-all">
                  Explore Gear
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold/20 blur-[120px] rounded-full" />
              <img 
                src="image/Helmet.png" 
                alt="Featured Helmet" 
                className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-brand-gold" />
                <span className="text-sm font-bold tracking-widest uppercase text-brand-gold">Categories</span>
              </div>
              <h2 className="text-4xl md:text-5xl uppercase">Browse by Category</h2>
            </div>
            <p className="text-gray-500 max-w-xs">Find exactly what you need for your next adventure.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-brand-light rounded-3xl p-8 mb-4 transition-all group-hover:bg-brand-gold/10 group-hover:-translate-y-2">
                  <img src={cat.image} alt={cat.name} className="w-full aspect-square object-contain" />
                </div>
                <h3 className="text-center font-display font-bold text-lg group-hover:text-brand-gold transition-colors">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-brand-light" id="products">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-brand-gold" />
                <span className="text-sm font-bold tracking-widest uppercase text-brand-gold">Our Gear</span>
              </div>
              <h2 className="text-4xl md:text-5xl uppercase">Featured Products</h2>
            </div>
            <button className="text-brand-dark font-bold flex items-center gap-2 group">
              View All Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-12">Brands We Stock</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {BRANDS.map((brand, i) => (
              <img key={i} src={brand} alt="Brand" className="h-8 md:h-12 object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/10 blur-[150px] -rotate-45 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl uppercase mb-8 leading-tight">
                Limited-Time Offer <br />
                <span className="text-brand-gold">Up to 40% Off!</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-lg">
                Don't miss out on high performance kits at unbeatable prices. Gear up for the season ahead.
              </p>
              
              <div className="flex gap-4 md:gap-8 mb-12">
                {[
                  { label: 'Days', value: '03' },
                  { label: 'Hours', value: '09' },
                  { label: 'Minutes', value: '12' },
                  { label: 'Seconds', value: '46' },
                ].map(item => (
                  <div key={item.label} className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-display font-bold mb-2 border border-white/10">
                      {item.value}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</span>
                  </div>
                ))}
              </div>

              <button className="bg-brand-gold text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                <ShoppingCart className="w-6 h-6" />
                Shop the Sale
              </button>
            </div>
            <div className="relative">
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="image/Jaket.png" 
                alt="Promo Jacket" 
                className="w-full max-w-xl mx-auto drop-shadow-[0_35px_35px_rgba(255,201,74,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
