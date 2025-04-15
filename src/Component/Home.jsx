import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Gallary/AnkitLogo.jpeg';
import Animate from './Animate';  // Import the Animate component

function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-5 md:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl border-4 border-pink-500 hover:border-yellow-400 transition-all duration-300 rounded-3xl shadow-2xl p-10 md:p-16 gap-10 group">

        {/* Left Content */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl  font-extrabold tracking-tight animate-pulse">Ankit</h1>
          <h2 className="text-3xl md:text-7xl font-bold text-gray-300">Rathor</h2>

          {/* Use the Animate component */}
          <Animate />

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            We appreciate your trust greatly. Our clients choose us because they know we deliver the best.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 text-black px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-200"
            >
              View Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 text-black px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-200"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="border-[6px] border-gray-700 group-hover:border-cyan-400 focus-within:border-blue-500 p-2 rounded-3xl bg-gray-800 shadow-xl transition-all duration-300">
            <img
              src={logo}
              alt="Profile"
              className="w-72 md:w-96 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Home;
