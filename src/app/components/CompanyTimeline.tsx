interface TimelineEvent {
  text: string;
}

interface TimelineYear {
  year: string;
  events: TimelineEvent[];
}

interface TimelineCardProps {
  year: string;
  events: TimelineEvent[];
  align: 'left' | 'right';
}

function TimelineCard({ year, events, align }: TimelineCardProps) {
  const isRight = align === 'right';
  const textAlignClass = !isRight ? 'text-right items-end pl-8 sm:pl-12' : 'text-left items-start pr-8 sm:pr-12';
  const bulletDirectionClass = !isRight ? 'flex-row justify-end text-right' : 'flex-row';

  return (
    <div className={`flex w-full flex-col gap-4 ${textAlignClass}`}>
      <div className="text-[30px] font-semibold leading-none text-[#E84136]">{year}</div>
      <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-[#2A2E36]">
        {events.map(event => (
          <li
            key={`${year}-${event.text}`}
            className={`flex items-start gap-2 ${bulletDirectionClass}`}
          >
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E84136]" aria-hidden />
            <span className="whitespace-pre-line">{event.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CenterDot({ isHighlighted }: { isHighlighted: boolean }) {
  return (
    <div className="relative flex h-full w-full items-start justify-center" aria-hidden>
      <div className="relative h-16 w-16 -translate-y-4">
        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center ">
          <div className="relative h-2 w-2 rounded-full bg-[#939393] shadow-sm ring-8 ring-[#d0d5dd82]" />
        </div>
      </div>
    </div>
  );
}

const timelineData: TimelineYear[] = [
  {
    year: '2025',
    events: [
      { text: '12月 入选2025中国数字营销生态图谱' },
      { text: '10月 成为首批AI即用服务商' },
      { text: '9月 入选巨量引擎汽车行业投播一体优质服务商' },
      { text: '8月 正式加入中国4A阵容' },
      { text: '6月 618大促总GMV破3亿，获评海尔空调618金牌服务商+「品效合一」最佳内容服务商' }
    ]
  },
  {
    year: '2024',
    events: [
      { text: '8月 江门基地正式启用，6000㎡内容基地，直播累计超40000小时。' },
      { text: '6月 618电商GMV破亿。' },
      {
        text: '5月 发力为头部新能源车服务，比亚迪、特斯拉、理想、蔚来、大疆和华为等，成为车品服务汽车品牌直播量最多的代理。'
      },
      { text: '3月 自研技术产品拿下第一个百万级商单，斩获2024年发明专利。' }
    ]
  },
  {
    year: '2023',
    events: [
      { text: '12月 入选2025中国数字营销生态图谱' },
      { text: '10月 成为首批AI即用服务商' },
      { text: '9月 入选巨量引擎汽车行业投播一体优质服务商' },
      { text: '8月 正式加入中国4A阵容' },
      { text: '6月 618大促总GMV破3亿，获评海尔空调618金牌服务商+「品效合一」最佳内容服务商' }
    ]
  },
  {
    year: '2022',
    events: [
      { text: '8月 江门基地正式启用，6000㎡内容基地，直播累计超40000小时。' },
      { text: '6月 618电商GMV破亿。' },
      {
        text: '5月 发力为头部新能源车服务，比亚迪、特斯拉、理想、蔚来、大疆和华为等，成为车品服务汽车品牌直播量最多的代理。'
      },
      { text: '3月 自研技术产品拿下第一个百万级商单，斩获2024年发明专利。' }
    ]
  }
];

export default function CompanyTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-[0.1em] text-[#0D0F1A] lg:text-4xl">
            发展历程 / 企业大事件
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#E8EBF0]" aria-hidden />

          <div className="flex flex-col gap-14">
            {timelineData.map((yearItem, index) => {
              const isRight = index % 2 === 0;
              const isFirst = index === 0;
              return (
                <div
                  key={yearItem.year}
                  className="relative grid w-full grid-cols-[1fr_60px_1fr] items-start"
                >
                  {isRight ? (
                    <>
                      <div />
                      <CenterDot isHighlighted={isFirst} />
                      <TimelineCard align="right" year={yearItem.year} events={yearItem.events} />
                    </>
                  ) : (
                    <>
                      <TimelineCard align="left" year={yearItem.year} events={yearItem.events} />
                      <CenterDot isHighlighted={isFirst} />
                      <div />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
