"use client"
import { MotionDiv } from '@/components/animations/MotionDiv'
import { Button } from '@/components/ui/button'
import { ArrowRight, Bot } from 'lucide-react'

const stats = [
  { number: "100+", label: "Happy Clients", description: "Across various Countries" },
  { number: "350+", label: "Projects Delivered", description: "On Time & Budget" },
  { number: "315+", label: "5-Star Reviews", description: "Client Satisfaction" },
  { number: "25+", label: "Employees", description: "Tech Specialists" }
]

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

              <div className="flex flex-wrap gap-4">
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
            </MotionDiv>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <MotionDiv
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mt-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/60">
                    {stat.description}
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
