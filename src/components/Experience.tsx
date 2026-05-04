import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Experience() {
  const { language } = useLanguage();

  const experiences = [
    {
      role: language === 'pt' ? 'Estagiário de Gestão de Projetos' : 'Project Management Intern',
      company: 'Redspark',
      period: language === 'pt' ? 'Fev 2025 - Ago 2025' : 'Feb 2025 - Aug 2025',
      details: language === 'pt' ? [
        'Apoio na padronização de processos e acompanhamento de projetos.',
        'Utilização de metodologias ágeis e Jira para gestão de demandas.'
      ] : [
        'Support in process standardization and project monitoring.',
        'Use of agile methodologies and Jira for demand management.'
      ]
    },
    {
      role: language === 'pt' ? 'Estagiário de Gestão de Projetos' : 'Project Management Intern',
      company: 'TNX Brasil Tecnologia e Negócios',
      period: language === 'pt' ? 'Set 2024 - Fev 2025' : 'Sep 2024 - Feb 2025',
      details: language === 'pt' ? [
        'Assistência no planeamento e execução de projetos.',
        'Colaboração com equipas multifuncionais para garantir entregas no prazo.'
      ] : [
        'Assistance in project planning and execution.',
        'Collaboration with cross-functional teams to ensure on-time deliveries.'
      ]
    },
    {
      role: language === 'pt' ? 'Estagiário de BI' : 'BI Intern',
      company: 'ArcelorMittal Sistemas',
      period: 'Jan 2023 - Jul 2023',
      details: language === 'pt' ? [
        'Desenvolvimento de dashboards em Power BI integrados com SAP.',
        'Resolução de incidentes e suporte em análises estratégicas.'
      ] : [
        'Development of Power BI dashboards integrated with SAP.',
        'Incident resolution and support in strategic analysis.'
      ]
    },
    {
      role: language === 'pt' ? 'Gerente de I&D / Consultor de Projetos' : 'R&D Manager / Project Consultant',
      company: 'Ápice Consultoria Jr.',
      period: '2022',
      details: language === 'pt' ? [
        'Liderança em projetos de inovação, criação de novos portfólios e gestão de equipas.',
        'Suporte em diagnósticos, desenho de soluções e melhoria de processos.'
      ] : [
        'Leadership in innovation projects, new portfolio creation, and team management.',
        'Support in diagnostics, solution design, and process improvement.'
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20">
           <div className="flex flex-col gap-4">
            <span className="text-[#00FF00] font-mono text-xs uppercase tracking-[0.3em]">03 / {language === 'pt' ? 'Experiência' : 'Experience'}</span>
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}</h2>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-white/5 py-12 flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-10 items-start md:items-center hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
              >
                <span className="text-white/30 font-mono text-sm">{exp.period}</span>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-[#00FF00] transition-colors">{exp.role}</h3>
                    <p className="text-white/50 text-lg">{exp.company}</p>
                  </div>
                  <ul className="text-white/50 space-y-2 text-sm list-disc list-inside">
                    {exp.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#00FF00]/60 text-right w-full">
                   {exp.company}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
