"use client";
import { motion } from "framer-motion";

export default function GlowingDots() {
  return (
    <div className="relative w-20 h-20">
      <motion.div
        animate={{
          rotate: 360,
          transition: { repeat: Infinity, duration: 6, ease: "linear" },
        }}
      >
        {/* 6 Orbiting Dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#F4A261] rounded-full shadow-md"
            initial={{
              x: Math.cos((i / 6) * (2 * Math.PI)) * 40,
              y: Math.sin((i / 6) * (2 * Math.PI)) * 40,
            }}
            animate={{
              x: Math.cos((i / 6) * (2 * Math.PI)) * 50,
              y: Math.sin((i / 6) * (2 * Math.PI)) * 50,
              transition: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                repeatType: "mirror",
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
