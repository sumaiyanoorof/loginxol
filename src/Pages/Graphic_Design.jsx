import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import branding_Image from "../assets/Branding-2.png";
import { ImageWithFallback } from '../figma/ImageWithFallback';
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
import lastimage from "../assets/team-photographers-working-together-desk-scaled-1.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Footer from "../Section/Footer";
import { 
  Palette, 
  Layers, 
  Eye, 
  Sparkles,
  PenTool,
  Image as ImageIcon,
  FileText,
  Monitor,
  Zap,
  Trophy,
  Heart,
  Target,
  ArrowRight,
  CheckCircle2,
  Package
} from 'lucide-react';
import WhatsAppChatbot from "../Components/whatsappChatbot";


const logos = [sLogo1, sLogo2, sLogo3, sLogo4, sLogo5, sLogo6, sLogo7, sLogo8];

const businessCards =[business_card1, business_card2, business_card3, business_card4, business_card5, business_card6, business_card7 ];

const socialmediacovers =[socialmedia1, socialmedia2, socialmedia3 ];

const Graphic_Design = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const portfolioRef = useRef(null);
  const whyChooseRef = useRef(null);
  const logosRef = useRef(null);
  const cardsRef = useRef(null);
  const socialRef = useRef(null);
  
  // Per-carousel paused state (so pausing one doesn't pause all)
  const [isPausedLogos, setIsPausedLogos] = useState(false);
  const [isPausedCards, setIsPausedCards] = useState(false);
  const [isPausedSocial, setIsPausedSocial] = useState(false);

  // Ref to hold latest pause flags for rAF loop (avoids stale closures)
  const pausedRef = useRef({ logos: false, cards: false, social: false });

  // Active indicator indexes for dots
  const [activeLogos, setActiveLogos] = useState(0);
  const [activeCards, setActiveCards] = useState(0);
  const [activeSocial, setActiveSocial] = useState(0);

  const setPaused = (key, val) => {
    pausedRef.current[key] = val;
    if (key === 'logos') setIsPausedLogos(val);
    if (key === 'cards') setIsPausedCards(val);
    if (key === 'social') setIsPausedSocial(val);
  };
  
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });
          const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" });
        
          const { scrollYProgress } = useScroll();
          const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
          const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const designServices = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Create memorable brand identities that resonate with your target audience and stand out in the market.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"],
      image: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MDA2MzcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Monitor,
      title: "Digital Graphics",
      description: "Eye-catching digital designs for websites, social media, and online marketing campaigns.",
      features: ["Social Media Graphics", "Web Banners", "Email Templates", "Digital Ads"],
      image: "https://images.unsplash.com/photo-1663153204638-bfce85406499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3JlYXRpb258ZW58MXx8fHwxNzYwMDkwOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: FileText,
      title: "Print Design",
      description: "Professional print materials that leave a lasting impression on your clients and customers.",
      features: ["Business Cards", "Brochures", "Flyers", "Posters"],
      image: "https://images.unsplash.com/photo-1613462537927-5e50fb73bdf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nfGVufDF8fHx8MTc2MDA1NjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Innovative packaging solutions that protect your products and attract customers.",
      features: ["Product Packaging", "Label Design", "Box Design", "Retail Displays"],
      image: "https://images.unsplash.com/photo-1760037028517-e5cc6e3ebd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MDEwMTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const whyChooseUs = [
    {
      icon: Eye,
      title: "Creative Vision",
      description: "Unique designs that capture attention and communicate your brand story effectively."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality, meeting your deadlines consistently."
    },
    {
      icon: Trophy,
      title: "Award-Winning Team",
      description: "Experienced designers with proven expertise and industry recognition."
    },
    {
      icon: Heart,
      title: "Client Focused",
      description: "Collaborative approach ensuring your vision becomes reality through every iteration."
    }
  ];

  const designProcess = [
    {
      number: "01",
      title: "Discovery & Research",
      description: "Understanding your brand, audience, and goals to create targeted design solutions.",
      icon: Target
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Brainstorming creative ideas and developing initial design concepts for review.",
      icon: PenTool
    },
    {
      number: "03",
      title: "Design & Refinement",
      description: "Creating polished designs and refining based on your feedback and preferences.",
      icon: Layers
    },
    {
      number: "04",
      title: "Delivery & Support",
      description: "Final files in all required formats with ongoing support for implementations.",
      icon: CheckCircle2
    }
  ];

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

  // Smooth rAF-based autoplay for carousels (see refs below)
  useEffect(() => {
    const rafIds = { logos: null, cards: null, social: null };
    const ivIds = { logos: null, cards: null, social: null };
    let lastTime = { logos: 0, cards: 0, social: 0 };
    let tickCount = { logos: 0, cards: 0, social: 0 };

    const canRaf = typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function';

    const startLoop = (ref, key, pxPerSec) => {
      if (!ref?.current) return;
      const el = ref.current;

      if (rafIds[key]) cancelAnimationFrame(rafIds[key]);
      if (ivIds[key]) clearInterval(ivIds[key]);
      tickCount[key] = 0;

      const wrapIfNeeded = () => {
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          try {
            el.scrollLeft = el.scrollLeft - half;
          } catch (e) {
            // ignore
          }
        }
      };

      if (canRaf) {
        const frame = (now) => {
          if (!lastTime[key]) lastTime[key] = now;
          const dt = now - lastTime[key];
          lastTime[key] = now;

          if (!pausedRef.current[key] && el) {
            const delta = (pxPerSec * dt) / 1000;
            try {
              el.scrollLeft = el.scrollLeft + delta;
            } catch (e) {
              el.scrollLeft = el.scrollLeft + delta;
            }
            wrapIfNeeded();
            tickCount[key]++;
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
          try {
            el.scrollLeft = el.scrollLeft + delta;
          } catch (e) {
            el.scrollLeft = el.scrollLeft + delta;
          }
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

  // Helpers for scrolling, indicators and jumps
  const handleScroll = (ref, setActive, itemsLength) => {
    if (!ref?.current) return;
    const el = ref.current;
    const half = el.scrollWidth / 2 || 1;
    const pos = el.scrollLeft % half;
    const child = el.querySelector('[data-item]');
    const itemW = child ? (child.offsetWidth + (parseFloat(getComputedStyle(child).marginRight) || 0)) : el.clientWidth;
    if (!itemW) return;
    const idx = Math.round(pos / itemW) % itemsLength;
    setActive(isNaN(idx) ? 0 : idx);
  };

  const scrollBy = (ref, direction, key) => {
    if (!ref?.current) return;
    const el = ref.current;
    const step = Math.max(el.clientWidth * 0.8, 200);
    const delta = direction * step;
    try {
      el.scrollBy({ left: delta, behavior: 'smooth' });
    } catch (e) {
      el.scrollLeft = el.scrollLeft + delta;
    }
    setPaused(key, true);
    setTimeout(() => setPaused(key, false), 700);
  };

  const jumpToIndex = (ref, index) => {
    if (!ref?.current) return;
    const el = ref.current;
    const half = el.scrollWidth / 2 || 1;
    const child = el.querySelector('[data-item]');
    const itemW = child ? (child.offsetWidth + (parseFloat(getComputedStyle(child).marginRight) || 0)) : el.clientWidth;
    const pos = index * itemW;
    const target = pos % half;
    try {
      el.scrollTo({ left: target, behavior: 'smooth' });
    } catch (e) {
      el.scrollLeft = target;
    }
  };

   
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
       

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Elevate Your Brand
            <br />
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-900 bg-clip-text text-transparent">
              Through Design
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We craft stunning visual identities and compelling designs that tell your brand story, 
            captivate your audience, and drive meaningful engagement across all platforms.
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

   {/* Services Section */}
      <section ref={servicesRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Design <span className="text-red-700">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive graphic design solutions tailored to elevate your brand
            </p>
          </motion.div>

          <div className="space-y-10">

    {/* === LOGO DESIGN SECTION WITH INFINITE CAROUSEL === */}
      <section
        className="relative py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gradient-to-b from-gray-950 via-red-950/10 to-gray-950"
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
              onTouchEnd={() => setTimeout(() => setPaused('logos', false), 600)}
              onScroll={() => handleScroll(logosRef, setActiveLogos, logos.length)}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <motion.div
                  key={idx}
                  data-item
                  whileHover={{ scale: 1.08, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 hover:bg-white/20 hover:border-red-700/50 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`logo-${idx}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* arrows */}
            <button
              aria-label="Prev logos"
              onClick={() => scrollBy(logosRef, -1, 'logos')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              ‹
            </button>
            <button
              aria-label="Next logos"
              onClick={() => scrollBy(logosRef, 1, 'logos')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              ›
            </button>

            {/* dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-20 flex gap-2">
              {logos.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === activeLogos ? 'bg-white' : 'bg-white/30'}`}
                  onClick={() => jumpToIndex(logosRef, i)}
                  aria-label={`Go to logo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === BUSINESS CARD DESIGN SECTION WITH INFINITE CAROUSEL === */}
      <section
        className="relative py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gradient-to-b from-gray-950 via-red-950/10 to-gray-950"
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
              onTouchEnd={() => setTimeout(() => setPaused('cards', false), 600)}
              onScroll={() => handleScroll(cardsRef, setActiveCards, businessCards.length)}
            >
              {[...businessCards, ...businessCards].map((businessCard, idx) => (
                <motion.div
                  key={idx}
                  data-item
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group flex-shrink-0 overflow-hidden bg-gray-900/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 lg:w-[450px] lg:h-72 hover:border-red-700/50 transition-all duration-300"
                >
                  <img
                    src={businessCard}
                    alt={`business-card-${idx}`}
                    className="w-full h-full object-contain p-4 sm:p-6 md:p-8 transform transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>

            <button
              aria-label="Prev cards"
              onClick={() => scrollBy(cardsRef, -1, 'cards')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              ‹
            </button>
            <button
              aria-label="Next cards"
              onClick={() => scrollBy(cardsRef, 1, 'cards')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              ›
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-20 flex gap-2">
              {businessCards.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === activeCards ? 'bg-white' : 'bg-white/30'}`}
                  onClick={() => jumpToIndex(cardsRef, i)}
                  aria-label={`Go to card ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SOCIAL MEDIA COVER SECTION WITH INFINITE CAROUSEL === */}
      <section
        className="relative py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gradient-to-b from-gray-950 via-red-950/10 to-gray-950"
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
              onTouchEnd={() => setTimeout(() => setPaused('social', false), 600)}
              onScroll={() => handleScroll(socialRef, setActiveSocial, socialmediacovers.length)}
            >
              {[...socialmediacovers, ...socialmediacovers].map((socialmediacover, idx) => (
                <motion.div
                  key={idx}
                  data-item
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-shrink-0 overflow-hidden bg-gray-900/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center w-80 h-56 sm:w-96 sm:h-64 md:w-[450px] md:h-80 lg:w-[520px] lg:h-96 hover:border-red-700/50 transition-all duration-300"
                >
                  <img
                    src={socialmediacover}
                    alt={`social-media-cover-${idx}`}
                    className="w-full h-full object-cover rounded-lg p-3 sm:p-4"
                  />
                </motion.div>
              ))}
            </div>

            <button
              aria-label="Prev social"
              onClick={() => scrollBy(socialRef, -1, 'social')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              ‹
            </button>
            <button
              aria-label="Next social"
              onClick={() => scrollBy(socialRef, 1, 'social')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              ›
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-20 flex gap-2">
              {socialmediacovers.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === activeSocial ? 'bg-white' : 'bg-white/30'}`}
                  onClick={() => jumpToIndex(socialRef, i)}
                  aria-label={`Go to social cover ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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
              src={lastimage}
              alt="Branding"
              className="w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={whyChooseInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-red-700">LoginXol</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Partnering with us means getting more than just designs—you get creative excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-600/50 backdrop-blur-sm border border-red-900/20 rounded-xl p-6 group hover:border-red-700/50 transition-all duration-300"
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-red-900 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Design Process */}
      <section ref={processRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Design <span className="text-red-700">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined approach that transforms your vision into stunning visual reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcess.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                custom={index}
                className="relative"
              >
                <motion.div
                  className="bg-gray-600/50 backdrop-blur-sm border border-red-900/20 rounded-xl p-6 h-full hover:border-red-700/50 transition-all duration-300 group"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-5xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent mb-3 opacity-20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
                
                {index < designProcess.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-red-700 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={processInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-red-900 to-red-700 rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Palette className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Let's Create Together</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create stunning designs that elevate your brand and captivate your audience
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white text-red-900 font-semibold hover:bg-gray-100 px-8 py-6 text-lg group">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <WhatsAppChatbot />
     <Footer />

    </div>
  );
};

export default Graphic_Design;