import React, { useState, useEffect } from 'react';
import logo from '../assets/Gallary/logo.svg';
import { FaHome, FaUser, FaCubes, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll logic with smooth effect
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10 || lastScrollY > currentScrollY + 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setShowNavbar(false);
      }

      timeoutId = setTimeout(() => {
        setLastScrollY(currentScrollY);
      }, 100); // small delay for smoothness
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`w-full bg-gray-900/90 backdrop-blur border-b-2 border-amber-300 shadow-xl fixed top-0 z-50 transition-all duration-500 ease-in-out ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='container mx-auto px-4'>
          {/* Desktop Navbar */}
          <div className='hidden md:flex items-center justify-between py-4'>
            <div className='flex items-center space-x-4'>
              <img className='w-12 h-12 rounded-full border-2 border-gray-400' src={logo} alt='Profile' />
              <h1 className="font-bold text-xl text-white">Ankit Rathor</h1>
            </div>

            {/* Links */}
            <ul className='flex space-x-2'>
              {[
                { to: '/', icon: <FaHome />, label: 'Home' },
                { to: '/about', icon: <FaUser />, label: 'About' },
                { to: '/projects', icon: <FaCubes />, label: 'Projects' },
                { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
              ].map(({ to, icon, label }, index) => (
                <motion.li
                  key={to}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(55, 65, 81, 0.8)",
                    boxShadow: "0 4px 8px rgba(251, 191, 36, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    to={to}
                    className='flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md text-white transition-all relative overflow-hidden group'
                  >
                    <motion.span
                      className="absolute inset-0 bg-amber-300 opacity-0 group-hover:opacity-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-amber-300">{icon}</span>
                    <motion.span className="relative" whileHover={{ x: 2 }}>
                      {label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Navbar */}
          <div className='md:hidden flex items-center justify-between py-4'>
            <div className='flex items-center'>
              <img className='w-10 h-10 rounded-full border-2 border-gray-400' src={logo} alt='Profile' />
              <h1 className='hidden sm:block font-bold text-lg text-white ml-2'>Ankit Rathor</h1>
            </div>

            <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label='Toggle menu'>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className='md:hidden pb-4'>
              <ul className='space-y-2'>
                {[
                  { to: '/', icon: <FaHome />, label: 'Home' },
                  { to: '/about', icon: <FaUser />, label: 'About' },
                  { to: '/projects', icon: <FaCubes />, label: 'Projects' },
                  { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
                ].map(({ to, icon, label }, i) => (
                  <motion.li
                    key={to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 + i * 0.1 }}
                  >
                    <Link
                      to={to}
                      onClick={toggleMenu}
                      className='block px-4 py-3 bg-gray-800 rounded-md text-white hover:bg-gray-700 transition-all'
                    >
                      <div className='flex items-center gap-2'>
                        {icon} {label}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer below fixed navbar */}
      <div className='pt-20 md:pt-24'></div>
    </>
  );
}

export default Navbar;
