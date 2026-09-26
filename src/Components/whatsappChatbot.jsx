import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  Clock,
  CheckCheck,
  User,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const WHATSAPP_NUMBER = "+923052506896";
  const BUSINESS_NAME = "LoginXol";

  const quickReplies = [
    {
      id: "1",
      text: "💼 Our Services",
      response:
        "We offer:\n\n✅ Software Development\n✅ Graphic Design\n✅ Digital Marketing\n✅ Website Design\n✅ Network Solutions\n✅ IT Consulting\n\nWhich service are you interested in?",
    },
    {
      id: "2",
      text: "💰 Pricing Information",
      response:
        "Our pricing varies based on project scope and requirements. We offer competitive rates and flexible packages.\n\nWould you like to schedule a free consultation?",
    },
    {
      id: "3",
      text: "📞 Contact Us",
      response: `📧 Email: info@loginxol.com\n📱 Phone: ${WHATSAPP_NUMBER}\n⏰ Hours: Mon-Fri, 9 AM - 6 PM\n\nHow can we help you today?`,
    },
    {
      id: "4",
      text: "🕐 Business Hours",
      response:
        "We are available:\n\n🗓️ Monday - Friday: 9:00 AM - 6:00 PM\n🗓️ Saturday: 10:00 AM - 4:00 PM\n🗓️ Sunday: Closed\n\nWe typically respond within 1 hour during business hours!",
    },
  ];

  const getAutomatedResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.match(/\b(hi|hello|hey|greetings)\b/)) {
      return `Hello! 👋 Welcome to ${BUSINESS_NAME}!\n\nI'm your virtual assistant. How can I help you today?`;
    }

    if (message.match(/\b(service|services|what do you do)\b/)) {
      return "We provide comprehensive IT solutions:\n\n🔹 Software Development\n🔹 Graphic Design\n🔹 Digital Marketing\n🔹 Website Design\n🔹 Mobile Apps\n🔹 Network Solutions";
    }

    if (message.match(/\b(software|development|app)\b/)) {
      return "Our Software Development services include:\n\n✨ Custom Software\n✨ Web Apps\n✨ Mobile Apps\n✨ API Development";
    }

    if (message.match(/\b(design|logo|branding|ui)\b/)) {
      return "Our Design services include:\n\n🎨 Logo Design\n🎨 Branding\n🎨 UI/UX Design\n🎨 Social Media Graphics";
    }

    if (message.match(/\b(marketing|seo|social media)\b/)) {
      return "Our Digital Marketing includes:\n\n📈 SEO\n📈 Social Media Marketing\n📈 PPC\n📈 Email Campaigns";
    }

    if (message.match(/\b(website|web design)\b/)) {
      return "Our Web Services:\n\n🌐 Web Design\n🌐 E-commerce\n🌐 CMS Development\n🌐 Optimization & Security";
    }

    if (message.match(/\b(price|pricing|cost|quote)\b/)) {
      return "💰 Pricing depends on project scope.\n\nWould you like a FREE quote?";
    }

    if (message.match(/\b(contact|call|email|phone)\b/)) {
      return `📧 info@loginxol.com\n📱 ${WHATSAPP_NUMBER}\n⏰ Mon-Fri 9 AM - 6 PM`;
    }

    if (message.match(/\b(location|address|office)\b/)) {
      return "📍 LoginXol — Pakistan\nWe also provide global remote IT services.";
    }

    if (message.match(/\b(portfolio|projects|work)\b/)) {
      return "🎯 We have completed 500+ successful IT projects!";
    }

    if (message.match(/\b(team|about|company)\b/)) {
      return `About ${BUSINESS_NAME}:\n\n🏢 15+ years of experience\n🌍 Global clients\n🏆 Award-winning solutions`;
    }

    if (message.match(/\b(help|support|assist)\b/)) {
      return "I'm here to help! 😊 Ask anything about our services.";
    }

    if (message.match(/\b(meeting|consultation|appointment)\b/)) {
      return "📅 FREE Consultation!\n\nShare your preferred date and time.";
    }

    if (message.match(/\b(thank|thanks)\b/)) {
      return "You're welcome! 😊 How else can I help?";
    }

    return `Thanks for your message! 🙏\nI'm still learning.\n\nYou can also chat with a real agent on WhatsApp 👇`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: Date.now().toString(),
        text: `Welcome to ${BUSINESS_NAME}! 👋\nHow can I help you today?`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleSendMessage = async (messageText) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend) return;

    const userMessage = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    const botMessage = {
      id: (Date.now() + 1).toString(),
      text: getAutomatedResponse(textToSend),
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleQuickReply = async (reply) => {
    const userMessage = {
      id: Date.now().toString(),
      text: reply.text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const botMessage = {
      id: (Date.now() + 1).toString(),
      text: reply.response,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hi! I'm interested in your services.");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(
      /\+/g,
      ""
    )}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={() => setIsOpen(true)}
              className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-4 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              exit={{ scale: 0 }}
            >
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
              <BsWhatsapp className="w-7 h-7 relative z-10" />

              <motion.span
                className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                1
              </motion.span>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-green-600 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{BUSINESS_NAME}</h3>
                  <p className="text-xs text-green-100">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-700 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-[#0a0a0a] p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-green-600 text-white rounded-br-none"
                        : "bg-gray-800 text-gray-100 rounded-bl-none border border-gray-700"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {message.text}
                    </p>
                    <div
                      className={`flex items-center gap-1 mt-1 ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <span className="text-xs opacity-70">
                        {formatTime(message.timestamp)}
                      </span>
                      {message.sender === "user" && (
                        <CheckCheck className="w-3 h-3 text-green-200" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: delay,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="bg-gray-900 p-3 border-t border-gray-700">
                <p className="text-xs text-gray-400 mb-2">Quick replies:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.map((reply) => (
                    <motion.button
                      key={reply.id}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-gray-800 hover:bg-gray-700 text-white text-xs py-2 px-3 rounded-lg border border-gray-600 text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {reply.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp Button */}
            <motion.button
              onClick={openWhatsApp}
              className="mx-4 mb-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              Chat on WhatsApp
            </motion.button>

            {/* Input */}
            <div className="bg-gray-900 p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleSendMessage()
                  }
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 text-sm"
                />

                <motion.button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-700 text-white rounded-lg p-2"
                  whileHover={{ scale: inputValue.trim() ? 1.05 : 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChatbot;
