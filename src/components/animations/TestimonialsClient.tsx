'use client'
import { useState, useEffect } from "react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { MotionDiv } from "@/components/animations/MotionDiv"
import type { StaticImageData } from "next/image"

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: StaticImageData | string;
};

export default function TestimonialsClient({
  testimonials
}: {
  testimonials: Testimonial[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen bg-neutral-50 overflow-hidden pt-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <MotionDiv 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Label */}
          <div className="flex relative items-center gap-2 text-secondary mb-6 justify-center">
            <span className="h-[2px] w-8 z-20 bg-secondary"></span>
            <span className="font-medium z-20">Testimonials</span>
            <span className="h-[2px] w-8 z-20 bg-secondary"></span>
            {/* Background Text */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none z-10">
              <h2 className="text-7xl font-bold text-gray-100 leading-none whitespace-nowrap">
                What Students Say
              </h2>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Success <span className="text-primary-500">Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear directly from students who have experienced our guidance and support throughout their academic journey.
          </p>
        </MotionDiv>

        {/* Testimonials Carousel */}
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimatedTestimonials
            testimonials={testimonials}
            currentIndex={currentIndex}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </MotionDiv>
      </div>
    </section>
  )
}