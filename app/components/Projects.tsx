"use client";

import { FiFolder } from "react-icons/fi"; // Import Folder icon for project card
import { motion } from "framer-motion";

const projects = [
  {
    title: "Serverless E-commerce Platform on AWS",
    description:
      "Developed a scalable, serverless e-commerce platform using AWS Lambda, API Gateway, and DynamoDB. Integrated authentication with AWS Cognito and managed product images using S3.",
    tech: "AWS Lambda, API Gateway, DynamoDB, Cognito, S3, CloudWatch",
  },
  {
    title: "Automated Resume Screening Tool",
    description:
      "Built a tool using Python and NLP techniques to automate the resume screening process. Reduced manual screening time by 50% and improved candidate shortlisting accuracy.",
    tech: "Python, NLP, Flask, MongoDB",
  },
  {
    title: "Real-Time Chat Application with Sentiment Analysis",
    description:
      "Developed a chat application integrating sentiment analysis to monitor conversation tones. Enabled real-time moderation and feedback.",
    tech: "React, Firebase, TensorFlow.js, Node.js",
  },
  {
    title: "AI-Powered Code Editor",
    description:
      "Designed an AI-powered code editor for real-time collaboration. Integrated CI/CD pipelines for seamless deployment and implemented syntax highlighting, auto-completion, and real-time error detection features.",
    tech: "React, Node.js, OpenAI API, Docker, Kubernetes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#0D1B2A] text-[#E0E1DD] px-6 py-12">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-[#FFFFFF] mb-12 text-center"
      >
        / projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1B263B] p-6 rounded-lg shadow-lg flex flex-col gap-4"
          >
            {/* Folder Icon */}
            <div className="flex">
              <FiFolder className="text-[#00C9A7] text-2xl" />
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-[#E0E1DD]">{project.title}</h3>

            {/* Project Description */}
            <p className="text-sm text-[#AAB3BE]">{project.description}</p>

            {/* Tech Stack */}
            <p className="text-xs text-[#AAB3BE] italic">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
