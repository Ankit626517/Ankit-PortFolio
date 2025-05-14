import React from 'react'
import {  FaLinkedin, FaInstagram, FaTwitter , FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
function SocialLinks() {
    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/yourusername', name: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', name: 'LinkedIn' },
        { icon: <FaInstagram />, url: 'https://instagram.com/yourusername', name: 'Instagram' },
        { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', name: 'Twitter' },
      ];
  return (
     <div className="w-full bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6 flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12 tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Connect with Me
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 0.5 }}
            whileHover={{
              scale: 0.8,
              rotate: 5,
              boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.3)',
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group p-6 rounded-full border-2 border-gray-700 hover:border-pink-500 transition-all duration-300"
          >
            <span className="text-white text-4xl md:text-5xl">{link.icon}</span>
            {/* Tooltip */}
            <span className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
              {link.name}
            </span>
            {/* Glow ring effect */}
            <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-pink-400 animate-pulse group-hover:animate-none"></span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
