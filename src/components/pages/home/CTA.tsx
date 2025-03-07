"use client"
import { MotionDiv } from '@/components/animations/MotionDiv'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import GrowthChart from './GrowthChart'

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-primary-950">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 w-full h-full opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                AI-Powered Solutions for Your{' '}
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Business Growth
                </span>
              </h2>
              
              <p className="text-lg text-white/80">
                Rapidwork Solutions is a rapidly expanding IT consultancy, leveraging cutting-edge AI and machine learning 
                technologies to transform businesses. Our team of Developers and tech consultants delivers innovative 
                solutions that drive growth and efficiency.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button 
                  size="lg"
                  className="bg-primary-500 hover:bg-primary-600"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-secondary-500 text-secondary-500 hover:bg-secondary-500/30"
                >
                  See All Services
                </Button>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center space-x-8 text-white/90">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                    <span>100+ Happy Clients</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary-400 mr-2"></div>
                    <span>350+ Projects</span>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Growth Chart */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 relative overflow-hidden h-[400px]"
            >
              <div className="absolute top-4 left-4 z-10">
                <h3 className="text-white font-medium text-lg">Business Growth</h3>
              </div>
              
              <GrowthChart />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
