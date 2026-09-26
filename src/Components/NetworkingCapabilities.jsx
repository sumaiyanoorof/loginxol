import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, Gauge, Globe, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    id: 1,
    icon: Zap,
    title: 'High Performance',
    description: 'Ultra-fast connectivity with minimal latency for mission-critical operations',
    color: 'from-[#dc143c] to-[#b81111]',
  },
  {
    id: 2,
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Multi-layered security protocols to protect your data and infrastructure',
    color: 'from-[#b81111] to-[#8B0000]',
  },
  {
    id: 3,
    icon: Gauge,
    title: '99.9% Uptime',
    description: 'Reliable network infrastructure with redundancy and failover systems',
    color: 'from-[#dc143c] to-[#A52A2A]',
  },
  {
    id: 4,
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect seamlessly across locations with our worldwide network solutions',
    color: 'from-[#A52A2A] to-[#8B0000]',
  },
];

const NetworkingCapabilities = () => {
  return (
    <section className="py-20 md:py-32 bg-[#101828] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #dc143c 1px, transparent 1px),
                             linear-gradient(to bottom, #dc143c 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#d1d5db] mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#dc143c] to-[#b81111] bg-clip-text text-transparent">
              LoginXol
            </span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Industry-leading capabilities that set us apart
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-[#1a2332] to-[#0f1724] border border-[#dc143c]/20 rounded-2xl p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dc143c]/0 to-[#dc143c]/0 group-hover:from-[#dc143c]/10 group-hover:to-[#b81111]/10 transition-all duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#dc143c] to-[#b81111] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl text-[#d1d5db] mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-[#9ca3af] mb-6">
                      {capability.description}
                    </p>

                    <button className="flex items-center gap-2 text-[#dc143c] group-hover:gap-3 transition-all">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Networks Deployed' },
            { value: '99.9%', label: 'Average Uptime' },
            { value: '24/7', label: 'Support Available' },
            { value: '15+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#dc143c] to-[#b81111] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-[#9ca3af]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkingCapabilities;
