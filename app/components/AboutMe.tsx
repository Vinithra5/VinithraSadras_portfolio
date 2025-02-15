"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#0D1B2A] text-[#E0E1DD] px-6">
      
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 text-left"
      >
        <h2 className="text-3xl font-semibold text-[#FFFFFF] mb-12">/ about me</h2>
        <p className="text-lg text-[#AAB3BE] leading-relaxed">
          I am currently a <span className="font-bold text-[#F4A261]">Software Developer</span>, passionate about crafting clean, scalable, and efficient applications. 
          Currently pursuing my <span className="font-bold text-[#F4A261]">Master’s in Computer Science at Syracuse University</span>, 
          I enjoy solving complex problems and creating impactful digital solutions.
        </p>
        <h3 className="mt-4 text-xl text-[#F4A261]">Technologies I Work With:</h3>
        <ul className="grid grid-cols-2 gap-2 text-lg text-[#AAB3BE] mt-2">
          <li>• Python</li>
          <li>• Java</li>
          <li>• React.js</li>
          <li>• Next.js</li>
          <li>• SQL</li>
          <li>• AWS</li>
        </ul>
      </motion.div>

      {/* Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
        className="md:w-1/3 mt-8 md:mt-0"
      >
        <Image 
          src="/images/your-image.png"  // ✅ Replace with your actual image path
          alt="Vinithra Sadras"
          width={250}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      
    </section>
  );
}
