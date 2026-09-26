import { BiMenuAltRight, BiX } from "react-icons/bi";
import { motion, scale, stagger } from "framer-motion";
import Logo from "../Components/Logo";
import MobileMenu, { menuItems } from "../Components/Mobilemenu";
import Button from "../Components/Button";
import { NavLink } from 'react-router-dom';



const Navbar = ({ menuOpen, setMenuOpen }) => {
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
      <motion.header
       className="fixed top-0 z-10 w-full px-4 py-4"
       initial="hidden"
       animate="visible">
        <nav className="container flex items-center justify-between rounded-full border-2 text-white border-white/10 bg-white/5 p-2 backdrop-blur">
          <motion.div className="flex items-center"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          >
            <Logo />
          </motion.div>

          <motion.ul className="hidden space-x-4 md:flex"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          >
            {menuItems.map((item) => (
              <motion.li key={item.href} variants={menuItemVariants}>
                <NavLink to={item.href} className="nav-item">
                  {item.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="hidden md:block"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          >
            <Button variant="outline"  id="contact" >Contact Me</Button>
          </motion.div>

          {/* Menu Icon */}
          <motion.button
            className="text-4xl text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            {menuOpen ? <BiX /> : <BiMenuAltRight />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Overlay for mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-300 opacity-50"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
      />
    </>
  );
};

export default Navbar;

