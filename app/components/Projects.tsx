"use client";
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

// Project Data
const projects = [
  {
    title: "Serverless E-commerce Platform on AWS",
    description: "Developed a scalable, serverless e-commerce platform using AWS Lambda, API Gateway, and DynamoDB. Integrated authentication with AWS Cognito and managed product images using S3.",
    tech: "AWS Lambda, API Gateway, DynamoDB, Cognito, S3, CloudWatch",
    github: "#",
    demo: "#",
  },
  {
    title: "Automated Resume Screening Tool",
    description: "Built a tool using Python and NLP techniques to automate the resume screening process. Reduced manual screening time by 50% and improved candidate shortlisting accuracy.",
    tech: "Python, NLP, Flask, MongoDB",
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Chat Application with Sentiment Analysis",
    description: "Developed a chat application integrating sentiment analysis to monitor conversation tones. Enabled real-time moderation and feedback.",
    tech: "React, Firebase, TensorFlow.js, Node.js",
    github: "#",
    demo: "#",
  },
  {
    title: "AI-Powered Code Editor",
    description: "Designed an AI-powered code editor for real-time collaboration. Integrated CI/CD pipelines for seamless deployment and implemented syntax highlighting, auto-completion, and real-time error detection.",
    tech: "React, TypeScript, OpenAI API, Docker, CI/CD",
    github: "https://github.com/Vinithra5/ai-code-editor",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 px-6 md:px-20 mx-auto max-w-6xl">
    {/* Reduced `mb-12` to `mb-8` for closer spacing */}
    <h2 className="text-4xl font-bold text-[#F0BE6F] mb-6">Projects</h2>


      {/* ✅ Fixed Left-Right Margins & Grid Alignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1E2D2F] rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            {/* Project Header */}
            <div className="flex justify-between items-center mb-4">
              <FaFolderOpen className="text-[#F0BE6F] text-3xl" />
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-[#AAB3BE] text-xl hover:text-[#F0BE6F] transition" />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-[#AAB3BE] text-xl hover:text-[#F0BE6F] transition" />
                </a>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-lg font-semibold text-[#F0BE6F]">{project.title}</h3>

            {/* Project Description */}
            <p className="text-[#AAB3BE] mt-2">{project.description}</p>

            {/* Technologies */}
            <p className="text-sm text-[#AAB3BE] mt-2 italic">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
