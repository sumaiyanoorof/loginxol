import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Monitor,
  Smartphone,
  Globe,
  Zap,
  ShoppingCart,
  Paintbrush,
  Code2,
  Layout,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Search,
  TrendingUp,
  Users,
  Award,
  Rocket,
  Target,
  Layers,
  Server
} from 'lucide-react';
import { Button } from '../ui/button';
import Footer from '../Section/Footer';
import WhatsAppChatbot from '../Components/whatsappChatbot';



const Website_Design = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const portfolioRef = useRef(null);
  const techRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });

  const websiteServices = [
    {
      icon: Monitor,
      title: "Custom Website Design",
      description: "Tailored websites built from scratch to perfectly match your brand identity and business goals.",
      features: ["Unique Design", "Brand Integration", "Custom Features", "Scalable Architecture"],
      image: "https://i.postimg.cc/V5PP20K4/representation-user-experience-interface-design.jpg"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that convert visitors into customers with seamless shopping experiences.",
      features: ["Payment Integration", "Inventory Management", "Shopping Cart", "Product Catalogs"],
      image: "https://i.postimg.cc/8zqzNssn/ui-ux-representations-with-laptop.jpg"
    },
    {
      icon: Rocket,
      title: "Landing Page Design",
      description: "High-converting landing pages optimized to capture leads and drive specific business objectives.",
      features: ["Conversion Focused", "A/B Testing Ready", "Lead Capture Forms", "Analytics Integration"],
      image: "https://i.postimg.cc/W3kPDNy7/8017780.jpg"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first websites that deliver exceptional experiences across all devices and screen sizes.",
      features: ["Mobile Optimized", "Cross-Browser Compatible", "Touch-Friendly", "Fast Loading"],
      image: "https://i.postimg.cc/vTMh4WZZ/SEO-image.png"
    }
  ];

  const keyFeatures = [
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built with search engine optimization best practices to improve your visibility and ranking."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensuring quick load times and smooth user experiences."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with your users' needs and behaviors in mind."
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in web design with multiple industry awards and accolades."
    }
  ];

  const designProcess = [
    {
      number: "01",
      title: "Research & Strategy",
      description: "Deep dive into your business, competitors, and target audience to create a winning strategy.",
      icon: Target
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and high-fidelity designs with interactive prototypes for review.",
      icon: Paintbrush
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Building your website with clean code and rigorous testing across all platforms.",
      icon: Code2
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description: "Deploying your site and continuously optimizing for performance and conversions.",
      icon: Rocket
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
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-red-700/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
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
            Build Your Digital
            <br />
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-900 bg-clip-text text-transparent">
              Presence
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We design and develop stunning, high-performance websites that engage your audience, 
            strengthen your brand, and drive measurable business results.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
          </motion.div>

         
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
              Website Design <span className="text-red-700">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive web design solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="space-y-20">
            {websiteServices.map((service, index) => (
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

         {/* Key Features Section */}
      <section ref={featuresRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Makes Us <span className="text-red-700">Different</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Excellence in every aspect of web design and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
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
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
              A systematic approach to creating exceptional websites
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
                  className="bg-gray-600/50 backdrop-blur-sm border border-gray-900/20 rounded-xl p-6 h-full hover:border-red-700/50 transition-all duration-300 group"
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
              <Globe className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Let's Build Something Amazing</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Website?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to create a powerful online presence that drives growth and achieves your business goals
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-red-800 text-[18px] font-semibold hover:bg-gray-100 px-8 py-6 text-lg group">
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <WhatsAppChatbot />
      <Footer />
     </div>
    ); 
  };


export default Website_Design;
