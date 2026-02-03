import React from 'react';
import { Award, ShieldCheck, Cloud, BrainCircuit, ExternalLink, Database } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500/20 to-transparent",
      link: "#"
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "Duke University (Coursera)",
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      color: "from-purple-500/20 to-transparent",
      link: "#"
    },
    {
      title: "Structured Query Language - SQL",
      issuer: "University of Colorado",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      color: "from-emerald-500/20 to-transparent",
      link: "#"
    },
    {
      title: "OCI 2025 Certified AI Foundations",
      issuer: "Oracle",
      icon: <Cloud className="w-8 h-8 text-red-500" />,
      color: "from-red-500/20 to-transparent",
      link: "#"
    }
  ];

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
        <span className="w-12 h-1 bg-white"></span>
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, idx) => (
          <div key={idx} className="group relative overflow-hidden bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all flex flex-col h-full">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {cert.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-2 leading-tight flex-grow">{cert.title}</h3>
              <p className="text-neutral-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-6">{cert.issuer}</p>
              
              <div className="mt-auto flex items-center gap-2 text-white/20 group-hover:text-white transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider">Credential Verified</span>
                <Award className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;