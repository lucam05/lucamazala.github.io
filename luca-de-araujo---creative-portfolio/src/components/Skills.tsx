import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Skills() {
  const { language } = useLanguage();

  const categories = [
    {
      title: language === 'pt' ? 'Gestão & Metodologias' : 'Management & Methodologies',
      skills: [
        { label: language === 'pt' ? 'Gestão de Projetos' : 'Project Management', value: 85 },
        { label: language === 'pt' ? 'Metodologias Ágeis (Scrum/Kanban)' : 'Agile Methodologies (Scrum/Kanban)', value: 90 },
        { label: 'Jira Software', value: 80 }
      ]
    },
    {
      title: language === 'pt' ? 'Dados & Ferramentas' : 'Data & Tools',
      skills: [
        { label: 'Power BI', value: 90 },
        { label: language === 'pt' ? 'Excel Avançado' : 'Advanced Excel', value: 85 },
        { label: 'SAP ERP', value: 75 }
      ]
    },
    {
      title: language === 'pt' ? 'Soft Skills & Outros' : 'Soft Skills & Others',
      skills: [
        { label: language === 'pt' ? 'Resolução de Problemas' : 'Problem Solving', value: 100 },
        { label: language === 'pt' ? 'Pensamento Analítico' : 'Analytical Thinking', value: 95 },
        { label: language === 'pt' ? 'Inglês Fluente' : 'Fluent English', value: 90 }
      ],
      tags: language === 'pt' ? ['Engenharia de Software', 'IA (Iniciante)', 'Comunicação', 'Colaboração'] : ['Software Engineering', 'AI (Beginner)', 'Communication', 'Collaboration']
    }
  ];

  return (
    <section id="competencias" className="py-32 px-6 bg-[#0c0c0c]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 mb-16 text-center">
          <span className="text-[#00FF00] font-mono text-xs uppercase tracking-[0.3em]">02 / {language === 'pt' ? 'Competências' : 'Skills'}</span>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{language === 'pt' ? 'Minhas Competências' : 'My Skills'}</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-base lg:text-lg">
            {language === 'pt' ? 'Um conjunto de ferramentas que combina conhecimentos de engenharia técnica com uma forte veia analítica e de gestão.' : 'A set of tools combining technical engineering knowledge with a strong analytical and management core.'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#111111] p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm text-white/60 mb-2">
                      <span>{skill.label}</span>
                      <span className="font-semibold text-[#00FF00]">{skill.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-[#00FF00]" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
                {category.tags ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
