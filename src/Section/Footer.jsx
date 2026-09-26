import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "../Components/Logo";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("🎉 Thank you for subscribing!");
    setEmail("");
  };

  const footerLinks = {
    services: [
      { label: "Software Development", href: "#software-development" },
      { label: "Web Design", href: "#website-design" },
      { label: "Digital Marketing", href: "#digital-marketing" },
      { label: "IT Consulting", href: "#it-consulting" },
      { label: "Networking", href: "#networking" },
    ],
    company: [
      { label: "Homepage", href: "#Homepage" },
      { label: "Modules", href: "#modules" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: BsWhatsapp, href: "#", label: "whatsApp" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#101828] border-t border-red-800/80 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#dc143c] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b81111] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Logo />
              <p className="text-[#9ca3af] mb-6 max-w-sm">
                Empowering businesses with cutting-edge IT solutions, innovative software, and reliable networking infrastructure.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#9ca3af]">
                  <Phone className="w-4 h-4 text-[#dc143c]" />
                  <span className="text-sm">+92 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-[#9ca3af]">
                  <Mail className="w-4 h-4 text-[#dc143c]" />
                  <span className="text-sm">info@loginxol.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#9ca3af]">
                  <MapPin className="w-4 h-4 text-[#dc143c]" />
                  <span className="text-sm">Karachi, Pakistan</span>
                </div>

                <div className="flex mt-10 gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a2332] to-[#0f1724] border border-red-800/60 flex items-center justify-center text-[#9ca3af] hover:text-[#dc143c] hover:border-[#dc143c]/50 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
              </div>
            </motion.div>
          </div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12"
          >
            <h4 className="text-[#d1d5db] text-2xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#9ca3af] hover:text-[#dc143c] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h4 className="text-[#d1d5db] text-2xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#9ca3af] hover:text-[#dc143c] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          
         {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-md -ml-20 mx-auto text-center mt-10"
        >
          <h2 className="text-2xl font-bold text-white mb-3">Subscribe </h2>
          <p className="text-[#9ca3af] mb-6 text-sm">
            Get the latest updates, articles, and insights directly in your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[250px] border border-gray-600 bg-transparent text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-800/90 to-red-700/90  hover:bg-[#b81111] text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Subscribe
            </button>
          </form>

          {message && <p className="text-sm text-gray-300 mt-3">{message}</p>}
        </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 mt-10 border-t border-[#dc143c]/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-[#9ca3af] mx-auto text-sm">© {currentYear} LoginXol. All rights reserved.</div>


        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
