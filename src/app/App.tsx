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
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      
      setShowFooter(scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
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
        {/* Spacer equal to footer height to reveal it completely when scrolled to bottom */}
        {/* Approximate footer height: top section ~280px + bottom section ~320px = ~600px */}
        <div className="h-[618px] pointer-events-none"></div>
      </div>
    </div>
  );
}
