import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiMongodb, 
  SiTailwindcss, SiJavascript, SiPython,
  SiDocker, SiGit,
  SiNextdotjs, SiFirebase,
  SiWebpack, SiFigma,
  SiC, SiCplusplus, SiHtml5,
} from 'react-icons/si';

const Skills = () => {

  const skillCategories = [
    {
      name: 'Languages',
      skills: [
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiNodedotjs, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
      ]
    },
    {
      name: 'Design',
      skills: [
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6"
              >
                {category.name}
              </motion.h3>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: (categoryIndex * 0.05) + (index * 0.02)
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative bg-white dark:bg-gray-900 rounded-lg py-3 px-5 flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      
                      <skill.icon
                        size={24}
                        style={{ color: skill.color }}
                      />

                      <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        {skill.name}
                      </span>

                      <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-15 transition-opacity duration-300"
                           style={{ backgroundColor: skill.color }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;