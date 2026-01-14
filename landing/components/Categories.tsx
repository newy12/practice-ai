'use client'

import { useEffect, useRef } from 'react'

const categories = [
  {
    emoji: '🍎',
    name: '과일',
    count: '2,340개 상품',
    gradient: 'from-[rgba(192,57,43,0.85)] to-[rgba(231,76,60,0.7)]',
  },
  {
    emoji: '🥬',
    name: '채소',
    count: '3,150개 상품',
    gradient: 'from-[rgba(39,174,96,0.85)] to-[rgba(46,204,113,0.7)]',
  },
  {
    emoji: '🌾',
    name: '곡물',
    count: '1,820개 상품',
    gradient: 'from-[rgba(139,105,20,0.85)] to-[rgba(211,84,0,0.7)]',
  },
  {
    emoji: '🍯',
    name: '기타',
    count: '1,190개 상품',
    gradient: 'from-[rgba(45,90,39,0.85)] to-[rgba(124,179,66,0.7)]',
  },
]

export default function Categories() {
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

    const cards = sectionRef.current?.querySelectorAll('.category-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="py-32 px-8 lg:px-16 bg-gradient-to-b from-cream to-cream-dark"
    >
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-forest uppercase tracking-widest mb-4">
          <span className="w-8 h-px bg-leaf" />
          카테고리
          <span className="w-8 h-px bg-leaf" />
        </div>
        <h2 className="font-display text-[clamp(2.25rem,4vw,3rem)] font-black text-forest-deep leading-tight tracking-tight">
          어떤 농산물을 찾으세요?
        </h2>
        <p className="text-lg text-earth mt-5 leading-relaxed">
          과일부터 곡물까지, 전국 농가의 다양한 농산물을 만나보세요
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="category-card relative aspect-square rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 ease-out-expo opacity-0 translate-y-8 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.gradient} z-10`}
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center p-8">
              <div className="text-6xl lg:text-7xl mb-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-transform duration-400 ease-out-back group-hover:scale-[1.2] group-hover:rotate-[-5deg]">
                {category.emoji}
              </div>
              <div className="font-display text-2xl lg:text-3xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                {category.name}
              </div>
              <div className="text-sm opacity-90 mt-2">{category.count}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .category-card.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
