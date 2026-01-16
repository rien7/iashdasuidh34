import hornor1 from '@/assets/hornor/hornor-1.webp';
import hornor2 from '@/assets/hornor/hornor-2.webp';
import hornor3 from '@/assets/hornor/hornor-3.webp';
import hornor4 from '@/assets/hornor/hornor-4.webp';
import hornor5 from '@/assets/hornor/hornor-5.webp';
import hornor6 from '@/assets/hornor/hornor-6.webp';
import hornor7 from '@/assets/hornor/hornor-7.webp';
import hornor8 from '@/assets/hornor/hornor-8.webp';
import hornor9 from '@/assets/hornor/hornor-9.webp';
import hornor10 from '@/assets/hornor/hornor-10.webp';

interface AwardItem {
  name: string;
  result: string;
  icon: string;
}

const awardIcons = [hornor1, hornor2, hornor3, hornor4, hornor5, hornor6, hornor7, hornor8, hornor9, hornor10];

const baseAwards: Array<Omit<AwardItem, 'icon'>> = [
  { name: '艾菲奖', result: '四银七铜九入围' },
  { name: 'IAI国际广告奖', result: '七金六银十四铜' },
  { name: '金投赏商业创意奖', result: '一金二银五铜' },
  { name: '金鼠标数字营销大赛', result: '一金二银三铜' },
  { name: '虎啸奖', result: '二银八铜四优秀' },
  { name: 'Topdigital', result: '一金一铜' },
  { name: 'TMA移动营销大赛', result: '二银二铜' },
  { name: '金梧奖', result: '二金二银四经典案例' },
  { name: '共擎奖', result: '十四次' },
  { name: '品牌资产案例大赛', result: '十一金' },
];

const awardItems: AwardItem[] = baseAwards.map((item, index) => ({
  ...item,
  icon: awardIcons[index % awardIcons.length],
}));

function AwardCard({ item }: { item: AwardItem }) {
  return (
    <div className="group relative flex h-full flex-col gap-4 rounded-2xl bg-white p-5 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.18)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white ring-1 ring-slate-100 shadow-inner">
          <img src={item.icon} alt={item.name} className="h-12 w-12 object-contain" />
        </div>
      </div>
      <div className="text-center text-lg font-semibold text-[#6B4E2E]">{item.name}</div>
      <div className="text-center text-sm text-[#9A7B52]">{item.result}</div>
    </div>
  );
}

export default function IndustryAwards() {
  return (
    <section className="relative rounded-b-[56px] w-full bg-[#F5F3F0] px-6 py-20 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-[#5A3316] lg:text-5xl">行业奖项</h2>
          <p className="text-base text-[#8B7355] lg:text-lg">2022-2024 行业获奖：12金17银29铜</p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {awardItems.map((item) => (
            <AwardCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
