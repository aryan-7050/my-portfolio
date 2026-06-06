import React from "react";
import { motion } from "framer-motion";
import { 
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, 
  FiDownload, FiArrowRight
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

import profilePhoto from "../photo.jpg";
import resumeFile from "../Aryan-Resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-black"></div>
      
      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100, -200],
              x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-5xl mx-auto">
        
        {/* Profile Image with Enhanced Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="relative inline-block group">
            {/* Animated Gradient Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-75"
              style={{ width: "calc(100% + 24px)", height: "calc(100% + 24px)", left: "-12px", top: "-12px" }}
            ></motion.div>
            
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            
            <img
              src={profilePhoto}
              alt="Aryan Patil"
              className="relative w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-2xl"
            />
            
            {/* Online Status Badge */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 rounded-full border-3 border-white dark:border-gray-800"
            ></motion.div>
          </div>
        </motion.div>

        {/* Name with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Aryan Patil
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-4 font-semibold"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻",
              2000,
              "MERN Stack Engineer 🚀",
              2000,
              "Problem Solver 🎯",
              2000,
              "UI/UX Enthusiast 🎨",
              2000,
              "Tech Innovator ⚡",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8 text-base md:text-lg leading-relaxed"
        >
          I build scalable full-stack applications using the <span className="text-purple-600 dark:text-purple-400 font-semibold">MERN stack</span> and modern cloud technologies. 
          Passionate about creating impactful digital solutions that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <motion.a
            href={resumeFile}
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center gap-2 shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <FiDownload size={18} className="relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3.5 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold flex items-center gap-2 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          >
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Social Links with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex gap-4 justify-center mb-6"
        >
          {[
            { icon: FiGithub, href: "https://github.com/aryan-7050", label: "GitHub", color: "#333", bg: "#f5f5f5" },
            { icon: FiLinkedin, href: "https://linkedin.com/in/aryan-patil-5b9331291", label: "LinkedIn", color: "#0077b5", bg: "#e8f4ff" },
            { icon: FiTwitter, href: "https://twitter.com/aryanpatil", label: "Twitter", color: "#1DA1F2", bg: "#e8f5ff" },
            { icon: SiLeetcode, href: "https://leetcode.com/u/Aryanpatil7050/", label: "LeetCode", color: "#FFA116", bg: "#fff3e0" },
            { icon: FiMail, href: "mailto:aryanpatil7050@gmail.com", label: "Email", color: "#EA4335", bg: "#ffe8e6" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
              aria-label={social.label}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-xl"
                style={{ 
                  backgroundColor: social.bg,
                  boxShadow: `0 0 20px ${social.color}40`
                }}
              >
                <social.icon 
                  size={22} 
                  style={{ color: social.color }}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Location with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center justify-center gap-3 text-gray-500 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <FiMapPin className="text-purple-500" size={16} />
            <span className="text-sm">Kolhapur, Maharashtra, India</span>
          </div>
          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Available for work</span>
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
    </section>
  );
};

export default Hero;