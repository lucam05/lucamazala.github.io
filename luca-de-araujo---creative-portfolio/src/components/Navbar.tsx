import React from 'react';
import { motion } from 'motion/react';

const navLinks = [
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Educação', href: '#educacao' },
  { label: 'Competências', href: '#competencias' },
  { label: 'Contacto', href: '#contacto' }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-8 flex justify-between items-center pointer-events-none">
      <motion.a
        href="#inicio"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-black text-xl tracking-tighter pointer-events-auto cursor-pointer"
      >
        Luca<span className="text-[#00FF00]">.</span>
      </motion.a>

      <div className="hidden md:flex gap-10 items-center pointer-events-auto">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="font-mono text-[11px] uppercase tracking-widest text-white/60 hover:text-[#00FF00] transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      <motion.a
        href="#contacto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pointer-events-auto px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest hover:border-[#00FF00] hover:text-[#00FF00] transition-all"
      >
        Contactar
      </motion.a>
    </nav>
  );
}
