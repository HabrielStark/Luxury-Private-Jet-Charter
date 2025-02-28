import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Gauge, Globe, X, ArrowLeft, ArrowRight } from 'lucide-react';

interface JetCardProps {
  name: string;
  image: string;
  passengers: number;
  range: string;
  speed: string;
  description: string;
  index: number;
  onViewDetails: () => void;
}

const JetCard: React.FC<JetCardProps> = ({ name, image, passengers, range, speed, description, index, onViewDetails }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      className="glass-effect overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold">{name}</h3>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex justify-center text-primary-500 mb-1">
              <Users size={18} />
            </div>
            <div className="text-sm text-gray-400">Passengers</div>
            <div className="font-semibold">{passengers}</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center text-primary-500 mb-1">
              <Globe size={18} />
            </div>
            <div className="text-sm text-gray-400">Range</div>
            <div className="font-semibold">{range}</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center text-primary-500 mb-1">
              <Gauge size={18} />
            </div>
            <div className="text-sm text-gray-400">Speed</div>
            <div className="font-semibold">{speed}</div>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm">{description}</p>
        
        <motion.button 
          className="w-full py-2 border border-primary-500 text-primary-500 rounded-md hover:bg-primary-500 hover:text-white transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewDetails}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

interface JetDetailsProps {
  jet: {
    name: string;
    image: string;
    passengers: number;
    range: string;
    speed: string;
    description: string;
  };
  onClose: () => void;
}

const JetDetails: React.FC<JetDetailsProps> = ({ jet, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="glass-effect max-w-4xl w-full overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-80">
          <img 
            src={jet.image} 
            alt={jet.name} 
            className="w-full h-full object-cover"
          />
          <button 
            className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <h2 className="absolute bottom-6 left-6 text-3xl font-bold">{jet.name}</h2>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="flex justify-center text-primary-500 mb-2">
                <Users size={24} />
              </div>
              <div className="text-sm text-gray-400">Passengers</div>
              <div className="text-xl font-semibold">{jet.passengers}</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center text-primary-500 mb-2">
                <Globe size={24} />
              </div>
              <div className="text-sm text-gray-400">Range</div>
              <div className="text-xl font-semibold">{jet.range}</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center text-primary-500 mb-2">
                <Gauge size={24} />
              </div>
              <div className="text-sm text-gray-400">Speed</div>
              <div className="text-xl font-semibold">{jet.speed}</div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Aircraft Overview</h3>
          <p className="text-gray-300 mb-6">
            {jet.description}
          </p>
          <p className="text-gray-300 mb-6">
            This ultra-long-range business jet offers exceptional comfort and performance. 
            With its spacious cabin, advanced avionics, and remarkable fuel efficiency, 
            it represents the pinnacle of private aviation technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Cabin Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Fully reclining seats convertible to beds</li>
                <li>• Multiple cabin zones for work and relaxation</li>
                <li>• Advanced sound suppression technology</li>
                <li>• Custom lighting with circadian rhythm settings</li>
                <li>• Gourmet galley with full-service capabilities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Technical Specifications</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Maximum altitude: 51,000 feet</li>
                <li>• Takeoff distance: 5,950 ft</li>
                <li>• Landing distance: 2,770 ft</li>
                <li>• Engines: Twin high-bypass turbofan</li>
                <li>• Avionics: Latest generation flight deck</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-between">
            <motion.button 
              className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/10 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
            >
              <ArrowLeft size={18} /> Back to Fleet
            </motion.button>
            
            <motion.button 
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onClose();
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book This Jet <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FleetSection: React.FC = () => {
  const [selectedJet, setSelectedJet] = useState<number | null>(null);
  
  const jets = [
    {
      name: "Gulfstream G700",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      passengers: 19,
      range: "7,500 nm",
      speed: "Mach 0.90",
      description: "The flagship of our fleet, offering unmatched luxury and the longest range for intercontinental travel."
    },
    {
      name: "Bombardier Global 7500",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      passengers: 17,
      range: "7,700 nm",
      speed: "Mach 0.85",
      description: "Featuring four living spaces and a dedicated crew suite for the ultimate in long-range comfort."
    },
    {
      name: "Dassault Falcon 8X",
      image: "https://images.unsplash.com/photo-1559686043-aef2db1ead63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      passengers: 14,
      range: "6,450 nm",
      speed: "Mach 0.80",
      description: "Exceptional fuel efficiency and the ability to access challenging airports with short runways."
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Our Premium Fleet</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our collection of the world's most advanced private jets, 
            each offering exceptional performance and bespoke luxury.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jets.map((jet, index) => (
            <JetCard 
              key={index} 
              {...jet} 
              index={index} 
              onViewDetails={() => setSelectedJet(index)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedJet !== null && (
          <JetDetails 
            jet={jets[selectedJet]} 
            onClose={() => setSelectedJet(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FleetSection;