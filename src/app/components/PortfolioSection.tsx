import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioItem {
  id: number;
  name: string;
  slogan: string;
  description: string;
  image: string;
}

export default function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(
    null,
  );

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      name: "小飞轮",
      slogan: "「内容智能生产与协作系统」",
      description: "1 分钟批量生成 1000 + 视频",
      image:
        "https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com//ama-digi-site/system/12-1-1701427747529.png?imageMogr2/format/webp",
    },
    {
      id: 2,
      name: "乾坤圈",
      slogan: "新媒体矩阵监控管家",
      description: "主流平台内容监测和用户触达系统",
      image:
        "https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com//ama-digi-site/system/12-1-1701427675548.png?imageMogr2/format/webp",
    },
    {
      id: 3,
      name: "火尖枪",
      slogan: "私域用户运营专家",
      description: "企业私域增长和智能化运营平台",
      image:
        "https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com//ama-digi-site/system/12-1-1701427768941.png?imageMogr2/format/webp",
    },
    {
      id: 4,
      name: "问我",
      slogan: "全球达人管理体系",
      description: "全球达人建联和品牌社媒数据平台",
      image:
        "https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com//ama-digi-site/system/12-1-1701427721721.png?imageMogr2/format/webp",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#F5F3F0] pt-24 pb-12 lg:pt-28 rounded-t-[40px] overflow-hidden scroll-mt-24 lg:scroll-mt-28">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-4xl lg:text-5xl mb-4 text-black tracking-tight">
              产品矩阵
            </h1>
            <nav className="flex gap-8 text-sm text-black/70">
              <span className="hover:text-black transition-colors">
                整合本土最大营销集团与前阿里技术团队的能力与经验，为品牌客户提供具备营销智慧的产品技术解决方案，引领企业营销新增长
              </span>
            </nav>
          </div>
        </div>

        {/* Portfolio Grid - Horizontal scroll on mobile, flex on desktop */}
        <div className="flex gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-8 px-8 lg:mx-0 lg:px-0 justify-center">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer flex-shrink-0 transition-[width] duration-500 ease-out ${hoveredId === null
                ? "w-[360px]"
                : hoveredId === item.id
                  ? "w-[480px]"
                  : "w-[320px]"}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div
                className={`relative h-[640px] w-full rounded-[24px] overflow-hidden bg-white transition-all duration-500 ease-out ${hoveredId === item.id
                  ? "shadow-2xl -translate-y-3"
                  : "shadow-lg translate-y-0"
                  }`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto object-contain max-w-[240px]"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0">
                  <div className="bg-white/20 backdrop-blur-xl p-8 rounded-[24px]">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-semibold text-black tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-base text-black/80">
                        {item.slogan}
                      </p>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${hoveredId === item.id
                        ? "opacity-100 max-h-32 translate-y-0"
                        : "opacity-0 max-h-0 -translate-y-2"
                        }`}
                    >
                      <p className="text-base text-black/80 mt-4">
                        {item.description}
                      </p>
                      <div className="mt-4 flex justify-end">
                        <button className="px-6 py-2 border-2 border-[#E8A870] rounded-full text-sm text-black hover:bg-[#E8A870]/10 transition-colors">
                          点击了解
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Custom scrollbar for mobile */
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
}
