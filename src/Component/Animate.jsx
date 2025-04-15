import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Animate() {
  const titles = ["Front-End Developer", "Freelancer", "Designer"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      key={titleIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-pink-400 text-lg font-semibold"
    >
      {titles[titleIndex]}
    </motion.p>
  );
}

export default Animate;
