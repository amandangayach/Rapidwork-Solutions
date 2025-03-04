"use client"
import { MotionDiv } from '@/components/animations/MotionDiv'
import { MotionP } from '@/components/animations/MotionP'
import React from 'react'
import { LampContainer } from '@/components/animations/lamp'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section aria-label="Hero Section" className="relative w-full min-h-screen">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="space-y-4 text-center"
        >
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Rapidwork Solutions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          Enlighten Businesses to Digital World
          </p>
        </motion.div>
      </LampContainer>
    </section>
  )
}

export default Hero