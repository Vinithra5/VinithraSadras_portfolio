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
      "I'm currently working on some really exciting IoT and distributed systems research. My focus has been on building modular Flask microservices that can handle massive amounts of telemetry data in real time. What I love most about this role is architecting event driven workflows using AWS Lambda, S3, and CloudWatch. It's been incredible to see how these systems can scale and become 70% more efficient with the right design. I've also been diving deep into containerized Linux environments and CI pipelines, making sure everything deploys smoothly across distributed systems. One of the coolest parts has been integrating LangChain with lightweight ML models to automate data interpretation, which feels like bringing a bit of intelligence into the system. Performance optimization is a big part of what I do, tweaking multi threaded caching and serialization to squeeze out every bit of efficiency under heavy loads. And with AWS QuickSight, I can monitor everything in real time, which makes debugging and validation so much more intuitive.",
  },
  {
    company: "Syracuse University",
    role: "Teaching Assistant – Object Oriented Programming",
    location: "Syracuse, NY",
    period: "Jan 2024 – May 2025",
    logo: "/images/syracuse.jpg",
    description:
      "Teaching has been one of the most rewarding experiences for me. I've had the chance to guide over 100 students through Java and OOP fundamentals, helping them understand not just the syntax but the principles behind writing modular, scalable code. I really enjoy the debugging sessions. There's something satisfying about helping someone finally understand why their code isn't working. To make grading more efficient, I built Python automation scripts that cut turnaround time by 60%, which gave me more time to focus on actually helping students. I also integrated backend testing and API modules into the coursework, so students could see how the concepts they're learning apply to real world software architecture. It's been great to see them connect the dots between theory and practice.",
  },
  {
    company: "Accenture",
    role: "Software Development Engineer",
    location: "Hyderabad, India",
    period: "Jan 2023 – July 2023",
    logo: "/images/accenture.png",
    description:
      "At Accenture, I worked on building distributed Spring Boot microservices for HDFC Bank, which was a fantastic opportunity to work on financial applications at scale. The challenge was making sure everything was reliable and could handle high transaction volumes. I spent a lot of time refactoring data access layers and optimizing service logic, and we managed to speed up transaction response times by up to 85%, which was a huge win. I also maintained robust CI/CD pipelines with Docker and Jenkins, ensuring that our automated testing and delivery cycles ran smoothly. Security was a top priority, so I worked extensively with IAM, encryption, and VPC based isolation to keep sensitive data protected and compliant. Performance tuning became second nature, profiling Linux runtime environments and optimizing thread level operations to keep everything stable under concurrent loads. Collaborating with DevOps, QA, and product teams taught me a lot about how to improve deployment speed and maintain consistency across different environments.",
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
