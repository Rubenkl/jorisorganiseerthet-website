
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WatIkDoeSection from '@/components/WatIkDoeSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WatIkDoeSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <FloatingButtons />
    </div>
  );
};

export default Index;
