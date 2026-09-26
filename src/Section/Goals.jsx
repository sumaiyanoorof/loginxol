import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Code2, Rocket } from "lucide-react";
import SectionTitle from '../Components/SectionTitle';

const steps = [
  {
    title: "Design",
    icon: <Pencil className="w-12 h-12 text-white" />,
    description:
      "Our first stage consists of Project Designing. Our Design Team sketch up a Bussiness Models & customs Designs for clients satisfaction. Every client always wish to view what will be final results so we provide final results before any projects. Project mapping is very necessary before we commit any deals. We create business models & custom designs for client satisfaction.",
  },
  {
    title: "Develop",
    icon: <Code2 className="w-12 h-12 text-white" />,
    description:
      "In this phase, We develop smart solutions that help your business grow , full-featured software, graphics, videos, or any service we provide. We develop tailored digital solutions that accelerate growth, improve efficiency, and strengthen your brand. Our team develops high-quality, scalable software designed to meet your business goals with precision.",
  },
  {
    title: "Deploy",
    icon: <Rocket className="w-12 h-12 text-white " />,
    description:
      "We deploy the projects on servers or deliver them to clients. We provide debugging, revisions, and custom changes as per client requirements. We deploy secure, high-performance solutions that ensure seamless operation and long-term reliability. Our team deploys scalable systems with precision, ensuring smooth transitions and optimized performance.",
  },
];

const Goals = () => {
  
  return (
   <div>
 <section className="py-6  ">
    <SectionTitle title="Achive your goals in 3 steps" />
   
      <div className="mt-20 max-w-6xl  mx-auto px-6 grid gap-8 md:grid-cols-3 ">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-12 border-red-700/50 border-1  bg-gradient-to-t from-gray-900/80 via-red-700/55 to-gray-900 mb-6 rounded-2xl shadow-xl text-center hover:scale-105 transform transition duration-300"
          >
            <div className="flex items-center mx-auto border-2 rounded-full w-28 h-28  border-white/90 justify-center mb-6">{step.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-5">{step.title}</h3>
            <p className="text-gray-200 text-shadow-md text-wrap leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Goals;
