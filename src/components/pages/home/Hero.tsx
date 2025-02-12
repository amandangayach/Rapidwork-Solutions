import { WavyBackground } from '@/components/animations/wavy-background'
import { MotionDiv } from '@/components/animations/MotionDiv'
import { MotionP } from '@/components/animations/MotionP'
import React from 'react'
import About from './About'

const Hero = () => {
  return (
    <>
      <section aria-label="Hero Section" className="pt-16">
        <WavyBackground className="max-w-4xl mx-auto text-center" waveOpacity={0.3}>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            <h1>
              <span className="block text-2xl md:text-3xl mb-4 text-primary-600">Rapidwork Solutions</span>
              Building Tomorrow's{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Digital Solutions</span>
            </h1>
          </MotionDiv>

          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Enterprise IT Services & Custom Software Development
          </MotionP>
        </WavyBackground>
      </section>
    </>
  )
}

export default Hero