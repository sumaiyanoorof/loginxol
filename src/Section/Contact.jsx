import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionTitle from "../Components/SectionTitle";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ------------------- EMAIL SEND FUNCTION -------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.loading("Sending message...", { id: "sending" });

    emailjs
      .send(
        "service_nbcevwr", // ✔ Your Service ID
        "template_950u3uh", // ✔ Your Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "4uR44oITRHYyrNqJT" // ✔ Your Public Key
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

  return (
    <div>
      <SectionTitle title="Contact Us" />

      <section className="min-h-screen flex items-center justify-center bg-gray-900">

        <Toaster position="top-right" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-6xl rounded-3xl bg-white/10 backdrop-blur-md border border-red-800/40 p-8 md:p-12 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* ------------------- LEFT CONTENT ------------------- */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center space-y-8 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Get in Touch with{" "}
              <span className="font-serif text-white">Login</span>
              <span className="text-red-700 font-serif">Xol</span>
            </h1>

            <p className="text-gray-200/80 font-medium max-w-md mx-auto md:mx-0">
              Let's create your next interactive and professional web experience.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <motion.div
                variants={fadeUp}
                className="flex items-center justify-center md:justify-start gap-4 bg-red-100/80 rounded-full px-6 py-3 hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m0 0l4-4m-4 4l4 4M16 12V16a4 4 0 01-8 0v-1"
                  />
                </svg>
                <span className="text-red-800 font-semibold select-text">
                  loginxol@gmail.com
                </span>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={fadeUp}
                className="flex items-center justify-center md:justify-start gap-4 bg-red-100/80 rounded-full px-6 py-3 hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10a7 7 0 0114 0v3a7 7 0 01-14 0v-3zm7-2v4"
                  />
                </svg>
                <span className="text-red-800 font-semibold select-text">
                  +92 300 1234567
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* ------------------- RIGHT CONTENT (FORM) ------------------- */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            className="md:col-span-2 bg-white/5 border border-red-700/50 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col space-y-6 backdrop-blur-md"
          >
            {/* NAME */}
            <motion.input
              variants={fadeUp}
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              onChange={handleChange}
              value={formData.name}
              className="border-2 border-red-800 rounded-xl px-5 py-3 placeholder-gray-500 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* EMAIL */}
            <motion.input
              variants={fadeUp}
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              onChange={handleChange}
              value={formData.email}
              className="border-2 border-red-800 rounded-xl px-5 py-3 placeholder-gray-500 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* PHONE */}
            <motion.input
              variants={fadeUp}
              type="text"
              name="phone"
              placeholder="Phone Number *"
              required
              onChange={handleChange}
              value={formData.phone}
              className="border-2 border-red-800 rounded-xl px-5 py-3 placeholder-gray-500 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* SUBJECT */}
            <motion.input
              variants={fadeUp}
              type="text"
              name="subject"
              placeholder="Subject *"
              required
              onChange={handleChange}
              value={formData.subject}
              className="border-2 border-red-800 rounded-xl px-5 py-3 placeholder-gray-500 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* MESSAGE */}
            <motion.textarea
              variants={fadeUp}
              rows={5}
              name="message"
              placeholder="Your Message *"
              required
              onChange={handleChange}
              value={formData.message}
              className="border-2 border-red-800 rounded-xl px-5 py-3 placeholder-gray-500 text-gray-200 font-medium resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* BUTTON */}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-red-800 text-white font-extrabold rounded-xl py-3 transition-all duration-300 hover:bg-red-700 shadow-md"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* ------------------- GOOGLE MAP ------------------- */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-3 overflow-hidden rounded-3xl border border-red-700/50 shadow-xl"
          >
            <div className="bg-gray-950/70 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Find Us in Karachi</h2>
              <p className="mt-1 text-sm text-gray-300">LoginXol, Karachi, Pakistan</p>
            </div>
            <iframe
              title="LoginXol location in Karachi, Pakistan"
              src="https://www.google.com/maps?q=Karachi%2C%20Pakistan&output=embed"
              className="block h-[320px] w-full sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
