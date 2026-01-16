export function Activity() {
  return (
    <section className="scroll-item relative bg-white pb-24 rounded-b-[56px] flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between max-md:min-h-0">
      <div className="pb-[5.3125rem] pt-[5.625rem] text-center text-5xl">
        <p className="mb-10">对的路，不怕远</p>
        <p className="text-3xl opacity-60">公司活动，员工活动展示</p>
      </div>
      <div className="hidden overflow-hidden md:flex md:flex-col">
        <div className="relative h-[340px] w-full overflow-hidden">
          <div className="flex h-full w-[200%] animate-rolling">
            <img src="https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/photowall/photo-wall1.png" alt="photo-wall1" className="h-full w-[200%] object-cover" />
            <img src="https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/photowall/photo-wall1.png" alt="photo-wall1" className="h-full w-[200%] object-cover" />
          </div>
        </div>
        <div className="relative h-[340px] w-full overflow-hidden">
          <div className="flex h-full w-[200%] animate-rolling-reverse">
            <img src="https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/photowall/photo-wall2.png" alt="photo-wall2" className="h-full w-[200%] object-cover" />
            <img src="https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/photowall/photo-wall2.png" alt="photo-wall2" className="h-full w-[200%] object-cover" />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <img src="https://revasocialmedia-1307444343.cos.ap-guangzhou.myqcloud.com/new-ama-digi-site/photowall/photo-wall-mobile.png" alt="photo-wall-mobile" className="w-full object-cover" />
      </div>
    </section>
  )
}