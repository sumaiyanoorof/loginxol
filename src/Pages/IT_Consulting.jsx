import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Lightbulb, 
  Server, 
  ShieldCheck, 
  Cloud,
  Network,
  TrendingUp,
  Users,
  Briefcase,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  LineChart,
  Cpu,
  Lock,
  Boxes,
  Building2,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Landmark
} from 'lucide-react';
import { Button } from '../ui/button';
import Footer from '../Section/Footer';
import WhatsAppChatbot from '../Components/whatsappChatbot';

const IT_Consulting = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const industriesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const metricsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const industriesInView = useInView(industriesRef, { once: true, margin: "-100px" });
  const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" });
  const metricsInView = useInView(metricsRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll();

  const consultingServices = [
    {
      icon: Lightbulb,
      title: "IT Strategy & Planning",
      description: "Develop comprehensive technology strategies aligned with your business objectives to drive growth and innovation.",
      features: ["Technology Roadmap", "Digital Transformation", "IT Governance", "Budget Optimization"],
      image: "https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBzdHJhdGVneXxlbnwxfHx8fDE3NjAxMjk1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Server,
      title: "Infrastructure Consulting",
      description: "Optimize your IT infrastructure for maximum performance, reliability, and cost-efficiency across all systems.",
      features: ["Server Management", "Network Design", "Data Center Solutions", "System Integration"],
      image: "https://images.unsplash.com/photo-1629058546243-4269cf2a29cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2MDEyNDk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Management",
      description: "Seamlessly transition to cloud platforms with expert guidance on architecture, migration, and optimization.",
      features: ["Cloud Strategy", "Migration Planning", "Multi-Cloud Solutions", "Cost Optimization"],
      image: "https://i.postimg.cc/TwbKdJdB/saas-concept-collage-(1).jpg"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Consultants",
      description: "Seasoned IT professionals with decades of combined industry experience."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of delivering measurable ROI and business transformation."
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Customized strategies designed specifically for your unique challenges."
    },
    {
      icon: Briefcase,
      title: "End-to-End Support",
      description: "Comprehensive services from strategy to implementation and beyond."
    }
  ];

  const consultingProcess = [
    {
      number: "01",
      title: "Assessment & Analysis",
      description: "Comprehensive evaluation of your current IT landscape, identifying gaps and opportunities.",
      icon: Target
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Creating detailed roadmaps and actionable plans aligned with business goals.",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "Hands-on assistance during execution, ensuring smooth transitions and adoption.",
      icon: Cpu
    },
    {
      number: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring, refinement, and scaling strategies for long-term success.",
      icon: TrendingUp
    }
  ];

  const industries = [
    {
      icon: Building2,
      name: "Finance & Banking",
      description: "Secure, compliant solutions for financial institutions"
    },
    {
      icon: HeartPulse,
      name: "Healthcare",
      description: "HIPAA-compliant systems for healthcare providers"
    },
    {
      icon: ShoppingCart,
      name: "E-Commerce",
      description: "Scalable infrastructure for online retailers"
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Digital learning platforms and administration systems"
    },
    {
      icon: Landmark,
      name: "Government",
      description: "Public sector solutions with enhanced security"
    },
    {
      icon: Boxes,
      name: "Manufacturing",
      description: "IoT and automation for production efficiency"
    }
  ];

  const successMetrics = [
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: CheckCircle2
    },
    {
      value: "40%",
      label: "Cost Reduction",
      icon: TrendingUp
    },
    {
      value: "99.9%",
      label: "System Uptime",
      icon: Server
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: Users
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
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -60, 0],
            y: [0, -40, 0],
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
        
        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-20 left-10 opacity-10"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Network className="w-16 h-16 text-red-700" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-10"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Server className="w-20 h-20 text-red-700" />
        </motion.div>

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
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-900 bg-clip-text text-transparent">
              With Expert IT Consulting
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Partner with LoginXol's seasoned IT consultants to optimize your technology infrastructure, 
            enhance security, and drive digital transformation that accelerates business growth.
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

      {/* Consulting Services Section */}
      <section ref={servicesRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Consulting <span className="text-red-700">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive IT consulting solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="space-y-20">
            {consultingServices.map((service, index) => (
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
              Why Choose <span className="text-red ">LoginXol</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your trusted partner for strategic IT consulting and digital transformation
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
                  className="w-14 h-14 bg-gradient-to-br from-red-800 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
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

      {/* Consulting Process */}
      <section ref={processRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Consulting <span className="text-red-700">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic approach to delivering measurable results and lasting impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingProcess.map((step, index) => (
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
                
                {index < consultingProcess.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-br from-red-700 to-transparent"
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
              <Lightbulb className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Free Consultation Available</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our expert consultants can help you achieve your technology goals 
              and drive measurable business results.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-red-900 text-[18px] font-semibold hover:bg-gray-100 px-8 py-6 text-lg group">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
             
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <WhatsAppChatbot />
      <Footer />

    </div>
  )
}

export default IT_Consulting;

