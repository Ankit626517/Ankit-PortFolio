import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub,
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiVite, SiExpress,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, color: "text-orange-500" },
  { icon: <FaCss3Alt />, color: "text-blue-500" },
  { icon: <FaJsSquare />, color: "text-yellow-300" },
  { icon: <FaReact />, color: "text-cyan-400" },
  { icon: <SiVite />, color: "text-purple-500" },
  { icon: <FaNodeJs />, color: "text-green-500" },
  { icon: <SiExpress />, color: "text-gray-300" },
  { icon: <SiMongodb />, color: "text-green-600" },
  { icon: <SiTailwindcss />, color: "text-cyan-300" },
  { icon: <FaGithub />, color: "text-white" },
];

const projects = [
  {
    title: "🎯 Recipe Finder Website",
    desc: "Includes chatbot using Gemini API, detailed cooking steps & ingredients.",
  },
  {
    title: "📘 Student Career Guide",
    desc: "Major project helping students after 10th with course & career decisions.",
  },
  {
    title: "📰 News Website",
    desc: "React-based dynamic news content UI.",
  },
  {
    title: "✍️ Blog Platform (MERN)",
    desc: "Full-stack blogging site with MongoDB, Express, React, and Node.",
  },
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
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Ankit Rathor
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A passionate MERN Stack Developer & Tech Explorer 🚀
          </motion.p>
        </div>

        {/* Glass Card About Me */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-yellow-500 rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-300 text-base md:text-lg leading-loose">
            I'm currently pursuing my B.Tech in Computer Science from{" "}
            <span className="text-pink-400 font-semibold">Lakshmi Narain College of Technology</span>. I love turning ideas into reality using modern web technologies. I’m driven by curiosity and thrive on building beautiful, functional UIs and complete full-stack web apps.
          </p>
        </motion.div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">My Toolbox 🧰</h2>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-5 text-4xl text-center">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className={`transition-transform ${skill.color}`}
              >
                {skill.icon}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Featured Projects 💼</h2>
          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-xl p-5 border-l-4 border-yellow-400 hover:border-cyan-400 shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * i }}
              >
                <h3 className="text-xl font-bold text-yellow-300">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.p
          className="text-center text-sm text-gray-500 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Let's collaborate and build something awesome together 💻✨
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
