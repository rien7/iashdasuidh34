import { useState, useEffect, type ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeroSection from '@/app/components/HeroSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import BankingSection from '@/app/components/BankingSection';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';

const FOOTER_REVEAL_HEIGHT = 424;

function HomePage() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const distanceToBottom = scrollHeight - scrollPosition;

      setShowFooter(distanceToBottom <= FOOTER_REVEAL_HEIGHT);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {showFooter ? <Footer /> : <HeroSection />}
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="h-screen snap-start snap-always" aria-hidden="true"></div>
        <section className="min-h-screen snap-start snap-always bg-[#0A0E27]">
          <PortfolioSection />
        </section>
        <section className="min-h-screen snap-start snap-always">
          <BankingSection />
        </section>
        <section className="min-h-screen snap-start snap-always bg-[#0A0E27]">
          <CaseStudy />
        </section>
        <div
          className="snap-start snap-always pointer-events-none"
          aria-hidden="true"
          style={{ height: `${FOOTER_REVEAL_HEIGHT}px` }}
        ></div>
      </div>
    </div>
  );
}

function ContentPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-8 pb-16 pt-28 lg:px-16">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold lg:text-4xl">{title}</h1>
          <p className="text-sm text-white/60">这里是对应的专题内容。</p>
        </div>
        <div className="space-y-12">{children}</div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      <div className="mx-auto w-full max-w-6xl px-8 pb-16 pt-28 lg:px-16">
        <h1 className="text-3xl font-semibold lg:text-4xl">问我</h1>
        <p className="mt-4 text-sm text-white/60">欢迎留下你的需求，我们会尽快联系。</p>
      </div>
      <div className="relative min-h-[720px]">
        <Footer />
      </div>
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
            <ContentPage title="小飞轮">
              <PortfolioSection />
            </ContentPage>
          }
        />
        <Route
          path="/qiankunquan"
          element={
            <ContentPage title="乾坤圈">
              <BankingSection />
            </ContentPage>
          }
        />
        <Route
          path="/huojianqiang"
          element={
            <ContentPage title="火尖枪">
              <CaseStudy />
            </ContentPage>
          }
        />
        <Route path="/wenwo" element={<ContactPage />} />
        <Route
          path="/about"
          element={
            <ContentPage title="关于我们">
              <p className="text-base text-white/70">
                我们专注于品牌增长与整合营销，持续为客户打造可落地的创意方案。
              </p>
            </ContentPage>
          }
        />
      </Routes>
    </div>
  );
}
