import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiPhone, FiHeart, FiStar } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useTheme();

  const quickLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/aryan-7050', label: 'GitHub', color: '#333', bg: '#1a1a1a' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/aryan-patil-5b9331291', label: 'LinkedIn', color: '#0077b5', bg: '#0a2a3a' },
    { icon: FiTwitter, href: 'https://twitter.com/aryanpatil', label: 'Twitter', color: '#1DA1F2', bg: '#0a2a3a' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/Aryanpatil7050/', label: 'LeetCode', color: '#FFA116', bg: '#2a1a0a' },
    { icon: FiMail, href: 'mailto:aryanpatil7050@gmail.com', label: 'Email', color: '#EA4335', bg: '#2a0a0a' },
  ];

  const scrollToSection = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`relative pt-16 pb-8 px-4 overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-purple-50 via-white to-blue-50 text-gray-900'
    }`}>
      
      {/* Animated Background - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white to-gray-400' 
                : 'from-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              Aryan Patil
            </h3>
            <p className={`mb-4 max-w-md text-sm leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Building digital experiences, one line of code at a time.
              Full-stack developer passionate about creating innovative
              solutions that make a difference.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                  aria-label={social.label}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg border ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}
                    style={{ backgroundColor: social.bg }}
                  >
                    <social.icon
                      size={18}
                      style={{ color: social.color }}
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className={`transition-all duration-300 text-sm hover:translate-x-1 ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-purple-400' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Contact Info</h4>
            <ul className="space-y-3">
              <li className={`flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1 ${
                isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
              }`}>
                <FiMapPin size={16} className="text-purple-500" />
                <span>Kolhapur, India</span>
              </li>
              <li className={`flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1 ${
                isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
              }`}>
                <FiPhone size={16} className="text-purple-500" />
                <a href="tel:+918554015600" className="transition-colors">
                  +91 8554015600
                </a>
              </li>
              <li className={`flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1 ${
                isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
              }`}>
                <FiMail size={16} className="text-purple-500" />
                <a href="mailto:aryanpatil7050@gmail.com" className="transition-colors break-all">
                  aryanpatil7050@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`h-px mb-8 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-purple-300 to-transparent'
          }`}
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <p className={`text-center flex items-center justify-center gap-1 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              © {currentYear} Aryan Patil. All rights reserved. Made with{' '}
              <FiHeart className="text-red-500 inline animate-pulse" size={14} />{' '}
              using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;