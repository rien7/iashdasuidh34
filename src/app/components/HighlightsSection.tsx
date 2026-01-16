import { useState, type ReactNode } from 'react';
import { MessageSquare, SquareArrowUpRight, Tag } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import highlightXiaofeilun from '@/assets/highlights/xiaofeilun-highlight.png';
import highlightQiankunquan from '@/assets/highlights/qiankunquan-highlight.png';
import highlightHuojianqiang from '@/assets/highlights/huojianqiang-highlight.png';
import highlightWenwo from '@/assets/highlights/wenwo-highlight.png';

interface HighlightItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  preview: ReactNode;
}

const highlightItems: HighlightItem[] = [
  {
    id: 1,
    title: 'Foundation model expansion launch',
    description: 'Core capability upgrades across the stack.',
    icon: <MessageSquare className="h-5 w-5 text-[#D97706]" />,
    preview: (
      <div className="relative h-full w-full bg-gradient-to-br from-[#FFE8C7] via-[#FFD6A5] to-[#FFC078]">
        <div className="absolute left-4 top-4 h-9 w-9 rounded-xl border border-white/60 bg-white/60" />
        <div className="absolute right-4 top-6 h-10 w-10 rounded-2xl border border-white/50 bg-white/60" />
        <div className="absolute left-6 top-11 h-0.5 w-12 bg-white/60" />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Agent frontier deep dive',
    description: 'Exploring next-gen orchestration patterns.',
    icon: <SquareArrowUpRight className="h-5 w-5 text-[#2563EB]" />,
    preview: (
      <div className="relative h-full w-full bg-gradient-to-br from-[#E0F2FE] via-[#BFDBFE] to-[#A5B4FC]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white/80 px-3 py-1 text-[10px] text-[#1E3A8A]">
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
    icon: <Tag className="h-5 w-5 text-[#7C3AED]" />,
    preview: (
      <div className="relative h-full w-full bg-gradient-to-br from-[#F3E8FF] via-[#E9D5FF] to-[#C4B5FD]">
        <div className="absolute left-5 top-5 grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={`highlight-dot-${index}`}
              className="h-2 w-2 rounded-full bg-[#7C3AED]"
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

export default function HighlightsSection() {
  const { pathname } = useLocation();
  const highlightImage = getHighlightImage(pathname);
  const [activeId, setActiveId] = useState<number>(highlightItems[0]?.id ?? 0);
  const activeItem = highlightItems.find((item) => item.id === activeId) ?? highlightItems[0];

  return (
    <section className="w-full bg-[#F5F3F0] py-12">
      <div className="mx-auto w-full px-4 sm:px-6 max-w-[1440px] lg:px-10">
        <div className="rounded-[32px] bg-white p-6 text-[#2F2619] shadow-[0_32px_72px_-30px_rgba(0,0,0,0.28)] sm:p-10">
          <div className="mb-10 flex flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2B2115] sm:text-4xl">产品介绍</h2>
            <p className="text-base text-[#8B7355]">小飞轮能解决什么问题？</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-6 lg:col-span-1 ">
              <div className="overflow-hidden rounded-[28px] border border-[#E6D9CC] bg-[#ECE7E1] shadow-inner">
                <div className="aspect-[4/3]">
                  <ImageWithFallback
                    src={highlightImage}
                    alt={activeItem?.title ?? 'Highlights cover'}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <button
                type="button"
                className="group relative inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#6B1B1B] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)]"
                style={{
                  border: '2px solid transparent',
                  backgroundImage:
                    'linear-gradient(white, white), linear-gradient(90deg, #D3242B 0%, #E9771A 50%, #F8B036 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                开启AI新体验
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#E9771A] to-[#F8B036] text-white shadow-md transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>

            <div className="flex flex-col divide-y divide-[#E6D9CC] h-full rounded-[24px] border border-[#E6D9CC] bg-white overflow-hidden">
              {highlightItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`flex w-full items-center gap-4 h-1/3 px-4 py-5 text-left transition-colors duration-200 hover:bg-[#FAF6F0] ${isActive ? 'bg-[#FAF6F0]' : ''}`}
                  >
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E6D9CC] bg-white">
                          {item.icon}
                        </div>
                        <h3 className="text-base font-semibold text-[#2F2619]">{item.title}</h3>
                      </div>
                      <p className="text-xs text-[#7A6A55]">{item.description}</p>
                    </div>
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#E6D9CC] bg-white">
                      {item.preview}
                    </div>
                    <div className="ml-2 flex items-center">
                      <span
                        className={`h-3 w-3 rounded-full border ${isActive ? 'border-[#E9771A] bg-[#E9771A]' : 'border-[#D4C5AF] bg-white'}`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
