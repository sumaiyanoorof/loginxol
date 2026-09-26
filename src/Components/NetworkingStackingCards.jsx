import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, CloudCog, ShieldCheck, Cable, Workflow, Database } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const deepServices = [
  {
    id: 1,
    icon: Server,
    title: 'Network Infrastructure Design',
    description:
      'We architect robust, scalable network infrastructures tailored to your business needs. Our designs incorporate best practices in routing, switching, and network segmentation to ensure optimal performance and security.',
    image:
      'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Custom topology design', 'Capacity planning', 'Future-proof architecture'],
    align: 'left',
  },
  {
    id: 2,
    icon: CloudCog,
    title: 'Cloud & Hybrid Solutions',
    description:
      'Seamlessly integrate your on-premises infrastructure with cloud platforms. We design and implement hybrid networks that provide flexibility, scalability, and cost optimization while maintaining security and compliance.',
    image:
      'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Multi-cloud connectivity', 'SD-WAN implementation', 'Cloud migration strategy'],
    align: 'right',
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'Network Security & Compliance',
    description:
      'Protect your network with enterprise-grade security solutions. From firewall configuration to intrusion detection systems, we implement comprehensive security measures that meet industry compliance standards.',
    image:
      'https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Zero-trust architecture', 'Penetration testing', 'Security audits'],
    align: 'left',
  },
  {
    id: 4,
    icon: Cable,
    title: 'Structured Cabling Systems',
    description:
      'Professional installation of structured cabling infrastructure that forms the backbone of your network. We ensure proper cable management, documentation, and adherence to industry standards for optimal performance.',
    image:
      'https://images.unsplash.com/photo-1601190719933-d496fef946c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Cat6/Cat6a installation', 'Fiber optic cabling', 'Cable certification'],
    align: 'right',
  },
  {
    id: 5,
    icon: Workflow,
    title: 'Network Optimization',
    description:
      'Maximize your network performance with our optimization services. We analyze traffic patterns, identify bottlenecks, and implement QoS policies to ensure critical applications receive the bandwidth they need.',
    image:
      'https://images.unsplash.com/photo-1663784294206-9b508132baf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Traffic analysis', 'QoS implementation', 'Bandwidth management'],
    align: 'left',
  },
  {
    id: 6,
    icon: Database,
    title: 'Network Management & Support',
    description:
      'Ongoing network management and support to keep your infrastructure running smoothly. Our team provides 24/7 monitoring, proactive maintenance, and rapid response to any network issues.',
    image:
      'https://images.unsplash.com/photo-1506399309177-3b43e99fead2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['24/7 monitoring', 'Incident response', 'Performance reporting'],
    align: 'right',
  },
];

const StackingCard = ({ service, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        scale,
        position: 'sticky',
        top: `${80 + index * 40}px`,
        zIndex: deepServices.length - index,
      }}
      className="mb-8"
    >
      <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1724] border border-[#dc143c]/20 rounded-2xl overflow-hidden shadow-2xl">
        <div
          className={`grid md:grid-cols-2 gap-8 p-8 md:p-12 ${
            service.align === 'right' ? 'md:grid-flow-dense' : ''
          }`}
        >
          {/* Image Section */}
          <div
            className={`relative h-64 md:h-96 rounded-xl overflow-hidden group ${
              service.align === 'right' ? 'md:col-start-2' : ''
            }`}
          >
            <ImageWithFallback
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-transparent to-transparent opacity-60" />

            {/* Floating Icon */}
            <div className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#dc143c] to-[#b81111] flex items-center justify-center shadow-lg">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`flex flex-col justify-center ${
              service.align === 'right' ? 'md:col-start-1 md:row-start-1' : ''
            }`}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#d1d5db] mb-4">
              {service.title}
            </h3>

            <p className="text-[#9ca3af] mb-6 leading-relaxed">{service.description}</p>

            <div className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#dc143c]" />
                  <span className="text-[#d1d5db]">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 20, 60, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="self-start px-6 py-3 bg-gradient-to-r from-[#dc143c] to-[#b81111] text-white rounded-lg"
            >
              Explore Solution
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NetworkingStackingCards = () => {
  return (
    <section className="py-20 md:py-32 bg-[#101828] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#dc143c] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#b81111] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#d1d5db] mb-4">
            Deep Dive into Our{' '}
            <span className="bg-gradient-to-r from-[#dc143c] to-[#b81111] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Comprehensive networking solutions designed for enterprise excellence
          </p>
        </motion.div>

        {/* Stacking Cards */}
        <div className="relative">
          {deepServices.map((service, index) => (
            <StackingCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkingStackingCards;
