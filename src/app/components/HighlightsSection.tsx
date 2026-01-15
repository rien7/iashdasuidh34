import type { ReactNode } from 'react';
import { MessageSquare, SquareArrowUpRight, Tag } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import highlightXiaofeilun from '@/assets/highlights/highlight-xiaofeilun.svg';
import highlightQiankunquan from '@/assets/highlights/highlight-qiankunquan.svg';
import highlightHuojianqiang from '@/assets/highlights/highlight-huojianqiang.svg';
import highlightWenwo from '@/assets/highlights/highlight-wenwo.svg';

interface HighlightItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  preview: ReactNode;
}

export default function HighlightsSection() {
  const { pathname } = useLocation();
  const highlightImage = getHighlightImage(pathname);

  return (
    <section className="w-full bg-[#0A0E27] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-8 pb-16 pt-12 lg:flex-row lg:items-start lg:gap-12 lg:px-16">
        <div className="flex w-full flex-col gap-6 lg:w-[56%]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            Highlights
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
            <ImageWithFallback
              src={highlightImage}
              alt="Highlights cover"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-8 lg:w-[44%]">
          {highlightItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 border-b border-white/10 pb-8 last:border-b-0 last:pb-0 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                </div>
              </div>
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:h-28 md:w-28">
                {item.preview}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const highlightItems: HighlightItem[] = [
  {
    id: 1,
    title: 'Foundation model expansion launch',
    description: 'Core capability upgrades across the stack.',
    icon: <MessageSquare className="h-5 w-5 text-white" />,
    preview: (
      <div className="relative h-full w-full bg-gradient-to-br from-[#4F6BFF] to-[#6C8BFF]">
        <div className="absolute left-4 top-4 h-9 w-9 rounded-xl border border-white/40 bg-white/15" />
        <div className="absolute right-4 top-6 h-10 w-10 rounded-2xl border border-white/40 bg-white/15" />
        <div className="absolute left-6 top-11 h-0.5 w-12 bg-white/50" />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Agent frontier deep dive',
    description: 'Exploring next-gen orchestration patterns.',
    icon: <SquareArrowUpRight className="h-5 w-5 text-white" />,
    preview: (
      <div className="relative h-full w-full bg-gradient-to-br from-[#2F2F33] to-[#17171B]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white/15 px-3 py-1 text-[10px] text-white/80">
            Ask Anything
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Large-scale AI expo walkthrough',
    description: '4,000 m² immersive experience zone.',
    icon: <Tag className="h-5 w-5 text-white" />,
    preview: (
      <div className="relative h-full w-full bg-gradient-to-br from-[#312E81] via-[#4C1D95] to-[#6D28D9]">
        <div className="absolute left-5 top-5 grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={`highlight-dot-${index}`}
              className="h-2 w-2 rounded-full bg-white/70"
            />
          ))}
        </div>
      </div>
    ),
  },
];

const highlightImagesByRoute: Record<string, string> = {
  '/xiaofeilun': highlightXiaofeilun,
  '/qiankunquan': highlightQiankunquan,
  '/huojianqiang': highlightHuojianqiang,
  '/wenwo': highlightWenwo,
};

const getHighlightImage = (pathname: string) =>
  highlightImagesByRoute[pathname] ?? highlightXiaofeilun;
