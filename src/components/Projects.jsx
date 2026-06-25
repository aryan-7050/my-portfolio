import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCode } from "react-icons/fi";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTensorflow,
  SiPython,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiOpenai,
  SiSocketdotio,
  SiHtml5,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

/* TECH ICON MAP */
const techIcons = {
  React: SiReact,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  TensorFlow: SiTensorflow,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  OpenAI: SiOpenai,
  "Socket.io": SiSocketdotio,
  HTML5: SiHtml5,
  JavaScript: SiJavascript,
  Express: SiExpress,
  "Express.js": SiExpress,
  "Machine Learning": SiTensorflow,
  "Tailwind CSS": SiTailwindcss,
};

// Enhanced Tilt Card Component
const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10;

    setRotate({ x: rotateX, y: rotateY });

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
        setGlarePosition({ x: 50, y: 50 });
      }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`relative ${className}`}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
      )}

      <div
        style={{
          transform: "translateZ(25px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>

      {isHovered && (
        <div
          className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-40 -z-10 transition-all duration-300"
          style={{
            transform: `translateZ(-15px)`,
          }}
        />
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
   
     {
      title: "PaisaVedh - Smart Personal Finance Tracker",
      description: "AI-powered personal finance management platform for tracking expenses, budgets, savings, and financial insights.",
      fullDescription: "PaisaVedh is a comprehensive personal finance management application that helps users track income and expenses, create budgets, manage savings goals, upload transactions through CSV files, and gain AI-powered financial insights. The platform provides real-time analytics, spending forecasts, and smart recommendations to improve financial planning.",
      tech: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "Tailwind CSS",
        "Chart.js",
        "JWT Authentication"
      ],
      github: "https://github.com/aryan-7050/smart-finance-PaisaVedh",
      live: "https://frontend-two-theta-39.vercel.app",
      image: "./paisaVedha.jpeg",
      category: "FinTech",
      features: [
        "💰 Income & Expense Tracking",
        "📊 Interactive Financial Analytics Dashboard",
        "🎯 Savings Goal Management",
        "📅 Monthly Budget Planning",
        "📂 CSV Transaction Import",
        "📈 Spending Forecast & Predictions",
        "📑 Automated Financial Reports",
      ],
    },
    {
      title: "Eventora - Event & Club Management System",
      description: "A complete platform for managing college events, clubs, registrations, announcements, and member activities.",
      fullDescription: "Eventora is a full-stack event and club management platform designed to streamline the organization of college events and club activities. It allows students to discover events, register online, receive notifications, and track participation. Club administrators can manage members, create events, monitor registrations, publish announcements, and generate participation reports through a centralized dashboard.",
      tech: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Tailwind CSS",
        "Cloudinary"
      ],
      github: "https://github.com/aryan-7050/eventora",
      live: "https://eventora-beryl-rho.vercel.app/",
      image: "./WhatsApp Image 2026-06-21 at 4.58.40 PM.jpeg",
      category: "Web Application",
      features: [
        "🎉 Event Creation & Management",
        "👥 Club Member Management",
        "📝 Online Event Registration",
        "📢 Announcements & Notifications",
        "📅 Event Scheduling Calendar",
        "📊 Registration Analytics Dashboard",
        "🏆 Participation Tracking",
        "🔐 Secure JWT Authentication",
        "📱 Responsive User Interface",
        "📄 Event Reports & Records"
      ]
    },
    {
      title: "Public Bus Transport System",
      description: "Smart public bus transport system for route search, live bus tracking and online ticket booking.",
      fullDescription: "A modern public bus transport management system that allows passengers to search bus routes, track buses in real-time, and book tickets online. The system includes seat selection, QR-code based e-tickets, route management and real-time bus tracking for better public transportation experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/rajpatil005/public-transport-tracking-mern",
      live: "https://public-transport-tracking-steel.vercel.app",
      image: "./WhatsApp Image 2026-06-21 at 4.44.56 PM.jpeg",
      category: "Transportation",
      features: [
        "🚌 Live bus tracking system",
        "🔍 Search routes & stops",
        "🎫 Online ticket booking",
        "💺 Seat selection system",
        "📱 QR code e-ticket",
        "📍 Real-time location tracking",
      ],
    },
    
  
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">

      {/* Animated Background */}
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
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              y: [0, -150, -300],
              x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full">
                <div
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl 
                  overflow-hidden cursor-pointer group transition-all duration-300 h-full flex flex-col hover:shadow-2xl"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {project.category}
                    </div>

                    {/* View Project Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-purple-600 dark:text-purple-400 text-sm font-semibold">
                        View Project
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex gap-2 text-xl mb-4 flex-wrap items-center">
                      {project.tech.slice(0, 4).map((tech, i) => {
                        const Icon = techIcons[tech];
                        return Icon ? (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group/icon"
                          >
                            <Icon
                              title={tech}
                              size={16}
                              className="text-gray-600 dark:text-gray-400 group-hover/icon:scale-110 transition-transform"
                            />
                          </div>
                        ) : null;
                      })}
                      {project.tech.length > 4 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 text-sm font-medium"
                      >
                        <FiGithub size={16} />
                        Code
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transition-all duration-300 text-sm font-medium"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Modal - Enhanced */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-72 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-300 hover:scale-110"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                      <FiCode size={18} className="text-purple-500" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => {
                        const Icon = techIcons[tech];
                        return Icon ? (
                          <span
                            key={i}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                          >
                            <Icon size={14} className="text-purple-500" />
                            {tech}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>


                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {selectedProject.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-purple-500 mt-1">▹</span>
                        <span className="text-sm">{f}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white py-3 rounded-xl transition-all"
                    >
                      <FiGithub />
                      View Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl transition-all shadow-lg"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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

export default Projects;