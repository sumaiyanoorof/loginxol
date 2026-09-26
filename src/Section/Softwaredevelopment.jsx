import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "..src/figma/ImageWithFallback";
import { Button } from "../ui/button";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";

const Softwaredevelopment = () => {
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true });
  const { ref: portfolioRef, inView: portfolioInView } = useInView({ triggerOnce: true });

  const process = [
    {
      number: "01",
      title: "Planning & Strategy",
      description: "Understanding your needs, defining project goals, and outlining a roadmap for success."
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Crafting intuitive UI/UX experiences and building interactive prototypes."
    },
    {
      number: "03",
      title: "Development",
      description: "Turning ideas into functional software using modern technologies."
    },
    {
      number: "04",
      title: "Testing & Deployment",
      description: "Ensuring quality through testing and launching your product to the market."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[var(--dark-gray-dark)] text-white overflow-hidden">
      {/* Development Process */}
      <section
        ref={processRef}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[var(--dark-gray-dark)]/50"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[var(--red-accent)]">Process</span>
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
                  className="bg-[var(--dark-gray-light)]/50 backdrop-blur-sm border border-[var(--dark-red)]/20 rounded-xl p-6 h-full hover:border-[var(--red-accent)]/50 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-6xl font-bold bg-gradient-to-br from-[var(--red-accent)] to-[var(--dark-red)] bg-clip-text text-transparent mb-4 opacity-20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>

                {index < process.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[var(--red-accent)] to-transparent"
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

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={portfolioInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Recent <span className="text-[var(--red-accent)]">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing our expertise through successful project deliveries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Web Application",
                image:
                  "https://images.unsplash.com/photo-1646066490241-d386dbb63539?auto=format&fit=crop&w=1080&q=80"
              },
              {
                title: "Healthcare Management System",
                category: "Enterprise Solution",
                image:
                  "https://images.unsplash.com/photo-1743850765931-4a00e4809a5f?auto=format&fit=crop&w=1080&q=80"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                custom={index}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--dark-gray-dark)] via-[var(--dark-gray-dark)]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.9 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 bg-[var(--dark-red)] text-white text-sm rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <motion.div
                    className="flex items-center text-[var(--red-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[var(--dark-red)] to-[var(--red-accent)] rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]" />

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
              <Button className="bg-white text-[var(--dark-red)] hover:bg-gray-100 px-8 py-6 text-lg group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Softwaredevelopment;
