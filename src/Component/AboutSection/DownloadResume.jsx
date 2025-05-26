import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
// import {Resume} from './AnkitRathor.pdf'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DownloadResume() {
  const handleDownload = () => {
    // Trigger the actual download
    const link = document.createElement("a");
    link.href = "/AnkitRathor.pdf";
    link.download = "AnkitRathor.pdf";
    link.click();

    // Show success toast
    toast.success("🎉 Resume downloaded successfully!", {
      position: "top-right",
      autoClose: 2000,

      theme: "dark",


    });
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-white/5 backdrop-blur-lg border border-gray-500 text-white py-10 px-4 md:px-20 text-center">

        <motion.h2
          className="text-3xl font-bold text-cyan-400 mb-6 animate-pulse "
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          📄 Download My Resume
        </motion.h2>

        <motion.a
          onClick={handleDownload}
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
    </>
  );
}

export default DownloadResume;
