import { useState, useEffect } from 'react';
import HeroSection from '@/app/components/HeroSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import BankingSection from '@/app/components/BankingSection';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';

export default function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollDistance <= 0) {
        setShowFooter(false);
        return;
      }

      const revealPoint = Math.max(scrollDistance - window.innerHeight, 0);
      setShowFooter(window.scrollY >= revealPoint);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Navigation - Always on top */}
      <div className="relative z-[100]">
        <Navigation />
      </div>
      
      {/* Fixed Background - Switches between HeroSection and Footer based on scroll */}
      <div className="fixed inset-0 z-0 flex flex-col">
        {showFooter ? <Footer /> : <HeroSection />}
      </div>

      {/* Scrollable Content - Starts below viewport, scrolls up over hero */}
      <div className="relative z-10" style={{ marginTop: '100vh' }}>
        <PortfolioSection />
        <BankingSection />
        <CaseStudy />
        {/* Spacer to reveal the footer on the last page */}
        <div className="h-[618px] pointer-events-none"></div>
      </div>
    </div>
  );
}
