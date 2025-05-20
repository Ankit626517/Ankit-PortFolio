import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const GitHubGraph = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-12 px-4"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        whileHover={{ scale: 1.05, color: "#22c55e" }} // green hover effect
        transition={{ type: "spring", stiffness: 300 }}
      >
        📊 GitHub Contributions
      </motion.h2>

      <motion.div
        className="w-full max-w-[95vw] overflow-x-auto rounded-xl shadow-lg p-4 bg-white dark:bg-gray-900 transition-all"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <GitHubCalendar
          username="Ankit626517"
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          fontSize={14}
        />
      </motion.div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
        See how active I’ve been in building awesome projects!
      </p>
    </motion.div>
  );
};

export default GitHubGraph;
