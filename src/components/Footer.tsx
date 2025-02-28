import React from 'react';
import { Plane, Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Plane size={24} className="text-primary-500" />
              <span className="text-xl font-bold">ELITE SKY</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Redefining luxury air travel with cutting-edge technology and unparalleled service.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#fleet" className="text-gray-400 hover:text-white transition-colors">Our Fleet</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-white transition-colors">Book a Flight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Private Charter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Travel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Jet Membership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Concierge Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Aircraft Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  1234 Aviation Blvd, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (800) 555-JETS</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">info@elitesky.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elite Sky Private Aviation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;