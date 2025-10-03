import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Service, Testimonial, Vehicle } from './types';
import { NAV_LINKS, SERVICES, TESTIMONIALS, FLEET } from './constants';
import { fadeIn, navVariants, navItemVariants, hoverScale, tapScale } from './utils/animations';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Layout Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Loader: React.FC = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm opacity-0 animate-fade-in">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect with passive listener for better performance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }),
    hover: { x: 5 },
    tap: { x: 0 }
  };

  return (
    <motion.header 
      className={`bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-sm transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div variants={navItemVariants}>
            <Link to="/" className="text-2xl font-extrabold text-primary">
              Farhan Logistics
            </Link>
          </motion.div>
          
          <motion.nav 
            className="hidden lg:flex items-center space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.path}
                variants={navItemVariants}
                custom={index}
                whileHover={{ scale: 1.05, transition: { type: 'spring' as const, stiffness: 400, damping: 10 } }}
                whileTap={{ scale: 0.95, transition: { type: 'spring' as const, stiffness: 400, damping: 10 } }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-base font-medium transition-colors duration-200 px-2 py-1 ${
                      isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                          layoutId="nav-underline"
                          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
          
          <motion.div 
            className="hidden lg:flex items-center" 
            variants={navItemVariants}
            custom={NAV_LINKS.length}
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { type: 'spring' as const, stiffness: 400, damping: 10 } }}
              whileTap={{ scale: 0.95, transition: { type: 'spring' as const, stiffness: 400, damping: 10 } }}
            >
              <Link to="/contact" className="bg-accent hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 block">
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:hidden"
            variants={navItemVariants}
            custom={NAV_LINKS.length + 1}
          >
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-primary focus:outline-none p-2 -mr-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Mobile Menu with AnimatePresence for smooth exit animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden bg-white border-t overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { 
                duration: 0.3, 
                ease: 'easeInOut',
                when: "beforeChildren"
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                duration: 0.2, 
                ease: 'easeInOut',
                height: { delay: 0.1 },
                when: "afterChildren"
              }
            }}
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.path}
                  custom={index}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div 
                className="pt-3 pb-2 px-3"
                custom={NAV_LINKS.length}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact"
                    className="block w-full text-center bg-accent hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export const Footer: React.FC = () => (
    <footer className="bg-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Farhan Logistics</h3>
            <p className="text-gray-400">Specializing in container handling, crane services, and general transport solutions across Pakistan.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Address: Office No 15-B, MEZZANINE FLOOR NAGINA CENTER MA JINNAH ROAD KEMARI KARACHI</li>
              <li>Phone: +92 343 2426160</li>
              <li>Email: Farhan4naseem@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Farhan Logistics. All Rights Reserved. | 
             <a href="https://www.graphicsvibes.pk" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
               Design by Graphics Vibes
             </a>
          </p>
        </div>
      </div>
    </footer>
  );

export const FloatingContact: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Using inline SVGs for simplicity
    const WhatsAppIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2.02c-5.52 0-9.99 4.47-9.99 9.99 0 1.77.46 3.45 1.28 4.92L2 22l5.09-1.34c1.43.79 3.03 1.23 4.72 1.23h.01c5.52 0 9.99-4.47 9.99-9.99s-4.47-9.99-9.99-9.99zM12 20.13c-1.52 0-2.97-.4-4.24-1.12l-.3-.18-3.15.82.84-3.07-.2-.31c-.8-1.28-1.22-2.74-1.22-4.24 0-4.54 3.68-8.22 8.22-8.22 4.54 0 8.22 3.68 8.22 8.22s-3.68 8.22-8.22 8.22zm4.49-5.47c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.2s-1.5-1.48-1.68-1.84c-.18-.36-.02-.55.11-.67.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.78c-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01s-.38.06-.58.3c-.2.24-.77.75-.77 1.82s.79 2.11.9 2.27c.12.16 1.55 2.45 3.76 3.33.54.22.97.35 1.3.45.54.15 1.03.13 1.42.08.43-.05 1.44-.59 1.64-.95s.2-1.03.14-1.15c-.06-.12-.22-.19-.46-.31z"/>
        </svg>
    );

    const EmailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
    
    const ContactIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    );

    const CloseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
            {/* Action Buttons */}
            <div className={`flex flex-col items-center gap-4 transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
                <a href="mailto:Farhan4naseem@gmail.com" aria-label="Email Farhan Logistics" className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-110">
                    <EmailIcon />
                </a>
                <a href="https://wa.me/923432426160" aria-label="Contact Farhan Logistics on WhatsApp" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
                    <WhatsAppIcon />
                </a>
            </div>
            
            {/* Main Toggle Button */}
            <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                aria-expanded={isExpanded} 
                aria-label="Toggle contact options" 
                className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
                <div className="relative h-8 w-8 overflow-hidden">
                    <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90 scale-50'}`}>
                        <CloseIcon />
                    </div>
                    <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0'}`}>
                        <ContactIcon />
                    </div>
                </div>
            </button>
        </div>
    );
};


