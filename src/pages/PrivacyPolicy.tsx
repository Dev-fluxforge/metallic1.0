import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl uppercase mb-6">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: October 2024</p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-brand-dark uppercase mb-4">1. Information We Collect</h2>
            <p>
              At Metallic Horses, we collect information to provide better services to all our riders. This includes information you provide to us (like your name, email, and shipping address when you make a purchase) and information we get from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-brand-dark uppercase mb-4">2. How We Use Information</h2>
            <p>
              We use the information we collect to provide, maintain, protect and improve our services, to develop new ones, and to protect Metallic Horses and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-brand-dark uppercase mb-4">3. Information Security</h2>
            <p>
              We work hard to protect Metallic Horses and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>We encrypt many of our services using SSL.</li>
              <li>We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.</li>
              <li>We restrict access to personal information to Metallic Horses employees, contractors and agents who need to know that information in order to process it for us.</li>
            </ul>
          </section>

          <section className="bg-brand-gold/5 p-8 rounded-3xl border border-brand-gold/10 dark:bg-brand-gold/10">
            <h2 className="text-xl font-display font-bold text-brand-dark uppercase mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-gold" />
              Your Data Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. If you have any questions about your data, please contact our privacy team at privacy@metalichorses.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
