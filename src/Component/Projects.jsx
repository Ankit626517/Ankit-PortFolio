import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Recipe Finder Chatbot',
    link: 'https://github.com/Ankit626517/Recipe-Finder-Chatbot',
    description: 'An AI-powered chatbot that helps users find recipes based on ingredients.',
  },
  {
    name: 'Career Guidance Portal',
    link: 'https://github.com/Ankit626517/Career-Guide',
    description: 'A portal to assist students in choosing career paths after 10th grade.',
  },
  {
    name: 'Live News App',
    link: 'https://github.com/Ankit626517/News-Web',
    description: 'A React app that displays live news updates fetched via API.',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12 md:px-24 flex items-center justify-center">
      <motion.div
        className="max-w-5xl w-full space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-3xl md:text-5xl font-bold text-yellow-400">
          My Projects 🚀
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-yellow-500 rounded-xl p-6 transition duration-300 hover:scale-105 hover:shadow-xl block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ rotate: 1 }}
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
