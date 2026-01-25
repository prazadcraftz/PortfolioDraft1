
import React from 'react';
import { Network, LineChart, Eye, Layers } from 'lucide-react';

const Concepts: React.FC = () => {
  const concepts = [
    {
      title: "Supervised Learning",
      description: "Training models on labeled datasets to map inputs to accurate outputs, forming the backbone of predictive AI.",
      icon: <Network className="w-12 h-12 text-cyan-400" />,
      tags: ["CLASSIFICATION", "TRAINING", "LABELS"]
    },
    {
      title: "Regression Models",
      description: "Analyzing relationships between variables to predict continuous numerical values with high precision.",
      icon: <LineChart className="w-12 h-12 text-purple-400" />,
      tags: ["PREDICTION", "XGBOOST", "OPTIMIZATION"]
    },
    {
      title: "Computer Vision",
      description: "Enabling machines to identify and process objects in images and videos, mimicking human visual perception.",
      icon: <Eye className="w-12 h-12 text-red-400" />,
      tags: ["CNN", "DETECTION", "IMAGE DATA"]
    }
  ];

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-[2px] w-12 bg-white"></div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
          CORE ARCHITECTURES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.map((concept, idx) => (
          <div key={idx} className="group relative min-h-[500px] p-10 flex flex-col justify-between overflow-hidden rounded-[3rem] transition-all duration-700 glass-card hover:bg-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.02] blur-[100px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-1000"></div>
            
            <div className="relative z-10">
              <div className="mb-10 p-6 bg-black/40 rounded-[2rem] w-fit border border-white/5 group-hover:scale-110 group-hover:border-white/10 transition-all duration-700 shadow-xl">
                {concept.icon}
              </div>
              
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-cyan-400 transition-colors text-white">
                {concept.title}
              </h3>
              
              <p className="text-neutral-500 text-base leading-relaxed mb-8 max-w-xs">
                {concept.description}
              </p>
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {concept.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest text-neutral-500 px-4 py-2 bg-white/[0.03] rounded-xl border border-white/5 group-hover:border-white/10 group-hover:text-neutral-300 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-10 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
              <Layers className="w-16 h-16 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concepts;