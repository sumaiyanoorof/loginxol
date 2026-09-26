import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Scroll Logic: hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Software Development", href: "#software-development" },
    { name: "IT Consulting", href: "#it-consulting" },
    { name: "Website Design", href: "#website-design" },
    { name: "Graphic Design", href: "#graphic-design" },
    { name: "Digital Marketing", href: "#digital-marketing" },
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Modules", href: "#modules" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg  border-red-950/20"
          : "bg-transparent"
      }`}
      initial={{y: -100 }}
      animate={{y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
           className=" flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <a href="#home" className="flex items-center gap-2">
               <img src={Logo} alt="Logo" className="w-32 md:w-40" />
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
 {/* Desktop Nav */}
<div className="hidden md:flex items-center gap-8">
  <Link to="/" className="text-gray-300 hover:text-white transition-colors relative group">
    Home
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-950 group-hover:w-full transition-all duration-300" />
  </Link>

  <Link to="/about" className="text-gray-300 hover:text-white transition-colors relative group">
    About
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-950 group-hover:w-full transition-all duration-300" />
  </Link>

  <Link to="/services" className="text-gray-300 hover:text-white transition-colors relative group">
    Services
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-950 group-hover:w-full transition-all duration-300" />
  </Link>

  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors relative group">
    Contact
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-950 group-hover:w-full transition-all duration-300" />
  </Link>
</div>


            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.button
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                whileHover={{ y: -2 }}
              >
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full mt-2 left-0 w-64 bg-gray-950/95 backdrop-blur-lg rounded-lg shadow-2xl border border-red-950/30 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((service, index) => (
                      <motion.a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-red-950/20 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        {service.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-red-900 to-red-700 hover:from-red-950 hover:to-red-800 text-white px-6 py-2 rounded-lg shadow-lg shadow-red-600/30">
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-950/98 backdrop-blur-lg border-t border-red-950/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white py-2 "
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Mobile Services Accordion */}
              <div className="border-t border-[var(--dark-red)]/20 pt-4">
                <p className="text-gray-400 text-sm mb-2">Services</p>
                {services.map((service, index) => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className="block text-gray-300 hover:text-white py-2 pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + index) * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="w-full bg-gradient-to-r from-[var(--dark-red)] to-[var(--red-accent)] text-white">
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;