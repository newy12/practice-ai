'use client'

import { useEffect, useRef } from 'react'

const values = [
  {
    icon: '🤝',
    iconClass: 'bg-gradient-to-br from-forest/15 to-forest/5',
    title: '직거래 연결',
    description:
      '중간 유통 과정 없이 농부와 소비자를 직접 연결합니다. 합리적인 가격으로 품질 좋은 농산물을 만나보세요.',
  },
  {
    icon: '🌱',
    iconClass: 'bg-gradient-to-br from-leaf/20 to-leaf/5',
    title: '신선한 농산물',
    description:
      '수확 정보, 재배 지역, 농장 이야기까지. 농산물의 모든 정보를 투명하게 확인할 수 있습니다.',
  },
  {
    icon: '📱',
    iconClass: 'bg-gradient-to-br from-harvest-orange/20 to-harvest-orange/5',
    title: '간편한 연결',
    description:
      '마음에 드는 상품이 있다면 바로 전화나 문자로 연락하세요. 복잡한 절차 없이 직접 소통할 수 있습니다.',
  },
]

export default function Values() {
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

    const cards = sectionRef.current?.querySelectorAll('.value-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="values"
      className="py-32 px-8 lg:px-16 bg-warm-white relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />

      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-forest uppercase tracking-widest mb-4">
          <span className="w-8 h-px bg-leaf" />
          핵심 가치
          <span className="w-8 h-px bg-leaf" />
        </div>
        <h2 className="font-display text-[clamp(2.25rem,4vw,3rem)] font-black text-forest-deep leading-tight tracking-tight">
          왜 밭뜰인가요?
        </h2>
        <p className="text-lg text-earth mt-5 leading-relaxed">
          복잡한 유통 과정 없이, 농부와 소비자가 직접 만나는 가장 신선한 방법
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="value-card bg-cream rounded-3xl p-10 relative overflow-hidden border border-transparent transition-all duration-500 ease-out-expo opacity-0 translate-y-8 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(45,90,39,0.12)] hover:border-leaf/20 group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest to-leaf opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            <div
              className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-6 transition-transform duration-400 ease-out-back group-hover:scale-110 group-hover:rotate-[-5deg] ${value.iconClass}`}
            >
              {value.icon}
            </div>
            <h3 className="font-display text-2xl font-bold text-forest-deep mb-3">
              {value.title}
            </h3>
            <p className="text-earth leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .value-card.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
