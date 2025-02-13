import { MotionDiv } from '@/components/animations/MotionDiv'
import { MotionP } from '@/components/animations/MotionP'
import GridBackground from '@/components/animations/GridBackground'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section aria-label="Hero Section" className="relative w-full min-h-screen mt-12">
        <GridBackground>
          <MotionDiv
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="text-3xl px-8 md:px-0 md:text-6xl font-bold text-white"
          >
            <h1 className="text-center max-w-4xl space-y-4">
              <span className="block text-2xl md:text-3xl mb-4 text-primary-200">
                Rapidwork Solutions
              </span>
              <div>
                <span className="inline-block whitespace-nowrap">
                  Building Tomorrow's{" "}
                </span>
                <span className="inline-block whitespace-nowrap bg-gradient-to-r from-primary-200 to-secondary-500 bg-clip-text text-transparent pb-4">
                  Digital Solutions
                </span>
              </div>
            </h1>
          </MotionDiv>

          <MotionP
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: "easeOut"
            }}
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