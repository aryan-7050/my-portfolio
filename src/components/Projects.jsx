import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

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
};

// Tilt Card Component
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
    
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
    
    setRotate({ x: rotateX, y: rotateY });

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          className="absolute inset-0 pointer-events-none z-10 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
      )}
      
      <div
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>

      {isHovered && (
        <div
          className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-xl opacity-30 -z-10"
          style={{
            transform: `translateZ(-10px)`,
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
      title: "Cyber Fraud Detection System",
      description:
        "AI-powered system to detect and prevent fraudulent activities in real-time.",
      fullDescription:
        "A smart cybersecurity platform that uses machine learning algorithms to detect suspicious transactions and prevent fraud in real-time. It analyzes user behavior, transaction patterns, and anomalies to improve security.",
      tech: ["React", "Node.js", "MongoDB", "Machine Learning", "Express"],
      github: "https://github.com/aryan-7050/cyber-fraud-detection",
      live: "https://cyber-fraud-detection.vercel.app",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      features: [
        "Real-time fraud detection",
        "User behavior analysis",
        "Anomaly detection system",
        "Secure transaction monitoring",
      ],
    },
    {
      title: "Public Bus Transport System",
      description:
        "Smart public bus transport system for route search, live bus tracking and online ticket booking.",
      fullDescription:
        "A modern public bus transport management system that allows passengers to search bus routes, track buses in real-time, and book tickets online. The system includes seat selection, QR-code based e-tickets, route management and real-time bus tracking for better public transportation experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/rajpatil005/public-transport-tracking-mern",
      live: "https://public-bus-transport-demo.vercel.app",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
      features: [
        "Live bus tracking system",
        "Search bus routes and stops",
        "Online ticket booking",
        "Seat selection system",
        "QR code based e-ticket",
        "Real-time bus location",
        "Passenger dashboard",
        "Admin route management"
      ],
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information and forecasting platform.",
      fullDescription:
        "A comprehensive weather dashboard providing real-time updates and predictive analytics.",
      tech: ["HTML5", "JavaScript"],
      github: "https://github.com/aryan-7050/Weather-app--js.git",
      live: "https://my-project3-tarz.vercel.app/",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
      features: [
        "Real-time weather updates",
        "Forecast charts",
        "Responsive design",
        "API integration",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full">
                <div
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md 
                  overflow-hidden cursor-pointer group transition h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex gap-3 text-xl mb-4 flex-wrap">
                      {project.tech.map((tech, i) => {
                        const Icon = techIcons[tech];
                        return Icon ? (
                          <Icon
                            key={i}
                            title={tech}
                            className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform hover:text-purple-500 dark:hover:text-purple-400"
                          />
                        ) : null;
                      })}
                    </div>

                    <div className="flex justify-between items-center border-t pt-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                      >
                        <FiGithub size={18} />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Technologies Used
                    </h4>
                    <div className="flex gap-3 text-2xl flex-wrap">
                      {selectedProject.tech.map((tech, i) => {
                        const Icon = techIcons[tech];
                        return Icon ? (
                          <Icon
                            key={i}
                            title={tech}
                            className="text-gray-600 dark:text-gray-300"
                          />
                        ) : null;
                      })}
                    </div>
                  </div>

                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-purple-500 mt-1">▹</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-3 rounded-lg transition-all"
                    >
                      <FiGithub />
                      View Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 py-3 rounded-lg transition-all"
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
    </section>
  );
};

export default Projects;