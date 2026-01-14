'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#values', label: '서비스 소개' },
  { href: '#categories', label: '카테고리' },
  { href: '#products', label: '상품' },
  { href: '#cta', label: '시작하기' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'py-3'
            : 'py-5 md:py-6'
        }`}
      >
        <div className={`mx-4 md:mx-8 lg:mx-12 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg'
            : 'bg-transparent'
        }`}>
          <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group relative z-10">
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-forest to-leaf-light rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-glow-sm"
              >
                🌾
              </motion.div>
              <span className="font-display text-xl md:text-2xl font-bold text-forest-deep tracking-tight">
                밭뜰
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="relative px-5 py-2.5 text-earth-dark font-medium text-[0.95rem] rounded-xl transition-all duration-300 hover:bg-forest/5 hover:text-forest group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-leaf scale-0 transition-transform duration-300 group-hover:scale-100" />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#cta"
                  className="btn-primary px-6 py-3 text-sm flex items-center gap-2"
                >
                  <span>시작하기</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-12 h-12 rounded-xl bg-forest/5 flex flex-col items-center justify-center gap-1.5 relative z-10"
              aria-label="메뉴 열기"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-forest-deep rounded-full transition-colors"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-5 h-0.5 bg-forest-deep rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-forest-deep rounded-full transition-colors"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-forest-deep/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-cream shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6 safe-bottom">
                {/* Nav Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <a
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-medium text-earth-dark hover:bg-forest/5 hover:text-forest transition-all duration-300 group"
                        >
                          <span className="w-2 h-2 rounded-full bg-leaf/50 group-hover:bg-leaf group-hover:scale-125 transition-all" />
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <Link
                    href="#cta"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full py-4 text-center block"
                  >
                    <span>판매 시작하기</span>
                  </Link>
                  <Link
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-secondary w-full py-4 text-center block"
                  >
                    <span>상품 둘러보기</span>
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-6 border-t border-forest/10"
                >
                  <p className="text-sm text-earth text-center">
                    문의: hello@battteul.kr
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
