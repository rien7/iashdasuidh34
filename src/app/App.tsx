import { useState, useEffect, type ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeroSection from '@/app/components/HeroSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import BankingSection from '@/app/components/BankingSection';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import HighlightsSection from '@/app/components/HighlightsSection';
import ArchitectureDiagram from '@/app/components/ArchitectureDiagram';
import IndustryHonors from '@/app/components/IndustryHonors';
import IndustryAwards from '@/app/components/IndustryAwards';
import FeatureShowcase from '@/app/components/FeatureShowcase';
import ShowcaseCarousel from '@/app/components/ShowcaseCarousel';
import CompanyTimeline from '@/app/components/CompanyTimeline';
import huojianqiangBanner from '@/assets/banner/huojianqiang-banner.webp';
import qiankunquanBanner from '@/assets/banner/qiankunquan-banner.webp';
import wenwoBanner from '@/assets/banner/wenwo-banner.webp';
import xiaofeilunBanner from '@/assets/banner/xiaofeilun-banner.webp';
import aboutBanner from '@/assets/banner/about-banner-7.11.png';
import { Activity } from '@/app/components/Activity';

const FOOTER_REVEAL_HEIGHT = 424;

function useShowFooter(revealHeight = FOOTER_REVEAL_HEIGHT) {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const distanceToBottom = scrollHeight - scrollPosition;

      setShowFooter(distanceToBottom <= revealHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [revealHeight]);

  return showFooter;
}

function FooterSpacer() {
  return (
    <div
      className="pointer-events-none"
      aria-hidden="true"
      style={{ height: `${FOOTER_REVEAL_HEIGHT}px` }}
    ></div>
  );
}

function FooterLayer() {
  return (
    <div className="fixed inset-0 z-0 flex flex-col" >
      <Footer />
    </div>
  );
}

function HomePage() {
  const showFooter = useShowFooter();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const previousRootSnap = root.style.scrollSnapType;
    const previousBodySnap = body.style.scrollSnapType;
    const previousRootBehavior = root.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    root.style.scrollSnapType = 'y mandatory';
    body.style.scrollSnapType = 'y mandatory';
    root.style.scrollBehavior = 'auto';
    body.style.scrollBehavior = 'auto';

    return () => {
      root.style.scrollSnapType = previousRootSnap;
      body.style.scrollSnapType = previousBodySnap;
      root.style.scrollBehavior = previousRootBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    };
  }, []);

  return (
    <div className="w-full">
      <div className="fixed inset-0 z-0 flex flex-col">
        {!showFooter && <HeroSection />}
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="h-screen" aria-hidden="true"></div>
        <section>
          <PortfolioSection />
        </section>
        <section>
          <BankingSection />
        </section>
        <section>
          <ArchitectureDiagram />
        </section>
        <section>
          <CaseStudy />
        </section>
        <section>
          <IndustryHonors />
        </section>
        <section className="bg-[#0A0E27]">
          <IndustryAwards />
        </section>
        <FooterSpacer />
      </div>

      {showFooter && <FooterLayer />}
    </div>
  );
}

interface ContentPageProps {
  title: string;
  children: ReactNode;
  bannerSrc?: string;
  whiteText?: boolean
}

function ContentPage({ title, children, bannerSrc, whiteText }: ContentPageProps) {
  const showFooter = useShowFooter();

  return (
    <div>
      <div className="relative z-10 flex w-full flex-col">
        <div className="absolute inset-0 z-10 h-[60vh] bg-[#F5F3F0]">
          {bannerSrc && <img src={bannerSrc} className='absolute indent-0' />}
          <div className="relative mx-auto flex h-full flex-row items-center justify-around gap-48">
            <span className={`text-5xl font-semibold ${whiteText ? 'text-white' : ''}`}>{title}</span>
          </div>
        </div>
        <div className="h-[60vh] bg-[#F5F3F0]" />
        <div className="z-10 bg-[#0A0E27]">{children}</div>
        <FooterSpacer />
      </div>
      {showFooter && <FooterLayer />}
    </div>
  );
}

export default function App() {
  return (
    <div className="w-full">
      <div className="relative z-[100]">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/xiaofeilun"
          element={
            <ContentPage title="小飞轮" bannerSrc={xiaofeilunBanner}>
              <HighlightsSection />
              <FeatureShowcase />
              <ShowcaseCarousel />
            </ContentPage>
          }
        />
        <Route
          path="/qiankunquan"
          element={
            <ContentPage title="乾坤圈" bannerSrc={qiankunquanBanner}>
              <HighlightsSection />
              <FeatureShowcase />
              <ShowcaseCarousel />
            </ContentPage>
          }
        />
        <Route
          path="/huojianqiang"
          element={
            <ContentPage title="火尖枪" bannerSrc={huojianqiangBanner}>
              <HighlightsSection />
              <FeatureShowcase />
              <ShowcaseCarousel />
            </ContentPage>
          }
        />
        <Route
          path="/wenwo"
          element={
            <ContentPage title="问我" bannerSrc={wenwoBanner}>
              <HighlightsSection />
              <FeatureShowcase />
              <ShowcaseCarousel />
            </ContentPage>
          }
        />
        <Route
          path="/about"
          element={
            <ContentPage title="关于我们" bannerSrc={aboutBanner} whiteText>
              <div className="bg-[#0A0E27]">
                <CompanyTimeline />
                <Activity />
              </div>
            </ContentPage>
          }
        />
      </Routes>
    </div>
  );
}
