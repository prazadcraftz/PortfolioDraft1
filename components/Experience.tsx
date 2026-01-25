
import React from 'react';
import { Trophy, Code2, GraduationCap, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Hackathon Technical Lead",
      org: "Chandigarh University",
      period: "2023 - PRESENT",
      impact: "Architected end-to-end ML solutions for high-pressure competitive environments.",
      achievements: [
        "Led teams to develop real-time predictive dashboards",
        "Optimized data preprocessing pipelines reducing latency by 30%",
        "Implemented XGBoost models for multi-variable classification"
      ],
      tech: ["Python", "Pandas", "C++", "XGBoost"],
      icon: <Trophy className="text-amber-500" />
    },
    {
      role: "ML Research (Academic)",
      org: "CU Projects Lab",
      period: "PRESENT",
      impact: "Conducting deep-dive analysis into supervised learning methodologies.",
      achievements: [
        "Developing custom speech recognition modules",
        "Refining schema architectures for large-scale MySQL databases",
        "Integrating NLP models with desktop automation tools"
      ],
      tech: ["Scikit-Learn", "MySQL", "Azure AI", "SpeechRecog"],
      icon: <Code2 className="text-cyan-500" />
    }
  ];

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-[2px] w-20 bg-cyan-500"></div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">Experience</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">{exp.role}</h3>
                    <p className="text-cyan-500 text-sm font-black uppercase tracking-widest">{exp.org}</p>
                  </div>
                </div>

                <p className="text-neutral-300 font-bold mb-6 border-l-2 border-cyan-500/30 pl-4">{exp.impact}</p>

                <ul className="space-y-3 mb-8">
                  {exp.achievements.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3 text-sm text-neutral-500">
                      <ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-64 flex flex-col md:items-end gap-6">
                <div className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] w-fit">
                  {exp.period}
                </div>
                
                <div className="flex flex-wrap md:justify-end gap-2">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-black rounded-lg border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/30 group-hover:border-white/10 group-hover:text-white/60 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
