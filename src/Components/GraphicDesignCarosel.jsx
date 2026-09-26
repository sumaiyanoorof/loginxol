import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import branding_Image from "../assets/Branding-2.png";
import sLogo1 from "../assets/s-logo1.png";
import sLogo2 from "../assets/s-logo2.png";
import sLogo3 from "../assets/s-logo3.png";
import sLogo4 from "../assets/s-logo4.png";
import sLogo5 from "../assets/s-logo5.png";
import sLogo6 from "../assets/s-logo6.png";
import sLogo7 from "../assets/s-logo7.png";
import sLogo8 from "../assets/s-logo8.png";
import business_card1 from "../assets/B-1.png";
import business_card2 from "../assets/B-2.png";
import business_card3 from "../assets/B-3.png";
import business_card4 from "../assets/B-4.png";
import business_card5 from "../assets/B-5.png";
import business_card6 from "../assets/B-6.png";
import business_card7 from "../assets/B-7.png";
import socialmedia1 from "../assets/1.jpg";
import socialmedia2 from "../assets/2.jpg";
import socialmedia3 from "../assets/3.jpg";

const logos = [sLogo1, sLogo2, sLogo3, sLogo4, sLogo5, sLogo6, sLogo7, sLogo8];

const businessCards = [business_card1, business_card2, business_card3, business_card4, business_card5, business_card6, business_card7];

const socialmediacovers = [socialmedia1, socialmedia2, socialmedia3];

