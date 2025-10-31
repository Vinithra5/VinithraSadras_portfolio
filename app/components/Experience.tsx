"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Syracuse University",
    role: "Research Assistant",
    location: "Remote",
    period: "June 2025 – Present",
    logo: "/images/syracuse.jpg",
    description:
      "This project started from my curiosity about how cloud systems could make real-world problems smarter. I built a Smart IoT Irrigation framework that connects field sensors with distributed cloud workflows. I designed modular Flask microservices to process live telemetry and automated everything through AWS IoT Core, Lambda, and S3. I also containerized deployments so everything runs smoothly in real time, even under heavy data loads. Later, I integrated LangChain and lightweight ML models to add predictive intelligence — and seeing the system become 80% more efficient with almost zero manual effort was honestly the most rewarding part.",
  },
  {
    company: "Syracuse University",
    role: "Teaching Assistant – Object Oriented Programming",
    location: "Syracuse, NY",
    period: "Jan 2024 – May 2025",
    logo: "/images/syracuse.jpg",
    description:
      "As a Teaching Assistant for Java and Object-Oriented Programming, I guided over 100 students in writing clean, modular, and scalable code. I developed Python automation scripts that reduced grading time by 60%, enabling faster feedback cycles and better student performance tracking. To make the coursework more industry-relevant, I integrated backend testing frameworks and API modules, helping students understand how core programming principles extend into real-world software architecture."
  },
  {
    company: "Accenture",
    role: "Software Development Engineer",
    location: "Hyderabad, India",
    period: "Jan 2023 – July 2023",
    logo: "/images/accenture.png",
    description:
      "At Accenture, I engineered enterprise-grade banking platforms for HDFC Bank, modernizing legacy systems into modular Spring Boot microservices that improved platform stability and scalability. I enhanced CI/CD pipelines using Docker and Jenkins, increasing deployment reliability and release frequency. I developed RESTful services with Spring Boot, PostgreSQL, and AngularJS to streamline transactions and data flow across distributed systems. To meet security and compliance standards, I implemented JWT/OAuth2 authentication layers, ensuring safe and consistent API communication. Through architectural optimization and pipeline refinement, I boosted overall system performance by 70%.",
  },
]

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0])

  return (
    <section id="experience" className="px-6 md:px-20 bg-[#1B4543] text-[#E0E1DD] pt-16 pb-4">
      <h2 className="text-4xl font-bold text-[#F0BE6F] mb-12">Experience</h2>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Company List */}
        <div className="md:w-1/4 flex flex-col border-r border-[#2A6462] p-5">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedExperience(exp)}
              className={`py-2 text-left text-lg font-medium ${
                selectedExperience.company === exp.company && selectedExperience.role === exp.role
                  ? "text-[#F0BE6F] border-l-4 border-[#F0BE6F] pl-2"
                  : "text-[#AAB3BE] hover:text-[#F0BE6F]"
              }`}
            >
              {exp.role}
            </button>
          ))}
        </div>

        {/* Experience Details */}
        <motion.div
          key={`${selectedExperience.company}-${selectedExperience.role}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-3/4 flex flex-col md:flex-row justify-between items-start p-6"
        >
          <div className="md:w-2/3 text-left">
            <h3 className="text-2xl font-semibold text-[#F0BE6F]">
              {selectedExperience.role} @ {selectedExperience.company}
            </h3>
            <p className="text-lg text-[#AAB3BE]">{selectedExperience.location}</p>
            <p className="text-sm text-[#AAB3BE] italic mb-4">{selectedExperience.period}</p>
            <p className="text-[#AAB3BE] leading-relaxed">{selectedExperience.description}</p>
          </div>

          {/* Company Logo */}
          <div className="md:w-1/3 flex justify-end mt-6 md:mt-0">
            <Image
              src={selectedExperience.logo || "/placeholder.svg"}
              alt={`${selectedExperience.company} Logo`}
              width={100}
              height={100}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
