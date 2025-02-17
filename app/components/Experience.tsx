"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Experience Data
const experiences = [
  {
    company: "Accenture",
    role: "Software Development Engineer",
    location: "Coimbatore, India",
    period: "Oct 2022 – Jul 2023",
    logo: "/images/accenture.png",
    details: [
      "Developed scalable APIs using Spring Boot and integrated AngularJS for an intuitive UI.",
      "Conducted debugging, reducing runtime issues by 40%.",
      "Collaborated with Agile teams to ensure timely project delivery.",
    ],
  },
  {
    company: "Darwinbox",
    role: "Frontend Developer Intern",
    location: "Hyderabad, India",
    period: "Feb 2022 – Aug 2022",
    logo: "/images/darwinbox.png",
    details: [
      "Developed dynamic dashboards and enhanced HR tools using React and TypeScript.",
      "Improved application performance by implementing lazy loading and code splitting.",
    ],
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section id="experience" className="min-h-screen px-6 md:px-20 bg-[#1B4543] text-[#E0E1DD] pt-20 pb-16">
      {/* ✅ Left-Aligned Heading with Spacing */}
      <h2 className="text-4xl font-bold text-[#F0BE6F] mb-12">Experience</h2>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Company List */}
        <div className="md:w-1/4 flex flex-col border-r border-[#2A6462] p-5">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedExperience(exp)}
              className={`py-2 text-left text-lg font-medium ${
                selectedExperience.company === exp.company
                  ? "text-[#F0BE6F] border-l-4 border-[#F0BE6F] pl-2"
                  : "text-[#AAB3BE] hover:text-[#F0BE6F]"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience Details */}
        <motion.div
          key={selectedExperience.company}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-3/4 flex flex-col md:flex-row justify-between items-center p-6"
        >
          <div className="md:w-2/3 text-left">
            <h3 className="text-2xl font-semibold text-[#F0BE6F]">
              {selectedExperience.role} @ {selectedExperience.company}
            </h3>
            <p className="text-lg text-[#AAB3BE]">{selectedExperience.location}</p>
            <p className="text-sm text-[#AAB3BE] italic mb-3">{selectedExperience.period}</p>
            <ul className="list-disc pl-5 text-[#AAB3BE] space-y-2">
              {selectedExperience.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Company Logo */}
          <div className="md:w-1/3 flex justify-end">
            <Image
              src={selectedExperience.logo}
              alt={`${selectedExperience.company} Logo`}
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
