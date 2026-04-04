import React from "react";
import { motion } from "framer-motion";
import profile from "../photo1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center">

        {/* Image - Bigger */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:col-span-2"
        >
          <img
            src={profile}
            alt="Aryan Patil"
            className="w-[420px] md:w-[480px] rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold">Aryan Patil</span>.
            I am a passionate Full Stack Developer specializing in the
            MERN Stack. I enjoy building scalable web applications and
            solving real-world problems with modern technologies.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            I love working with React, Node.js, MongoDB, and Express,
            and I am always learning new technologies to improve my skills.
            My goal is to become a highly skilled software engineer and
            build impactful products.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "JavaScript",
              "Tailwind CSS",
              "Git",
              "REST API",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm bg-purple-100 text-purple-700 rounded-full dark:bg-gray-800 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;