
import React from 'react';
import { ExternalLink, Github, Terminal, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "F1 Race Pace Prediction",
      subtitle: "Using XGBoost & Telemetry",
      tech: ["Python", "XGBoost", "FastF1", "Pandas", "Matplotlib"],
      description: "Developed a data-driven model to predict Formula 1 race lap times and rank drivers using telemetry data.",
      features: [
        "Integrated qualifying laps, sector timings, weather conditions",
        "Achieved strong predictive accuracy with XGBoost regression",
        "Feature importance visualization for race performance analysis"
      ],
      color: "red"
    },
    {
      title: "AI-Enabled Assistant",
      subtitle: "Desktop Task Automation",
      tech: ["Python", "Speech Recognition", "NLP", "Azure AI"],
      description: "Created an intelligent virtual assistant enabling natural voice interaction and desktop task automation.",
      features: [
        "Hands-free command execution for productivity",
        "Scheduling, reminders, and email automation workflows",
        "Modular architecture with real-time feedback loop"
      ],
      color: "cyan"
    }
  ];

  return (
    <div className="relative">
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
        <span className="w-12 h-1 bg-white"></span>
        Featured Deployments
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-[#1a1a1a] rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col">
            {/* Header / Accent */}
            <div className={`h-2 w-full bg-gradient-to-r ${project.color === 'red' ? 'from-red-600 to-red-400' : 'from-cyan-600 to-cyan-400'}`}></div>
            
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-xs">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Github className="w-5 h-5 text-white/60" />
                  </button>
                  <button className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white/60" />
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-neutral-400 text-lg leading-relaxed italic mb-6">
                  "{project.description}"
                </p>
                <div className="space-y-3">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 group/feat">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover/feat:scale-150 transition-transform"></div>
                      <p className="text-sm text-neutral-300 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-black/40 border border-white/5 rounded-md text-[10px] font-black uppercase tracking-widest text-white/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal Decorative Element */}
            <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
               <Terminal className="w-32 h-32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
