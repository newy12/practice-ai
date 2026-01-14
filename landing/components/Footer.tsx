import Link from 'next/link'

const footerLinks = {
  service: [
    { label: '전체 상품', href: '#' },
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

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white pt-20 pb-8 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-leaf to-forest-light rounded-xl flex items-center justify-center text-2xl">
                🌾
              </div>
              <span className="font-display text-[1.75rem] font-black">밭뜰</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              밭에서 뜰로, 농부와 소비자를 직접 연결하는 신선한 농산물 직거래
              플랫폼입니다.
            </p>
            <div className="flex gap-3">
              {['📘', '📸', '🐦', '📺'].map((emoji, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ease-out-back hover:bg-leaf hover:-translate-y-1"
                >
                  {emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">서비스</h4>
            <ul className="space-y-3.5">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-[0.95rem] transition-all duration-300 hover:text-leaf-light hover:pl-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Seller Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">판매자</h4>
            <ul className="space-y-3.5">
              {footerLinks.seller.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-[0.95rem] transition-all duration-300 hover:text-leaf-light hover:pl-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">고객지원</h4>
            <ul className="space-y-3.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-[0.95rem] transition-all duration-300 hover:text-leaf-light hover:pl-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-white/50 text-sm gap-4">
          <span>© 2024 밭뜰(BatTteul). All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-leaf-light">
              이용약관
            </Link>
            <Link href="#" className="transition-colors hover:text-leaf-light">
              개인정보처리방침
            </Link>
            <Link href="#" className="transition-colors hover:text-leaf-light">
              사업자정보
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
