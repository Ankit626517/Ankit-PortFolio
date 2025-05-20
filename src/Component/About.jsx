import React from "react";
import { motion } from "framer-motion";







import {
  SiMongodb, SiTailwindcss, SiVite, SiExpress,
} from "react-icons/si";
import SkillIcons from "./AboutSection/SkillIcons";
import SocialLinks from "./AboutSection/SocialLinks";
import TechDetails from "./AboutSection/TechDetails";
import Education from "./AboutSection/Education";
import DownloadResume from "./AboutSection/DownloadResume";
import GitHubGraph from "./GitHubGraph";




  

const About = () => {
  return (
    <>
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
            className="text-4xl md:text-6xl font-bold text-blue-400"
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
            A passionate Web   Developer & Tech Explorer 🚀
          </motion.p>
        </div>

        {/* About Me Glass Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg border border-gray-500 rounded-3xl p-8 md:p-12 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-300 text-base md:text-lg leading-loose">
           I'm Ankit Rathor, a B.Tech Computer Science and Engineering student at Lakshmi Narain College of Technology, Bhopal.{" "}
            <span className="text-blue-400 font-semibold">
              I specialize in Web Design & Development, where I enjoy building modern, responsive, and user-centric web applications.
            </span> With a strong foundation in front-end technologies and a keen eye for design, I strive to create seamless digital experiences that are both functional and visually appealing.
          </p>
        </motion.div>

        {/* Skills Section */}
      <SkillIcons/>
        {/* Skills Section */}

        {/* Technologies In Detail Section */}
        <TechDetails/>
        {/* Technologies In Detail Section */}
           {/* GitHub Graph Section */}
        <GitHubGraph/>
        {/* GitHub Graph Section */}

        {/* Resume DOwnload Button */}
        <DownloadResume/>
        {/* Resume DOwnload Button */}

     

        {/* Contact Section */}

 {/* Education Section */}
 <Education/>
 {/* Education Section */}

  {/* social media icons  */}
  <SocialLinks/>
   {/* social media icons  */}
 
  
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
   
    </>
  );
};

export default About;