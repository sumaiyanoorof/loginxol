import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Footer from "../Section/Footer";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import WhatsAppChatbot from "../Components/whatsappChatbot";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 📩 EMAIL SEND FUNCTIONALITY
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.loading("Sending message...", { id: "sending" });

    emailjs
      .send(
        "service_yo1n7nd", // ← Service ID (unchanged)
        "template_b71e04s", // ← Template ID (unchanged)
          {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        
        "4uR44oITRHYyrNqJT" // ← Public Key (unchanged)
      )
      .then(() => {
        toast.success("Message Sent Successfully!", { id: "sending" });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message. Try again!", { id: "sending" });
      });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const inputFocus = {
    outline: "none",
    boxShadow: "0 6px 18px rgba(220, 38, 38, 0.08)",
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-gray-950 via-red-800/20 to-gray-950 text-white pt-16 sm:pt-20 lg:pt-24"
    >
      <Toaster position="top-right" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Get in <span className="text-red-700">Touch</span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
            variants={fadeUp}
          >
            We'd love to hear from you! Contact us through the options below or send us a message directly and we’ll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        {/* CONTACT INFO CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 my-10 sm:my-16"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            {
              icon: <Phone className="w-5 h-5 text-red-400 hover:rotate-180 duration-500" />,
              title: "Phone",
              line1: "+92 300 1234567",
              line2: "Mon–Fri 9am–6pm",
            },
            {
              icon: <Mail className="w-5 h-5 text-green-400 hover:rotate-180 duration-500" />,
              title: "Email",
              line1: "info@loginxol.com",
              line2: "support@loginxol.com",
            },
            {
              icon: <MapPin className="w-5 h-5 text-purple-400 hover:rotate-180 duration-500" />,
              title: "Office",
              line1: "Karachi, Pakistan",
              line2: "Visit us anytime",
            },
            {
              icon: <Clock className="w-5 h-5 text-orange-400 hover:rotate-180 duration-500" />,
              title: "Working Hours",
              line1: "Mon–Fri: 9:00–18:00",
              line2: "Sat–Sun: Closed",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}

              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-transparent rounded-2xl p-5 sm:p-6  border border-red-900/40 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-sm md:text-base">{item.line1}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{item.line2}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FORM + MAP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-20"
        >
          {/* CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-transparent rounded-2xl p-6 sm:p-8 md:p-10 border border-red-900/40 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.05 } }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-red-600 mb-6">
              Send Us a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm md:text-sm mb-2 text-gray-300">Your Name *</label>
                <motion.input
                  whileFocus={inputFocus}
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 text-sm sm:text-base focus:border-red-500 transition"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm md:text-sm mb-2 text-gray-300">Email *</label>
                <motion.input
                  whileFocus={inputFocus}
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 text-sm sm:text-base focus:border-red-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm md:text-sm mb-2 text-gray-300">Phone</label>
                <motion.input
                  whileFocus={inputFocus}
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 text-sm sm:text-base focus:border-red-500 transition"
                  placeholder="Phone Number"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs sm:text-sm md:text-sm mb-2 text-gray-300">Subject *</label>
                <motion.input
                  whileFocus={inputFocus}
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 text-sm sm:text-base focus:border-red-500 transition"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="block text-xs sm:text-sm md:text-sm mb-2 text-gray-300">Message *</label>
              <motion.textarea
                whileFocus={inputFocus}
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 text-sm sm:text-base focus:border-red-500 transition resize-none"
                placeholder="Write your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-6 w-full bg-red-600 hover:bg-red-700 transition-all text-white font-semibold py-3 rounded-lg text-sm sm:text-base"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* GOOGLE MAP */}
          <motion.div
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.886508653356!2d67.00113697456433!3d24.802688948619637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd3a642af63%3A0xa1ab6b8a3772c9b6!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696172469942!5m2!1sen!2s"
              width="100%"
              height="100%"
              loading="lazy"
              className="rounded-2xl grayscale hover:grayscale-0 transition-all min-h-[320px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px]"
              title="LoginXol Location"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>

      <WhatsAppChatbot />
      <Footer />
    </section>
  );
};

export default Contact;
