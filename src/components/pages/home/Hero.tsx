import { MotionDiv } from '@/components/animations/MotionDiv'
import { MotionP } from '@/components/animations/MotionP'
import SpringText from '@/components/animations/SpringText'
import GridBackground from '@/components/animations/GridBackground'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section aria-label="Hero Section" className="relative w-full min-h-screen mt-12">
        <GridBackground>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            <h1 className="text-center max-w-4xl space-y-4">
              <SpringText 
                text="Rapidwork Solutions"
                className="block text-2xl md:text-3xl mb-4 text-primary-200"
                delay={0}
                key="title"
              />
              <div className="overflow-hidden">
                <SpringText 
                  text="Building Tomorrow's "
                  delay={3}
                  key="subtitle-1"
                />
                <SpringText 
                  text="Digital Solutions"
                  className="bg-gradient-to-r from-primary-200 to-secondary-500 bg-clip-text text-white"
                  delay={6}
                  key="subtitle-2"
                />
              </div>
            </h1>
          </MotionDiv>

          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-2xl mx-auto text-center"
          >
            Enterprise IT Services & Custom Software Development
          </MotionP>
        </GridBackground>
      </section>
    </>
  )
}

export default Hero