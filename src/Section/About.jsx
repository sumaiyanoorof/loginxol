import React, { useRef } from "react";
import SectionTitle from "../Components/SectionTitle";
import Button from "../Components/Button";
import { motion, useInView } from "framer-motion";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: {
      opacity: 1,
      transition:{
        duration: 1,
        ease: "easeOut",
      },
    },
  };


  const textVariants = {
    hidden: {
      y: 50,
      opacity:0,
    },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        },
      },
    };

  return (
    <motion.section
    className="py-16"
    ref={ref} 
    variants={containerVariants} 
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    >
      <SectionTitle title="About Us" />
      <div className=" m-auto flex  text-shadow-gray-700 flex-col items-center gap-10 md:mt-16 md:flex-row md:gap-3">
        {/* About Content */}
        <motion.div
          className="container flex-1"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
          
          >
            <h1
            
            className="font-serif md:ml-0 ml-36 text-center text-3xl md:text-2xl font-semibold text-gray-800">
              <span className="">Welcome to LoginXol-A way to experts</span>
            </h1>

            <motion.p 
            initial={{ translateX: 0 }}
            whileInView={{ translateX :2}}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-10 md:mr-[200px] md:ml-[200px] text-justify text-sm text-gray-600 md:text-base" >
            LoginXol and Intxolution Software are innovative IT companies in Pakistan delivering custom, user-friendly software solutions to
            boost business productivity.Founded in June 2018, LoginXol offers a wide range of services including digital marketing, social media
            marketing, website design and development, application development, Oracle DBA tasks, and consultancy. Our company focus
            on quality, security, and scalability, providing end-to-end services from planning to deployment, with continuous client
            support and integration of existing systems. Known for timely delivery and excellent customer service, Our goal is to build
            long-term partnerships by deeply understanding client needs and delivering modern, efficient, and scalable software solutions with
            minimal turnaround time. 🚀
            </motion.p>
          </motion.div>

          <div>
            <Button className="mt-8 font-bold w-[150px] mx-[700px]" >More About
              <a href=""></a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
