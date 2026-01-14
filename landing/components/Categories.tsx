'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const categories = [
  {
    emoji: '🍎',
    name: '과일',
    count: '2,340',
    description: '제철 과일부터 희귀 품종까지',
    gradient: 'from-[#e63946] to-[#ff6b6b]',
    bgPattern: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)',
  },
  {
    emoji: '🥬',
    name: '채소',
    count: '3,150',
    description: '유기농 채소, 친환경 재배',
    gradient: 'from-[#2d7a24] to-[#6bbd45]',
    bgPattern: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)',
  },
  {
    emoji: '🌾',
    name: '곡물',
    count: '1,820',
    description: '갓 도정한 쌀, 잡곡류',
    gradient: 'from-[#d4a574] to-[#e8c87d]',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
  },
  {
    emoji: '🍯',
    name: '기타',
    count: '1,190',
    description: '꿀, 견과류, 가공식품',
    gradient: 'from-[#5c3d2e] to-[#8b6914]',
    bgPattern: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-radial from-leaf/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-harvest-orange/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-forest uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-leaf" />
            카테고리
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-leaf" />
          </div>
          <h2 className="font-display text-display-lg font-bold text-forest-deep leading-tight mb-5">
            어떤 농산물을 찾으세요?
          </h2>
          <p className="text-lg text-earth leading-relaxed">
            과일부터 곡물까지, 전국 농가의 다양한 농산물을 만나보세요
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className={`relative aspect-square rounded-3xl md:rounded-4xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-500`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />

                {/* Pattern Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: category.bgPattern }}
                />

                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 md:p-6">
                  {/* Emoji */}
                  <motion.div
                    animate={hoveredIndex === index ? {
                      scale: 1.2,
                      rotate: [-5, 5, -5, 0],
                    } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="text-5xl md:text-6xl lg:text-7xl mb-3 md:mb-4 drop-shadow-lg"
                  >
                    {category.emoji}
                  </motion.div>

                  {/* Name */}
                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-md">
                    {category.name}
                  </h3>

                  {/* Count Badge */}
                  <div className="mt-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs md:text-sm font-medium">
                    {category.count}개 상품
                  </div>

                  {/* Description - shows on hover */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-4 md:bottom-6 text-xs md:text-sm opacity-90 px-4"
                      >
                        {category.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-10 md:mt-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-forest/5 border border-forest/10">
            <span className="text-lg">✨</span>
            <span className="text-sm text-earth">
              총 <span className="font-semibold text-forest">8,500+</span> 개의 신선한 상품이 기다리고 있어요
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
