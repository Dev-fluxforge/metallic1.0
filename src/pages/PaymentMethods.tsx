import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Smartphone, ShieldCheck, Globe } from 'lucide-react';

export default function PaymentMethods() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl uppercase mb-6">Payment <span className="text-brand-gold">Methods</span></h1>
          <p className="text-xl text-gray-600">Secure, flexible, and fast. Choose the payment method that works best for you.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: CreditCard, title: 'Card Payment', desc: 'Secure payments via Visa, Mastercard, and Verve.' },
            { icon: Smartphone, title: 'Bank Transfer', desc: 'Direct transfer to our corporate account for instant processing.' },
            { icon: Globe, title: 'Online Wallet', desc: 'Pay via popular digital wallets and payment gateways.' },
          ].map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-10 rounded-[2rem] shadow-sm text-center border border-border-subtle"
            >
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <method.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl uppercase mb-4 text-brand-dark">{method.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{method.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-light/50 border border-brand-gold/20 rounded-[3rem] p-12 text-center dark:bg-brand-gold/5">
          <ShieldCheck className="w-12 h-12 text-brand-gold mx-auto mb-6" />
          <h2 className="text-2xl uppercase mb-4 text-brand-dark">100% Secure Checkout</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Your security is our top priority. All transactions are encrypted and processed through industry-leading payment partners. We never store your full card details.
          </p>
        </div>
      </div>
    </div>
  );
}
