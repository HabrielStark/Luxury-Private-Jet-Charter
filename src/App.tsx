import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FleetSection from './components/FleetSection';
import JetInterior from './components/JetInterior';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  // Preload images for smoother animations
  useEffect(() => {
    const preloadImages = [
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559686043-aef2db1ead63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FleetSection />
      <JetInterior />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;