const GraphicDesignCarousel = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // carousel refs
  const logosRef = useRef(null);
  const cardsRef = useRef(null);
  const socialRef = useRef(null);

  // per-carousel pause flags (use ref for rAF visibility)
  const pausedRef = useRef({ logos: false, cards: false, social: false });
  const setPaused = (key, val) => { pausedRef.current[key] = val; };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Smooth rAF-based autoplay for carousels (native scroll)
  useEffect(() => {
    const rafIds = { logos: null, cards: null, social: null };
    const ivIds = { logos: null, cards: null, social: null };
    const lastTime = { logos: 0, cards: 0, social: 0 };
    const canRaf = typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function';

    const startLoop = (ref, key, pxPerSec) => {
      if (!ref?.current) return;
      const el = ref.current;
      if (rafIds[key]) cancelAnimationFrame(rafIds[key]);
      if (ivIds[key]) clearInterval(ivIds[key]);

      const wrapIfNeeded = () => {
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft = el.scrollLeft - half;
        }
      };

      if (canRaf) {
        const frame = (now) => {
          if (!lastTime[key]) lastTime[key] = now;
          const dt = now - lastTime[key];
          lastTime[key] = now;
          if (!pausedRef.current[key] && el) {
            const delta = (pxPerSec * dt) / 1000;
            el.scrollLeft = el.scrollLeft + delta;
            wrapIfNeeded();
          } else {
            lastTime[key] = now;
          }
          rafIds[key] = requestAnimationFrame(frame);
        };
        rafIds[key] = requestAnimationFrame(frame);
      } else {
        const intervalMs = 30;
        ivIds[key] = setInterval(() => {
          if (pausedRef.current[key] || !el) return;
          const delta = (pxPerSec * intervalMs) / 1000;
          el.scrollLeft = el.scrollLeft + delta;
          wrapIfNeeded();
        }, intervalMs);
      }
    };

    startLoop(logosRef, 'logos', 140);
    startLoop(cardsRef, 'cards', 105);
    startLoop(socialRef, 'social', 84);

    return () => {
      Object.values(rafIds).forEach(id => { if (id) cancelAnimationFrame(id); });
      Object.values(ivIds).forEach(id => { if (id) clearInterval(id); });
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-red-800/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-700/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

           {/* === HERO SECTION === */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Elevate Your Brand <br />
            <span className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
              Through Design
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We craft stunning visual identities and compelling designs that tell
            your brand story, captivate your audience, and drive engagement.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-red-700 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* === BRANDING SECTION === */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-6 md:px-10 lg:px-24 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-900 bg-clip-text text-transparent">
              BRANDING
            </span>
          </h2>
          <motion.p
            className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Branding is the identity of your business—it's what people recognize
            and remember about you. Our graphic design services are dedicated to
            building a cohesive and visually appealing brand image. From logos
            to color schemes and typography, we ensure every element aligns
            perfectly to showcase your business at its best. With our expertise,
            your brand will stand out and leave a lasting impact on your
            audience.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={branding_Image}
              alt="Branding"
              className="w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Content Wrapper */}
        <motion.div
          className="relative bg-gradient-to-br from-gray-950/90 via-red-900/80 to-gray-950 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WE PROVIDE{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-800 bg-clip-text text-transparent relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-red-700/60 after:rounded-full after:animate-pulse">
              HIGH-QUALITY
            </span>{" "}
            DESIGNS
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            At <span className="font-semibold text-white">LoginXol</span>,
            we specialize in creating stunning designs that bring your brand's
            story to life. Our team delivers creative, detail-focused visuals —
            from unique logos to captivating graphics — ensuring your brand
            stands out in every dimension.
          </motion.p>
        </motion.div>
      </section>

      {/* === LOGO DESIGN SECTION WITH INFINITE CAROUSEL === */}
      <section
        className="relative py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gradient-to-b from-gray-950 via-red-950/10 to-gray-950"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Design <span className="text-red-700">Services</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-16 md:mb-24">
            Comprehensive graphic design solutions tailored to elevate your brand
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* LEFT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              LOGO <span className="text-red-600">DESIGN</span>
            </h2>
            <p className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg">
              Your logo is the cornerstone of your brand—it's what makes you
              unique and memorable. At{" "}
              <span className="font-semibold">LoginXol</span>, we
              recognize the value of a well-crafted logo. Our skilled designers
              are dedicated to creating a logo that perfectly reflects your
              brand's identity. Whether you envision something modern and sleek
              or timeless and classic, we collaborate with you to bring your
              ideas to life.
            </p>
            <p className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg">
              From concept to final design, we ensure your logo looks stunning
              and conveys your brand's message effectively. Count on LoginXol
              for logo designs that make a lasting impact.
            </p>
          </motion.div>

          {/* RIGHT: INFINITE CAROUSEL */}
          <div className="lg:w-1/2 w-full overflow-hidden relative">
            <div
              ref={logosRef}
              className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 overflow-x-auto no-scrollbar"
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
              onMouseEnter={() => setPaused('logos', true)}
              onMouseLeave={() => setPaused('logos', false)}
              onPointerDown={() => setPaused('logos', true)}
              onPointerUp={() => setPaused('logos', false)}
              onTouchStart={() => setPaused('logos', true)}
              onTouchEnd={() => setPaused('logos', false)}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <motion.div
                  key={idx}
                  data-item
                  whileHover={{ scale: 1.08, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-shrink-0 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 hover:bg-white/20 hover:border-red-700/50 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`logo-${idx}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === BUSINESS CARD DESIGN SECTION WITH INFINITE CAROUSEL === */}
      <section
        className="relative py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gradient-to-b from-gray-950 via-red-950/10 to-gray-950"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
          {/* RIGHT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              BUSINESS CARD <span className="text-red-600">DESIGN</span>
            </h2>
            <p className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg">
              Your business card is your first impression in the professional world.
              At <span className="font-semibold">LoginXol</span>, we
              understand that a well-designed business card can open doors and create
              lasting connections. Our expert designers craft cards that perfectly
              represent your professional identity and leave a memorable impact.
            </p>
            <p className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg">
              From sleek modern designs to elegant classic styles, we ensure every
              detail is perfect. Trust LoginXol to create business cards that make
              you stand out from the competition.
            </p>
          </motion.div>

          {/* LEFT: INFINITE CAROUSEL */}
          <div className="lg:w-1/2 w-full overflow-hidden relative">
            <div
              ref={cardsRef}
              className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 overflow-x-auto no-scrollbar"
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
              onMouseEnter={() => setPaused('cards', true)}
              onMouseLeave={() => setPaused('cards', false)}
              onPointerDown={() => setPaused('cards', true)}
              onPointerUp={() => setPaused('cards', false)}
              onTouchStart={() => setPaused('cards', true)}
              onTouchEnd={() => setPaused('cards', false)}
            >
              {[...businessCards, ...businessCards].map((businessCard, idx) => (
                <motion.div
                  key={idx}
                  data-item
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group flex-shrink-0 overflow-hidden bg-gray-100/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 lg:w-[450px] lg:h-72 hover:border-red-700/50 transition-all duration-300"
                >
                  <img
                    src={businessCard}
                    alt={`business-card-${idx}`}
                    className="w-full h-full object-cover p-4 sm:p-6 md:p-8 transform transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SOCIAL MEDIA COVER SECTION WITH INFINITE CAROUSEL === */}
      <section
        className="relative py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gradient-to-b from-gray-950 via-red-950/10 to-gray-950"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* LEFT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              SOCIAL MEDIA COVER PHOTO <span className="text-red-600">DESIGN</span>
            </h2>
            <p className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg">
              In today's digital landscape, your social media presence is crucial.
              At <span className="font-semibold">LoginXol</span>, we
              create eye-catching cover photos that make your profiles stand out
              and engage your audience. Our designers understand platform requirements
              and create visuals that look perfect across all devices and screen sizes.
            </p>
            <p className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg">
              From Facebook and LinkedIn to Twitter and YouTube, we ensure your
              social media covers are optimized, on-brand, and designed to capture
              attention in crowded feeds.
            </p>
          </motion.div>

          {/* RIGHT: INFINITE CAROUSEL */}
          <div className="lg:w-1/2 w-full overflow-hidden relative">
            <div
              ref={socialRef}
              className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 overflow-x-auto no-scrollbar"
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
              onMouseEnter={() => setPaused('social', true)}
              onMouseLeave={() => setPaused('social', false)}
              onPointerDown={() => setPaused('social', true)}
              onPointerUp={() => setPaused('social', false)}
              onTouchStart={() => setPaused('social', true)}
              onTouchEnd={() => setPaused('social', false)}
            >
              {[...socialmediacovers, ...socialmediacovers].map((socialmediacover, idx) => (
                <motion.div
                  key={idx}
                  data-item
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-shrink-0 overflow-hidden bg-gray-100/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center w-80 h-56 sm:w-96 sm:h-64 md:w-[450px] md:h-80 lg:w-[520px] lg:h-96 hover:border-red-700/50 transition-all duration-300"
                >
                  <img
                    src={socialmediacover}
                    alt={`social-media-cover-${idx}`}
                    className="w-full h-full object-cover rounded-lg p-3 sm:p-4"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gradient-to-b from-gray-950 via-red-950/10 to-gray-950">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
          {/* RIGHT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your <span className="text-red-600">Brand?</span>
            </h2>
            <p className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg">
              Let's bring your vision to life. At{" "}
              <span className="font-semibold">LoginXol</span>, we're passionate
              about creating designs that not only look amazing but also drive results.
              Our team of creative professionals is ready to collaborate with you
              on your next project.
            </p>
            <p className="text-gray-400/80 leading-relaxed text-sm sm:text-base md:text-lg">
              Whether you need a complete brand identity, marketing materials, or
              digital graphics, we have the expertise to exceed your expectations.
              Get in touch today and let's start creating something extraordinary.
            </p>
            <motion.button
              className="bg-red-800 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-800/50 mt-6"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>

          {/* LEFT: IMAGE */}
          <motion.div
            className="lg:w-1/2 w-full overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={lastimage}
                alt="Creative team at work"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignCarousel;