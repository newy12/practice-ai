'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    icon: '🤝',
    iconGradient: 'from-forest/20 to-forest/5',
    accentColor: 'bg-forest',
    title: '직거래 연결',
    description:
      '중간 유통 과정 없이 농부와 소비자를 직접 연결합니다. 합리적인 가격으로 품질 좋은 농산물을 만나보세요.',
    highlight: '수수료 0%',
  },
  {
    icon: '🌱',
    iconGradient: 'from-leaf/25 to-leaf/5',
    accentColor: 'bg-leaf',
    title: '신선한 농산물',
    description:
      '수확 정보, 재배 지역, 농장 이야기까지. 농산물의 모든 정보를 투명하게 확인할 수 있습니다.',
    highlight: '당일 수확',
  },
  {
    icon: '📱',
    iconGradient: 'from-harvest-orange/25 to-harvest-orange/5',
    accentColor: 'bg-harvest-orange',
    title: '간편한 연결',
    description:
      '마음에 드는 상품이 있다면 바로 전화나 문자로 연락하세요. 복잡한 절차 없이 직접 소통할 수 있습니다.',
    highlight: '바로 연락',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="values"
      className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-warm-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />
        <div className="absolute -top-[50%] -right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-leaf/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-harvest-orange/10 to-transparent blur-3xl" />
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
            핵심 가치
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-leaf" />
          </div>
          <h2 className="font-display text-display-lg font-bold text-forest-deep leading-tight mb-5">
            왜 <span className="gradient-text-static">밭뜰</span>인가요?
          </h2>
          <p className="text-lg text-earth leading-relaxed">
            복잡한 유통 과정 없이, 농부와 소비자가 직접 만나는
            <br className="hidden md:block" />
            가장 신선한 방법
          </p>
        </motion.div>

        {/* Value Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-4 md:gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative"
            >
              <div className="relative bg-cream rounded-3xl md:rounded-4xl p-6 md:p-10 h-full border border-transparent transition-all duration-500 hover:border-leaf/20 hover:shadow-card-hover overflow-hidden">
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${value.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-leaf/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br ${value.iconGradient} flex items-center justify-center text-3xl md:text-4xl mb-5 md:mb-6`}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Highlight Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${value.accentColor} mb-4 md:mb-5`}>
                    {value.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-forest-deep mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-earth leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Number */}
                <div className="absolute -bottom-4 -right-2 font-display text-[8rem] md:text-[10rem] font-bold text-forest/[0.03] leading-none select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-earth mb-4">
            지금 바로 시작해보세요
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="flex -space-x-1">
              {['🧑‍🌾', '👩‍🌾', '🧑‍🌾'].map((emoji, i) => (
                <span key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-leaf to-forest flex items-center justify-center text-xs border border-cream">
                  {emoji}
                </span>
              ))}
            </span>
            <span className="text-forest font-medium">1,200+ 농가</span>
            <span className="text-earth">가 이미 함께하고 있어요</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
