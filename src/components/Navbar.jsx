import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiUser, FiBriefcase, FiFolder, FiCode, FiMail } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", icon: FiHome, href: "home" },
    { name: "About", icon: FiUser, href: "about" },
    { name: "Journey", icon: FiBriefcase, href: "journey" },
    { name: "Projects", icon: FiFolder, href: "projects" },
    { name: "Skills", icon: FiCode, href: "skills" },
    { name: "Contact", icon: FiMail, href: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item, href) => {
    const element = document.getElementById(href);
    if (element) {
      const offset = 80;
      const position = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
      setIsOpen(false);
      setActiveSection(item);
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
        <div 
          onClick={() => scrollToSection("Home", "home")}
          className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent cursor-pointer"
        >
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

          {/* Small Dropdown - shows on right side */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.name, item.href)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                      activeSection === item.name
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                    {activeSection === item.name && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    )}
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