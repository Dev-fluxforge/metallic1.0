import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, AlertCircle } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl uppercase mb-6">Terms & Conditions</h1>
          <p className="text-gray-500">Last updated: October 2024</p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-brand-dark uppercase mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Metallic Horses website, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-brand-dark uppercase mb-4">2. Product Information</h2>
            <p>
              We attempt to be as accurate as possible with our product descriptions. However, Metallic Horses does not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-brand-dark uppercase mb-4">3. Limitation of Liability</h2>
            <p>
              Metallic Horses shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Metallic Horses has been advised of the possibility of such damages.
            </p>
          </section>

          <section className="bg-brand-dark text-white p-8 rounded-3xl">
            <h2 className="text-xl font-display font-bold text-brand-gold uppercase mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Governing Law
            </h2>
            <p className="text-gray-400">
              These terms and conditions are governed by and construed in accordance with the laws of Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
