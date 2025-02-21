'use client'
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <div
      ref={containerRef}
      className="py-24 flex flex-col items-center justify-center overflow-hidden bg-primary"
    >
      <div className="relative flex flex-col gap-4 text-4xl md:text-6xl font-bold">
        <motion.div
          style={{ x: x1 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
        >
          Transforming Businesses
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent"
        >
          Through Innovation
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingText;
