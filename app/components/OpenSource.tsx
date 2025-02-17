"use client";
import React from "react";
import { FaCodeBranch, FaGithub } from "react-icons/fa";

const openSource = [
  {
    project: "AI-Powered Code Editor",
    description: "Contributed features and bug fixes to an AI-driven code editor for seamless real-time coding.",
    github: "https://github.com/Vinithra5/ai-code-editor",
  },
  {
    project: "React Open-Source UI Components",
    description: "Created reusable UI components for the open-source community, improving accessibility and design.",
    github: "https://github.com/Vinithra5",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="w-full py-12 px-6 md:px-20 mx-auto max-w-6xl">
  {/* Reduce `mb-12` to `mb-8` for better spacing */}
  <h2 className="text-4xl font-bold text-[#F0BE6F] mb-8">Open Source Contributions</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {openSource.map((contribution, index) => (
          <div key={index} className="bg-[#1E2D2F] rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4">
              <FaCodeBranch className="text-[#F0BE6F] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-[#F0BE6F]">{contribution.project}</h3>
                <p className="text-[#AAB3BE] mt-2">{contribution.description}</p>
                <a href={contribution.github} target="_blank" rel="noopener noreferrer" className="text-[#F0BE6F] hover:underline flex items-center mt-2">
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
