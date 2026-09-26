import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Heart,
  Landmark,
  Zap,
  Globe,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const client = [
    {
      image: "https://i.postimg.cc/YSTNchSk/1-Gaelic-Shipping-Line-copy-1.png",
      name: "Gaelic-Shipping-Line",
      industry: "Shipping",
      color: "from-blue-500 to-cyan-500",
    },
    {
      image: "https://i.postimg.cc/52Lb5rFp/2-SEABREEZE-SHIPPING-LLC.png",
      name: "SEABREEZE-SHIPPING-LLC",
      industry: "Shipping",
      color: "from-green-500 to-emerald-500",
    },
    {
      image: "https://i.postimg.cc/JzL4Fm8v/3-Pluto-Shipping-LLC.png",
      name: "Pluto-Shipping-LLC",
      industry: "Shipping",
      color: "from-purple-500 to-pink-500",
    },
    {
      image: "https://i.postimg.cc/Vk6Hm0m2/4-Front-Line-Trans-Shipping-LLC.png",
      name: "Front-Line-Trans-Shipping-LLC",
      industry: "Shipping",
      color: "from-orange-500 to-yellow-500",
    },
    {
      image: "https://i.postimg.cc/qqqCzrqp/5-IPLANET-BPO-Copy.png",
      name: "IPLANET BPO",
      industry: "Healthcare",
      color: "from-red-500 to-rose-500",
    },
    {
      image: "https://i.postimg.cc/7hjbhTpv/6-Romails.png",
      name: "Romails",
      industry: "Government",
      color: "from-indigo-500 to-blue-500",
    },
    {
      image: "https://i.postimg.cc/3w6wnGxv/7-Roshan-Khan-Foundation.png",
      name: "Roshan Khan Foundation",
      industry: "Energy",
      color: "from-yellow-500 to-amber-500",
    },
    {
      image: "https://i.postimg.cc/XYP3bbS1/8-Habib-Coal-Mines.png",
      name: "Habib Coal Mines",
      industry: "Logistics",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const clients =[
    {
      image: "https://i.postimg.cc/zGQLP6dN/logo1.png",
    },
    {
      image: "https://i.postimg.cc/8cwcd0F3/logo2.png",
    },
    {
      image: "https://i.postimg.cc/HWtrCVZm/logo3.png",
    },
    {
      image: "https://i.postimg.cc/0j52N0Wg/logo4.png",
    },
    {
      image: "https://i.postimg.cc/9QwXzMpf/logo5.png",
    },
    {
      image: "https://i.postimg.cc/YScrFHnd/logo6.png",
    },
    {
      image: "https://i.postimg.cc/7YTj2Tpt/logo7.png",
    },
    {
      image: "https://i.postimg.cc/L8KwB8Sn/logo8.png",
    },
    {
      image: "https://i.postimg.cc/Gp71QnzM/logo9.png",
    },
    {
      image: "https://i.postimg.cc/fyXnDtsP/logo10.png",
    },
    {
      image: "https://i.postimg.cc/QtTnW2zG/logo11.png",
    },
    {
      image: "https://i.postimg.cc/zvwtxn8X/logo12.png",
    },
    {
      image: "https://i.postimg.cc/yYPp9XLk/logo13.png",
    },
    {
      image: "https://i.postimg.cc/mrcmvxBS/logo14.png",
    },
    {
      image: "https://i.postimg.cc/PJHKvPZB/logo15.png",
    },
    {
      image: "https://i.postimg.cc/dQnGjHKd/logo16.png",
    },
    {
      image: "https://i.postimg.cc/htQxgKQ9/logo17.png",
    },
    {
      image: "https://i.postimg.cc/QMpT9SbC/logo18.png",
    },
    {
      image: "https://i.postimg.cc/VvHrQhY4/logo19.png",
    },
    {
      image: "https://i.postimg.cc/7hbhVNgx/logo20.png",
    },
    {
      image: "https://i.postimg.cc/bwLvKM3J/logo21.png",
    },
    {
      image: "https://i.postimg.cc/vTR8rdHr/logo22.png",
    },
    {
      image: "https://i.postimg.cc/XNFYVXsv/logo23.png",
    },
    {
      image: "https://i.postimg.cc/pdpP3d9V/logo24.png",
    },
    {
      image: "https://i.postimg.cc/T2rfzFPw/logo25.png",
    },
    {
      image: "https://i.postimg.cc/J7KdH56F/logo26.png",
    },
    {
      image: "https://i.postimg.cc/bvX6fCrf/logo27.png",
    },

    {
      image: "https://i.postimg.cc/V6mDdJj8/logo28.png",
    },
    {
      image: "https://i.postimg.cc/4yF5Lwq2/logo29.png",
    },
    {
      image: "https://i.postimg.cc/G3Mqmh9n/logo30.png",
    },
    {
      image: "https://i.postimg.cc/Cx8N7GNW/logo31.png",
    },
    {
      image: "https://i.postimg.cc/G2LxbZC0/logo32.png",
    },
    {
      image: "https://i.postimg.cc/8c3RBcr8/logo33.png",
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--dark-gray-dark)] to-[var(--dark-gray)] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--red-accent)]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle title="Our Partners" className="px-4 py-2 bg-[var(--dark-red)]/20 border border-[var(--red-accent)]/30 rounded-full text-[var(--red-accent)] text-sm backdrop-blur-sm"/>
              
            
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-red-600/90 to-red-700/90 bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partnering with industry leaders across diverse sectors to deliver
            exceptional solutions.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {client.map((client) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-900 rounded-xl border border-red-900/20 group-hover:border-red-600/50 transition-all duration-300" />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-opacity duration-300`}
              />

              <div className="relative p-6 flex flex-col items-center justify-center h-full">
                <motion.div
                  className={`w-20 h-20 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={client.image}
                    alt={`${client.name} logo`}
                    className="w-16 h-16 object-cover"
                  />
                </motion.div>

                <h3 className="text-white font-semibold text-center mb-1">
                  {client.name}
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  {client.industry}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--red-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      
       

        {/* Logo Marquee */}
        <motion.div
          className="mt-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
          <motion.div
            className="flex gap-8 py-8"
            animate={{ x: [0, -1000] }}
            transition={{
              x: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 bg-gray-800/30 backdrop-blur-sm border border-red-900/10 rounded-lg flex items-center justify-center"
              >
                <img src={client.image} alt={`${client.name} logo`} className="max-h-16 object-contain" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
