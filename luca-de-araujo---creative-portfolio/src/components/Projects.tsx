import React from 'react';
import { motion } from 'motion/react';

const education = [
  {
    title: 'Licenciatura em Engenharia de Software',
    institution: 'PUC Minas',
    period: '2023 - 2028',
    description: 'Desenvolvimento de bases sólidas em programação, arquitetura de sistemas, metodologias de desenvolvimento e engenharia de requisitos.'
  },
  {
    title: 'Programa de Inglês Avançado',
    institution: 'Langports English Language College, Austrália',
    period: 'Fev 2024 - Jul 2024',
    description: 'Imersão cultural e desenvolvimento de fluência em inglês em ambiente global, com foco em comunicação e colaboração internacional.'
  }
];

export default function Education() {
  return (
    <section id="educacao" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 mb-16 text-center">
          <span className="text-[#00FF00] font-mono text-xs uppercase tracking-[0.3em]">04 / Educação</span>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">Trajetória Académica</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-base lg:text-lg">
            Formação técnica e experiência internacional que complementam a minha abordagem analítica e orientada a resultados.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-[#00FF00]/70 transition-all"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00FF00]/10 text-[#00FF00] text-2xl">
                  <i className={i === 0 ? 'fas fa-graduation-cap' : 'fas fa-language'} />
                </div>
                <div>
                  <span className="text-[#00FF00] text-sm uppercase tracking-[0.3em]">{item.period}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 mb-4">{item.institution}</p>
              <p className="text-white/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
