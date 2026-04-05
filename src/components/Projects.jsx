import React, { useState } from "react";
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
} from "react-icons/si";

/* TECH ICON MAP */
const techIcons = {
  React: SiReact,
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
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/aryan-7050/Weather-app--js.git",
      live: "https://my-project3-tarz.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
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
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md 
              overflow-hidden cursor-pointer group transition"
              onClick={() => setSelectedProject(project)}
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH ICONS */}
                <div className="flex gap-3 text-xl mb-4">
                  {project.tech.map((tech, i) => {
                    const Icon = techIcons[tech];
                    return Icon ? (
                      <Icon
                        key={i}
                        title={tech}
                        className="text-gray-600 dark:text-gray-300 hover:scale-110 transition"
                      />
                    ) : null;
                  })}
                </div>

                {/* BOTTOM ICONS */}
                <div className="flex justify-between items-center border-t pt-3">
                  {/* Live Icon - Left Side */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <FiGithub size={18} />
                  </a>

                  {/* GitHub Icon - Right Side */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500"
                    >
                      <FiX size={24} />
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Features
                  </h4>
                  <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 mb-6">
                    {selectedProject.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg"
                    >
                      <FiGithub />
                      Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-lg"
                    >
                      <FiExternalLink />
                      Demo
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