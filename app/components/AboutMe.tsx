"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen px-6 md:px-20 bg-[#1B4543] text-[#E0E1DD] pt-20 pb-16">
      {/* ✅ Left-Aligned Heading with Spacing */}
      <h2 className="text-4xl font-bold text-[#F0BE6F] mb-12">About Me</h2>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* ✅ Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-3/5 text-left"
        >
          <p className="text-lg text-[#AAB3BE] leading-relaxed mb-6">
            I am currently a <span className="font-bold text-[#F0BE6F]">Software Developer</span>, passionate about
            crafting clean, scalable, and efficient applications. Currently pursuing my{" "}
            <span className="font-bold text-[#F0BE6F]">Master's in Computer Science at Syracuse University</span>, I
            enjoy solving complex problems and creating impactful digital solutions.
          </p>
          <h3 className="mt-6 text-xl text-[#F0BE6F]">Technologies I Work With:</h3>
          <ul className="grid grid-cols-2 gap-2 text-lg text-[#AAB3BE] mt-3">
            <li>• Python</li>
            <li>• Java</li>
            <li>• React.js</li>
            <li>• Next.js</li>
            <li>• SQL</li>
            <li>• AWS</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/3 flex justify-end mt-10 md:mt-0"
        >
          <Image
            src="/images/profile-photo.jpg"
            alt="Vinithra Sadras"
            width={250}
            height={250}
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
