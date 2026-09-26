import React, { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { ChevronDown, Menu, X } from "lucide-react"; 
import { Button } from "../ui/button"; 
import Logo from "./Logo"; import { Link } from "react-router-dom";


const Navigation = () => { 
  const [isScrolled, setIsScrolled] = useState(false); 
  const [isHidden, setIsHidden] = useState(false); 
  const [isServicesOpen, setIsServicesOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll hide/show logic 
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

     // Services submenu links 
     const services = [ 
      { name: "Software Development", to: "/software-development" }, 
      { name: "IT Consulting", to: "/it-consulting" }, 
      { name: "Website Design", to: "/website-design" }, 
      { name: "Graphic Design", to: "/graphic-design" }, 
      { name: "Digital Marketing", to: "/digital-marketing" }, 
      { name: "Networking", to: "/networking" }, 
     ];


     return ( 
     <motion.nav 
     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ 

      isScrolled 
      ? "bg-gray-900/95 backdrop-blur-lg shadow-lg border-red-900/20" 
      : "bg-transparent" 
    }`}
    initial={{ y: -100 }} 
    animate={{ y: isHidden ? -100 : 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }} 
    >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
    <div className="flex items-center justify-between h-20">

      {/* Logo */} 
    <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
      <Link to="/" className="flex items-center gap-2"> 
      <Logo className="w-32 md:w-28" /> 
      </Link> 
    </motion.div>

    {/* Desktop Menu */} 
    <div className="hidden md:-ml-[410px] md:gap-6  md:flex items-center gap-8"> 
      <NavLink to="/">Home</NavLink> 
      <NavLink to="/modules">Modules</NavLink> 

      {/* Services Dropdown */} 
      <div className="relative" 
      onMouseEnter={() => setIsServicesOpen(true)} 
      onMouseLeave={() => setIsServicesOpen(false)} 
      > 
      <motion.button className="text-gray-300 hover:text-white transition-colors flex items-center gap-1" 
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
            <motion.div 
            key={service.name} 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: index * 0.05 }} 
            > 
            <Link 
            to={service.to} 
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-red-950/20 transition-colors" 
            > 
            {service.name} 
            </Link> 
            </motion.div> 
          ))} 
          </motion.div> 
        )} 
        </AnimatePresence> 
        </div>

        <NavLink to="/contact" >Contact</NavLink> 
        </div> 
        {/* Contact Button */} 
        <div className="hidden md:block"> 
          <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}> 
          <Link to="/contact"> 
          <Button className="bg-gradient-to-r from-red-900 to-red-700 hover:from-red-950 hover:to-red-800 text-white px-6 py-2 rounded-lg shadow-lg shadow-red-600/30">
          Contact Us 
          </Button> 
          </Link> 
          </motion.div> 
          </div>

          {/* Mobile Menu Button */} 
          <motion.button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          whileTap={{ scale: 0.95 }} 
          > 
          {isMobileMenuOpen 
          ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} 
          </motion.button> 
          </div> 
          </div>
          {/* Mobile Menu */} 
          <AnimatePresence> 
            {isMobileMenuOpen && ( 
              <motion.div 
              className="md:hidden bg-gray-950/98 backdrop-blur-lg border-t border-red-950/20" 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }} 
              transition={{ duration: 0.3, ease: "easeInOut" }} 
              >
               <div className="px-4 py-6 space-y-4"> 
                <MobileLink to="/" label="Home" /> 
                <MobileLink to="/modules" label="Modules" /> 
                <MobileLink to="/contact" label="Contact" /> 
                {/* Services Accordion */}
                 <div className="border-t border-red-950/20 pt-4"> 
                 <p className="text-gray-400 text-sm mb-2">Services</p> 
                 {services.map((service, index) => ( 
                  <MobileLink 
                  key={service.name} 
                  to={service.to} 
                  label={service.name} 
                  delay={(index + 1) * 0.05} 
                  /> 
                  ))} 
                  </div>

                  <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.5 }} > 
                  <Link to="/contact"> 
                  <Button className="w-full bg-gradient-to-r from-red-900 to-red-700 text-white"> 
                    Contact Us 
                    </Button> 
                    </Link> 
                    </motion.div> 
                    </div> 
                    </motion.div> 
                    )} 
                    </AnimatePresence> 
                    </motion.nav> 
                    ); 
                  }; 
                  
                  // Small helper components 
                   const NavLink = ({ to, children }) => ( 
                   <Link 
                   to={to} 
                   className="text-gray-300 hover:text-white transition-colors relative group" 
                   > 
                   {children} 
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-950 group-hover:w-full transition-all duration-300" 
                   /> 
                   </Link> 
                   );

                   const MobileLink = ({ to, label, delay = 0 }) => ( 
                   <motion.div 
                   initial={{ opacity: 0, x: -20 }} 
                   animate={{ opacity: 1, x: 0 }} 
                   transition={{ delay }} 
                   > 
                   <Link 
                   to={to} 
                   className="block text-gray-300 hover:text-white py-2" 
                   > 
                   {label} 
                   </Link> 
                   </motion.div> 
                   ); 

                   export default Navigation;
              
