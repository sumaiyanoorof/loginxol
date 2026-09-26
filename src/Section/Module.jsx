import React from 'react'
import SectionTitle from '../Components/SectionTitle';

import { module } from '../Constants';
import { motion, AnimatePresence } from "framer-motion";
import ModuleCard from '../Components/ModuleCard';
import { Link } from 'react-router-dom';



const Module = () => {
 

  const cardVariants = {
    hidden: {
      y: 20,
      opacity:0,
    },
    visible: (index)=>( {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: index * 0.2,
      },
    }),
  };  
  return(
    <section className="py-6 mt-20" >
        <SectionTitle title="Our Modules" />
        <div className="max-w-6xl mx-auto px-6 m-2 mt-20 grid gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          {/* Services */}

            {module.map((module,index) => (
             <motion.div 
             key={module.title} 
                custom={index}
                variants={cardVariants}
                
                
                >
              <ModuleCard module={module} />
           </motion.div>
            ))}
        </div>
         <motion.div
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}> 
          <Link to="/modules"> 
         <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
           className="px-8 py-3 ml-[650px] my-6 bg-[#a20021] rounded-full text-white font-semibold shadow-[0_0_20px_rgba(162,0,33,0.5)] hover:shadow-[0_0_30px_rgba(220,20,60,0.6)] transition-all duration-300"
         >
           Explore Modules
         </motion.button>
         </Link>
         </motion.div>  
    </section>
  );
};

export default Module;
