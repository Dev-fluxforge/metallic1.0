import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, CheckCircle, Search, ArrowRight } from 'lucide-react';

export default function OrderTracking() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl uppercase mb-6">Track Your <span className="text-brand-gold">Order</span></h1>
          <p className="text-xl text-gray-600">Enter your order details below to see the current status of your gear.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm mb-20"
        >
          <form className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Order Number</label>
              <input 
                type="text" 
                placeholder="e.g. MH-12345"
                className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-brand-dark text-white py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-gray transition-all">
                <Search className="w-5 h-5" />
                Track Order
              </button>
            </div>
          </form>
        </motion.div>

        {/* Tracking Steps Example */}
        <div className="space-y-12">
          <h2 className="text-2xl uppercase text-center mb-12">Shipping Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: 'Confirmed', desc: 'Order received' },
              { icon: Package, title: 'Processing', desc: 'Gear being packed' },
              { icon: Truck, title: 'Shipped', desc: 'On the road' },
              { icon: ArrowRight, title: 'Delivered', desc: 'At your door' },
            ].map((step, i) => (
              <div key={step.title} className="text-center relative">
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-gold">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold uppercase text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
