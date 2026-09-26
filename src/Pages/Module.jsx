import { motion, useInView } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import ModuleCard from '../Components/ModuleCard';
import { modules } from '../Constants/index';
import React,{ useRef } from 'react';
import Footer from '../Section/Footer';
import WhatsAppChatbot from '../Components/whatsappChatbot';

const Module = ({module}) => {
     const modulesRef = useRef(null);
  const isInView = useInView(modulesRef, { once: true, margin: "-100px" });

      const fadeInVariants = {
    hidden: {
      y: 20,
      opacity:0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      x: 20,
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

  return (
   <motion.section 
    className="py-16 mt-20 "
    id='modules'
    ref={modulesRef}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={fadeInVariants}
     >
        <SectionTitle title="Our Modules" />
        <div className=" max-w-full mx-auto py-20 px-12 grid grid-cols-3 gap-12 md:grid-cols-3 sm:grid-cols-1">
          {/* modules */}

            {modules.map((item,index) => (
             <motion.div 
             key={item.id||index} 
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} 
                >
              <ModuleCard module={item} />
           </motion.div>
            ))}
            
        </div>
        <WhatsAppChatbot />
       <Footer />
    </motion.section>
  );
};

export default Module;
