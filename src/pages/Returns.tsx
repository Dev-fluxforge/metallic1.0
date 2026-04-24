import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

export default function Returns() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl uppercase mb-6">Returns & <span className="text-brand-gold">Exchanges</span></h1>
          <p className="text-xl text-gray-600">Not the right fit? No problem. We've made our return process as smooth as a fresh oil change.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-10 rounded-[3rem] shadow-sm border border-border-subtle"
          >
            <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
              <RotateCcw className="w-8 h-8" />
            </div>
            <h3 className="text-2xl uppercase mb-4 text-brand-dark">30-Day Returns</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              You have 30 days from the date of delivery to return any item for a full refund or exchange. Items must be in original, unused condition with all tags attached.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-10 rounded-[3rem] shadow-sm border border-border-subtle"
          >
            <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl uppercase mb-4 text-brand-dark">Quality Guarantee</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              If your gear arrives damaged or with a manufacturing defect, we'll replace it immediately at no extra cost to you. Your safety is our priority.
            </p>
          </motion.div>
        </div>

        <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white text-center">
          <h2 className="text-3xl md:text-5xl uppercase mb-8">Ready to start a return?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Contact our support team with your order number and the reason for your return. We'll send you a return shipping label within 24 hours.
          </p>
          <button className="bg-brand-gold text-white px-12 py-5 rounded-full font-bold flex items-center gap-3 mx-auto hover:scale-105 transition-transform">
            Contact Support
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