export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

export const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Card Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const ServiceCard: React.FC<{ service: Service; index?: number }> = ({ service, index = 0 }) => (
  <motion.div 
    className="bg-white p-8 rounded-lg shadow-md text-center h-full flex flex-col"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1] as const
        }
      }
    }}
    whileHover={{
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }}
  >
    <motion.div 
      className="flex justify-center items-center mb-6"
      whileHover={{ 
        scale: 1.1, 
        rotate: -5,
        transition: { 
          type: 'spring',
          stiffness: 300
        } 
      }}
    >
      {service.icon}
    </motion.div>
    <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </motion.div>
);

export const TestimonialCard: React.FC<{ testimonial: Testimonial; index?: number }> = ({ testimonial, index = 0 }) => (
  <motion.div 
    className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1] as const
        }
      }
    }}
    whileHover={{
      y: -3,
      boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }}
  >
    <motion.p 
      className="text-gray-600 italic mb-6 text-lg leading-relaxed relative"
      initial={{ opacity: 0.7 }}
      whileHover={{ 
        opacity: 1,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <span className="absolute text-6xl text-gray-200 font-serif -left-2 -top-6">"</span>
      {testimonial.quote}
    </motion.p>
    <motion.div 
      className="mt-auto text-right"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <p className="font-bold text-primary text-lg">{testimonial.name}</p>
      <p className="text-sm text-gray-500">{testimonial.company}</p>
    </motion.div>
  </motion.div>
);

export const VehicleCard: React.FC<{ vehicle: Vehicle; index?: number }> = ({ vehicle, index = 0 }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1] as const
        }
      }
    }}
    whileHover={{
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }}
  >
    <div className="h-56 overflow-hidden relative">
      <motion.img 
        src={vehicle.image} 
        alt={vehicle.name} 
        className="w-full h-full object-cover"
        loading="lazy"
        initial={{ scale: 1 }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.4 }
        }}
      />
      <motion.div 
        className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        {vehicle.specs.type}
      </motion.div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-dark mb-3">{vehicle.name}</h3>
      <ul className="text-gray-600 space-y-2 mb-4">
        <li className="flex items-start">
          <span className="inline-block w-20 text-gray-500">Type:</span>
          <span>{vehicle.specs.type}</span>
        </li>
        <li className="flex items-start">
          <span className="inline-block w-20 text-gray-500">Capacity:</span>
          <span>{vehicle.specs.capacity}</span>
        </li>
        <li className="flex items-start">
          <span className="inline-block w-20 text-gray-500">Ideal For:</span>
          <span>{vehicle.specs.idealFor}</span>
        </li>
      </ul>
      <motion.button 
        className="mt-auto bg-accent hover:bg-orange-600 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 self-start"
        whileHover={{ 
          scale: 1.03,
          boxShadow: '0 4px 12px -2px rgba(249, 115, 22, 0.5)'
        }}
        whileTap={{ scale: 0.98 }}
      >
        Book Now
      </motion.button>
    </div>
  </motion.div>
);