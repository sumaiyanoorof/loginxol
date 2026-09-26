// 🚀 FULL UPDATED CODE WITH INDIVIDUAL SERVICE LINKS
// This file now includes React Router <Link> buttons for each service.

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SectionTitle from '../Components/SectionTitle';
import { Link } from 'react-router-dom';

// 🔹 Stacking Card Component
const StackingCard = ({
  title,
  description,
  image,
  link,
  index,
  total
}) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 0.98, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 0.7, 1]);

  const stackOffset = index * 40;

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, y, opacity, top: `${stackOffset}px`, zIndex: total - index }}
      className="sticky"
    >
      <motion.div
        className="relative backdrop-blur-xl border border-white/8 bg-gradient-to-br from-gray-900/80 via-red-700/55 to-gray-900 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden shadow-2xl"
        whileHover={{ borderColor: 'rgba(185, 28, 28, 0.5)', boxShadow: '0 25px 50px -12px rgba(185, 28, 28, 0.25)' }}
        transition={{ duration: 0.3 }}
      >
        {/* Card Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6">
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h3>

            {description && (
              <motion.p
                className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {description}
              </motion.p>
            )}

            {/* 🔗 Button with Link to Service Page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to={link}>
                <motion.button
                  className="group bg-white text-red-800 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-red-900/50 hover:bg-gray-700/60 flex items-center gap-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="flex-1 w-full lg:w-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="relative group" whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 group-hover:border-red-700/50">
                <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover aspect-video" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🔹 Main Component with All Services
const PremiumStackingCards = () => {
  const projects = [
    {
      title: 'Software Development',
      link: '/software-development',
      description: 'Transform your ideas into powerful digital products... ',
      image: 'https://i.postimg.cc/7hfbg9N0/person-working-html-computer-(1).jpg'
    },
    {
      title: 'IT Consulting',
      link: '/it-consulting',
      description: 'Unlock your company’s full potential with tailored IT consulting...',
      image: 'https://i.postimg.cc/wTYkQ4rV/IT-consulting.jpg'
    },
    {
      title: 'Website Design',
      link:'/website-design',
      description: 'Transform your online presence with stunning website designs...',
      image: 'https://i.postimg.cc/htsWBdx4/ui-ux-representations-with-laptop-(1).jpg'
    },
    {
      title: 'Graphic Design',
      link: '/graphic-design',
      description: 'We craft visually compelling designs that elevate your brand...',
      image: 'https://i.postimg.cc/bwDkXQ4Q/video-editor-content-creator-filming-tutorial-about-professionally-editing-footage.jpg'
    },
    {
      title: 'Digital Marketing',
      link: '/digital-marketing',
      description: 'We create data-driven digital marketing campaigns...',
      image: 'https://i.postimg.cc/023KCzrJ/Digital-Marketing.jpg'
    },
    {
      title: 'Networking',
      link: '/networking',
      description: 'We deliver secure, high-performance networking solutions...',
      image: 'https://i.postimg.cc/0yGqjmqk/networking.jpg'
    }
  ];

  return (
    <div className="relative -mb-80 overflow-hidden">
      {/* HEADER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle title="Our Premium Services" />
      </section>

      {/* STACK CARDS */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <StackingCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link} // 🔗 added link
              index={index}
              total={projects.length}
            />
          ))}
        </div>

        <div className="h-96" />
      </section>
    </div>
  );
};

export default PremiumStackingCards;