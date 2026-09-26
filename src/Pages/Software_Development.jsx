import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Code2, 
  Laptop, 
  Rocket, 
  Shield, 
  Users, 
  Zap, 
  Database, 
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '../ui/button';
import Footer from '../Section/Footer';
import WhatsAppChatbot from '../Components/whatsappChatbot';

const SoftwareDevelopment = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const portfolioRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored solutions designed specifically for your business needs, from concept to deployment.",
      image: "https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzYwMTE1MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Laptop,
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      image: "https://images.unsplash.com/photo-1598978028953-799807c097b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXJzJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDExNTA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Database,
      title: "Enterprise Solutions",
      description: "Scalable enterprise-grade systems that grow with your business and handle complex workflows.",
      image: "https://i.postimg.cc/KYxp2Z7g/ERP-image.jpg"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud-native applications and migration services for maximum performance and reliability.",
      image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTE1MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: "Agile Development",
      description: "Fast iterations and continuous delivery to keep your project on track."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures to protect your data and users."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers with proven track records."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized code for lightning-fast applications."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed roadmap for success."
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Crafting elegant solutions with scalable architecture and modern design."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Building robust software with rigorous testing at every stage."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Smooth launch with ongoing support and maintenance."
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
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-800 to-gray-950">
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

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center -mt-24 justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-transparent">
              Through Software
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We craft cutting-edge software solutions that drive innovation, streamline operations, 
            and accelerate your digital transformation journey.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 -mb-32  justify-center items-center"
          >
            
          </motion.div>

        </motion.div>
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

      {/* Features Section */}
      <section ref={featuresRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-white">
              Why Choose <span className="text-red-700">LoginXol</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl  mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/30 backdrop-blur-sm border border-red-800/20 rounded-xl p-6 group hover:border-red-700/50 transition-all duration-300"
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-red-800 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
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

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-red-700">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive software development services tailored to your needs
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <motion.div
                  className="flex-1 relative group"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-red-800 to-red-700 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">{service.description}</p>
                
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Development Process */}
      <section ref={processRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-red-700">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures project success from start to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                custom={index}
                className="relative"
              >
                <motion.div
                  className="bg-gray-800/30 backdrop-blur-sm border border-red-800/60 rounded-xl p-6 h-full hover:border-red-700/50 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-6xl font-bold bg-gradient-to-br from-red-700 to-red-800 bg-clip-text text-transparent mb-4 opacity-20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
                
                {index < process.length - 1 && (
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
      <section className="relative pt-20  sm:px-6 ">
        <motion.div
          className="max-w-4xl mb-20 mx-auto text-center bg-gradient-to-r from-red-800 to-red-700 rounded-3xl p-12 relative overflow-hidden"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into powerful software solutions
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-red-800 font-semibold hover:bg-gray-100 px-8 py-6 text-lg group" >
                Contact Us <a href="/contact"></a>
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

export default SoftwareDevelopment;


