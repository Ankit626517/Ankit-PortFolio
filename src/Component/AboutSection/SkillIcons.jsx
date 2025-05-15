import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiVite } from "react-icons/si";
import { motion } from "framer-motion";

function SkillIcons() {
  const skills = [
    { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML5" },
    { icon: <FaCss3Alt />, color: "text-blue-500", name: "CSS3" },
    { icon: <FaJsSquare />, color: "text-yellow-300", name: "JavaScript" },
    { icon: <FaReact />, color: "text-cyan-400", name: "React" },
    { icon: <SiVite />, color: "text-purple-500", name: "Vite" },
    { icon: <FaNodeJs />, color: "text-green-500", name: "Node.js" },
    { icon: <SiExpress />, color: "text-gray-300", name: "Express" },
    { icon: <SiMongodb />, color: "text-green-600", name: "MongoDB" },
    { icon: <SiTailwindcss />, color: "text-cyan-300", name: "Tailwind" },
    { icon: <FaGithub />, color: "text-white", name: "GitHub" },
  ];

  return (
    <div>
      <div className="bg-white/5 backdrop-blur-lg border border-gray-500 p-6 md:p-10 rounded-lg shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105 animate-fade-in">
        <p className="text-gray-300 text-base md:text-lg leading-loose transition duration-300 ease-in-out transform hover:scale-105 hover:text-white">
          My technical toolkit includes a variety of programming languages, frameworks, and tools that I've mastered through coursework and hands-on projects.
        </p>
      </div>

      <br />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white text-center">
        My Toolbox 🧰
      </h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 text-center justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className={`text-4xl sm:text-5xl animate-bounce ${skill.color}`}>
              {skill.icon}
            </div>
            <motion.span
              className={`text-sm sm:text-base font-medium animate-bounce ${skill.color}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillIcons;
