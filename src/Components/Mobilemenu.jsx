import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import { NavLink } from 'react-router-dom';




const Mobilemenu = ({ setMenuOpen, menuOpen, menuItems }) => {
  return (
  <div className={`fixed left-0 top-0 z-30 h-full w-3/4 transform border-r-2 border-white/15 bg-white/20 px-4 backdrop-blur transition-transform duration-300 ${menuOpen ? "translate-x-0" :
  "-translate-x-full"
  }`}
  >
    <div className="mt-5">
        <Logo/> 
    </div>
    <hr className="my-3 border-2 " />
    <ul className="mt-5 flex-col flex space-y-3">
      {menuItems.map((item) => (
        <li key={item.href}>
          <NavLink
            to={item.href}
            className="nav-item p-2"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
    <Button variant="outline" className="mt-5 py-2" >Contact Me</Button>
  </div>
)};

export default Mobilemenu;