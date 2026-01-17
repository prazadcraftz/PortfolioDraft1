
import React, { useState } from 'react';
import { Cpu, Database, Code2, Terminal, Info, Cloud, Brain } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  description: string;
  projects?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const categories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Code2 />,
      color: "cyan",
      skills: [
        { name: "Python", level: 95, description: "Primary language for ML, scripting, and automation. Core tool for all data-driven projects.", projects: "F1 Pace Prediction, AI Assistant" },
        { name: "C++", level: 90, description: "Strong expertise in high-performance computing and algorithm optimization.", projects: "DSA Implementations" },
        { name: "C", level: 85, description: "Foundational low-level programming and memory management knowledge.", projects: "System Architecture Simulations" },
        { name: "SQL", level: 90, description: "Proficient in relational database design, complex queries, and data management.", projects: "Inventory Systems, Data ETL" }
      ]
    },
    {
      title: "ML & Data Science",
      icon: <Cpu />,
      color: "purple",
      skills: [
        { name: "Scikit-Learn", level: 92, description: "Implementation of robust machine learning pipelines and models.", projects: "Predictive Analytics" },
        { name: "CNN", level: 88, description: "Convolutional Neural Networks for image processing and pattern recognition.", projects: "Vision Models" },
        { name: "XGBoost", level: 90, description: "Advanced gradient boosting for high-performance regression and classification.", projects: "F1 Race Pace Prediction" }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud />,
      color: "green",
      skills: [
        { name: "Azure", level: 85, description: "Microsoft Azure AI Fundamentals and cloud deployment services.", projects: "Azure AI Certification" },
        { name: "Git/GitHub", level: 90, description: "Collaborative development and version control lifecycle management.", projects: "Team Hackathons" }
      ]
    },
    {
      title: "Core Concepts",
      icon: <Brain />,
      color: "yellow",
      skills: [
        { name: "DSA", level: 88, description: "Solid understanding of Data Structures and Algorithms for optimized logic.", projects: "Competitive Programming" },
        { name: "OOP", level: 92, description: "Object-Oriented Programming principles for scalable software architecture.", projects: "Modular AI Systems" }
      ]
    }
  ];

  const getColorClass = (color: string, type: 'text' | 'stroke' | 'bg' | 'border') => {
    const map: Record<string, any> = {
      cyan: { text: 'text-cyan-400', stroke: '#22d3ee', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
      purple: { text: 'text-purple-400', stroke: '#a855f7', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
      yellow: { text: 'text-yellow-400', stroke: '#eab308', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
      green: { text: 'text-green-400', stroke: '#22c55e', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    };
    return map[color][type];
  };

  return (
    <div className="relative">
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
        <span className="w-12 h-1 bg-white"></span>
        Technical Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className={`flex items-center gap-2 mb-6 ${getColorClass(cat.color, 'text')} font-black uppercase tracking-widest text-sm`}>
                <span className={`p-2 rounded-lg ${getColorClass(cat.color, 'bg')}`}>{cat.icon}</span>
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-6">
                {cat.skills.map((skill, skillIdx) => (
                  <button
                    key={skillIdx}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onMouseLeave={() => setActiveSkill(null)}
                    className="relative w-24 h-24 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 group"
                  >
                    <svg className="absolute inset-0 w-full h-full p-2 rotate-[-90deg]">
                      <circle cx="50%" cy="50%" r="35%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                      <circle
                        cx="50%" cy="50%" r="35%" fill="none" stroke={getColorClass(cat.color, 'stroke')}
                        strokeWidth="4" strokeDasharray="219.9" strokeDashoffset={219.9 - (219.9 * skill.level) / 100}
                        strokeLinecap="round" className="transition-all duration-1000 ease-out"
                        style={{ filter: `drop-shadow(0 0 8px ${getColorClass(cat.color, 'stroke')})` }}
                      />
                    </svg>
                    <span className="relative z-10 text-[10px] font-black text-white group-hover:text-white transition-colors px-2 text-center">
                      {skill.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-32 h-fit">
          <div className={`min-h-[400px] rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col justify-center ${
            activeSkill ? 'bg-[#1a1a1a] border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)]' : 'bg-white/[0.02] border-white/5 opacity-40'
          }`}>
            {!activeSkill ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <Info className="text-white/20 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white/40 uppercase tracking-widest">Interface Status</h3>
                <p className="text-neutral-500 text-sm max-w-xs mx-auto italic">
                  "Awaiting skill selection. Hover over a technical node to decompile proficiency data."
                </p>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-1">{activeSkill.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-12 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white transition-all duration-700" style={{ width: `${activeSkill.level}%` }}></div>
                      </div>
                      <span className="text-xs font-black text-white/60 tracking-widest uppercase">
                        {activeSkill.level}% Accuracy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Technical Context</h4>
                    <p className="text-neutral-300 leading-relaxed text-lg italic">
                      "{activeSkill.description}"
                    </p>
                  </div>

                  {activeSkill.projects && (
                    <div className="space-y-4 pt-6 border-t border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Live Application</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                        <p className="text-white font-bold">{activeSkill.projects}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
