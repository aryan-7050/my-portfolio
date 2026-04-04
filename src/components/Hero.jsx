import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

import profilePhoto from "../photo.jpg";
import resumeFile from "../Aryan-Resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 
      relative overflow-hidden bg-gradient-to-br 
      from-purple-500/10 via-blue-500/10 to-pink-500/10 
      dark:from-gray-900 dark:to-black"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* background blobs */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse bottom-20 right-20"></div>

      <div className="text-center relative z-10">

        {/* profile */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition"></div>

            <img
              src={profilePhoto}
              alt="Aryan"
              className="relative w-36 h-36 rounded-full border-4 border-white dark:border-gray-800 object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Aryan Patil
        </motion.h1>

        {/* typing */}
        <div className="text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Engineer",
              2000,
              "UI/UX Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
          I build scalable full-stack applications using MERN stack and
          modern cloud technologies.
        </p>

        {/* buttons */}
        <div className="flex gap-4 justify-center mb-8">
          <a
            href={resumeFile}
            download
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:scale-105 transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border rounded-lg border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
        </div>

        {/* socials */}
        <div className="flex gap-6 justify-center text-2xl">
          <motion.a
            href="https://github.com/aryan-7050"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition"
          >
            <FiGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/aryan-patil-5b9331291"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <FiLinkedin />
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition"
          >
            <FiTwitter />
          </motion.a>

          <motion.a
            href="mailto:aryanpatil7050@gmail.com"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
          >
            <FiMail />
          </motion.a>
        </div>
        <br />
         {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
          <FiMapPin className="text-purple-500" />
          <span>Kolhapur, India</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;