import React from "react";
import { motion } from "framer-motion";
import { SiC, SiHtml5, SiReact, SiNodedotjs} from "react-icons/si";
import {  FaRocket, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const Journey = () => {

  const journey = [
    {
      year: "2022",
      title: "Started Programming",
      description: "Learned C and C++ fundamentals and developed problem-solving skills.",
      icon: SiC,
      color: "#A8B9CC",
      tech: ["C", "C++"]
    },
    {
      year: "2023",
      title: "Explored Web Development",
      description: "Started learning HTML, CSS, JavaScript, and responsive design.",
      icon: SiHtml5,
      color: "#E34F26",
      tech: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      year: "2024",
      title: "Built Full-Stack Projects",
      description: "Developed Event Management and Transport Management systems using MERN stack.",
      icon: SiReact,
      color: "#61DAFB",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      year: "2025",
      title: "Advanced Development",
      description: "Worked with React, Node.js, MongoDB, APIs, and modern development practices.",
      icon: SiNodedotjs,
      color: "#339933",
      tech: ["React", "Node.js", "MongoDB", "REST APIs"]
    },
    {
      year: "2026",
      title: "Future Goals",
      description: "Seeking opportunities as a Full Stack Developer and continuously learning new technologies.",
      icon: FaRocket,
      color: "#F59E0B",
      tech: ["Full Stack", "Cloud", "DevOps"]
    }
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      
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

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A timeline of my growth as a developer
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
          ></motion.div>

          {/* Journey Items */}
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Animated Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10 mt-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute inset-0 rounded-full bg-purple-500 opacity-50"
                ></motion.div>
              </motion.div>
              
              {/* Content with Hover Animation */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div 
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ml-8 md:ml-0 cursor-pointer group relative overflow-hidden"
                >
                  {/* Animated Gradient Background on Hover */}
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  ></motion.div>
                  
                  {/* Year Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-3"
                  >
                    <FaGraduationCap size={14} />
                    {item.year}
                  </motion.div>

                  {/* Title with Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20`, border: `2px solid ${item.color}` }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </motion.div>
                    <motion.h3 
                      whileHover={{ x: 5 }}
                      className="text-xl font-bold text-gray-800 dark:text-white"
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3"
                  >
                    {item.description}
                  </motion.p>

                  {/* Tech Stack Tags */}
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    className="flex flex-wrap gap-2 mt-3 overflow-hidden"
                  >
                    {item.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Read More Link */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1 mt-3 text-sm text-purple-500"
                  >
                    <span>Learn more</span>
                    <FaArrowRight size={12} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
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

export default Journey;