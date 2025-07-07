import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4 text-sm md:text-base">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-glow animate-glow">
                <span className="text-white font-bold text-lg font-display">L</span>
              </div>
              <span className="text-xl font-bold font-display gradient-text">LuxuryStore</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Your premier destination for luxury goods. We curate the finest collection of watches, jewelry, and accessories from around the world.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 glass-morphism rounded-xl text-slate-400 hover:text-amber-400 transition-all duration-300 hover:shadow-glow"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick + Customer Side-by-Side */}
          <motion.div variants={itemVariants} className="space-y-4 text-sm md:text-base">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold font-display text-white">Quick Links</h3>
                <ul className="space-y-2">
                  {[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'About Us', href: '/about' }, { name: 'Contact', href: '/contact' }].map((link) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-amber-400 transition-colors duration-300 relative group"
                      >
                        {link.name}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display text-white">Customer Service</h3>
                <ul className="space-y-2">
                  {['Shipping Info', 'Returns', 'Size Guide', 'FAQ'].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <a
                        href="#"
                        className="text-slate-400 hover:text-amber-400 transition-colors duration-300 relative group"
                      >
                        {item}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4 text-sm md:text-base">
            <h3 className="text-lg font-semibold font-display text-white">Contact Us</h3>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: '123 Luxury Ave, New York, NY 10001' },
                { icon: Phone, text: '+1 (555) 123-4567' },
                { icon: Mail, text: 'info@luxurystore.com' },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-3 group"
                >
                  <div className="p-2 glass-morphism rounded-lg group-hover:shadow-glow transition-all duration-300">
                    <contact.icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-t border-slate-700/50 mt-10 pt-6 text-center text-sm"
        >
          <div className="glass-morphism rounded-2xl p-4">
            <p className="text-slate-400">
              &copy; 2024 LuxuryStore. All rights reserved. |
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 ml-1">Privacy Policy</a> |
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 ml-1">Terms of Service</a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
