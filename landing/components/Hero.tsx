'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-32 pb-16 px-8 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white to-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_20%,rgba(164,214,94,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_10%_80%,rgba(139,105,20,0.1)_0%,transparent_50%)]" />

        {/* Floating shapes */}
        <div className="absolute w-[600px] h-[600px] -right-[150px] -top-[100px] rounded-full bg-[radial-gradient(circle,rgba(124,179,66,0.2)_0%,transparent_70%)] opacity-50 animate-float" />
        <div className="absolute w-[400px] h-[400px] -left-[100px] -bottom-[50px] rounded-full bg-[radial-gradient(circle,rgba(139,105,20,0.15)_0%,transparent_70%)] opacity-50 animate-float-delayed" />
        <div className="absolute w-[200px] h-[200px] right-[30%] bottom-[20%] rounded-full bg-[radial-gradient(circle,rgba(45,90,39,0.12)_0%,transparent_70%)] opacity-50 animate-float-delayed-2" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="opacity-0 animate-fade-in-up animation-delay-200">
          <div className="inline-flex items-center gap-2 bg-gradient-to-br from-leaf/15 to-forest/10 px-4 py-2 rounded-full text-sm font-semibold text-forest mb-6 border border-leaf/30">
            <span className="w-2 h-2 bg-leaf rounded-full animate-pulse-slow" />
            농부와 소비자를 잇는 새로운 연결
          </div>

          <h1 className="font-display text-[clamp(3rem,6vw,4.5rem)] font-black leading-[1.15] text-forest-deep mb-6 tracking-tight">
            밭에서 뜰로,
            <br />
            <span className="bg-gradient-to-r from-forest to-leaf bg-clip-text text-transparent">
              신선함을 직접
            </span>
            <br />
            전해드립니다
          </h1>

          <p className="text-xl text-earth leading-relaxed mb-10 max-w-lg">
            중간 유통 없이 농부가 직접 재배한 신선한 과일, 채소를 소비자에게 바로
            전달합니다. 믿을 수 있는 농산물 직거래 플랫폼.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="#products"
              className="px-9 py-4 rounded-full font-semibold bg-gradient-to-br from-forest to-forest-light text-white shadow-[0_4px_20px_rgba(45,90,39,0.35)] transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,90,39,0.45)] flex items-center gap-2"
            >
              상품 둘러보기
              <span>→</span>
            </Link>
            <Link
              href="#cta"
              className="px-9 py-4 rounded-full font-semibold border-2 border-forest text-forest transition-all duration-400 ease-out-expo hover:bg-forest hover:text-white hover:-translate-y-1"
            >
              판매자로 시작
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 pt-8 border-t border-forest/10">
            {[
              { number: '1,200+', label: '등록된 농가' },
              { number: '8,500+', label: '신선한 상품' },
              { number: '50,000+', label: '만족한 고객' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.15}s` }}
              >
                <div className="font-display text-4xl font-black text-forest leading-none">
                  {stat.number}
                </div>
                <div className="text-sm text-earth mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative opacity-0 animate-fade-in-right hidden lg:block">
          <div className="relative aspect-[4/5] rounded-[200px_200px_100px_100px] overflow-hidden bg-gradient-to-b from-leaf-light to-forest shadow-[0_40px_80px_rgba(45,90,39,0.25),0_20px_40px_rgba(45,90,39,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2)_0%,transparent_40%)]" />
            <div className="absolute inset-5 flex flex-col items-center justify-center text-center text-white">
              <div className="text-[8rem] mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-bounce-slow">
                🧑‍🌾
              </div>
              <div className="font-display text-2xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                신선한 농산물
                <br />
                직접 전달
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute top-[15%] -left-[60px] bg-white rounded-[20px] p-5 shadow-[0_15px_40px_rgba(45,90,39,0.15)] flex items-center gap-4 animate-float-card">
            <div className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center text-2xl bg-gradient-to-br from-leaf/20 to-forest/10">
              🥬
            </div>
            <div>
              <div className="font-semibold text-sm text-earth-dark">
                오늘의 신선 채소
              </div>
              <div className="text-xs text-earth mt-0.5">방금 수확했어요</div>
            </div>
          </div>

          <div className="absolute bottom-[20%] -right-[40px] bg-white rounded-[20px] p-5 shadow-[0_15px_40px_rgba(45,90,39,0.15)] flex items-center gap-4 animate-float-card-delayed">
            <div className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center text-2xl bg-gradient-to-br from-harvest-orange/20 to-harvest-orange/5">
              📞
            </div>
            <div>
              <div className="font-semibold text-sm text-earth-dark">
                바로 연결
              </div>
              <div className="text-xs text-earth mt-0.5">전화 · 문자</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
