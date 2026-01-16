import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface CaseItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  tag: string;
  image: string;
}

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState('汽车');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState(0);

  const tabs = ['汽车', '快消', '3C', '教育', '酒水', '文娱', '出海'];

  const cases: CaseItem[] = [
    {
      id: 1,
      title: '当物货照遇见新朋友',
      subtitle: '金牌汽车行业服务商',
      description: '一场预秘元宇宙艺术，P7概武士 x 柳夜照耀联IP x NFT数字藏品三维营销，强强联合，打造小鹏品牌破圈大事件',
      stats: [
        { value: '3.7亿', label: '全网曝光量' },
        { value: '8000万', label: '播放量' },
        { value: '100万', label: '互动量' }
      ],
      tag: 'IA|金奖',
      image: 'https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?w=800'
    },
    {
      id: 2,
      title: '科技引领未来出行',
      subtitle: '智能汽车解决方案',
      description: '通过AI技术和大数据分析，为用户提供个性化的出行体验，打造全新的智能汽车生态',
      stats: [
        { value: '5.2亿', label: '全网曝光量' },
        { value: '1.2亿', label: '播放量' },
        { value: '200万', label: '互动量' }
      ],
      tag: 'AI科技',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
    },
    {
      id: 3,
      title: '绿色能源驱动',
      subtitle: '新能源汽车领航者',
      description: '专注于新能源汽车研发，以环保理念为核心，推动汽车行业向可持续发展方向转型',
      stats: [
        { value: '4.1亿', label: '全网曝光量' },
        { value: '9500万', label: '播放量' },
        { value: '150万', label: '互动量' }
      ],
      tag: '绿色未来',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800'
    }
  ];

  const activeCase = cases[activeCard];

  return (
    <section className="relative w-full bg-[#F5F3F0] pt-24 pb-20 lg:pt-28 scroll-mt-24 lg:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Title and Subtitle - Outside white container */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-black mb-4">金牌汽车行业服务商</h2>
          <p className="text-gray-600 text-sm">
            累计服务60+汽车品牌，涵盖新能源、豪华品牌、合资品牌、自主品牌
          </p>
        </div>

        {/* White Rounded Container */}
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center gap-8 pt-8 px-12 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-base transition-all duration-300 relative ${activeTab === tab
                  ? 'text-red-500 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
                )}
              </button>
            ))}
          </div>

          {/* Cards Container */}
          <div className="relative px-12 py-12">
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-gray-400/80 hover:bg-gray-500/80 text-white flex items-center justify-center transition-all duration-300">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-gray-400/80 hover:bg-gray-500/80 text-white flex items-center justify-center transition-all duration-300">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Grid */}
            <div
              className="flex gap-6 relative"
              onMouseLeave={() => setHoveredCard(null)}
            >
              {cases.map((caseItem, index) => (
                <div
                  key={caseItem.id}
                  className="transition-all duration-700 ease-in-out overflow-hidden flex-1"
                  onMouseEnter={() => {
                    setHoveredCard(index);
                    setActiveCard(index);
                  }}
                >
                  <div className="relative h-full min-h-[400px]">
                    {/* Normal View - Always visible as background */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div
                className={`absolute inset-0 z-10 transition-opacity duration-500 ${hoveredCard !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
              >
                <div className="absolute inset-0 bg-white rounded-xl shadow-2xl flex gap-0 p-0">
                  {/* Left - Large Image */}
                  <div className="flex-1 overflow-hidden rounded-l-xl">
                    <ImageWithFallback
                      src={activeCase.image}
                      alt={activeCase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1 flex flex-col p-8">
                    {/* Tag and Badge Row */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex items-center gap-2">
                        <svg className="w-16 h-4" viewBox="0 0 80 20" fill="none">
                          <text x="0" y="14" className="text-xs font-medium fill-black">小鹏品牌站</text>
                        </svg>
                      </div>
                      <div className="px-4 py-1.5 rounded-full border-2 border-orange-400 text-orange-500 text-sm font-medium">
                        {activeCase.tag}
                      </div>
                      <div className="ml-auto">
                        <button className="px-8 py-2.5 rounded-full border-2 border-orange-400 text-black text-sm font-medium hover:bg-orange-50 transition-all">
                          了解详情
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-black mb-6">{activeCase.title}</h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-12">
                      {activeCase.description}
                    </p>

                    {/* Stats - Bottom aligned */}
                    <div className="flex items-center gap-16 mt-auto">
                      {activeCase.stats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-4xl font-bold text-blue-600 mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Gray Bar - No rounded corners, touches edges */}
          <div className="h-80">
            <div className="z-100 relative m-auto mb-10 flex w-full flex-1 scale-x-100 flex-col items-center justify-center overflow-hidden md:max-h-[22rem] md:min-h-72">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[30.875rem] bg-gradient-to-r from-[#F4F4F4] to-[transparent] max-md:hidden md:block"></div>
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[30.875rem] bg-gradient-to-l from-[#F4F4F4] to-[transparent] max-md:hidden  md:block"></div>
              <div className="w-full md:hidden">
                <div className="css-188xxr2 e7r4dh81">
                  <div className="css-6osybd e7r4dh82">
                    <div style={{
                      backgroundImage: 'url(https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/qiche-brand1.png?imageMogr2/format/webp)'
                    }} className="css-ayxvyv e7r4dh83"></div>
                    <div style={{
                      backgroundImage: 'url(https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/qiche-brand2.png?imageMogr2/format/webp)'
                    }} className="css-ayxvyv e7r4dh83"></div>
                    <div style={{
                      backgroundImage: 'url(https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/qiche-brand1.png?imageMogr2/format/webp)'
                    }} className="css-ayxvyv e7r4dh83"></div>
                    <div style={{
                      backgroundImage: 'url(https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/qiche-brand2.png?imageMogr2/format/webp)'
                    }} className="css-ayxvyv e7r4dh83"></div></div></div></div>
              <div className="h-auto min-h-80 w-full max-md:hidden">
                <div id="brand-loop-two-1-0" style={{
                  backgroundImage: "url(https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/qiche-brand1.png?imageMogr2/format/webp)",
                  animation: "6s linear 0s infinite normal both running brandLoop"
                }} className="h-auto min-h-12 w-full md:min-h-32 css-18795si e7r4dh80"></div>
                <div id="brand-loop-two-1-1" style={{
                  backgroundImage: "url(https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/qiche-brand2.png?imageMogr2/format/webp)",
                  animation: "6s linear 0s infinite reverse both running brandLoop"
                }} className="h-auto min-h-12 w-full md:min-h-32 css-18795si e7r4dh80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}