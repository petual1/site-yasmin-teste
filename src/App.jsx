import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Therapy from './components/Therapy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp'; 

const App = () => {
  return (
    <div className="min-h-screen selection:bg-yasmin-rose selection:text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Problems />
      <Therapy />
      <FAQ />
      <Footer />
      <FloatingWhatsApp /> 
    </div>
  );
};

export default App;