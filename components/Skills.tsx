
import React from 'react';
import { Database, Brain, Cloud, Layers, Binary, Terminal, Cpu, Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "TECH Stack",
      skills: [
        { name: "C++", icon: <Binary />, level: "EXPERT", desc: "Low-level optimization" },
        { name: "Python", icon: <Terminal />, level: "EXPERT", desc: "ML workflows & Automation" },
        { name: "MySQL", icon: <Database />, level: "ADVANCED", desc: "Relational architecture" }
      ]
    },
    {
      title: "AI & DATA ENGINEERING",
      skills: [
        { name: "ML Modeling", icon: <Brain />, level: "ADVANCED", desc: "Supervised & Unsupervised" },
        { name: "Azure AI", icon: <Cloud />, level: "CERTIFIED", desc: "Cloud deployments" },
        { name: "Algorithms", icon: <Layers />, level: "DEEP", desc: "Complex problem solving" }
      ]
    }
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[2px] w-12 bg-cyan-500"></div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          TECHNICAL_KERNEL
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500/60 flex items-center gap-3 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              {cat.title}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 bg-black rounded-xl border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                      {React.cloneElement(skill.icon as React.ReactElement<any>, { className: "w-5 h-5" })}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-black text-white truncate">{skill.name}</h4>
                      <p className="text-[9px] font-black uppercase text-cyan-500/60 tracking-widest">{skill.level}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-medium line-clamp-2">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;