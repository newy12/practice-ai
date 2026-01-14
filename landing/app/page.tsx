import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Values from '@/components/Values'
import Categories from '@/components/Categories'
import Products from '@/components/Products'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Values />
      <Categories />
      <Products />
      <CTA />
      <Footer />
    </main>
  )
}
