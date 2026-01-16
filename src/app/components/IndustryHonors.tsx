const medalItems = [
  {
    title: '巨量创意认证',
    rank: 'TOP 1',
    gradient: 'from-amber-200 via-amber-300 to-orange-400',
  },
  {
    title: '信息流广告认证',
    rank: 'TOP 1',
    gradient: 'from-amber-200 via-amber-300 to-orange-400',
  },
  {
    title: '电商类认证榜单',
    rank: 'TOP 3',
    gradient: 'from-amber-200 via-amber-300 to-orange-400',
  },
  {
    title: '生态伙伴职业能力认证',
    rank: 'TOP 4',
    gradient: 'from-amber-200 via-amber-300 to-orange-400',
  },
];

const honorBadges = [
  '巨量云图汽车金牌服务商TOP1',
  '巨量算数联盟核心成员',
  '金投赏效果年度代理',
  '高新技术企业',
  '专精特新企业',
  '广州4A会员',
  'IAI传鉴国际广告奖综合排名TOP12',
  '2项ISO认证',
  '2项发明专利',
];

function Medal({ title, rank, gradient }: { title: string; rank: string; gradient: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-3 flex gap-1">
          <span className="h-8 w-2 rounded-sm bg-gradient-to-b from-red-500 to-red-700" />
          <span className="h-8 w-2 rounded-sm bg-gradient-to-b from-orange-400 to-orange-600" />
          <span className="h-8 w-2 rounded-sm bg-gradient-to-b from-red-500 to-red-700" />
        </div>
        <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b ${gradient} text-lg font-semibold text-amber-900 shadow-lg shadow-amber-200/60 ring-4 ring-white`}>
          {rank}
        </div>
      </div>
      <div className="text-lg font-semibold text-[#7A3B1A]">{title}</div>
    </div>
  );
}

function LaurelBadge({ label }: { label: string }) {
  return (
    <div className="relative mx-auto h-20 w-full max-w-xl">
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${awardBadge})` }}
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center justify-center px-6 text-sm font-semibold text-[#8A4D1E]">
        <span className="text-center leading-snug text-2xl">{label}</span>
      </div>
    </div>
  );
}

export default function IndustryHonors() {
  return (
    <section className="relative w-full bg-[#F5F3F0] px-6 py-20 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-[#5A3316] lg:text-5xl">行业荣誉</h2>
          <p className="text-base text-[#8B7355] lg:text-lg">
            高新技术企业一度屡获行业大奖，助力品牌出圈验证创意实力
          </p>
        </div>

        <div className="w-full rounded-[32px] bg-white px-6 py-10 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.15)] lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {medalItems.map((item) => (
              <Medal key={item.title} title={item.title} rank={item.rank} gradient={item.gradient} />
            ))}
          </div>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#E7CBA0] to-transparent" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {honorBadges.map((badge) => (
              <LaurelBadge key={badge} label={badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import awardBadge from '@/assets/award.png';
