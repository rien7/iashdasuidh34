import { ImageWithFallback } from './figma/ImageWithFallback';
import highlightXiaofeilun from '@/assets/highlights/xiaofeilun-highlight.png';
import highlightWenwo from '@/assets/highlights/wenwo-highlight.png';

interface FeatureItem {
  tag: string;
  title: string;
  bullets: string[];
  image: string;
  alt: string;
}

const featureItems: FeatureItem[] = [
  {
    tag: '数据监测',
    title: '如何应对灵感创意耗时费力问题？',
    bullets: [
      'AI自动获取海量爆款创意素材精华、热门作短视频作品，辅助提供创意',
      '一键生成视频脚本大纲、文案、图片，秒级速成创意文案',
      '一键提炼爆款视频结构、文案亮点，高光片段，人人皆可制作创意素材',
      '团队云端素材分类标签自动化保存，运营团队可共享使用素材',
    ],
    image: highlightXiaofeilun,
    alt: 'Cross-platform analytics dashboard',
  },
  {
    tag: '数据监测',
    title: '人工产出视频素材效率低，如何应对大量商业化视频产出需求？',
    bullets: [
      '一键翻译，将中文视频的字幕、音频翻译为英语、阿拉伯语等全球主流国家语言',
      '一键生成视频音频、字幕，支持视频模板复刻套用、内容个性化调整',
      '素材极速裂变: 根据大纲内容，一键自动匹配素材、自动剪辑出片、自动优化创意效果',
      '视频智能拆分和批量混剪: 1分钟批量生成1000条商业化视频，并提供海量爆款视频模板套用',
    ],
    image: highlightWenwo,
    alt: 'Live streaming insights',
  },
  {
    tag: '数据监测',
    title: '如何应对主流平台分发任务重，人工编辑耗时长问题？',
    bullets: [
      '多场景分发应有尽有，包含经销商门店矩阵分发、多端宣发等',
      '多平台一站式分发，无需人工登录，一个链接可发布多平台',
      '多平台短视频矩阵账号托管，一键查看多平台发布状态',
      '可平台二次对内容编辑发布，节省重复修改问题',
    ],
    image: highlightXiaofeilun,
    alt: 'Live streaming insights',
  },
  {
    tag: '数据监测',
    title: '视频发布后，实时追踪难，如何高效回收数据？',
    bullets: [
      '秒级追踪视频推广数据，多维度数据榜单助力挖掘爆款内容',
      '实时追踪视频模板的效果数据，随时查看数据表现',
      '分析平台热门视频的涨跌趋势，提供内容升级建议',
      '多端系统及时产出汇总报告，赋能短视频运营经验提升',
    ],
    image: highlightXiaofeilun,
    alt: 'Live streaming insights',
  },
];

export default function FeatureShowcase() {
  return (
    <section className="w-full bg-[#F5F3F0] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10">
        {featureItems.map((item, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={`${item.title}-${index}`}
            >
              <div
                className={`flex flex-col items-center gap-10 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="w-full lg:w-[48%]">
                  <div className="relative overflow-hidden rounded-[28px] border border-[#E6D9CC] bg-[#EFF0F3] shadow-inner">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col gap-6 lg:w-[52%]">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold leading-tight text-[#1F1F22] sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-base text-[#4A4A55]">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={`${item.title}-bullet-${bulletIndex}`} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-br from-[#D3242B] via-[#E9771A] to-[#F8B036]" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
