import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiCode } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import profile from "../photo1.jpg";

const About = () => {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowStats(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const mernProjects = [
    "Event & Club Management System",
    "Transport Management System",
    "Medical Billing System",
    "Weather App"
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-black"
    >
      {/* Animated Background - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Image with animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl opacity-60"
              style={{ width: "calc(100% + 24px)", height: "calc(100% + 24px)", left: "-12px", top: "-12px" }}
            ></motion.div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profile}
                alt="Aryan Patil"
                className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Hi, I'm <span className="font-semibold text-purple-600 dark:text-purple-400">Aryan Patil</span>.
              I am a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> specializing in the
              MERN Stack. I enjoy building scalable web applications and
              solving real-world problems with modern technologies.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              I love working with React, Node.js, MongoDB, and Express,
              and I am always learning new technologies to improve my skills.
              My goal is to become a highly skilled software engineer and
              build impactful products.
            </p>

            {/* Stats Blocks - 4 Blocks */}
            <div className="grid grid-cols-2 gap-3">
              {/* Block 1 - Projects */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:bg-gray-800 rounded-xl p-3 text-center border border-purple-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FiCode className="mx-auto text-purple-500 dark:text-purple-400 mb-1" size={20} />
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                  {showStats ? "8+" : "0+"}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                <div className="text-[10px] text-green-600 dark:text-green-400">4+ MERN Stack</div>
              </motion.div>

              {/* Block 2 - LeetCode */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 dark:bg-gray-800 rounded-xl p-3 text-center border border-orange-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <SiLeetcode className="mx-auto text-orange-500 dark:text-orange-400 mb-1" size={20} />
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                  {showStats ? "100+" : "0+"}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">LeetCode</div>
                <div className="text-[10px] text-green-600 dark:text-green-400">Problems Solved</div>
              </motion.div>

              {/* Block 3 - Certifications */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-green-50 to-green-100 dark:bg-gray-800 rounded-xl p-3 text-center border border-green-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FiCheckCircle className="mx-auto text-green-500 dark:text-green-400 mb-1" size={20} />
                <div className="text-xl font-bold text-gray-800 dark:text-white">5+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Certifications</div>
                <div className="text-[10px] text-green-600 dark:text-green-400">Professional</div>
              </motion.div>

              {/* Block 4 - Clients */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-gray-800 rounded-xl p-3 text-center border border-blue-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FiCheckCircle className="mx-auto text-blue-500 dark:text-blue-400 mb-1" size={20} />
                <div className="text-xl font-bold text-gray-800 dark:text-white">12+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Happy Clients</div>
                <div className="text-[10px] text-green-600 dark:text-green-400">Worldwide</div>
              </motion.div>
            </div>

            {/* MERN Projects List */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:bg-gray-800 rounded-xl p-4 border border-purple-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <FiCode className="text-purple-500 dark:text-purple-400" size={14} />
                MERN Stack Projects
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {mernProjects.map((project, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-xs"
                  >
                    <FiCheckCircle className="text-green-500 dark:text-green-400 flex-shrink-0" size={10} />
                    <span className="text-gray-600 dark:text-gray-400">{project}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

         

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "React", "Node.js", "MongoDB", "Express",
                "JavaScript", "Tailwind CSS", "Git", "REST API"
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 text-xs bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-gray-300 rounded-full cursor-default transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
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

export default About;