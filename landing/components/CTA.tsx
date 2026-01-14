'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const features = {
  seller: [
    { icon: '✓', text: '무료 상품 등록' },
    { icon: '✓', text: '전화/문자로 직접 소통' },
    { icon: '✓', text: '판매 수수료 없음' },
  ],
  buyer: [
    { icon: '✓', text: '산지 직송 신선함' },
    { icon: '✓', text: '생산자 정보 확인' },
    { icon: '✓', text: '관심 상품 저장' },
  ],
}

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

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-cream relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />
        <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-forest/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-harvest-orange/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-display-lg font-bold text-forest-deep leading-tight mb-4">
            지금 바로 <span className="gradient-text">시작</span>하세요
          </h2>
          <p className="text-lg text-earth max-w-xl mx-auto">
            농부와 소비자 모두를 위한 새로운 연결이 시작됩니다
          </p>
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-4 md:gap-6"
        >
          {/* Seller CTA */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group relative"
          >
            <div className="relative p-8 md:p-12 lg:p-14 rounded-4xl md:rounded-5xl overflow-hidden bg-gradient-to-br from-forest-deep via-forest to-forest-light text-white shadow-2xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(107,189,69,0.2)_0%,transparent_40%)]" />

              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Floating Emoji */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-8 md:-right-4 -bottom-8 md:-bottom-4 text-[10rem] md:text-[12rem] opacity-10"
              >
                🌾
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-leaf-light mb-4">
                  🧑‍🌾 판매자로 시작
                </div>

                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                  직접 재배한 농산물,
                  <br />
                  직접 판매하세요
                </h3>

                <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6 md:mb-8 max-w-sm">
                  복잡한 유통 과정 없이 소비자에게 직접 판매하고, 정당한 가치를 인정받으세요.
                </p>

                <ul className="space-y-3 mb-8 md:mb-10">
                  {features.seller.map((item) => (
                    <motion.li
                      key={item.text}
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                        {item.icon}
                      </span>
                      <span className="text-sm md:text-base">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white text-forest-deep shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <span>판매 시작하기</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Buyer CTA */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group relative"
          >
            <div className="relative p-8 md:p-12 lg:p-14 rounded-4xl md:rounded-5xl overflow-hidden bg-gradient-to-br from-earth-dark via-earth to-earth-warm text-white shadow-2xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,53,0.15)_0%,transparent_40%)]" />

              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Floating Emoji */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-8 md:-right-4 -bottom-8 md:-bottom-4 text-[10rem] md:text-[12rem] opacity-10"
              >
                🛒
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-harvest-yellow mb-4">
                  🥗 구매자로 시작
                </div>

                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                  농부에게 직접,
                  <br />
                  신선함을 받아보세요
                </h3>

                <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6 md:mb-8 max-w-sm">
                  중간 유통 마진 없이 합리적인 가격으로 신선한 농산물을 구매하세요.
                </p>

                <ul className="space-y-3 mb-8 md:mb-10">
                  {features.buyer.map((item) => (
                    <motion.li
                      key={item.text}
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                        {item.icon}
                      </span>
                      <span className="text-sm md:text-base">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#products"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white text-earth-dark shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <span>둘러보기</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-10 px-6 py-4 rounded-2xl bg-forest/5">
            {[
              { icon: '🔒', text: '안전한 직거래' },
              { icon: '📞', text: '직접 소통' },
              { icon: '💚', text: '수수료 0%' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-sm font-medium text-forest">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
