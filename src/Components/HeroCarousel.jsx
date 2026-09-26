import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ImageWithFallback from '../figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      title: "Software Development",
     
      description:
        "Custom software solutions that drive innovation and transform your business operations",
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "Explore Services",
    },
    {
      title: "IT Consulting",
      
      description:
        "Expert guidance to optimize your IT infrastructure and accelerate digital transformation",
      image:
        "https://images.unsplash.com/photo-1599453052061-5c377643e4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "Get Consultation",
    },
    {
      title: "Website Design",
     
      description:
        "Stunning, responsive websites that engage users and deliver exceptional performance",
      image:
        "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "View Portfolio",
    },
    {
      title: "Graphic Design",
      
      description:
        "Creative designs that capture attention and communicate your brand's unique identity",
      image:
        "https://images.unsplash.com/photo-1663298173404-18a975da338b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "See Our Work",
    },
    {
      title: "Digital Marketing",
      
      description:
        "Data-driven marketing campaigns that amplify your reach and maximize ROI",
      image:
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "Start Growing",
    },
    {
      title: "Networking",
      
      description:
        "Empowering your business with fast, secure, and uninterrupted networking—built for the digital age.",
      image:
        "https://i.postimg.cc/sgKsKS0B/server1280.jpg",
      cta: "Start Growing",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction ) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence 
      initial={false} 
      custom={direction} 
      mode="wait">
        
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image with overlay */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover md:-mb-96 shadow-gradient from-gray-950"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/80 to-gray-950/60 opacity-90" />
             {/* Red Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-400/30 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
              >
                <motion.div variants={itemVariants} className="mb-4">
                  <motion.span
                    className="inline-block px-4 py-2 md:mt-32 text-red-600 text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl md:text-7xl md:mt-10 lg:text-8xl font-bold text-white mb-6 leading-tight"
                >
                  {slides[currentSlide].title.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      className={
                        index === slides[currentSlide].title.split(" ").length - 1
                          ? "bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"
                          : ""
                      }
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-red-900 to-red-700 hover:from-red-950 hover:to-red-900 text-white px-8 py-6 text-lg shadow-lg shadow-red-600/50 group">
                      {slides[currentSlide].cta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-2 bordr-red-700 text-white hover:bg-red-700/10 px-8 py-6 text-lg backdrop-blur-sm"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-red-600/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center md:mb-56 justify-between px-4 sm:px-6 lg:px-8 z-20 pointer-events-none">
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 md:mb-96 rounded-full bg-gray-950/50 backdrop-blur-sm border border-red-600/30 flex items-center justify-center text-white hover:bg-red-950/50 transition-colors pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-gray-950/50 backdrop-blur-sm border border-red-600/30 flex items-center justify-center text-white hover:bg-red-950/50 transition-colors pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-center gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-12 bg-red-600"
                  : "w-8 bg-white/30 hover:bg-white/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-8 z-20 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-sm rotate-90">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
