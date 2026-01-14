'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  service: [
    { label: '전체 상품', href: '#products' },
    { label: '카테고리', href: '#categories' },
    { label: '지역별 검색', href: '#' },
    { label: '인기 상품', href: '#' },
  ],
  seller: [
    { label: '판매 시작하기', href: '#cta' },
    { label: '상품 등록', href: '#' },
    { label: '판매자 가이드', href: '#' },
    { label: '자주 묻는 질문', href: '#' },
  ],
  support: [
    { label: '공지사항', href: '#' },
    { label: '1:1 문의', href: '#' },
    { label: '이용약관', href: '#' },
    { label: '개인정보처리방침', href: '#' },
  ],
}

const socialLinks = [
  { emoji: '📘', label: 'Facebook', href: '#' },
  { emoji: '📸', label: 'Instagram', href: '#' },
  { emoji: '🐦', label: 'Twitter', href: '#' },
  { emoji: '📺', label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-leaf/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-forest-light/10 to-transparent blur-3xl" />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  새로운 소식을 받아보세요
                </h3>
                <p className="text-white/70 text-sm">
                  신선한 농산물 정보와 특별 혜택을 알려드립니다
                </p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 md:w-64 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-leaf transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl bg-leaf text-forest-deep font-semibold hover:bg-leaf-light transition-colors"
                >
                  구독
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
              <Link href="/" className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-leaf to-forest-light rounded-xl flex items-center justify-center text-xl">
                  🌾
                </div>
                <span className="font-display text-2xl font-bold">밭뜰</span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
                밭에서 뜰로, 농부와 소비자를 직접 연결하는 신선한 농산물 직거래 플랫폼
              </p>
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-lg hover:bg-leaf transition-colors"
                    aria-label={link.label}
                  >
                    {link.emoji}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Service Links */}
            <div>
              <h4 className="font-display text-base font-bold mb-4 text-white">
                서비스
              </h4>
              <ul className="space-y-3">
                {footerLinks.service.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-leaf-light hover:pl-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seller Links */}
            <div>
              <h4 className="font-display text-base font-bold mb-4 text-white">
                판매자
              </h4>
              <ul className="space-y-3">
                {footerLinks.seller.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-leaf-light hover:pl-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-display text-base font-bold mb-4 text-white">
                고객지원
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-leaf-light hover:pl-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <span>© 2024 밭뜰(BatTteul).</span>
                <span className="hidden md:inline">All rights reserved.</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <Link href="#" className="hover:text-leaf-light transition-colors">
                  이용약관
                </Link>
                <Link href="#" className="hover:text-leaf-light transition-colors">
                  개인정보처리방침
                </Link>
                <Link href="#" className="hover:text-leaf-light transition-colors">
                  사업자정보
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
