import React, { useState, useEffect } from 'react';
import logo from '../assets/Gallary/logo.svg';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaHome, FaUser, FaFileAlt, FaCubes, FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Animate from './Animate';  // Import Animate Component

function Navbar() {
  return (
    <>
      <nav className='w-full md:w-80 bg-gray-900 border-2 border-amber-300 md:rounded-xl p-4 md:p-6 shadow-xl sm:'>
        <div className='flex flex-col gap-5 justify-center items-center'>
          
          {/* Profile Image */}
          <img className='w-32 md:w-40 rounded-full border-4 border-gray-400' src={logo} alt='Profile' />
          
          {/* Name & Role */}
          <h1 className='font-bold text-xl md:text-2xl text-white text-center'>Ankit Rathor</h1>
          
          {/* Use the Animate Component for Animated Text */}
          <Animate />

          {/* Social Icons */}
          <ul className='flex gap-4 md:gap-5'>
            <li><FaEnvelope size={20} className='text-gray-500 hover:text-red-500' /></li>
            <li><FaLinkedin size={20} className='text-gray-500 hover:text-blue-700' /></li>
            <li><FaGithub size={20} className='text-gray-500 hover:text-black' /></li>
            <li><FaInstagram size={20} className='text-gray-500 hover:text-pink-500' /></li>
          </ul>

          {/* Nav Links */}
          <div className='w-full md:w-64 bg-gray-950 rounded-2xl p-4'>
            <ul className='space-y-2 text-sm md:text-base'>
              <li className='flex items-center gap-3 p-2 md:p-3 bg-gray-800 rounded-md border border-gray-700 hover:border-yellow-400 focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-300 transition-all duration-300'>
                <FaHome className='text-xl text-white' />
                <Link to='/' className='text-white w-full focus:outline-none'>Home</Link>
              </li>
              <li className='flex items-center gap-3 p-2 md:p-3 bg-gray-800 rounded-md border border-gray-700 hover:border-yellow-400 focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-300 transition-all duration-300'>
                <FaUser className='text-xl text-white' />
                <Link to='/about' className='text-white w-full focus:outline-none'>About</Link>
              </li>
              <li className='flex items-center gap-3 p-2 md:p-3 bg-gray-800 rounded-md border border-gray-700 hover:border-yellow-400 focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-300 transition-all duration-300'>
                <FaFileAlt className='text-xl text-white' />
                <Link to='/education' className='text-white w-full focus:outline-none'>Education</Link>
              </li>
              <li className='flex items-center gap-3 p-2 md:p-3 bg-gray-800 rounded-md border border-gray-700 hover:border-yellow-400 focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-300 transition-all duration-300'>
                <FaCubes className='text-xl text-white' />
                <Link to='/projects' className='text-white w-full focus:outline-none'>Projects</Link>
              </li>
              <li className='flex items-center gap-3 p-2 md:p-3 bg-gray-800 rounded-md border border-gray-700 hover:border-yellow-400 focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-300 transition-all duration-300'>
                <FaEnvelope className='text-xl text-white' />
                <Link to='/contact' className='text-white w-full focus:outline-none'>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Download Resume */}
          <motion.a
            href='/resume.pdf'
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-all'
          >
            <FaDownload className='text-xl' /> Download Resume
          </motion.a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
