import React from 'react'
import NetworkingHero from '../Components/NetworkingHero';
import NetworkingCapabilities from '../Components/NetworkingCapabilities';
import NetworkingStackingCards from '../Components/NetworkingStackingCards';
import Footer from '../Section/Footer';
import WhatsAppChatbot from '../Components/whatsappChatbot';

const Networking = () => {
  return (
    <div>
      <NetworkingHero />
      <NetworkingCapabilities />
      <NetworkingStackingCards />
      <WhatsAppChatbot />
      <Footer />
    </div>
  )
}

export default Networking;
