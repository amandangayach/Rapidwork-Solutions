'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'

// Generate smooth data points for the chart
const generateSmoothData = () => {
    const baseData = [20, 25, 35, 40, 48, 55, 63, 70, 78, 85, 92, 100]
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  // Create dummy monthly data points with proper formatting
  return baseData.map((value, index) => {
    // Add some small random variation to make the chart look more natural
    return {
      month: months[index],
      value: value + Math.random() * 5,
    }
  })
}

const GrowthChart = () => {
  const [chartData, setChartData] = useState<Array<{ month: string, value: number }>>([])
  const [displayData, setDisplayData] = useState<Array<{ month: string, value: number }>>([])
  const [loaded, setLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Create data for chart
    const fullData = generateSmoothData()
    setChartData(fullData)
    
    // Initialize with empty values for growing animation
    setDisplayData(fullData.map(item => ({ ...item, value: 0 })))
    
    // Set up intersection observer to detect when chart is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          // Set loaded after a small delay to trigger initial fade-in
          const timer = setTimeout(() => {
            setLoaded(true)
            
            // Start the growing animation once visible
            startGrowingAnimation(fullData);
          }, 300)
          
          observer.disconnect()
          return () => clearTimeout(timer)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    )
    
    if (chartRef.current) {
      observer.observe(chartRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  // Function to animate the growth of the chart
  const startGrowingAnimation = (fullData: Array<{ month: string, value: number }>) => {
    const totalDuration = 2000; // Total animation duration in ms
    const steps = 25; // Number of animation steps
    const stepDuration = totalDuration / steps;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Calculate current height for each data point based on progress
      const currentData = fullData.map(item => ({
        month: item.month,
        value: item.value * Math.min(1, progress * (1 + (fullData.indexOf(item) / fullData.length)))
      }));
      
      setDisplayData(currentData);
      
      if (currentStep >= steps) {
        clearInterval(interval);
        // Ensure final state shows exact values
        setDisplayData(fullData);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  };

  return (
    <div className="w-full h-full pt-8" ref={chartRef}>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: isVisible && loaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={displayData}
            margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                <stop offset="50%" stopColor="#818cf8" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#c7d2fe" stopOpacity={0.1} />
              </linearGradient>
              <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#4338ca" floodOpacity="0.3"/>
              </filter>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="rgba(255,255,255,0.1)" 
            />
            
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }}
              dy={10}
            />
            
            <YAxis 
              hide={true}
              domain={[0, 'dataMax + 5']}
            />
            
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length && payload[0]?.value !== undefined) {
                  return (
                    <div className="bg-indigo-900/50 backdrop-blur-xl px-4 py-2 rounded-lg border border-indigo-400/20 text-white shadow-lg">
                      <p className="font-semibold text-indigo-200">{payload[0].payload.month}</p>
                      <p className="font-medium text-white text-lg">{typeof payload[0].value === 'number' ? payload[0].value.toFixed(1) : payload[0].value}%</p>
                    </div>
                  )
                }
                return null
              }}
              cursor={{stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1, strokeDasharray: '4 4'}}
            />
            
            <Area
              type="monotoneX"
              dataKey="value"
              stroke="#818cf8"
              strokeWidth={3}
              fill="url(#colorGradient)"
              filter="url(#shadow)"
              isAnimationActive={false} // We're handling animation manually
              activeDot={{ 
                r: 8, 
                stroke: '#c7d2fe', 
                strokeWidth: 2, 
                fill: '#4f46e5',
                strokeOpacity: 0.8,
                className: "animate-pulse"
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}

export default GrowthChart
