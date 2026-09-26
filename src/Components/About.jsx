import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="relative py-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto text-center"
      >
        {/* Reusable Title Component */}
        <SectionTitle title="About Us" />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-10 leading-tight text-gray-100"
        >
          Welcome to Login{" "}
          <span className="text-transparent bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text">
            Xol
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-300 mt-8 md:mt-10 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-justify leading-relaxed"
        >
          Empowering businesses with innovative IT solutions, digital
          excellence, and cutting-edge consulting. LoginXol and Intxolution
          Software deliver custom, user-friendly software solutions designed to
          elevate business productivity. Founded in June 2018, LoginXol provides digital marketing, social
          media management, website and application development, Oracle DBA
          tasks, and IT consultancy. We prioritize quality, security, and
          scalability—ensuring smooth deployment, continuous support, and
          seamless system integration. With a strong commitment to timely delivery and outstanding customer
          service, our mission is to build long-lasting partnerships by deeply
          understanding client needs and providing modern, efficient, and
          scalable technology solutions. 🚀
         
         </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="px-8 py-3 mt-12 bg-gradient-to-r from-red-700 to-red-900 rounded-full text-white font-semibold shadow-[0_0_20px_rgba(255,0,70,0.4)] hover:shadow-[0_0_35px_rgba(255,20,80,0.7)] transition-all duration-300"
        >
          Explore Services
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
