import Hero from '@/components/pages/home/Hero'
import About from '@/components/pages/home/About'
import Services from '@/components/pages/home/Services'
import CTA from '@/components/pages/home/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CTA />
    </main>
  )
}
