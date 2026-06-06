import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiFirebase,
  SiWebpack,
  SiFigma,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiExpress,
  SiTypescript,
} from 'react-icons/si';
import { FiStar } from 'react-icons/fi';

const Skills = () => {
  const [dimensions, setDimensions] = useState({ 
    containerSize: 500,
    innerRadius: 140,
    outerRadius: 240,
    iconSize: 45,
    centerSize: 110
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({
          containerSize: 380,
          innerRadius: 100,
          outerRadius: 170,
          iconSize: 38,
          centerSize: 80
        });
      } else if (width < 768) {
        setDimensions({
          containerSize: 480,
          innerRadius: 125,
          outerRadius: 210,
          iconSize: 42,
          centerSize: 95
        });
      } else {
        setDimensions({
          containerSize: 600,
          innerRadius: 155,
          outerRadius: 260,
          iconSize: 48,
          centerSize: 120
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const innerSkills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  ];

  const outerSkills = [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
    { name: 'C', icon: SiC, color: '#A8B9CC' },
  ];

  // Add animation styles to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spin-slow-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-spin-slow {
        animation: spin-slow 25s linear infinite;
      }
      .animate-spin-slow-reverse {
        animation: spin-slow-reverse 30s linear infinite;
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
      @media (max-width: 640px) {
        .animate-spin-slow {
          animation-duration: 18s;
        }
        .animate-spin-slow-reverse {
          animation-duration: 22s;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="skills" className="relative min-h-screen py-12 md:py-20 px-4 md:px-6 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      
      {/* Animated Background - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
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

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Exploring the universe of modern web technologies
          </p>
        </motion.div>

        <div className="flex justify-center items-center py-8 md:py-12">
          <div 
            className="relative mx-auto"
            style={{ 
              width: dimensions.containerSize, 
              height: dimensions.containerSize 
            }}
          >
            
            {/* Inner Circle - Rotating */}
            <div className="absolute inset-0 animate-spin-slow">
              {innerSkills.map((skill, index) => {
                const angle = (360 / innerSkills.length) * index;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * dimensions.innerRadius;
                const y = Math.sin(radian) * dimensions.innerRadius;
                
                return (
                  <motion.div
                    key={`inner-${skill.name}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.03,
                    }}
                    viewport={{ once: true }}
                    className="absolute group"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer'
                    }}
                  >
                    <div 
                      className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                      style={{ 
                        width: dimensions.iconSize,
                        height: dimensions.iconSize,
                        boxShadow: `0 0 20px ${skill.color}80`,
                        border: `2px solid ${skill.color}`,
                      }}
                    >
                      <skill.icon 
                        size={dimensions.iconSize * 0.55} 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-white text-[10px] md:text-xs rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Outer Circle - Rotating Reverse */}
            <div className="absolute inset-0 animate-spin-slow-reverse">
              {outerSkills.map((skill, index) => {
                const angle = (360 / outerSkills.length) * index;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * dimensions.outerRadius;
                const y = Math.sin(radian) * dimensions.outerRadius;
                
                return (
                  <motion.div
                    key={`outer-${skill.name}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + (index * 0.02),
                    }}
                    viewport={{ once: true }}
                    className="absolute group"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer'
                    }}
                  >
                    <div 
                      className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                      style={{ 
                        width: dimensions.iconSize,
                        height: dimensions.iconSize,
                        boxShadow: `0 0 20px ${skill.color}80`,
                        border: `2px solid ${skill.color}`,
                      }}
                    >
                      <skill.icon 
                        size={dimensions.iconSize * 0.55} 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-white text-[10px] md:text-xs rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Profile */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div 
                className="relative rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1.5 shadow-2xl shadow-purple-500/50"
                style={{ width: dimensions.centerSize, height: dimensions.centerSize }}
              >
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden border-4 border-white/20">
                  <img 
                    src="/photo.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                          <svg class="w-1/2 h-1/2 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>`;
                      }
                    }}
                  />
                </div>
              </div>
              <div className="absolute -inset-3 rounded-full bg-purple-500/30 blur-xl animate-ping"></div>
              <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-2xl animate-pulse"></div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>

        {/* Skills Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-500/50"
            >
              <h3 className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'C++', 'Python', 'JavaScript', 'TypeScript'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-500/50"
            >
              <h3 className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind', 'HTML5', 'Figma'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium border border-green-200 dark:border-green-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'Firebase'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50"
            >
              <h3 className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git', 'Webpack'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-medium border border-orange-200 dark:border-orange-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;