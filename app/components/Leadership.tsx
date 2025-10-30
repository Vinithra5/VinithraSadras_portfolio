"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const leadershipRoles = [
  {
    role: "University Conduct Board Member",
    description: [
      "Worked with university administration to ensure fair student policies and maintain discipline.",
      "Assisted in ethical reviews, student hearings, and policy enforcement.",
    ],
  },
  {
    role: "Team Lead - Software Development",
    description: [
      "Managed a team of 5 developers to build and deploy a full-stack application.",
      "Ensured optimized workflow, met tight deadlines, and improved team productivity.",
    ],
  },
];

export default function Leadership() {
  const [selectedRole, setSelectedRole] = useState(leadershipRoles[0]);

  return (
    <section id="leadership" className="px-6 md:px-20 bg-[#1B4543] text-[#E0E1DD] pt-16 pb-4">
      <h2 className="text-4xl font-bold text-[#F0BE6F] mb-12">Leadership & Volunteering</h2>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Role List */}
        <div className="md:w-1/4 flex flex-col border-r border-[#2A6462] p-5">
          {leadershipRoles.map((role, index) => (
            <button
              key={index}
              onClick={() => setSelectedRole(role)}
              className={`py-2 text-left text-lg font-medium ${
                selectedRole.role === role.role
                  ? "text-[#F0BE6F] border-l-4 border-[#F0BE6F] pl-2"
                  : "text-[#AAB3BE] hover:text-[#F0BE6F]"
              }`}
            >
              {role.role}
            </button>
          ))}
        </div>

        {/* Role Details */}
        <motion.div
          key={selectedRole.role}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-3/4 flex flex-col justify-between p-6"
        >
          <div className="md:w-2/3 text-left">
            <h3 className="text-2xl font-semibold text-[#F0BE6F]">{selectedRole.role}</h3>
            <ul className="list-disc pl-5 text-[#AAB3BE] space-y-2 mt-3">
              {selectedRole.description.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
