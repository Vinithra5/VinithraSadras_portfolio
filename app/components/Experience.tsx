"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col items-center justify-center min-h-screen bg-[#0D1B2A] text-[#E0E1DD] px-6">
      
      
      {/* Title */}
      <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-3xl font-semibold text-[#FFFFF] mb-12 text-left w-full"
>
  / experience
</motion.h2>


      {/* Experience Container */}
      <div className="max-w-5xl w-full flex flex-col gap-12">

        {/* Accenture Experience */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6"
        >
          {/* Left - Job Details */}
          <div className="md:w-3/4">
            <h3 className="text-2xl font-semibold text-[#F4A261]">Software Development Engineer</h3>
            <p className="text-lg text-[#AAB3BE]">Accenture, Coimbatore, India</p>
            <p className="text-sm text-[#AAB3BE] italic mb-3">Oct 2022 – Jul 2023</p>
            <ul className="list-disc pl-5 text-[#AAB3BE] space-y-2">
              <li>Worked on a project similar to HM UK’s website, focusing on feature development for seamless customer experience.</li>
              <li>Built scalable and dynamic APIs using Spring Boot and integrated AngularJS for an intuitive UI.</li>
              <li>Conducted bug detection and debugging, reducing runtime issues by 40%.</li>
              <li>Collaborated with cross-functional teams in Agile sprints to ensure timely project delivery.</li>
            </ul>
          </div>

          {/* Right - Company Logo */}
          <div className="md:w-1/4 flex justify-center">
          <Image
  src="/images/accenture.png" // Update with correct path
  alt="Accenture Logo"
  width={100}
  height={100}
  className="rounded-lg shadow-lg"
/>


          </div>
        </motion.div>

        {/* Darwinbox Experience */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6"
        >
          {/* Left - Job Details */}
          <div className="md:w-3/4">
            <h3 className="text-2xl font-semibold text-[#F4A261]">Frontend Developer Intern</h3>
            <p className="text-lg text-[#AAB3BE]">Darwinbox, Hyderabad, India</p>
            <p className="text-sm text-[#AAB3BE] italic mb-3">Feb 2022 – Aug 2022</p>
            <ul className="list-disc pl-5 text-[#AAB3BE] space-y-2">
              <li>Developed dynamic dashboards and enhanced HR management tools using React and TypeScript.</li>
              <li>Optimized application performance and improved load times through code splitting and lazy loading techniques.</li>
            </ul>
          </div>

          {/* Right - Company Logo */}
          <div className="md:w-1/4 flex justify-center">
          <Image
  src="/images/darwinbox.png" // Update with correct path
  alt="Darwinbox Logo"
  width={100}
  height={100}
  className="rounded-lg shadow-lg"
/>


          </div>
        </motion.div>

      </div>
    </section>
  );
}
