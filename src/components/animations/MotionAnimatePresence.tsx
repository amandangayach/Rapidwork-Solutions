"use client"
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface MotionAnimatePresenceProps {
  children: ReactNode;
  mode?: "sync" | "wait" | "popLayout";
  initial?: boolean;
  onExitComplete?: () => void;
}

const MotionAnimatePresence = ({
  children,
  mode = "sync",
  initial = true,
  onExitComplete,
}: MotionAnimatePresenceProps) => {
  return (
    <AnimatePresence
      mode={mode}
      initial={initial}
      onExitComplete={onExitComplete}
    >
      {children}
    </AnimatePresence>
  );
};

export default MotionAnimatePresence;
