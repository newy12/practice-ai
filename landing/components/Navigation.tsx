'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6 flex justify-between items-center transition-all duration-500 ease-out-expo ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(45,90,39,0.08)]'
          : ''
      }`}
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-12 h-12 bg-gradient-to-br from-forest to-leaf rounded-xl flex items-center justify-center text-2xl shadow-[0_4px_15px_rgba(45,90,39,0.3)] transition-transform duration-400 ease-out-back group-hover:rotate-[-5deg] group-hover:scale-105">
          🌾
        </div>
        <span className="font-display text-[1.75rem] font-black text-forest-deep tracking-tight">
          밭뜰
        </span>
      </Link>

      <ul className="hidden lg:flex gap-10">
        {[
          { href: '#values', label: '서비스 소개' },
          { href: '#categories', label: '카테고리' },
          { href: '#products', label: '상품' },
          { href: '#cta', label: '시작하기' },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-earth-dark font-medium text-[0.95rem] py-2 transition-colors hover:text-forest group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-leaf transition-all duration-400 ease-out-expo group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <Link
          href="#cta"
          className="px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-br from-forest to-forest-light text-white shadow-[0_4px_20px_rgba(45,90,39,0.35)] transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,90,39,0.45)]"
        >
          시작하기
        </Link>
      </div>
    </nav>
  )
}
