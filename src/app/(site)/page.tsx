import Hero from '@/components/pages/home/Hero'
import About from '@/components/pages/home/About'
import Services from '@/components/pages/home/Services'
import CTA from '@/components/pages/home/CTA'
import Contact from '@/components/pages/home/Contact'
import ScrollingText from '@/components/pages/home/ScrollingText'
import Review from '@/components/pages/home/Review'

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollingText />
      <About />
      <Services />
      <CTA />
      <Review />
      <Contact />
    </main>
  )
}
