import { ImageWithFallback } from './figma/ImageWithFallback';

interface BentoCard {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  size: 'small' | 'medium' | 'large';
  gradient: string;
}

export default function BankingSection() {
  const bentoCards: BentoCard[] = [
    {
      id: 1,
      title: '内容咨询',
      subtitle: '一站式内容策略咨询',
      description: '基于对品牌理解，以自动化生产为核心技术进行新品发布、创意生产、跨界合作及体验活动等整合内容来吸引受众，兼顾达人创意、达人采买、达人种草、达人带货、内容热推板块，成功上线200+个项目，合作3000+达人，促成直播+达人+效果的同人内容出镜。',
      image: 'https://images.unsplash.com/photo-1575467544611-470fa8053545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMGNvZmZlZSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjgxODcwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'medium',
      gradient: 'from-orange-200/80 to-amber-200/80'
    },
    {
      id: 2,
      title: '视频生产',
      subtitle: '提供视频创意应用及数字视觉体验综合解决方案',
      description: '基于对品牌理解确立品牌形象，以自动化生产为核心技术，创造、发布和传播品牌TVC、短视频、AIGC视频等视频创意来吸引、满足和激励受众。全年5635次航班跨越141座城市，以无边界服务网络与敏捷响应，达成最终营销目标。',
      image: 'https://images.unsplash.com/photo-1647872902066-cfa24b501c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrcyUyMHRleHR1cmUlMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc2ODE4NzA1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'large',
      gradient: 'from-slate-800/60 to-slate-900/60'
    },
    {
      id: 3,
      title: '效果运营',
      subtitle: '深耕全国及区域近十亿量级头部流量服务商',
      description: '巨量引擎、腾讯、快手、懂车帝、易车、汽车之家、小红书、微博、B站等平台的效果投放同时在短视频、直播、搜索、本地等流量运营上有丰富经验，独创LEADS 模型实现线索降本增效。',
      image: 'https://images.unsplash.com/photo-1681826292838-c37fbd22263a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc2ODE4NzA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'medium',
      gradient: 'from-slate-700/60 to-slate-800/60'
    },
    {
      id: 4,
      title: '直播运营',
      subtitle: '华南头部直播机构，集主播+场地+投流+培训一站式服务',
      description: '覆盖大事件直播、常态化直播、达人直播、私域直播、经销商直播板块，6000m²内容生产基地50+直播间，顶级制作运营团队加持，搭配元宇宙、XR/AR/VR、数字人等技术做最有看点的直播，累计直播时长超过40000小时。',
      image: 'https://images.unsplash.com/photo-1707483618687-488503f1523c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwZGVzaWdufGVufDF8fHx8MTc2ODE4NzA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'large',
      gradient: 'from-slate-900/70 to-black/70'
    },
    {
      id: 5,
      title: '电商运营',
      subtitle: '具备以技术带来品效销转化的核心优势',
      description: '用AI技术为品牌提供电商全域服务，包括品牌电商、零售电商、效果电商、内容电商、私域电商等，集平台运营、推广、仓储、客服等职能服务。',
      image: 'https://images.unsplash.com/photo-1572902788385-d8826402e8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdvbGRlbiUyMHRleHR1cmV8ZW58MXx8fHwxNzY4MTg3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'small',
      gradient: 'from-orange-400/60 to-amber-500/60'
    },
    {
      id: 6,
      title: '私域运营',
      subtitle: '前阿里移动事业部10年技术团队加持',
      description: '前阿里移动事业部10年技术团队加持提供引流获客、用户运营、监控指导、经销商赋能四大业务场景，圈定投放系统、企微SCRM、小程序&APP、官网等系统开发，垂媒运营、企微运营、车友运营等用户运营服务范围。',
      image: 'https://images.unsplash.com/photo-1707483618687-488503f1523c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwZGVzaWdufGVufDF8fHx8MTc2ODE4NzA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'medium',
      gradient: 'from-slate-700/60 to-slate-900/60'
    },
    {
      id: 7,
      title: '区域运营',
      subtitle: '4000+经销商能力建设的践行者',
      description: '商域投流多维定向拦截+信息精准曝光，公域定制专属功能+企业号权益双管齐下，私域定制专属课程+常态化1V1服务，促进终端变现能力。',
      image: 'https://images.unsplash.com/photo-1572902788385-d8826402e8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdvbGRlbiUyMHRleHR1cmV8ZW58MXx8fHwxNzY4MTg3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'small',
      gradient: 'from-emerald-600/50 to-teal-700/50'
    },
    {
      id: 8,
      title: '出海营销',
      subtitle: '致力为跨国品牌提供全球化市场营销服务',
      description: '提供中东、东南亚等地的本地化全链路营销核心服务，包括品牌策略、媒介投放、社媒运营、达人营销、直播电商、用户运营。TikTok认证MCN机构、中东TikTok Shop直播带货第1名，以全球、内容、技术三大营销优势形成高效品达销服务。',
      image: 'https://images.unsplash.com/photo-1719042575585-e9d866f43210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc2ODEwNjcxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'medium',
      gradient: 'from-amber-600/50 to-orange-700/50'
    }
  ];

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
        return 'md:col-span-2 md:row-span-1';
      default:
        return '';
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F5F3F0] py-20">
      {/* Header */}
      <div className="flex flex-col items-center w-full mb-12">
        <h1 className="text-4xl lg:text-5xl mb-4 text-black tracking-tight">精通技术的营销机构</h1>
        <h1 className="text-4xl lg:text-5xl mb-4 text-black tracking-tight">也是精通营销的技术机构</h1>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 md:grid-flow-row-dense">
          {bentoCards.map((card) => (
            <div
              key={card.id}
              className={`group relative overflow-hidden rounded-3xl ${getGridClass(card.size)} cursor-pointer`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90`}></div>

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
                <div>
                  <h3 className={`${
                    card.size === 'large' ? 'text-4xl md:text-5xl' : 
                    card.size === 'medium' ? 'text-3xl md:text-4xl' : 
                    'text-2xl md:text-3xl'
                  } mb-2 transition-transform duration-500 group-hover:translate-y-[-4px]`}>
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className={`${
                      card.size === 'large' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                    } opacity-90`}>
                      {card.subtitle}
                    </p>
                  )}
                </div>

                {/* Description - Only visible on hover */}
                {card.description && (
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm text-white/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-20"></div>
    </section>
  );
}
