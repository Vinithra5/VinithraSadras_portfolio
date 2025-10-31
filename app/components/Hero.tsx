"use client"

import { useState, useEffect } from "react"
import { Typewriter } from "react-simple-typewriter"
import { Lora } from "next/font/google"
import { motion } from "framer-motion"

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] })

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[92vh] text-center pt-32 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Hi, <span className="text-[#F0BE6F] glow-text">Vinni</span> here.
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={`${lora.className} mt-4 text-2xl text-[#F0BE6F]`}
      >
        {isClient ? (
          <Typewriter
            words={["I solve problems with code."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        ) : (
          "Loading..."
        )}
      </motion.span>
      <p className="mt-6 max-w-2xl text-lg text-[#AAB3BE] leading-relaxed">
          A curious <span className="font-bold text-[#F0BE6F]">tech enthusiast</span> who loves crafting thoughtful user
          experiences and building systems that truly make an impact.
      </p>
      <motion.a
        href="mailto:vinithrasadras01@gmail.com"
        className="mt-8 px-6 py-3 rounded-lg border-2 border-[#F0BE6F] text-[#F0BE6F] font-semibold text-lg
                   hover:bg-[#F0BE6F] hover:text-[#1B4543] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ping Me!
      </motion.a>
    </section>
  )
}
