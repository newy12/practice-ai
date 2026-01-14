import type { Metadata, Viewport } from 'next'
import { Noto_Serif_KR } from 'next/font/google'
import './globals.css'

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fef9f3' },
    { media: '(prefers-color-scheme: dark)', color: '#0f2a0c' },
  ],
}

export const metadata: Metadata = {
  title: '밭뜰 - 밭에서 뜰로, 신선한 농산물 직거래',
  description: '중간 유통 없이 농부가 직접 재배한 신선한 과일, 채소를 소비자에게 바로 전달합니다. 믿을 수 있는 농산물 직거래 플랫폼.',
  keywords: ['농산물', '직거래', '신선식품', '과일', '채소', '농부', '산지직송', '유기농', '친환경'],
  authors: [{ name: '밭뜰' }],
  creator: '밭뜰',
  publisher: '밭뜰',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: '밭뜰 - 밭에서 뜰로, 신선한 농산물 직거래',
    description: '중간 유통 없이 농부가 직접 재배한 신선한 과일, 채소를 소비자에게 바로 전달합니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '밭뜰',
  },
  twitter: {
    card: 'summary_large_image',
    title: '밭뜰 - 밭에서 뜰로, 신선한 농산물 직거래',
    description: '중간 유통 없이 농부가 직접 재배한 신선한 과일, 채소를 소비자에게 바로 전달합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSerifKR.variable}>
      <body className="bg-cream text-earth-dark antialiased">
        {children}
      </body>
    </html>
  )
}
