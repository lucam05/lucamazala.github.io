import React from 'react';
import { motion } from 'motion/react';
import profilePhoto from '../Imagens/luca_portifolio.png';

export default function About() {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#0c0c0c] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40vw] font-black absolute -top-[10vw] -left-[5vw] leading-none">SOBRE</span>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2/3 h-2/3 border border-[#00FF00]/20 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute w-1/2 h-1/2 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
          <img 
            src={profilePhoto} 
            alt="Luca Mazala" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" 
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="text-[#00FF00] font-mono text-xs uppercase tracking-[0.3em]">Perfil Profissional</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Gestão de projetos e análise de dados com foco em resultado.
          </h2>
          
          <div className="space-y-6 text-white/60 leading-relaxed max-w-lg text-lg">
            <p>
              Sou um estudante de <strong className="text-white">Engenharia de Software</strong> na PUC Minas, apaixonado por resolver problemas complexos através da tecnologia e da análise de dados. Minha trajetória está na interseção entre a área técnica e a gestão de negócios.
            </p>
            <p>
              Tenho experiência em tecnologia, consultoria e mineração, com foco em metodologias ágeis, Business Intelligence e gestão de projetos. Procuro sempre impulsionar a inovação e otimizar processos operacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
