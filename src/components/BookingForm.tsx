import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, MapPin, Clock, ArrowRight, Check } from 'lucide-react';

type BookingStep = 'destination' | 'date' | 'passengers' | 'confirmation';

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('destination');
  const [formData, setFormData] = useState({
    departure: '',
    arrival: '',
    date: '',
    passengers: '1',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep === 'destination') setCurrentStep('date');
    else if (currentStep === 'date') setCurrentStep('passengers');
    else if (currentStep === 'passengers') setCurrentStep('confirmation');
  };

  const prevStep = () => {
    if (currentStep === 'date') setCurrentStep('destination');
    else if (currentStep === 'passengers') setCurrentStep('date');
    else if (currentStep === 'confirmation') setCurrentStep('passengers');
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <section id="booking" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Book Your Private Jet</h2>
          
          <div className="glass-effect p-8 relative overflow-hidden">
            {/* Progress indicator */}
            <div className="flex justify-between mb-10 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>
              
              {['destination', 'date', 'passengers', 'confirmation'].map((step, index) => (
                <div 
                  key={step} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 relative
                             ${currentStep === step 
                               ? 'bg-primary-500 neon-border' 
                               : index < ['destination', 'date', 'passengers', 'confirmation'].indexOf(currentStep)
                                 ? 'bg-primary-700' 
                                 : 'bg-gray-800'}`}
                >
                  {index < ['destination', 'date', 'passengers', 'confirmation'].indexOf(currentStep) ? (
                    <Check size={16} className="text-white" />
                  ) : (
                    <span className="text-white text-sm">{index + 1}</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Form steps */}
            <div className="min-h-[320px]">
              <AnimatePresence mode="wait">
                {currentStep === 'destination' && (
                  <motion.div
                    key="destination"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-semibold mb-6">Where would you like to fly?</h3>
                    
                    <div className="space-y-4">
                      <div className="relative">
                        <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="departure"
                          value={formData.departure}
                          onChange={handleChange}
                          placeholder="Departure City"
                          className="input-field pl-10"
                          required
                        />
                      </div>
                      
                      <div className="relative">
                        <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="arrival"
                          value={formData.arrival}
                          onChange={handleChange}
                          placeholder="Arrival City"
                          className="input-field pl-10"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 'date' && (
                  <motion.div
                    key="date"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-semibold mb-6">When would you like to depart?</h3>
                    
                    <div className="relative">
                      <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="input-field pl-10"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        name="time"
                        className="input-field pl-10"
                        required
                      >
                        <option value="">Select Time</option>
                        <option value="morning">Morning (6AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 6PM)</option>
                        <option value="evening">Evening (6PM - 12AM)</option>
                      </select>
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 'passengers' && (
                  <motion.div
                    key="passengers"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-semibold mb-6">Passenger Information</h3>
                    
                    <div className="relative">
                      <Users size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="input-field pl-10"
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="input-field"
                        required
                      />
                      
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="input-field"
                        required
                      />
                      
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="input-field"
                        required
                      />
                    </div>
                  </motion.div>
                )}
                
                {currentStep === 'confirmation' && (
                  <motion.div
                    key="confirmation"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-semibold mb-6">Confirm Your Booking</h3>
                    
                    <div className="space-y-4 bg-white/5 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Route:</span>
                        <span className="font-medium">{formData.departure} to {formData.arrival}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Date:</span>
                        <span className="font-medium">{formData.date}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Passengers:</span>
                        <span className="font-medium">{formData.passengers}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Contact:</span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400">
                      A private aviation consultant will contact you shortly to finalize your booking and discuss aircraft options.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              {currentStep !== 'destination' && (
                <button
                  onClick={prevStep}
                  className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
                >
                  Back
                </button>
              )}
              
              <motion.button
                onClick={currentStep === 'confirmation' ? () => alert('Booking submitted!') : nextStep}
                className={`btn-primary ml-auto flex items-center gap-2 ${currentStep === 'confirmation' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentStep === 'confirmation' ? 'Submit Booking' : (
                  <>
                    Next <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;