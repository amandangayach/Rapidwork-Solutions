'use client'
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Modify these transformations to start from off-screen and pass through center
  const x1 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [600, 0, 0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-600, 0, 0, 600]);

  return (
    <div
      ref={containerRef}
      className="py-24 flex flex-col items-center justify-center overflow-hidden bg-primary"
    >
      <div className="relative flex flex-col gap-4 text-4xl md:text-6xl font-bold">
        <motion.div
          style={{ x: x1 }}
          className="=text-center text-[#15c3e0]"
        >
          Transforming Businesses
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="text-[#15c3e0] text-center"
        >
          Through Innovation
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingText;
