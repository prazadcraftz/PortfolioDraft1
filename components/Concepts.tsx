
import React from 'react';
import { Network, LineChart, Eye, Search, Layers } from 'lucide-react';

const Concepts: React.FC = () => {
  const concepts = [
    {
      title: "Supervised Learning",
      description: "Training models on labeled datasets to map inputs to accurate outputs, forming the backbone of predictive AI.",
      icon: <Network className="w-10 h-10 text-cyan-400" />,
      tags: ["Classification", "Training", "Labels"]
    },
    {
      title: "Regression Models",
      description: "Analyzing relationships between variables to predict continuous numerical values with high precision.",
      icon: <LineChart className="w-10 h-10 text-purple-400" />,
      tags: ["Prediction", "XGBoost", "Optimization"]
    },
    {
      title: "Computer Vision",
      description: "Enabling machines to identify and process objects in images and videos, mimicking human visual perception.",
      icon: <Eye className="w-10 h-10 text-red-400" />,
      tags: ["CNN", "Detection", "Image Data"]
    }
  ];

  return (
    <div className="relative">
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
        <span className="w-12 h-1 bg-white"></span>
        Core Architectures
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {concepts.map((concept, idx) => (
          <div key={idx} className="group relative p-10 bg-white/5 border border-white/5 rounded-[3rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-8 p-6 bg-black/40 rounded-3xl w-fit border border-white/5 group-hover:scale-110 transition-transform duration-500">
              {concept.icon}
            </div>
            
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
              {concept.title}
            </h3>
            
            <p className="text-neutral-400 leading-relaxed mb-8">
              {concept.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {concept.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-[10px] font-black uppercase tracking-widest text-white/30 px-2 py-1 bg-white/5 rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>

            {/* Glowing corner element */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <Layers className="w-6 h-6 text-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concepts;
