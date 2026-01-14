'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const products = [
  {
    emoji: '🍊',
    badge: 'NEW',
    region: '제주특별자치도',
    name: '황금향 5kg (가정용)',
    seller: '제주 김귤농장',
    sellerEmoji: '👨',
    price: '35,000',
    gradient: 'from-[#ffeaa7] to-[#fdcb6e]',
  },
  {
    emoji: '🥬',
    badge: '인기',
    region: '강원특별자치도',
    name: '고랭지 배추 10포기',
    seller: '평창 이네농원',
    sellerEmoji: '👩',
    price: '28,000',
    gradient: 'from-[#a8e6cf] to-[#55a3a4]',
  },
  {
    emoji: '🍅',
    badge: '협의가능',
    region: '충청남도',
    name: '완숙 토마토 3kg',
    seller: '부여 박씨농장',
    sellerEmoji: '👨',
    price: '22,000',
    gradient: 'from-[#ff7675] to-[#d63031]',
  },
  {
    emoji: '🍇',
    badge: 'NEW',
    region: '경상북도',
    name: '샤인머스캣 2kg',
    seller: '김천 포도농원',
    sellerEmoji: '👩',
    price: '45,000',
    gradient: 'from-[#fd79a8] to-[#e84393]',
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const [favorites, setFavorites] = useState<Record<number, boolean>>({})

  const toggleFavorite = (index: number) => {
    setFavorites((prev) => ({ ...prev, [index]: !prev[index] }))
  }

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

    const cards = sectionRef.current?.querySelectorAll('.product-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-32 px-8 lg:px-16 bg-warm-white"
    >
      <div className="max-w-5xl mx-auto mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-forest uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-leaf" />
            최신 상품
            <span className="w-8 h-px bg-leaf" />
          </div>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3rem)] font-black text-forest-deep leading-tight tracking-tight">
            방금 올라온 신선한 농산물
          </h2>
        </div>
        <Link
          href="#"
          className="px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-forest text-forest transition-all duration-400 ease-out-expo hover:bg-forest hover:text-white hover:-translate-y-1"
        >
          전체 보기 →
        </Link>
      </div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={product.name}
            className="product-card bg-cream rounded-3xl overflow-hidden border border-forest/5 transition-all duration-500 ease-out-expo opacity-0 translate-y-8 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(45,90,39,0.15)] hover:border-leaf/30 group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`aspect-square relative overflow-hidden bg-gradient-to-br ${product.gradient}`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-7xl transition-transform duration-500 ease-out-expo group-hover:scale-110">
                {product.emoji}
              </div>
              <span className="absolute top-4 left-4 bg-white px-3.5 py-1.5 rounded-full text-xs font-semibold text-forest shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                {product.badge}
              </span>
              <button
                onClick={() => toggleFavorite(index)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-[0_4px_15px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 ease-out-back hover:scale-[1.15] hover:bg-harvest-red hover:text-white"
              >
                {favorites[index] ? '❤️' : '🤍'}
              </button>
            </div>
            <div className="p-6">
              <div className="text-xs text-earth mb-1">📍 {product.region}</div>
              <h3 className="font-display text-lg font-bold text-forest-deep mb-3">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-leaf-light to-forest flex items-center justify-center text-xs">
                  {product.sellerEmoji}
                </div>
                <span className="text-sm text-earth">{product.seller}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-display text-xl font-black text-forest">
                  {product.price}
                  <span className="text-sm font-medium text-earth">원</span>
                </div>
                <button className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-forest to-forest-light text-white flex items-center justify-center text-xl cursor-pointer transition-all duration-300 ease-out-back hover:scale-110 hover:rotate-[-5deg] hover:shadow-[0_8px_25px_rgba(45,90,39,0.35)]">
                  📞
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .product-card.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
