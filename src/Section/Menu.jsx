import React from 'react'
import { BiMenuAltRight, BiX } from 'react-icons/bi';

const Menu = () => {
  return (
    <div>
              {/* Menu Icon */}
          <motion.button
            className="text-4xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            {menuOpen ? <BiX /> : <BiMenuAltRight />}
          </motion.button>
    </div>
  )
}

export default Menu
