import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
// import {Resume} from './AnkitRathor.pdf'

function DownloadResume() {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-gray-500 text-white py-10 px-4 md:px-20 text-center">
      <motion.h2
        className="text-3xl font-bold text-cyan-400 mb-6 animate-pulse"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        📄 Download My Resume
      </motion.h2>

      <motion.a
        href='/AnkitRathor.pdf' // ✅ replace with your actual file path
        download="AnkitRathor.pdf"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 py-3 animate-pulse bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
      >
        <FaDownload />
        Download Resume
      </motion.a>
    </div>
  );
}

export default DownloadResume;
