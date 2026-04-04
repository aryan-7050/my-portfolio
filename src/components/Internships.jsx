import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiMongodb, SiHtml5,SiTailwindcss,SiJavascript } from "react-icons/si";

const Internships = () => {

  const internships = [
    {
      company: "CODTECH IT Solutions",
      role: "Full Stack Developer Intern",
      duration: "Jan 2026 - Mar 2026",
      description:
        "Worked on MERN stack applications and developed REST APIs.",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss]
    },
    {
  company: "Cognizant",
  role: "Web Development Intern",
  duration: "Feb 2026 - Apr 2026",
  description:
    "Worked on developing responsive web applications using modern web technologies and improved UI/UX for better user experience.",
  tech: [SiReact, SiJavascript, SiHtml5, SiTailwindcss]
}
  ];

  return (

    /* IMPORTANT PART */
    <section id="internship" className="py-20 bg-gray-100 dark:bg-gray-900">

      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12 
        text-gray-900 dark:text-white">
          Internship
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {internships.map((intern, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 
              p-6 rounded-xl shadow-lg"
            >

              <h3 className="text-xl font-bold 
              text-gray-900 dark:text-white">
                {intern.role}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                {intern.company}
              </p>

              <p className="text-sm text-gray-500 mb-3">
                {intern.duration}
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {intern.description}
              </p>

              <div className="flex gap-4 text-xl">
                {intern.tech.map((Icon, i) => (
                  <Icon key={i} className="text-gray-700 dark:text-gray-300"/>
                ))}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Internships;