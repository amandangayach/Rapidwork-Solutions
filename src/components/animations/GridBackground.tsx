"use client"
import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import MotionDiv from './MotionDiv';

interface GridBackgroundProps {
  children: React.ReactNode
}

interface Strand {
  width: number;
  height: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  blur: number;
  isVertical: boolean;
  direction: 'normal' | 'reverse';
}

const GridBackground = ({ children }: GridBackgroundProps) => {
  const generateStrand = (isVertical: boolean): Strand => ({
    width: isVertical ? 2 : (Math.random() * 60 + 40),
    height: isVertical ? (Math.random() * 60 + 40) : 2,
    top: isVertical ? '-60px' : `${Math.random() * 100}%`,
    left: isVertical ? `${Math.random() * 100}%` : '-60px',
    delay: Math.random() * 2,
    duration: 1.5 + Math.random() * 2,
    blur: Math.random() * 2 + 1,
    isVertical,
    direction: Math.random() > 0.5 ? 'normal' : 'reverse'
  });

  const electricStrands = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => 
      generateStrand(i % 3 === 0)
    ), []);

  return (
    <div className="px-6 py-8 h-full flex items-center justify-center">
      <MotionDiv 
        className="relative w-full max-w-7xl mx-auto rounded-3xl bg-primary-950/90 backdrop-blur-sm overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtler Grid Background */}
        <MotionDiv 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />

        {/* Electric Strands */}
        {electricStrands.map((strand, index) => (
          <MotionDiv
            key={index}
            className="absolute bg-primary-400/50"
            style={{
              width: strand.width,
              height: strand.height,
              top: strand.top,
              left: strand.left,
              filter: `blur(${strand.blur}px)`
            }}
            animate={{
              [strand.isVertical ? 'y' : 'x']: strand.direction === 'normal' 
                ? ['0%', '1000%'] 
                : ['1000%', '0%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: strand.duration,
              repeat: Infinity,
              ease: "linear",
              delay: strand.delay,
              repeatDelay: Math.random() * 3
            }}
          />
        ))}

        {/* Add a few crossing strands for extra effect */}
        {Array.from({ length: 4 }).map((_, index) => (
          <MotionDiv
            key={`diagonal-${index}`}
            className="absolute bg-primary-400/30"
            style={{
              width: Math.random() * 40 + 30,
              height: 2,
              top: '-60px',
              left: '-60px',
              filter: `blur(${Math.random() * 2 + 1}px)`,
              transform: `rotate(${Math.random() * 60 - 30}deg)`,
              transformOrigin: 'center'
            }}
            animate={{
              x: ['0%', '1000%'],
              y: ['0%', '1000%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
              repeatDelay: Math.random() * 3
            }}
          />
        ))}

        {/* Card Border Glow */}
        <div className="absolute inset-0 rounded-3xl opacity-10"
          style={{
            background: 'linear-gradient(180deg, rgba(var(--primary-600-rgb), 0.5) 0%, transparent 100%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] p-8">
          {children}
        </div>
      </MotionDiv>
    </div>
  )
}

export default GridBackground