import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Plus,
  Minus,
  Trash2,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { CartItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function Layout({ children, cart, setCart }: LayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return newQty === 0 ? null : { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'MH Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Our Products', path: '/products' },
  ];

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              className="lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 3).map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-gold",
                    location.pathname === link.path ? "text-brand-gold" : "text-brand-dark"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src="/image/image 1.png" alt="Metallic Horses" className="h-10 md:h-12 object-contain" />
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(3).map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-gold",
                    location.pathname === link.path ? "text-brand-gold" : "text-brand-dark"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-card z-[70] p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <img src="/image/image 1.png" alt="Logo" className="h-8 dark:brightness-200" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={cn(
                      "text-xl font-display font-semibold transition-colors hover:text-brand-gold",
                      location.pathname === link.path ? "text-brand-gold" : "text-brand-dark"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card pt-20 pb-10 border-t border-border-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <h4 className="text-xl uppercase mb-8 text-brand-dark">Contact Info</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 text-gray-500 dark:text-gray-400">
                  <MapPin className="w-6 h-6 text-brand-gold shrink-0" />
                  <span>13 Celestial Way, Ogudu Orioke Lagos</span>
                </li>
                <li className="flex gap-4 text-gray-500 dark:text-gray-400">
                  <Phone className="w-6 h-6 text-brand-gold shrink-0" />
                  <span>+234 805 667 1922</span>
                </li>
                <li className="flex gap-4 text-gray-500 dark:text-gray-400">
                  <Mail className="w-6 h-6 text-brand-gold shrink-0" />
                  <span>sales@metalichorses.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl uppercase mb-8 text-brand-dark">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Terms and Conditions', path: '/terms' },
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Order Tracking', path: '/tracking' },
                  { name: 'Returns', path: '/returns' }
                ].map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl uppercase mb-8 text-brand-dark">Company</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact Us', path: '/contact' },
                  { name: 'Our Blog', path: '/blog' },
                  { name: 'Payment Methods', path: '/payments' }
                ].map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl uppercase mb-8 text-brand-dark">Follow Us</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">Join our community of road warriors and share your journey.</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-8">
            <img src="/image/image 1.png" alt="Logo" className="h-8 opacity-50 dark:brightness-200" />
            <p className="text-gray-400 text-sm">
              Copyright &copy; 2024 FLUXFORGE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card z-[110] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-brand-gold" />
                  <h2 className="text-2xl uppercase text-brand-dark">Your Cart</h2>
                  <span className="bg-brand-light px-3 py-1 rounded-full text-xs font-bold text-gray-500">{totalItems} items</span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-brand-light rounded-full transition-colors text-brand-dark"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mb-6">
                      <ShoppingCart className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-8">Looks like you haven't added any gear yet.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-6 group">
                      <div className="w-24 h-24 bg-brand-light rounded-2xl p-2 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-brand-gold font-bold text-sm mb-4">₦{item.price.toLocaleString()}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 bg-brand-light rounded-full px-3 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-brand-gold transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-brand-gold transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-xs font-bold text-gray-400">₦{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 border-t bg-brand-light/30">
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>
                      <span>₦{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Shipping</span>
                      <span className="text-green-500 font-bold uppercase text-xs tracking-widest">Calculated at checkout</span>
                    </div>
                    <div className="pt-4 border-t flex justify-between items-center">
                      <span className="text-xl font-bold uppercase">Total</span>
                      <span className="text-2xl font-display font-bold text-brand-dark">₦{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  <button className="w-full bg-brand-dark text-white py-5 rounded-full font-bold text-lg hover:bg-brand-gray transition-colors flex items-center justify-center gap-3">
                    Checkout Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
