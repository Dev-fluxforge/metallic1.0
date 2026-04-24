import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-brand-gold" />
            <span className="text-sm font-bold tracking-widest uppercase text-brand-gold">Our Story</span>
            <div className="w-8 h-[2px] bg-brand-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl uppercase mb-8"
          >
            Precision Engineered for <span className="text-brand-gold">Road Warriors</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Founded by riders, for riders. Metallic Horses was born out of a passion for the open road and a commitment to uncompromising safety and performance.
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-[3rem] overflow-hidden mb-20"
        >
          <img 
            src="https://picsum.photos/seed/motorcycle/1920/1080" 
            alt="Riders on the road" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h2 className="text-4xl md:text-5xl uppercase mb-4">The Thrill of the Ride</h2>
              <p className="text-lg text-white/80">We believe every journey should be backed by gear that works as hard as you do.</p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Shield, title: 'Safety First', desc: 'Every piece of gear we stock meets the highest international safety standards.' },
            { icon: Zap, title: 'Performance', desc: 'Precision engineered for maximum aerodynamics and rider comfort.' },
            { icon: Award, title: 'Quality', desc: 'We only partner with brands that share our commitment to excellence.' },
            { icon: Users, title: 'Community', desc: 'Join a global network of riders who trust Metallic Horses for their journeys.' },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-border-subtle"
            >
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl uppercase mb-4 text-brand-dark">{value.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/10 blur-[120px] -rotate-45 translate-x-1/2" />
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-6xl uppercase mb-8">Our Mission</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              To empower riders with the best possible protection and performance gear, enabling them to push their limits while staying safe on every road and track.
            </p>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-4xl font-display font-bold text-brand-gold mb-1">10k+</div>
                <div className="text-sm uppercase tracking-widest text-gray-500">Happy Riders</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-gold mb-1">50+</div>
                <div className="text-sm uppercase tracking-widest text-gray-500">Premium Brands</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-gold mb-1">15+</div>
                <div className="text-sm uppercase tracking-widest text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
