import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-brand-gold" />
            <span className="text-sm font-bold tracking-widest uppercase text-brand-gold">Get in Touch</span>
            <div className="w-8 h-[2px] bg-brand-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl uppercase mb-8"
          >
            Connect with the <span className="text-brand-gold">Crew</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Have questions about gear, sizing, or an order? Our team of experts is here to help you get back on the road.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm"
            >
              <h3 className="text-2xl uppercase mb-8">Contact Details</h3>
              <ul className="space-y-8">
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Our Location</div>
                    <div className="text-gray-600">13 Celestial Way, Ogudu Orioke Lagos, Nigeria</div>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call Us</div>
                    <div className="text-gray-600">+234 805 667 1922</div>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email Us</div>
                    <div className="text-gray-600">sales@metalichorses.com</div>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-brand-dark p-10 rounded-[2rem] text-white"
            >
              <h3 className="text-2xl uppercase mb-8">Opening Hours</h3>
              <ul className="space-y-4">
                <li className="flex justify-between text-gray-400">
                  <span>Mon - Fri</span>
                  <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-400">
                  <span>Saturday</span>
                  <span className="text-white font-bold">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-400">
                  <span>Sunday</span>
                  <span className="text-brand-gold font-bold">Closed</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-10 md:p-16 rounded-[3rem] shadow-sm"
          >
            <h3 className="text-3xl uppercase mb-8">Send a Message</h3>
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <select className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Product Question</option>
                  <option>Wholesale</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full bg-brand-light border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-brand-dark text-white px-12 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-gray transition-all hover:scale-105">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 h-[400px] bg-gray-200 rounded-[3rem] overflow-hidden relative"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-brand-light">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl uppercase font-bold mb-2">Visit Our Showroom</h3>
              <p className="text-gray-500">13 Celestial Way, Ogudu Orioke Lagos</p>
            </div>
          </div>
          {/* In a real app, you'd embed a Google Map here */}
        </motion.div>
      </div>
    </div>
  );
}
