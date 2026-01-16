import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import showcase1 from '@/assets/showcases/showcase1.png';
import showcase2 from '@/assets/showcases/showcase2.png';
import showcase3 from '@/assets/showcases/showcase3.png';
import showcase4 from '@/assets/showcases/showcase4.png';
import showcase5 from '@/assets/showcases/showcase5.png';

const showcases = [showcase1, showcase2, showcase3, showcase4, showcase5];

const cardOffsets: Record<number, { scale: number; translateX: string; z: number; opacity: number }> = {
  [-2]: { scale: 0.82, translateX: '-56%', z: 10, opacity: 0.6 },
  [-1]: { scale: 0.9, translateX: '-30%', z: 30, opacity: 0.82 },
  0: { scale: 1, translateX: '0%', z: 60, opacity: 1 },
  1: { scale: 0.9, translateX: '30%', z: 30, opacity: 0.82 },
  2: { scale: 0.82, translateX: '56%', z: 10, opacity: 0.6 },
};

export default function ShowcaseCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % showcases.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + showcases.length) % showcases.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % showcases.length);
  };

  return (
    <section className="w-full bg-[#F5F3F0] py-12 rounded-b-[56px]">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={handlePrev}
          className="group absolute left-2 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#B3B3B3] text-white shadow-lg transition hover:scale-105 hover:bg-[#8F8F8F] sm:flex"
          aria-label="Previous"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        <div className="relative flex w-full items-center justify-center py-8">
          <div className="relative h-[320px] w-full">
            {showcases.map((image, index) => {
              const rawDistance = (index - current + showcases.length) % showcases.length;
              const signedDistance = rawDistance > showcases.length / 2 ? rawDistance - showcases.length : rawDistance;
              const offset = cardOffsets[signedDistance as keyof typeof cardOffsets];
              const isVisible = Boolean(offset);

              const baseStyle = {
                transform: 'translate(-50%, -50%) translateX(0%) scale(0.75)',
                zIndex: 0,
                opacity: 0,
              };

              const style = isVisible
                ? {
                    transform: `translate(-50%, -50%) translateX(${offset.translateX}) scale(${offset.scale})`,
                    zIndex: offset.z,
                    opacity: offset.opacity,
                  }
                : baseStyle;

              return (
                <div
                  key={image}
                  className="absolute left-1/2 top-1/2 h-[280px] w-[65%] overflow-hidden rounded-[28px] bg-[#D9D9D9] shadow-[0_18px_48px_-18px_rgba(0,0,0,0.3)] transition-[transform,opacity,filter] duration-600 ease-out sm:h-[360px] sm:w-[72%]"
                  style={style}
                >
                  <ImageWithFallback src={image} alt="Showcase" className="h-full w-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="group absolute right-2 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#B3B3B3] text-white shadow-lg transition hover:scale-105 hover:bg-[#8F8F8F] sm:flex"
          aria-label="Next"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
}
