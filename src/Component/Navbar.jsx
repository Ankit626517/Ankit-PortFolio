import React from 'react'
// import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import SectionFirst from '../assets/NavbarPages/SectionFirst'
import logo from '../assets/Gallary/logo.svg'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram,FaHome, FaUser, FaFileAlt, FaBriefcase,FaDownload, FaCubes, FaTags, FaBlog, } from "react-icons/fa";
// import TextCursor from '.';
import { motion } from "framer-motion";

function Navbar() {
  const words = ["Front-End Developer", "Freelancer", "Designer"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Har 2 second me text change hoga
    return () => clearInterval(interval);
  }, []);
  return (
   <>
   <nav className=' border-2 w-80 bg-gray-900 border-amber-300'>
   <div className="flex flex-col gap-5 justify-center items-center w-full border-2 border-gray-300 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full">
          <img className="w-48 rounded-full border-4 border-gray-400" src={logo} alt="image not found" />
        </div>

        {/* Name */}
        <div>
          <h1 className="font-bold text-2xl text-white hover:text-blue-500 transition-colors duration-200">
            Ankit Rathor
          </h1>
        </div>

        {/* Job Title */}
        <div className="text-2xl font-bold animate-bounce text-gray-800">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-white "
      >
        {words[index]}
      </motion.span>
    </div>

        {/* Social Media Links */}
        <div>
          <ul className="flex flex-row gap-5">
          <li className="p-2 border border-gray-400 rounded-full hover:bg-gray-200 shadow-md hover:shadow-[0_0_15px_5px_rgb(29,78,216)] transition-all duration-200 cursor-pointer">
  <FaEnvelope size={24} className="text-gray-600 hover:text-red-500" />
</li>


            <li className="p-2 border border-gray-400 rounded-full hover:bg-gray-200 shadow-xs hover:shadow-lg hover:shadow-blue-700 transition-all duration-200 cursor-pointer">
              <FaLinkedin size={24} className="text-gray-600 hover:text-blue-700" />
            </li>
            <li className="p-2 border border-gray-400 rounded-full hover:bg-gray-200 shadow-xs hover:shadow-lg hover:shadow-blue-700 transition-all duration-200 cursor-pointer">
              <FaGithub size={24} className="text-gray-600 hover:text-black" />
            </li>
            <li className="p-2 border border-gray-400 rounded-full hover:bg-gray-200 shadow-xs hover:shadow-lg hover:shadow-blue-700 transition-all duration-200 cursor-pointer">
              <FaInstagram size={24} className="text-gray-600 hover:text-pink-500" />
            </li>
          </ul>
        </div>
        <div className="w-64 text-white bg-gray-950 rounded-2xl p-4">
      <ul className="space-y-3">
        <li className="flex items-center gap-3 p-3 bg-gray-800 rounded-md hover:bg-gray-700 shadow-xs hover:shadow-lg hover:shadow-blue-700 transition-all cursor-pointer">
          <FaHome className="text-xl" />
          <span className="font-medium">Home</span>
        </li>
        <li className="flex items-center gap-3 p-3 bg-gray-800 rounded-md hover:bg-gray-700 shadow-xs hover:shadow-lg hover:shadow-blue-700 transition-all cursor-pointer">
          <FaUser className="text-xl" />
          <span className="font-medium">About</span>
        </li>
        <li className="flex items-center gap-3 p-3 bg-gray-800 rounded-md hover:bg-gray-700 shadow-xs hover:shadow-lg hover:shadow-blue-700 transition-all cursor-pointer">
          <FaFileAlt className="text-xl" />
          <span className="font-medium">Education</span>
        </li>
        <li className="flex items-center gap-3 p-3 bg-gray-800 rounded-md hover:bg-gray-700 shadow-xs hover:shadow-lg hover:shadow-blue-700 transition-all cursor-pointer">
          <FaCubes className="text-xl" />
          <span className="font-medium">Projects</span>
        </li>
        {/* <li className="flex items-center gap-3 p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-all cursor-pointer">
          <FaBriefcase className="text-xl" />
          <span className="font-medium">Portfolio</span>
        </li> */}
        {/* <li className="flex items-center gap-3 p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-all cursor-pointer">
          <FaTags className="text-xl" />
          <span className="font-medium">Pricing</span>
        </li> */}
        {/* <li className="flex items-center gap-3 p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-all cursor-pointer">
          <FaBlog className="text-xl" />
          <span className="font-medium">Blog</span>
        </li> */}
      <li className="flex items-center  gap-3 p-3 bg-gray-800 rounded-md hover:bg-gray-700 shadow-xs hover:shadow-lg hover:shadow-blue-700 transition-all cursor-pointer">
  <FaEnvelope className="text-xl" />
  <span className="font-medium">Contact</span>
</li>

      </ul>
      
    </div>
    {/* Button resume */}
    <motion.a
      href="/resume.pdf" // Yahan apna actual resume link dalna
      download
      whileHover={{ scale: 1.1, backgroundColor: " #1a1a1a", boxShadow: "0px 4px 15px rgba(37, 99, 235, 0.5)" }}
      whileTap={{ scale: 0.9 }}
      className="flex animate-bounce items-center gap-3 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
    >
      <FaDownload className="text-xl animate-bounce" />
      Download Resume
    </motion.a>
      </div>
   </nav>
   </>
  )
}

export default Navbar
