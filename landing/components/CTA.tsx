'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = sectionRef.current?.querySelectorAll('.cta-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="cta" className="py-32 px-8 lg:px-16 bg-cream">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Seller CTA */}
        <div
          className="cta-card relative p-12 lg:p-16 rounded-[40px] overflow-hidden text-white bg-gradient-to-br from-forest-deep to-forest opacity-0 translate-y-8 transition-all duration-500 ease-out-expo"
          style={{ transitionDelay: '0ms' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
          <div className="absolute -right-12 -bottom-12 text-[15rem] opacity-10 rotate-[-15deg]">
            🌾
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest opacity-80 mb-4">
              🧑‍🌾 판매자로 시작
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-black leading-tight mb-4">
              직접 재배한 농산물,
              <br />
              직접 판매하세요
            </h3>
            <p className="text-lg opacity-90 leading-relaxed mb-8 max-w-sm">
              복잡한 유통 과정 없이 소비자에게 직접 판매하고, 정당한 가치를
              인정받으세요.
            </p>
            <ul className="mb-10 space-y-3">
              {['무료 상품 등록', '전화/문자로 직접 소통', '판매 수수료 없음'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link
              href="#"
              className="inline-flex px-9 py-4 rounded-full font-semibold bg-white text-forest-deep shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            >
              판매 시작하기 →
            </Link>
          </div>
        </div>

        {/* Buyer CTA */}
        <div
          className="cta-card relative p-12 lg:p-16 rounded-[40px] overflow-hidden text-white bg-gradient-to-br from-earth-dark to-earth opacity-0 translate-y-8 transition-all duration-500 ease-out-expo"
          style={{ transitionDelay: '100ms' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
          <div className="absolute -right-12 -bottom-12 text-[15rem] opacity-10 rotate-[-15deg]">
            🛒
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest opacity-80 mb-4">
              🥗 구매자로 시작
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-black leading-tight mb-4">
              농부에게 직접,
              <br />
              신선함을 받아보세요
            </h3>
            <p className="text-lg opacity-90 leading-relaxed mb-8 max-w-sm">
              중간 유통 마진 없이 합리적인 가격으로 신선한 농산물을 구매하세요.
            </p>
            <ul className="mb-10 space-y-3">
              {['산지 직송 신선함', '생산자 정보 확인', '관심 상품 저장'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link
              href="#products"
              className="inline-flex px-9 py-4 rounded-full font-semibold bg-white text-earth-dark shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            >
              둘러보기 →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-card.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
