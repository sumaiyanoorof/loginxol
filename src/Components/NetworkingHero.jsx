import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const NetworkingHero = () => {
  const headline = "Transform Your Business with Enterprise-Grade Networking Solutions";
  const words = headline.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      filter: 'blur(4px)',
    },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Networking Solutions | LoginXol</title>
        <meta
          name="description"
          content="LoginXol provides enterprise-grade networking solutions that ensure secure, reliable, and scalable connectivity for your business transformation."
        />
        <meta
          name="keywords"
          content="Networking Solutions, Enterprise Network, Cloud Integration, Secure Networking, LAN WAN Architecture, IT Infrastructure, LoginXol"
        />
        <meta property="og:title" content="Enterprise-Grade Networking Solutions | LoginXol" />
        <meta
          property="og:description"
          content="Transform your business with secure and scalable networking solutions designed by LoginXol."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1729258882260-1c33b6c5b183"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://loginxol.com/networking" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#101828]">
        {/* Background + Red Glow */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1729258882260-1c33b6c5b183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Network mesh background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#b81111]/20 via-[#101828]/50 to-[#101828]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#dc143c]/10 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 sm:py-20 md:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 max-w-6xl mx-auto leading-tight">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className={`inline-block mr-2 sm:mr-3 md:mr-4 ${
                    word === 'Networking' 
                      ? 'bg-gradient-to-r from-[#dc143c] to-[#b81111] bg-clip-text text-transparent' 
                      : 'text-[#d1d5db]'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheading */}
            <motion.p
              variants={wordVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#9ca3af] mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
            >
              Reliable, Secure, and Scalable Network Infrastructure
            </motion.p>

            {/* Supporting Paragraph */}
            <motion.p
              variants={wordVariants}
              className="text-sm sm:text-base md:text-lg text-[#9ca3af] mb-10 sm:mb-12 max-w-2xl mx-auto px-3"
            >
              At LoginXol, we design and implement cutting-edge networking solutions that power your digital transformation.
              From LAN/WAN architecture to cloud integration and security, we ensure your business stays connected,
              protected, and ready for growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={wordVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 20, 60, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#dc143c] to-[#b81111] text-white rounded-lg flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#dc143c' }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 border-2 border-[#9ca3af] text-[#d1d5db] rounded-lg flex items-center justify-center gap-2 hover:border-[#dc143c] transition-all text-sm sm:text-base"
              >
                <Shield className="w-5 h-5" />
                View Case Studies
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#dc143c] rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#dc143c] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NetworkingHero;
