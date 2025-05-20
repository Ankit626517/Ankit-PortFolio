import React from 'react'
import { FaCode, FaTools, FaDatabase, FaLaptopCode, FaGitAlt  } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiFramework } from "react-icons/si";

function TechDetails() {
    const techStack = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-blue-400 text-xl" />,
    techs: ["C/C++", "Python", "Java", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Libraries & Frameworks",
    icon: <SiFramework className="text-blue-400 text-xl" />,
    techs: ["ReactJs", "Python Libraries"],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools className="text-blue-400 text-xl" />,
    techs: ["VSCode", "Git", "GitHub", "Node.js"],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-blue-400 text-xl" />,
    techs: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Web Technologies",
    icon: <FaLaptopCode className="text-blue-400 text-xl" />,
    techs: ["Responsive Design", "RESTful APIs", "Bootstrap"],
  },
  {
    title: "Version Control",
    icon: <FaGitAlt className="text-blue-400 text-xl" />,
    techs: ["Git", "GitHub"],
  },
];

  return (
          <div className="mt-16 ">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-400">
            Technologies in Detail 🚧
          </h2>
        {/* Tech details section */}
       <div className="bg-white/5 backdrop-blur-lg border border-gray-500 py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-gray-600 rounded-2xl p-5 sm:p-6 hover:border-gray-400 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
              {section.icon} {section.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {section.techs.map((tech, i) => (
                <li
                  key={i}
                  className="bg-blue-100/10 text-blue-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-400 hover:text-black transition duration-300 cursor-pointer"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    

  </div>
  )
}

export default TechDetails
