import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub,
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiVite, SiExpress,
} from "react-icons/si";


// Skills array with icon, color, and name
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

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black to-gray-900 text-white px-6 py-12 md:px-24 flex items-center justify-center">
      <motion.div
        className="max-w-6xl w-full space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-yellow-400"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            Hi, I'm Ankit Rathor
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A passionate MERN Stack Developer & Tech Explorer 🚀
          </motion.p>
        </div>

        {/* About Me Glass Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg border border-yellow-500 rounded-3xl p-8 md:p-12 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-300 text-base md:text-lg leading-loose">
            I'm currently pursuing my B.Tech in Computer Science from{" "}
            <span className="text-pink-400 font-semibold">
              Lakshmi Narain College of Technology
            </span>. I love turning ideas into reality using modern web technologies. I’m driven by curiosity and thrive on building beautiful, functional UIs and complete full-stack web apps.
          </p>
        </motion.div>

        {/* Skills Section */}
        <div>
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

        {/* Technologies In Detail Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">
            Technologies in Detail 🚧
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Frontend", techs: ["React", "Vite", "TailwindCSS"] },
              { title: "Backend", techs: ["Node.js", "Express.js"] },
              { title: "Database & Tools", techs: ["MongoDB", "GitHub"] },
            ].map((section, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-gray-600 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                  {section.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {section.techs.map((tech, i) => (
                    <li key={i} className="hover:text-yellow-400 cursor-pointer transition duration-200">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.p
          className="text-center text-sm text-gray-500 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ color: "#f1c40f", scale: 1.1 }}
        >
          Let's collaborate and build something awesome together 💻✨
        </motion.p>
      </motion.div>
     
    </div>
  );
};

export default About;