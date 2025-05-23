import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Gallary/AnkitLogo.jpeg';
import Animate from './Animate';
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  
  const bottomRef = useRef(null);
  // const [showArrow, setShowArrow] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setShowArrow(entry.isIntersecting);
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 1.0,
  //     }
  //   );

  //   if (bottomRef.current) {
  //     observer.observe(bottomRef.current);
  //   }

  //   return () => {
  //     if (bottomRef.current) {
  //       observer.unobserve(bottomRef.current);
  //     }
  //   };
  // }, []);
  

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-5 md:p-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl border-2 border-gray-500 hover:border-blue-400 transition-all duration-300 rounded-3xl shadow-1xl p-10 md:p-16 gap-10 group">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight animate-pulse">Ankit</h1>
            <h2 className="text-2xl md:text-xl font-semibold text-blue-400">
              CSE Student, Specialization in Web Development
            </h2>

            <Animate />

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Crafting responsive, user-friendly, and scalable web applications with a focus on performance and modern design.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:ring-green-300 text-black px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-200"
              >
                <Link to="/projects">
                  View Projects
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-300 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 text-black px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-200"
              >
               <Link to="/contact">
                   Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 flex justify-center relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="border-[3px] border-gray-700 group-hover:border-cyan-400 focus-within:border-blue-500 p-1 rounded-3xl bg-gray-800 shadow-xl transition-all duration-300">
              <img
                src={logo}
                alt="Profile"
                className="w-72 md:w-96 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Invisible bottom element to detect scroll end 
      {/* <div ref={bottomRef} className="h-1 w-full bg-transparent"></div>

      {/* Scroll Down Arrow shown only when bottom is visible 
      {showArrow && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <Link to="/about">
            <FaAngleDoubleDown
              className="text-white text-4xl animate-bounce hover:text-yellow-400 transition-colors duration-300"
              title="Scroll Down"
            />
          </Link>
        </div>
      )} */}
      
    </>
  );
}

export default Home;
