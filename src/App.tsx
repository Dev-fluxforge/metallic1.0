import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Products from './pages/Products';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import OrderTracking from './pages/OrderTracking';
import Returns from './pages/Returns';
import PaymentMethods from './pages/PaymentMethods';
import { Product, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <Layout cart={cart} setCart={setCart}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/payments" element={<PaymentMethods />} />
        </Routes>
      </Layout>
    </Router>
  );
}
