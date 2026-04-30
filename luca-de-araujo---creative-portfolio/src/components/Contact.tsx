import React from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contacto" className="py-40 px-6 relative overflow-hidden bg-[#0b0b0b]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF00]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto text-center flex flex-col items-center gap-10 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="flex flex-col gap-6"
        >
          <span className="text-[#00FF00] font-mono text-xs uppercase tracking-[0.3em]">05 / Contacto</span>
          <h2 className="text-6xl lg:text-[7vw] font-black uppercase tracking-tighter leading-none">
            Vamos <span className="text-[#00FF00]">Conversar?</span>
          </h2>
        </motion.div>

        <p className="max-w-xl text-white/50 text-xl leading-relaxed">
          Atualmente aberto a novas oportunidades, conexões e discussões sobre tecnologia, análise de dados e inovação.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <motion.a
            href="mailto:lucamazala10@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#00FF00] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] transition-all"
          >
            Enviar Email
          </motion.a>
          
          <motion.a
             href="https://linkedin.com/in/luca-de-araujo"
             target="_blank"
             rel="noreferrer"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-12 py-5 border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:border-[#00FF00] transition-all"
          >
            LinkedIn
          </motion.a>
          
          <motion.a
             href="tel:+5531992927990"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-12 py-5 border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:border-[#00FF00] transition-all"
          >
            WhatsApp
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-10 mt-32 text-left w-full max-w-4xl pt-20 border-t border-white/5">
           {[
             { label: 'Mail', value: 'lucamazala10@gmail.com' },
             { label: 'Localização', value: 'Brasil / Global' },
             { label: 'Social', value: 'LinkedIn' },
             { label: 'Status', value: 'Disponível' }
           ].map((item, i) => (
             <div key={i} className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{item.label}</span>
                <span className="font-bold text-sm tracking-tight">{item.value}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
