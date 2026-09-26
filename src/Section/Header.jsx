import Logo from '../Components/Logo';
import Button from '../Components/Button';
import { motion, scale, stagger } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
  const [navColor, setNavColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuActive, setmenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const logoVariants = {
        hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
 <nav
        className={`sticky top-0 z-50 mt-0.5 max-w-5xl mx-auto hidden md:flex shadow-2xl px-4 rounded-tl-3xl rounded-br-3xl border-t-4 border-t-red-800 sm:px-6 h-20 -mb-20  text-black flex items-center justify-between transition-colors duration-500 ${
          navColor? 'bg-white '  : 'bg-white'
        }` 
        
      }
      variants={logoVariants}
      
      >
              
        <div className="flex-shrink-0 flex items-center">
          <Logo className="w-auto h-8" />
   
        </div>

        {/* Links */}
        <div className="hidden -ml-80 md:flex space-x-8 text-gray-700 font-semibold " 
        variants={menuItemVariants}
        >
          <NavLink to="/" className={({isActive}) => isActive ? "hover:text-red-800 border-b-2 border-red-800" : "hover:text-red-800"}>
            HOME
          </NavLink>
          <NavLink to="/module" className="hover:text-red-800">
            MODULES
          </NavLink>
          <div className="relative group">
            <button className="hover:text-red-800 flex items-center space-x-1">
              <span>SERVICES</span>
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 7l5 5 5-5H5z" />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg cursor-pointer rounded-md opacity-0 group-hover:opacity-100 transition-opacity group-hover:pointer-events-auto z-20">
              <NavLink to="/software-development" className="block px-4 py-2 hover:bg-gray-300">
                Software Development
              </NavLink>
              <NavLink to="/it-consulting" className="block px-4 py-2 hover:bg-gray-300">
                IT Consulting
              </NavLink>
              <NavLink to="/graphic-design" className="block px-4 py-2 hover:bg-gray-300">
                Website Design
              </NavLink>
              <NavLink to="/web-design" className="block px-4 py-2 hover:bg-gray-300">
                Graphic Design
              </NavLink>
              <NavLink to="/digital-marketing" className="block px-4 py-2 hover:bg-gray-300">
                Digital Marketing
              </NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="hover:text-red-800">
            CONTACT
          </NavLink>
        </div>

        {/* Contact Us button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="bg-red-800 text-white text-[18px] px-6 py-3 rounded-md font-bold hover:bg-gray-600 transition"
          >
            Contact Us
          </NavLink>
        </div>
     
        

        {/* Hamburger menu button visible under 800px */}
        <button
          className="text-black md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen? 'M6 18L18 6M6 6l12 12': 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Side transparent menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/80 shadow-lg transition-transform duration-300 z-50 transform ${
          menuOpen? 'translate-x-0': 'translate-x-full'
        } md:hidden`}
      >
        <button
          className="text-black ml-52 p-4"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
         ✕
        </button>
        <ul className="text-black p-4 space-y-4">
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/module" onClick={() => setMenuOpen(false)}>Modules</NavLink></li>
          <li>
            <button
              className="w-full text-left font-semibold hover:text-red-800"
              onClick={() => setmenuActive(!menuActive)}
            >
              Services
              <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {menuActive && (
              <ul className="pl-4 mt-2 space-y-2 text-sm">
                <li><NavLink to="/it-consulting" onClick={() => { setMenuOpen(false); setmenuActive(false); }}>IT Consulting</NavLink></li>
                <li><NavLink to="/graphic-design" onClick={() => { setMenuOpen(false); setmenuActive(false); }}>Graphic Design</NavLink></li>
                <li><NavLink to="/web-design" onClick={() => { setMenuOpen(false); setmenuActive(false); }}>Website Design</NavLink></li>
                <li><NavLink to="/digital-marketing" onClick={() => { setMenuOpen(false); setmenuActive(false); }}>Digital Marketing</NavLink></li>
              </ul>
            )}
          </li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>


     </>
  );
};

export default Header;
