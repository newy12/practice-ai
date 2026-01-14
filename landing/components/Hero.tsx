'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const floatingItems = [
  { emoji: '🍎', delay: 0, x: '10%', y: '15%', size: 'text-4xl md:text-5xl' },
  { emoji: '🥬', delay: 0.5, x: '85%', y: '20%', size: 'text-3xl md:text-4xl' },
  { emoji: '🍊', delay: 1, x: '75%', y: '70%', size: 'text-4xl md:text-6xl' },
  { emoji: '🌽', delay: 1.5, x: '15%', y: '75%', size: 'text-3xl md:text-5xl' },
  { emoji: '🍇', delay: 2, x: '90%', y: '45%', size: 'text-3xl md:text-4xl' },
]

const stats = [
  { number: '1,200+', label: '등록된 농가', color: 'text-forest' },
  { number: '8,500+', label: '신선한 상품', color: 'text-leaf' },
  { number: '50,000+', label: '만족한 고객', color: 'text-harvest-orange' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="min-h-[100svh] flex items-center relative pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-cream to-cream-dark" />

        {/* Animated Gradient Orbs */}
        <motion.div
          style={{ y }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-radial from-leaf/20 via-leaf/5 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y }}
          className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-radial from-harvest-orange/15 via-harvest-orange/5 to-transparent blur-3xl"
        />

        {/* Floating Emojis */}
        {floatingItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.8, ease: 'easeOut' }}
            className={`absolute ${item.size} hidden md:block`}
            style={{ left: item.x, top: item.y }}
          >
            <motion.span
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: item.delay,
                ease: 'easeInOut',
              }}
              className="block drop-shadow-lg"
            >
              {item.emoji}
            </motion.span>
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(26, 77, 20, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 77, 20, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 border border-forest/10 mb-6 md:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-leaf opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-leaf" />
              </span>
              <span className="text-sm font-medium text-forest">
                농부와 소비자를 잇는 새로운 연결
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-display-xl font-bold text-forest-deep mb-6 md:mb-8 text-balance"
            >
              밭에서 뜰로,
              <br />
              <span className="gradient-text">신선함</span>을
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              직접 전해드립니다
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-earth leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0"
            >
              중간 유통 없이 농부가 직접 재배한 신선한 과일, 채소를
              소비자에게 바로 전달합니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#products" className="btn-primary px-8 py-4 text-base flex items-center justify-center gap-3 group">
                <span>상품 둘러보기</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Link>
              <Link href="#cta" className="btn-secondary px-8 py-4 text-base flex items-center justify-center gap-2">
                <span>판매자로 시작</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-forest/10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className={`font-display text-2xl md:text-4xl font-bold ${stat.color} leading-none`}>
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-earth mt-1 md:mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Visual Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-leaf/30 to-forest/30 blur-3xl scale-90 rounded-full" />

              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden bg-gradient-to-br from-leaf-light via-leaf to-forest shadow-2xl"
              >
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,transparent_40%)]" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 md:p-8">
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-[6rem] md:text-[8rem] lg:text-[10rem] drop-shadow-2xl"
                  >
                    🧑‍🌾
                  </motion.div>
                  <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg mt-4">
                    신선한 농산물
                    <br />
                    직접 전달
                  </p>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -left-4 md:-left-8 top-[20%] z-10"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass rounded-2xl md:rounded-3xl p-3 md:p-5 flex items-center gap-3 md:gap-4 shadow-float"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-leaf/20 to-forest/10 flex items-center justify-center text-xl md:text-3xl">
                    🥬
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base text-forest-deep">
                      오늘의 신선 채소
                    </div>
                    <div className="text-xs md:text-sm text-earth">
                      방금 수확했어요
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -right-4 md:-right-8 bottom-[25%] z-10"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="glass rounded-2xl md:rounded-3xl p-3 md:p-5 flex items-center gap-3 md:gap-4 shadow-float"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-harvest-orange/20 to-harvest-orange/5 flex items-center justify-center text-xl md:text-3xl">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base text-forest-deep">
                      바로 연결
                    </div>
                    <div className="text-xs md:text-sm text-earth">
                      전화 · 문자
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 z-10"
              >
                <div className="glass-dark rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-3">
                  <div className="flex -space-x-2">
                    {['🧑', '👩', '👨'].map((emoji, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-leaf to-forest flex items-center justify-center text-xs md:text-sm border-2 border-forest-deep"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white">
                    1,200+ 농가 참여 중
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-earth uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-forest/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-forest/50"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
