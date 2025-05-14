import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      id: 1,
      title: "Bachelor of Technology (B.Tech)",
      institution: "Lakshmi Narain College of Technology, Bhopal",
      duration: "2021 - 2025",
      icon: <FaUniversity />,
      description: "Pursuing Computer Science & Engineering with a focus on Web Development, IoT, and Cloud Computing."
    },
    {
      id: 2,
      title: "Senior Secondary (Class 12th)",
      institution: "XYZ Higher Secondary School",
      duration: "2019 - 2021",
      icon: <FaSchool />,
      description: "Completed 12th with Physics, Chemistry, and Mathematics (PCM) stream."
    },
    {
      id: 3,
      title: "High School (Class 10th)",
      institution: "ABC Public School",
      duration: "2018 - 2019",
      icon: <FaSchool />,
      description: "Completed 10th with a strong foundation in Science and Mathematics."
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">
        🎓 My Education Journey
      </h2>

      <div className="space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-2">
              <div className="text-3xl text-cyan-300">{edu.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">{edu.duration}</p>
            <p className="mt-2 text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
