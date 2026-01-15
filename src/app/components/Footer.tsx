export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-0 bg-[#0A0E27] text-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left - Logo */}
          <div className="flex flex-col">
            <div className="text-4xl font-bold tracking-wider mb-2">
              A.M.A
            </div>
            <div className="text-sm text-white/60 tracking-widest">
              砹脉营销
            </div>
          </div>

          {/* Center - Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-black mb-6">联系我们</h3>
            
            <form className="space-y-4">
              {/* Company Name */}
              <input 
                type="text"
                placeholder="企业名称"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-all text-sm"
              />

              {/* Name and Position */}
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text"
                  placeholder="姓名"
                  className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-all text-sm"
                />
                <input 
                  type="text"
                  placeholder="职位"
                  className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-all text-sm"
                />
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="tel"
                  placeholder="手机号"
                  className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-all text-sm"
                />
                <input 
                  type="email"
                  placeholder="邮箱"
                  className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-all text-sm"
                />
              </div>

              {/* Message */}
              <textarea 
                placeholder="多多寡言请填"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-all resize-none text-sm"
              ></textarea>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-4 h-4 rounded border-gray-300"
                />
                <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
                  我同意收到营销传播
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-300 text-sm"
              >
                提交联系
              </button>
            </form>
          </div>

          {/* Right - Navigation and Info */}
          <div className="flex flex-col gap-8">
            {/* Navigation Links */}
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white/80 hover:text-white transition-colors">产品矩阵</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">小马</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">画框</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">电商猫</a>
              </div>
              
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white/80 hover:text-white transition-colors">关于我们</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">公司简介</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">发展历程</a>
              </div>
              
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white/80 hover:text-white transition-colors">联系我们</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">加入我们</a>
              </div>
            </div>

            {/* Company Info */}
            <div className="text-xs text-white/60 space-y-2">
              <p>广东壹鸣惊人营销策划有限公司</p>
              <p>联系电话：020-86519360</p>
              <p>邮箱：A.m_a@ama-auto.com</p>
              <p className="leading-relaxed">
                广东省 广州市荔湾区 金华街道凯粤湾<br />
                1-11层裙楼05
              </p>
            </div>

            {/* QR Codes */}
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-black"></div>
              </div>
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Fixed Menu Icons */}
      <div className="fixed right-6 bottom-32 flex flex-col gap-4 z-50">
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
