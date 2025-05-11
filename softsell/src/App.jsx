import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/AiChatWidget';
const App = () => {
  return (
    <div>
      <ThemeToggle />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget/>
    </div>
  );
};

export default App;