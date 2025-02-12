"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export const MotionSection = React.forwardRef<HTMLElement, HTMLMotionProps<"section">>(
  (props, ref) => <motion.section ref={ref} {...props} />
);

MotionSection.displayName = "MotionSection";

export default MotionSection; 