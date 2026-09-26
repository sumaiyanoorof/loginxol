import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Components/Loader";
import Navigation from "./Components/Navigation";
import Homepage from "./Pages/Homepage";
import Module from "./Pages/Module";
import IT_Consulting from "./Pages/IT_Consulting";
import Graphic_Design from "./Pages/Graphic_Design";
import Website_Design from "./Pages/Website_Design";
import Software_Development from "./Pages/Software_Development";
import Digital_Marketing from "./Pages/Digital_Marketing";
import Networking from "./Pages/Networking";
import Contact from "./Pages/Contact";
import Footer from "./Section/Footer";
import WhatsAppChatbot from "./Components/whatsappChatbot";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Disable scroll while loading
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
  }, [isLoading]);

  // Loader complete callback
  const handleLoadingComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // smooth transition delay
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="min-h-screen bg-gray-900 text-white overflow-x-hidden"
          >
            <BrowserRouter>
              {/* Navigation visible after loading */}
              <Navigation />
            
              <Routes>
                <Route path="/" element={<Homepage />} />
               <Route path="/modules" element={<Module />} />
               <Route path="/It-Consulting" element={<IT_Consulting />} />
               <Route path="/software-Development" element={<Software_Development />} />
               <Route path="/website-design" element={<Website_Design />} />
               <Route path="/graphic-design" element={<Graphic_Design />} />
               <Route path="/digital-marketing" element={<Digital_Marketing />} />
               <Route path="/networking" element={<Networking />} />
               <Route path="/contact" element={<Contact />} />
              </Routes>

             
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
