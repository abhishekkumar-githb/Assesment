import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Products from './components/Products/Products';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Products />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;