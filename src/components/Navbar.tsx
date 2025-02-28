import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setShowContactModal(true);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <Plane size={24} className="text-primary-500" />
            <span className="text-xl font-bold">ELITE SKY</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#fleet" className="text-gray-300 hover:text-white transition-colors">Fleet</a>
            <a href="#booking" className="text-gray-300 hover:text-white transition-colors">Book Now</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          </nav>
          
          <div className="hidden md:block">
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContactClick}
            >
              Contact Us
            </motion.button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#fleet" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fleet
              </a>
              <a 
                href="#booking" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              
              <motion.button 
                className="btn-primary mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactModal(false)}
          >
            <motion.div 
              className="glass-effect p-8 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Contact Us</h3>
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Our private aviation consultants are available 24/7 to assist you with any inquiries.
                </p>
                
                <div className="space-y-4 mt-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input-field"
                  />
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input-field"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input-field"
                  />
                  
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="input-field resize-none"
                  ></textarea>
                </div>
                
                <motion.button 
                  className="btn-primary w-full mt-6"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    alert('Thank you for your message. Our team will contact you shortly.');
                    setShowContactModal(false);
                  }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;