import React, { useEffect } from 'react';
import {
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiVite,
} from "react-icons/si";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SkillIcons() {
  const skills = [
    { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML5", percent: 90 },
    { icon: <FaCss3Alt />, color: "text-blue-500", name: "CSS3", percent: 85 },
    { icon: <FaJsSquare />, color: "text-yellow-300", name: "JavaScript", percent: 75 },
    { icon: <FaReact />, color: "text-cyan-400", name: "React", percent: 80 },
    { icon: <SiVite />, color: "text-purple-500", name: "Vite", percent: 70 },
    { icon: <FaNodeJs />, color: "text-green-500", name: "Node.js", percent: 78 },
    { icon: <SiExpress />, color: "text-gray-300", name: "Express", percent: 65 },
    { icon: <SiMongodb />, color: "text-green-600", name: "MongoDB", percent: 85 },
    { icon: <SiTailwindcss />, color: "text-cyan-300", name: "Tailwind", percent: 88 },
    { icon: <FaGithub />, color: "text-white", name: "GitHub", percent: 92 },
  ];

  const radius = 18; // Radius of the circle
  const stroke = 4;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;

  return (
    <div className="px-4 sm:px-10">
      {/* Introduction Box */}
      <div className="bg-white/5 backdrop-blur-lg border border-gray-500 p-6 md:p-10 rounded-lg shadow-xl hover:shadow-2xl transition duration-500 hover:scale-105 animate-fade-in">
        <p className="text-gray-300 text-base md:text-lg leading-loose">
          My technical toolkit includes a variety of programming languages, frameworks, and tools that I've mastered through coursework and hands-on projects.
        </p>
      </div>

      <br />

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white text-center">
        My Toolbox 🧰
      </h2>

      {/* Skill Icons Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 text-center justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {skills.map((skill, i) => {
          const offset = circumference - (skill.percent / 100) * circumference;
          const progress = useMotionValue(0);
          const progressText = useTransform(progress, latest => `${Math.round(latest)}%`);

          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });

          useEffect(() => {
            if (inView) {
              const controls = animate(progress, skill.percent, {
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut"
              });
              return controls.stop;
            }
          }, [inView, progress, skill.percent, i]);

          return (
            <motion.div
              key={i}
              ref={ref}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="relative w-16 h-16">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r={normalizedRadius}
                    stroke="#2d2d2d"
                    strokeWidth={stroke}
                    fill="none"
                  />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r={normalizedRadius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={stroke}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    animate={inView ? { strokeDashoffset: offset } : {}}
                    transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                    className={`${skill.color}`}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Icon Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] sm:text-xs font-semibold text-white">
                  <span className={`text-xl sm:text-2xl ${skill.color}`}>{skill.icon}</span>
                </div>
              </div>

              {/* Skill Name + Percentage */}
              <motion.span
                className={`text-sm sm:text-base font-medium ${skill.color}`}
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
                <br />
                <motion.span>{progressText}</motion.span>
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default SkillIcons;
