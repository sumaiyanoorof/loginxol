import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


const SectionTitle = ({title}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center">
        <h2 className="mt-4 inline-block relative font-serif text-3xl font-semibold text-transparent bg-gradient-to-r from-red-600/90 via-red-500/90 to-red-600/90 bg-clip-text uppercase tracking-widest'
        />
      </h2>">
        {title}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className=' bottom-0 left-0 right-0 h-1 origin-left border-b-5 rounded-2xl -mt-1 border-white/90 mb-8 pb-2'
        />
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
