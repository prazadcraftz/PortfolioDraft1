
import React from 'react';
import { Trophy, Code, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Hackathon Competitor",
      org: "Chandigarh University",
      period: "2023 - Present",
      description: "Participated in multiple university-level hackathons focusing on ML-based problem solving and data visualization.",
      tech: ["Python", "Pandas", "C++"],
      icon: <Trophy className="text-yellow-400" />
    },
    {
      role: "ML Developer (Academic)",
      org: "Projects Lab",
      period: "2022 - 2023",
      description: "Developed and implemented machine learning models for classification tasks and predictive analysis as part of course curriculum.",
      tech: ["Scikit-Learn", "MySQL", "Jupyter"],
      icon: <Code className="text-cyan-400" />
    },
    {
      role: "CSE Student",
      org: "Chandigarh University",
      period: "2022 - 2026",
      description: "Gaining deep expertise in Computer Science Fundamentals, Data Structures, Algorithms, and System Design.",
      tech: ["Core CS", "Mathematics", "OS"],
      icon: <GraduationCap className="text-purple-400" />
    }
  ];

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
        <span className="w-12 h-1 bg-white"></span>
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-12 before:absolute before:left-5 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10 group">
            <div className="absolute left-0 top-0 p-2.5 bg-[#1a1a1a] border border-white/10 rounded-full z-10 group-hover:scale-110 group-hover:border-white/40 transition-all">
              {exp.icon}
            </div>
            
            <div className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/[0.07] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{exp.role}</h3>
                  <p className="text-cyan-400 font-bold">{exp.org}</p>
                </div>
                <div className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/60">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-neutral-400 mb-6 max-w-2xl leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-black uppercase tracking-widest text-white/40 px-2 py-1 bg-black/40 rounded border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
