import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Internships from "./components/Internships";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      {/* 3D Particle Background - Fixed position behind everything */}
      <ParticleBackground />
      
      {/* Custom Animated Cursor */}
      <CustomCursor />
      
      {/* Main Content - Higher z-index to appear above particles */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Internships />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;