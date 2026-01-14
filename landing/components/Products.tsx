'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const products = [
  {
    emoji: '🍊',
    badge: 'NEW',
    badgeColor: 'bg-harvest-orange',
    region: '제주특별자치도',
    name: '황금향 5kg (가정용)',
    seller: '제주 김귤농장',
    sellerEmoji: '👨‍🌾',
    price: '35,000',
    gradient: 'from-[#ffeaa7] to-[#fdcb6e]',
  },
  {
    emoji: '🥬',
    badge: '인기',
    badgeColor: 'bg-leaf',
    region: '강원특별자치도',
    name: '고랭지 배추 10포기',
    seller: '평창 이네농원',
    sellerEmoji: '👩‍🌾',
    price: '28,000',
    gradient: 'from-[#a8e6cf] to-[#55a3a4]',
  },
  {
    emoji: '🍅',
    badge: '협의가능',
    badgeColor: 'bg-earth',
    region: '충청남도',
    name: '완숙 토마토 3kg',
    seller: '부여 박씨농장',
    sellerEmoji: '👨‍🌾',
    price: '22,000',
    gradient: 'from-[#ff7675] to-[#d63031]',
  },
  {
    emoji: '🍇',
    badge: 'NEW',
    badgeColor: 'bg-harvest-orange',
    region: '경상북도',
    name: '샤인머스캣 2kg',
    seller: '김천 포도농원',
    sellerEmoji: '👩‍🌾',
    price: '45,000',
    gradient: 'from-[#dfe6e9] to-[#b8e994]',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [favorites, setFavorites] = useState<Record<number, boolean>>({})
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const toggleFavorite = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setFavorites((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-warm-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/10 to-transparent" />
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-leaf/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-3 text-sm font-semibold text-forest uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-leaf" />
              최신 상품
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-leaf" />
            </div>
            <h2 className="font-display text-display-lg font-bold text-forest-deep leading-tight">
              방금 올라온
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              <span className="gradient-text-static">신선한 농산물</span>
            </h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#"
              className="btn-secondary px-6 py-3 text-sm inline-flex items-center gap-2"
            >
              <span>전체 보기</span>
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="bg-cream rounded-3xl md:rounded-4xl overflow-hidden border border-forest/5 hover:border-leaf/20 hover:shadow-card-hover transition-all duration-500"
              >
                {/* Product Image */}
                <div className={`aspect-square relative overflow-hidden bg-gradient-to-br ${product.gradient}`}>
                  {/* Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px',
                    }}
                  />

                  {/* Emoji */}
                  <motion.div
                    animate={hoveredIndex === index ? { scale: 1.15, rotate: [0, -5, 5, 0] } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl lg:text-8xl drop-shadow-lg"
                  >
                    {product.emoji}
                  </motion.div>

                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`absolute top-3 md:top-4 left-3 md:left-4 ${product.badgeColor} text-white px-3 py-1 md:py-1.5 rounded-full text-xs font-semibold shadow-lg`}
                  >
                    {product.badge}
                  </motion.span>

                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => toggleFavorite(index, e)}
                    className="absolute top-3 md:top-4 right-3 md:right-4 w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-lg transition-colors hover:bg-harvest-red hover:text-white"
                  >
                    {favorites[index] ? '❤️' : '🤍'}
                  </motion.button>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-6">
                  {/* Region */}
                  <div className="flex items-center gap-1 text-xs text-earth mb-1.5">
                    <span>📍</span>
                    <span>{product.region}</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-base md:text-lg font-bold text-forest-deep mb-3 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
                    {product.name}
                  </h3>

                  {/* Seller */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-leaf-light to-forest flex items-center justify-center text-xs">
                      {product.sellerEmoji}
                    </div>
                    <span className="text-xs md:text-sm text-earth truncate">
                      {product.seller}
                    </span>
                  </div>

                  {/* Price & Action */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-display text-lg md:text-xl font-bold text-forest">
                        {product.price}
                      </span>
                      <span className="text-sm text-earth ml-0.5">원</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-gradient-to-br from-forest to-forest-light text-white flex items-center justify-center text-lg md:text-xl shadow-glow-sm hover:shadow-glow-md transition-shadow"
                    >
                      📞
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-10 md:mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-forest/5 text-forest font-semibold hover:bg-forest/10 transition-colors"
          >
            <span>더 많은 상품 보기</span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
