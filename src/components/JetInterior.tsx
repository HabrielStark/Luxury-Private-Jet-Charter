import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Wine, Wifi, Tv, Coffee, Utensils, BedDouble } from 'lucide-react';

const JetInterior: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // 3D rotation effect based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Amenities with icons
  const amenities = [
    { icon: <Wine size={24} />, name: "Premium Beverages", description: "Curated selection of fine wines and spirits" },
    { icon: <Wifi size={24} />, name: "High-Speed Wi-Fi", description: "Stay connected at 40,000 feet" },
    { icon: <Tv size={24} />, name: "Entertainment", description: "4K screens with global streaming services" },
    { icon: <Coffee size={24} />, name: "Gourmet Service", description: "On-demand refreshments and snacks" },
    { icon: <Utensils size={24} />, name: "Fine Dining", description: "Michelin-star quality meals" },
    { icon: <BedDouble size={24} />, name: "Sleeping Quarters", description: "Fully reclining seats and private suites" }
  ];

  useEffect(() => {
    if (inView) {
      // Animate amenities when in view
      gsap.to('.amenity-item', {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, [inView]);

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience Unparalleled Luxury
        </motion.h2>
        
        <div className="jet-interior-container">
          <motion.div 
            className="jet-interior-content"
            style={{ 
              rotateX, 
              rotateY,
              scale,
              transformPerspective: "1000px"
            }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Jet Interior" 
                className="w-full h-[500px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              
              <motion.div 
                className="absolute bottom-8 left-8 glass-effect p-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-white">Bespoke Interior Design</h3>
                <p className="text-blue-100">
                  Every aircraft in our fleet features custom interiors designed by world-renowned luxury specialists, 
                  tailored to provide the ultimate in comfort and sophistication.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div ref={ref} className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="amenity-item glass-effect p-6 opacity-0 transform translate-y-10"
            >
              <div className="text-primary-500 mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
              <p className="text-gray-400">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JetInterior;