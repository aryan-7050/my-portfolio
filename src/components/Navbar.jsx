import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = ["Home", "About", "Internship", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item) => {
    const element = document.getElementById(item.toLowerCase());

    if (element) {
      const offset = 80;
      const position =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 
        dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Aryan Patil
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 relative">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          {/* Small Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-12 w-40 bg-white dark:bg-gray-800 
                rounded-lg shadow-lg overflow-hidden"
              >
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 text-sm 
                    text-gray-700 dark:text-gray-300 hover:bg-gray-100 
                    dark:hover:bg-gray-700"
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;