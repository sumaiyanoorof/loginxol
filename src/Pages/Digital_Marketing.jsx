import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  TrendingUp, 
  Share2, 
  Mail, 
  Search,
  BarChart3,
  Target,
  Megaphone,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  Clock
} from 'lucide-react';
import { Button } from '../ui/button';
import Footer from '../Section/Footer';
import WhatsAppChatbot from '../Components/whatsappChatbot';

const Digital_Marketing = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const whyChooseRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" });

  const marketingServices = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major social platforms with strategic content and campaigns.",
      features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Analytics & Reporting"],
      image: "https://i.postimg.cc/mDvVDBxC/9127284.jpg"
    },
    {
      icon: Search,
      title: "SEO & SEM",
      description: "Boost your online visibility and drive qualified traffic through expert search engine optimization and marketing strategies.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "PPC Campaigns"],
      image: "https://i.postimg.cc/4dFJr29h/closeup-caucasian-man-drinking-coffee-with-computer-screen-showing-marketing-strategy.jpg"
    },
    {
      icon: Megaphone,
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives meaningful engagement across all channels.",
      features: ["Blog Writing", "Video Production", "Infographics", "E-books & Guides"],
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYwMTkwNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Mail,
      title: "Email & SMS Marketing",
      description: "Nurture leads and convert customers with personalized email campaigns that deliver results and drive ROI.",
      features: ["Campaign Design", "Automation", "Segmentation", "A/B Testing"],
      image: "https://i.postimg.cc/prhn7FpQ/message-online-chat-social-text-concept.jpg"
    }
  ];

  const whyChooseUs = [
    {
      icon: BarChart3,
      title: "Data-Driven Approach",
      description: "Every strategy backed by analytics and measurable KPIs for optimal performance."
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "See tangible improvements in traffic, engagement, and conversions quickly."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Certified marketing professionals with proven success across sectors."
    },
    {
      icon: Clock,
      title: "24/7 Campaign Monitoring",
      description: "Continuous optimization to ensure maximum ROI from every campaign."
    }
  ];

  const marketingProcess = [
    {
      number: "01",
      title: "Audience Research",
      description: "Deep dive into your target market, competitors, and industry trends.",
      icon: Target
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Create comprehensive marketing plans aligned with your business goals.",
      icon: TrendingUp
    },
    {
      number: "03",
      title: "Campaign Execution",
      description: "Launch multi-channel campaigns with engaging content and creative assets.",
      icon: Megaphone
    },
    {
      number: "04",
      title: "Analytics & Optimization",
      description: "Monitor performance metrics and refine strategies for continuous improvement.",
      icon: BarChart3
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

return (
    <div id="digital-marketing" className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, 60, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
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
          <motion.div variants={itemVariants} className="mb-6">
            
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Amplify Your Brand
            <br />
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-900 bg-clip-text text-transparent">
              With Digital Marketing
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Strategic digital marketing campaigns that drive traffic, boost engagement, and convert leads into loyal customers. 
            Let data and creativity fuel your growth.
          </motion.p>


        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
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

      {/* Marketing Services Section */}
      <section ref={servicesRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Marketing <span className="text-red-700">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to elevate your online presence
            </p>
          </motion.div>

          <div className="space-y-20">
            {marketingServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <motion.div
                  className="flex-1 relative group"
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <WhatsAppChatbot />
     <Footer />
  </div>
 );
  };  

export default Digital_Marketing;
