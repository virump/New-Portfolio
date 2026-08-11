"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-violet-500 to-indigo-400 origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
