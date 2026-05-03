import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

const navLinks = [
  { key: 'nav.about', href: '#sobre' },
  { key: 'nav.experience', href: '#experiencia' },
  { key: 'nav.education', href: '#educacao' },
  { key: 'nav.skills', href: '#competencias' },
  { key: 'nav.contact', href: '#contacto' }
];

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

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
            {t(link.key)}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 text-[10px] font-mono font-bold uppercase border border-white/10 rounded-full hover:border-[#00FF00] hover:text-[#00FF00] transition-all cursor-pointer"
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
        <motion.a
          href="#contacto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest hover:border-[#00FF00] hover:text-[#00FF00] transition-all"
        >
          {t('nav.contactBtn')}
        </motion.a>
      </div>
    </nav>
  );
}
