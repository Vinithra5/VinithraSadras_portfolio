"use client";

import { Typewriter } from "react-simple-typewriter";
import GlowingDots from "@/components/GlowingDots";  // ✅ Animated dots component
import { Lora } from "next/font/google";  // ✅ Import Lora font

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] });

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-[#0D1B2A] text-[#E0E1DD] pb-10">
      
      {/* Animated Dots */}
      <GlowingDots />

      {/* Heading */}
      <h1 className="text-5xl font-bold">
        Hi, <span className="text-[#F4A261]">Vinni</span> here.
      </h1>

      {/* Animated Quote */}
      <span className={`${lora.className} mt-6 text-2xl text-[#F4A261]`}>
        <Typewriter
          words={[
            "I create stuff sometimes.",
            "I love building things.",
            "I solve problems with code."
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
        />
      </span>

      {/* Description */}
      <p className={`${lora.className} mt-8 max-w-2xl text-lg text-[#AAB3BE] leading-relaxed text-center`}>
        A software engineer passionate about turning ideas into impactful solutions.
        Whether it's designing intuitive interfaces or developing scalable applications, 
        I bring creativity and logic together to build something meaningful.
      </p>

      {/* Outlined "Ping Me!" Button */}
      <a href="mailto:vsadras@syr.edu" 
         className="mt-6 px-6 py-3 rounded-lg border-2 border-[#F4A261] text-[#F4A261] font-semibold text-lg shadow-md 
                    hover:bg-[#F4A261] hover:text-[#0D1B2A] transition-all duration-300">
         Ping Me!
      </a>

    </section>
  );
}
