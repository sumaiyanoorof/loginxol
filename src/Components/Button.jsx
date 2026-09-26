import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className }) => {
  const buttonVariants = {
       hover:{
        scale: 1.04,
        transition: {
          type:'spring',
          stiffness:"300",
          damping: 7,
        },
      },
      tap: {
        scale: 0.9,
      }, 
   };

  const variants = {
    primary: "bg-red-800 text-white/90 border-none hover:bg-gray-700",
    outline:
      "bg-transparent text-black-300 border-2 border-red-800 hover:bg-gray-600 hover:text-white",
  };

    return (
      <motion.button
      className={twMerge(
        `rounded-full px-6 py-2 font-semibold ${variants[variant]}`,
        className
      )}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
};

export default Button;
