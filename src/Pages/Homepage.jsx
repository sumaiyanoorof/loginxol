import React from 'react';
import HeroCarousel from '../Components/HeroCarousel';
import About from '../Components/About';
import Services from '../Section/Services';
import Goals from '../Section/Goals';
import Module from '../Section/Module';
import ClientsSection from '../Components/ClientSection';
import Contact from '../Section/Contact';
import Image from '../Section/Image';
import Footer from '../Section/Footer';
import WhatsAppChatbot from '../Components/whatsappChatbot';

const Homepage = () => {
  return (
    <div id="home">
      <HeroCarousel />
      <About />
      <Services />
      <Goals />
      <Module />
      <ClientsSection />
      <Contact />
      <Image />
      <WhatsAppChatbot />
      <Footer />
    </div>
  )
}

export default Homepage;
