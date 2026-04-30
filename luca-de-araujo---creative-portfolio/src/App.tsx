import React, { Suspense } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00FF00] selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00FF00] origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-[#00FF00] font-mono">LOADING SCENE...</div>}>
          <Hero />
        </Suspense>
        
        <About />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      
      <footer className="py-10 px-6 border-t border-white/10 text-center text-white/40 text-xs uppercase tracking-widest font-mono">
        © {new Date().getFullYear()} Luca Mazala. Todos os direitos reservados.
      </footer>
    </div>
  );
}
