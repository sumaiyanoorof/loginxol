import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';


const back1 = {
  rest: { x: -8, y: 8, rotate: -2, scale: 0.98, opacity: 0.9 },
  hover: { x: -28, y: -6, rotate: -6, scale: 1.02, opacity: 1, transition: { duration: 0.45 } },
};

const back2 = {
  rest: { x: -4, y: 4, rotate: -1, scale: 0.99, opacity: 0.95 },
  hover: { x: -18, y: -2, rotate: -4, scale: 1.01, opacity: 1, transition: { duration: 0.45 } },
};

const top = {
  rest: { x: 0, y: 0, rotate: 0, scale: 1 },
  hover: { x: -6, y: -10, rotate: -2, scale: 1.035, transition: { type: 'spring', stiffness: 140, damping: 12 } },
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="relative w-full"
      initial="rest"
     
      animate="rest"
    >
      <div className="overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-gray-900/80 via-red-900/55 to-gray-900 p-8 md:p-10 shadow-2xl">
        <div className="md:flex md:items-center">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{service.title}</h2>
            <div className="w-20 h-0.5 bg-white/10 my-4" />
            <p className="text-sm md:text-base text-white/40 max-w-xl">{service.description}</p>

            <div className="mt-6">
              <Button className="bg-white text-red-800 px-6 py-3">Visit Site</Button>
            </div>
          </div>

          <div className="hidden md:block md:flex-1" />
        </div>
      </div>

      {/* Stacked/overlapping image block */}
      <div className="pointer-events-none md:pointer-events-auto">
        <div className="relative md:absolute md:top-6 md:right-0 md:-translate-x-12 lg:-translate-x-20 w-full md:w-[520px] lg:w-[640px]">
          {/* back layers */}
          <motion.div variants={back1} className="hidden md:block absolute -right-6 -top-6 w-48 h-32 bg-black/10 rounded-xl shadow-lg" />
          <motion.div variants={back2} className="hidden md:block absolute -right-3 -top-3 w-56 h-36 bg-black/5 rounded-xl shadow-md" />

          <motion.div variants={top} className="relative bg-white/5 rounded-xl overflow-hidden shadow-2xl">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full ml-48 mt-3 h-44 md:h-64 lg:h-80 object-cover"
              loading="lazy"
              
            />
            <div className="hidden md:block absolute -left-8 bottom-6 w-36 h-24 bg-white/6 rounded-lg blur-sm" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
