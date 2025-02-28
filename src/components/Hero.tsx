import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Plane } from 'lucide-react';

const Hero: React.FC = () => {
  const jetRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create clouds
    if (cloudsRef.current) {
      for (let i = 0; i < 20; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        // Random size between 50px and 200px
        const size = Math.random() * 150 + 50;
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size}px`;
        
        // Random position
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        cloud.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        
        cloudsRef.current.appendChild(cloud);
      }
    }

    // Animate jet emerging from clouds
    if (jetRef.current) {
      gsap.fromTo(
        jetRef.current,
        { 
          y: 200, 
          opacity: 0,
          scale: 0.8,
          rotate: -5
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          rotate: 0,
          duration: 2, 
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Animate clouds
    gsap.to('.cloud', {
      x: '-=100',
      opacity: 0,
      stagger: 0.1,
      duration: 10,
      repeat: -1,
      repeatDelay: 0,
      ease: "none",
    });
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-background to-blue-900/30">
      <div ref={cloudsRef} className="clouds"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-6 neon-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ELITE SKY
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-center max-w-2xl mb-12 text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the future of luxury private jet travel
        </motion.p>
        
        <div ref={jetRef} className="relative w-full max-w-4xl h-64 md:h-96">
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Luxury Private Jet" 
            className="w-full h-full object-cover object-center rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-xl"></div>
          
          <motion.div 
            className="absolute bottom-8 left-8 glass-effect p-4 max-w-xs"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center gap-2 text-primary-500 mb-2">
              <Plane size={20} className="animate-pulse-glow" />
              <span className="font-semibold">ULTRA LUXURY</span>
            </div>
            <p className="text-sm text-blue-100">
              Cutting-edge technology meets unparalleled comfort
            </p>
          </motion.div>
        </div>
        
        <motion.button 
          className="btn-primary mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToBooking}
        >
          Book Your Experience
        </motion.button>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;