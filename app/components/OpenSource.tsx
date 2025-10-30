"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const openSourceProjects = [
  {
    project: "AI-Powered Code Editor",
    description: [
      "Contributed features, bug fixes, and enhancements to an AI-driven code editor.",
      "Focused on real-time coding experience, performance optimization, and debugging automation.",
    ],
    github: "https://github.com/Vinithra5/ai-code-editor",
  },
  {
    project: "React Open-Source UI Components",
    description: [
      "Developed reusable UI components for open-source projects.",
      "Improved accessibility, design consistency, and developer experience.",
    ],
    github: "https://github.com/Vinithra5",
  },
];

export default function OpenSource() {
  const [selectedProject, setSelectedProject] = useState(openSourceProjects[0]);

  return (
    <section id="opensource" className="px-6 md:px-20 bg-[#1B4543] text-[#E0E1DD] pt-16 pb-4">
      <h2 className="text-4xl font-bold text-[#F0BE6F] mb-12">Open Source Contributions</h2>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Project List */}
        <div className="md:w-1/4 flex flex-col border-r border-[#2A6462] p-5">
          {openSourceProjects.map((proj, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(proj)}
              className={`py-2 text-left text-lg font-medium ${
                selectedProject.project === proj.project
                  ? "text-[#F0BE6F] border-l-4 border-[#F0BE6F] pl-2"
                  : "text-[#AAB3BE] hover:text-[#F0BE6F]"
              }`}
            >
              {proj.project}
            </button>
          ))}
        </div>

        {/* Project Details */}
        <motion.div
          key={selectedProject.project}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-3/4 flex flex-col justify-between p-6"
        >
          <div className="md:w-2/3 text-left">
            <h3 className="text-2xl font-semibold text-[#F0BE6F]">{selectedProject.project}</h3>
            <ul className="list-disc pl-5 text-[#AAB3BE] space-y-2 mt-3">
              {selectedProject.description.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0BE6F] hover:underline flex items-center mt-4"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
