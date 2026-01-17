
import React from 'react';
import { Award, ShieldCheck, Cloud, BrainCircuit, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500/20 to-transparent",
      link: "https://www.credly.com/earner/earned/badge/18e3f90c-7865-4733-ba69-bc0148174178"
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "Coursera",
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      color: "from-purple-500/20 to-transparent",
      link: "https://www.coursera.org/account/accomplishments/verify/ZUHRBHR49P54"
    },
    {
      title: "OCI 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      icon: <Cloud className="w-8 h-8 text-red-500" />,
      color: "from-red-500/20 to-transparent",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=013F03190DCFF164ACFE87C0D01001E455DF7CC2D741FD26986ACC41D9050113"
    }
  ];

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
        <span className="w-12 h-1 bg-white"></span>
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certs.map((cert, idx) => (
          <div key={idx} className="group relative overflow-hidden bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all flex flex-col h-full">
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {cert.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-2 leading-tight flex-grow">{cert.title}</h3>
              <p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.2em] mb-8">{cert.issuer}</p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 text-white/40 group-hover:text-white transition-colors cursor-pointer"
              >
                <span className="text-sm font-bold uppercase tracking-wider">View Credentials</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
